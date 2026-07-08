import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import crypto from "crypto";
import fs from "fs";

dotenv.config();

interface Transaction {
  id: string;
  kitId: string;
  email: string;
  name: string;
  phone: string;
  amount: number;
  paymentMethod: string;
  status: "approved" | "pending" | "rejected" | "in_process";
  qrCode?: string;
  qrCodeBase64?: string;
  createdAt: number;
  isSimulated: boolean;
}

const transactions = new Map<string, Transaction>();

// Retrieve standard credentials
const DEFAULT_ACCESS_TOKEN = "TEST-040c933f-e707-4864-a22e-3222f2c3f832";
const DEFAULT_PUBLIC_KEY = "TEST-96941ebf-14b3-44eb-b5bd-26510344446c"; // Sample test public key corresponding to a sandbox account

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API configuration route
  app.get("/api/config", (req, res) => {
    res.json({
      publicKey: process.env.VITE_MERCADO_PAGO_PUBLIC_KEY || DEFAULT_PUBLIC_KEY,
      hasCustomToken: !!process.env.MERCADO_PAGO_ACCESS_TOKEN,
    });
  });

  // Process payment endpoint
  app.post("/api/process_payment", async (req, res) => {
    const { formData, kitId, name, email, phone, simulate = false } = req.body;

    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || DEFAULT_ACCESS_TOKEN;
    const hasCustomToken = !!process.env.MERCADO_PAGO_ACCESS_TOKEN;

    // Determine if we should run a real Mercado Pago transaction or simulation.
    // Simulation is blocked if the user has configured their own custom credentials.
    const runSimulation = (simulate && !hasCustomToken) || !accessToken || accessToken.includes("your-access-token");

    if (runSimulation) {
      // Return simulated transaction
      const transactionId = "sim-" + crypto.randomBytes(8).toString("hex");
      const isPix = formData.payment_method_id === "pix";

      const tx: Transaction = {
        id: transactionId,
        kitId,
        email,
        name,
        phone,
        amount: Number(formData.transaction_amount),
        paymentMethod: formData.payment_method_id,
        status: isPix ? "pending" : "approved",
        createdAt: Date.now(),
        isSimulated: true,
      };

      if (isPix) {
        // Mock Pix QR Code data
        tx.qrCode = "00020126580014BR.GOV.BCB.PIX0136kitmatematicainfantil@escoladeatividades.com.br5204000053039865405" + Number(formData.transaction_amount).toFixed(2) + "5802BR5924Kit Matematica Infantil6009Sao Paulo62070503123";
        // Simple mock base64 pixel block
        tx.qrCodeBase64 = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58gHiAAAABlBMVEUAAAD///+l2Z/dAAAAMElEQVR4XmP4jwYcoBiIDv9g+A8Gf8CBiSgCooNoIDmIFpKDaCExiBYSg2ghOYgW6AIAXscv7Zc8gFEAAAAASUVORK5CYII=";
      }

      transactions.set(transactionId, tx);

      return res.json({
        success: true,
        id: transactionId,
        status: tx.status,
        payment: {
          id: transactionId,
          status: tx.status,
        },
        status_detail: isPix ? "pending_waiting_transfer" : "accredited",
        qr_code: tx.qrCode,
        qr_code_base64: tx.qrCodeBase64,
        isSimulated: true,
      });
    }

    try {
      const isPix = formData.payment_method_id === "pix";
      const paymentBody: any = {
        transaction_amount: Number(formData.transaction_amount),
        token: formData.token,
        description: `Kit Matemática Infantil - ${kitId === "kit-basico" ? "Básico" : "Completo"}`,
        installments: Number(formData.installments || 1),
        payment_method_id: formData.payment_method_id,
        issuer_id: formData.issuer_id,
        payer: {
          email: email || formData.payer?.email || "cliente@exemplo.com",
          identification: formData.payer?.identification || {
            type: "CPF",
            number: "19100000000" // Generic test CPF
          }
        }
      };

      // Add names if available
      if (name) {
        const parts = name.trim().split(" ");
        paymentBody.payer.first_name = parts[0];
        if (parts.length > 1) {
          paymentBody.payer.last_name = parts.slice(1).join(" ");
        }
      }

      const response = await fetch("https://api.mercadopago.com/v1/payments", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-Idempotency-Key": crypto.randomUUID(),
        },
        body: JSON.stringify(paymentBody),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Mercado Pago API error:", data);
        return res.json({
          success: false,
          error: data.message || "Erro ao processar pagamento com Mercado Pago",
        });
      }

      // Store transaction in-memory
      const transactionId = String(data.id);
      const tx: Transaction = {
        id: transactionId,
        kitId,
        email,
        name,
        phone,
        amount: Number(data.transaction_amount),
        paymentMethod: data.payment_method_id,
        status: data.status,
        createdAt: Date.now(),
        isSimulated: false,
      };

      if (isPix) {
        tx.qrCode = data.point_of_interaction?.transaction_data?.qr_code;
        tx.qrCodeBase64 = data.point_of_interaction?.transaction_data?.qr_code_base64;
      }

      transactions.set(transactionId, tx);

      return res.json({
        success: true,
        id: transactionId,
        status: data.status,
        payment: {
          id: transactionId,
          status: data.status,
        },
        status_detail: data.status_detail,
        qr_code: tx.qrCode,
        qr_code_base64: tx.qrCodeBase64,
        isSimulated: false,
      });

    } catch (error: any) {
      console.error("Payment exception:", error);
      return res.json({
        success: false,
        error: "Erro de servidor ao processar o pagamento: " + (error.message || ""),
      });
    }
  });

  // Get payment status endpoint
  app.get("/api/payment_status/:id", (req, res) => {
    const { id } = req.params;
    const tx = transactions.get(id);

    if (!tx) {
      return res.status(404).json({ error: "Transação não encontrada" });
    }

    // If it's a simulated transaction and is pending, simulate Pix auto-approval after 12 seconds
    if (tx.isSimulated && tx.status === "pending") {
      const elapsed = Date.now() - tx.createdAt;
      if (elapsed > 12000) {
        tx.status = "approved";
        transactions.set(id, tx);
      }
    }

    return res.json({
      id: tx.id,
      status: tx.status,
      kitId: tx.kitId,
      email: tx.email,
      name: tx.name,
      isSimulated: tx.isSimulated,
    });
  });

  // Webhook for Mercado Pago payment notifications
  app.post("/api/webhook", async (req, res) => {
    const { action, data } = req.body;

    if (action === "payment.created" || action === "payment.updated" || req.query.topic === "payment") {
      const paymentId = data?.id || req.query.id;
      if (paymentId) {
        console.log(`Received notification for payment: ${paymentId}`);
        // Fetch updated status from Mercado Pago and update in-memory storage
        const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || DEFAULT_ACCESS_TOKEN;
        try {
          const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
            },
          });
          if (response.ok) {
            const mpData = await response.json();
            const tx = transactions.get(String(paymentId));
            if (tx) {
              tx.status = mpData.status;
              transactions.set(String(paymentId), tx);
              console.log(`Updated transaction ${paymentId} status to ${mpData.status}`);
            }
          }
        } catch (err) {
          console.error("Error updating transaction from webhook:", err);
        }
      }
    }

    return res.sendStatus(200);
  });

  // Download PDF endpoint
  app.get("/api/download_pdf", async (req, res) => {
    const { kit } = req.query;
    
    try {
      const kitId = (kit as string) || "kit-basico";
      let fileName = "kit_matematica_basico_50_exercicios.pdf";
      if (kitId === "kit-completo") {
        fileName = "kit_matematica_completo_100_exercicios.pdf";
      } else if (kitId === "bonus") {
        fileName = "certificado_bonus.pdf";
      }
      
      const filePath = path.join(process.cwd(), "public", fileName);
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
        return res.sendFile(filePath);
      } else {
        return res.status(404).send("Arquivo não encontrado.");
      }
    } catch (err: any) {
      console.error("Erro ao baixar PDF:", err);
      return res.status(500).send("Erro interno ao baixar o PDF. Por favor, tente novamente.");
    }
  });

  // Serve public directory statically so files like PDFs are always available at root
  app.use(express.static(path.join(process.cwd(), "public")));

  // Serve static assets or bundle in development vs production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running on http://localhost:${PORT}`);
  });
}

startServer();
