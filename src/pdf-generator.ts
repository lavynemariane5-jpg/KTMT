import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function generateMathKitPdf(kitId: string, name: string = '', email: string = ''): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  
  // Load standard Helvetica fonts
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  // Page size A4
  const width = 595.27;
  const height = 841.89;

  // Handle Certificate & Bonus Kit
  if (kitId === 'bonus') {
    const page = pdfDoc.addPage([width, height]);
    
    // Background
    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: height,
      color: rgb(0.97, 0.95, 0.99),
    });
    
    // Fancy borders
    page.drawRectangle({
      x: 30,
      y: 30,
      width: width - 60,
      height: height - 60,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.6, 0.4, 0.8),
      borderWidth: 4,
    });
    
    page.drawRectangle({
      x: 38,
      y: 38,
      width: width - 76,
      height: height - 76,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.85, 0.8, 0.9),
      borderWidth: 1.5,
    });
    
    page.drawText('CERTIFICADO DE CONQUISTA', {
      x: width / 2 - 160,
      y: height - 150,
      size: 24,
      font: helveticaBold,
      color: rgb(0.4, 0.2, 0.6),
    });
    
    page.drawText('ESTE CERTIFICADO É APRESENTADO COM ORGULHO A', {
      x: width / 2 - 180,
      y: height - 230,
      size: 11,
      font: helveticaBold,
      color: rgb(0.5, 0.5, 0.5),
    });
    
    const studentName = name ? name.toUpperCase() : 'PEQUENO EXPLORADOR';
    page.drawText(studentName, {
      x: width / 2 - (studentName.length * 5),
      y: height - 290,
      size: 20,
      font: helveticaBold,
      color: rgb(0.18, 0.7, 0.29),
    });
    
    page.drawLine({
      start: { x: 100, y: height - 310 },
      end: { x: width - 100, y: height - 310 },
      thickness: 2,
      color: rgb(0.8, 0.8, 0.8),
    });
    
    page.drawText('Por completar com sucesso todas as atividades do', {
      x: width / 2 - 155,
      y: height - 360,
      size: 12,
      font: helvetica,
      color: rgb(0.3, 0.3, 0.3),
    });
    
    page.drawText('KIT DE MATEMÁTICA INFANTIL', {
      x: width / 2 - 120,
      y: height - 400,
      size: 16,
      font: helveticaBold,
      color: rgb(0.1, 0.4, 0.8),
    });
    
    page.drawText('Demonstrando excelente dedicação, curiosidade e brilhante progresso\nnos conceitos de números, formas e raciocínio lógico.', {
      x: 100,
      y: height - 460,
      size: 11,
      font: helvetica,
      color: rgb(0.4, 0.4, 0.4),
      lineHeight: 18,
    });
    
    // Ribbons and decoration
    page.drawCircle({
      x: width / 2,
      y: height - 580,
      size: 40,
      color: rgb(1, 0.8, 0.2),
      borderColor: rgb(0.9, 0.7, 0.1),
      borderWidth: 2,
    });
    page.drawText('*', {
      x: width / 2 - 12,
      y: height - 595,
      size: 40,
      font: helveticaBold,
      color: rgb(1, 1, 1),
    });
    
    page.drawText('Assinatura da Família', {
      x: 100,
      y: 120,
      size: 10,
      font: helveticaBold,
      color: rgb(0.5, 0.5, 0.5),
    });
    page.drawLine({
      start: { x: 100, y: 140 },
      end: { x: 230, y: 140 },
      thickness: 1,
      color: rgb(0.6, 0.6, 0.6),
    });
    
    page.drawText('Assinatura do Professor(a)', {
      x: width - 230,
      y: 120,
      size: 10,
      font: helveticaBold,
      color: rgb(0.5, 0.5, 0.5),
    });
    page.drawLine({
      start: { x: width - 230, y: 140 },
      end: { x: width - 100, y: 140 },
      thickness: 1,
      color: rgb(0.6, 0.6, 0.6),
    });
    
    // Add page 2: Bonus activities!
    const page2 = pdfDoc.addPage([width, height]);
    page2.drawRectangle({ x: 30, y: 30, width: width - 60, height: height - 60, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1 });
    page2.drawText('BÔNUS EXCLUSIVO: JOGO DOS NÚMEROS', { x: 50, y: height - 80, size: 16, font: helveticaBold, color: rgb(0.4, 0.2, 0.6) });
    page2.drawText('Corte as cartinhas abaixo para brincar de somar e combinar em família!', { x: 50, y: height - 105, size: 11, font: helvetica, color: rgb(0.4, 0.4, 0.4) });
    
    // Draw 4 cutting cards
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 2; col++) {
        const cx = 60 + col * 240;
        const cy = height - 300 - row * 240;
        page2.drawRectangle({
          x: cx,
          y: cy,
          width: 220,
          height: 180,
          color: rgb(0.98, 0.98, 1),
          borderColor: rgb(0.5, 0.5, 0.5),
          borderWidth: 1.5,
          borderDashArray: [4, 4],
        });
        
        page2.drawText(`CARTA BÔNUS #${(row * 2 + col) + 1}`, { x: cx + 15, y: cy + 155, size: 10, font: helveticaBold, color: rgb(0.5, 0.5, 0.5) });
        page2.drawText('DESAFIO DIVERTIDO', { x: cx + 15, y: cy + 135, size: 14, font: helveticaBold, color: rgb(0.1, 0.4, 0.8) });
        
        const tasks = [
          'Quanto é  5 + 5?',
          'Desenhe 8 corações',
          'Encontre 3 círculos na casa',
          'Diga os números de 10 até 1',
        ];
        page2.drawText(tasks[row * 2 + col], { x: cx + 15, y: cy + 80, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
        page2.drawText('Resposta ou desenho aqui:', { x: cx + 15, y: cy + 50, size: 9, font: helvetica, color: rgb(0.5, 0.5, 0.5) });
        page2.drawLine({ start: { x: cx + 15, y: cy + 30 }, end: { x: cx + 205, y: cy + 30 }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });
      }
    }
    
    return await pdfDoc.save();
  }
  
  // Custom helper to draw a header on worksheet pages
  const drawPageHeader = (page: any, title: string, pageNum: number) => {
    // Top bar decoration
    page.drawRectangle({
      x: 30,
      y: height - 45,
      width: width - 60,
      height: 25,
      color: rgb(0.95, 0.98, 0.95),
      borderColor: rgb(0.85, 0.92, 0.85),
      borderWidth: 1,
    });
    
    page.drawText('ATIVIDADES DE MATEMÁTICA', {
      x: 40,
      y: height - 37,
      size: 10,
      font: helveticaBold,
      color: rgb(0.2, 0.5, 0.2),
    });
    
    page.drawText(title, {
      x: width - 200,
      y: height - 37,
      size: 10,
      font: helveticaBold,
      color: rgb(0.4, 0.4, 0.4),
    });
    
    // Student Info fields
    page.drawText('NOME:', {
      x: 30,
      y: height - 70,
      size: 10,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
    
    page.drawLine({
      start: { x: 75, y: height - 70 },
      end: { x: width - 150, y: height - 70 },
      thickness: 1,
      color: rgb(0.7, 0.7, 0.7),
    });
    
    if (name) {
      page.drawText(name.toUpperCase(), {
        x: 85,
        y: height - 68,
        size: 9,
        font: helveticaBold,
        color: rgb(0.1, 0.4, 0.8),
      });
    }
    
    page.drawText('DATA: [     /     /     ]', {
      x: width - 135,
      y: height - 70,
      size: 10,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
    
    // Page footer
    page.drawLine({
      start: { x: 30, y: 40 },
      end: { x: width - 30, y: 40 },
      thickness: 1,
      color: rgb(0.9, 0.9, 0.9),
    });
    
    page.drawText(`Página ${pageNum}`, {
      x: width - 80,
      y: 25,
      size: 9,
      font: helvetica,
      color: rgb(0.5, 0.5, 0.5),
    });

    page.drawText('Kit Matemática Infantil - Licenciado para ' + (email || 'Uso Pessoal'), {
      x: 30,
      y: 25,
      size: 8,
      font: helvetica,
      color: rgb(0.6, 0.6, 0.6),
    });
  };

  // Helper to draw clean exercise boxes with a rounded/shaded background look
  const drawExerciseBox = (page: any, y: number, h: number, title: string, num: number) => {
    // Draw box container
    page.drawRectangle({
      x: 30,
      y: y,
      width: width - 60,
      height: h,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.9, 0.9, 0.9),
      borderWidth: 1.5,
    });
    
    // Left decorative colored stripe based on difficulty/section
    page.drawRectangle({
      x: 30,
      y: y,
      width: 6,
      height: h,
      color: rgb(0.18, 0.7, 0.29), // default green
    });

    // Top Header for the exercise
    page.drawCircle({
      x: 52,
      y: y + h - 16,
      size: 10,
      color: rgb(0.18, 0.7, 0.29),
    });

    page.drawText(`${num}`, {
      x: num >= 10 ? 47 : 49,
      y: y + h - 20,
      size: 11,
      font: helveticaBold,
      color: rgb(1, 1, 1),
    });

    page.drawText(title, {
      x: 70,
      y: y + h - 21,
      size: 11,
      font: helveticaBold,
      color: rgb(0.1, 0.1, 0.1),
    });
  };

  // ----------------------------------------------------
  // SECTION 1: NÍVEL FÁCIL (13-page structure starts here)
  // ----------------------------------------------------
  
  // Page 1: Cover (Nível Fácil)
  {
    const page = pdfDoc.addPage([width, height]);
    
    // Cute pastel green background block
    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: height,
      color: rgb(0.96, 0.99, 0.96),
    });
    
    // Top pattern or frame
    page.drawRectangle({
      x: 20,
      y: 20,
      width: width - 40,
      height: height - 40,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.8, 0.92, 0.8),
      borderWidth: 2,
    });
    
    page.drawText('ATIVIDADES DE MATEMÁTICA', {
      x: width / 2 - 140,
      y: height - 120,
      size: 18,
      font: helveticaBold,
      color: rgb(0.15, 0.45, 0.15),
    });
    
    page.drawText('MÓDULO DE ATIVIDADES', {
      x: width / 2 - 195,
      y: height - 170,
      size: 26,
      font: helveticaBold,
      color: rgb(0.1, 0.5, 0.2),
    });
    
    page.drawText('NÍVEL FÁCIL', {
      x: width / 2 - 80,
      y: height - 225,
      size: 22,
      font: helveticaBold,
      color: rgb(0.2, 0.7, 0.3),
    });
    
    // Render some funny math illustration using shapes
    // A cute "plus" and "minus" block
    page.drawRectangle({
      x: width / 2 - 120,
      y: height - 460,
      width: 100,
      height: 100,
      color: rgb(0.9, 0.95, 1),
      borderColor: rgb(0.7, 0.85, 1),
      borderWidth: 2,
    });
    page.drawText('+', { x: width / 2 - 95, y: height - 435, size: 60, font: helveticaBold, color: rgb(0.2, 0.5, 0.9) });

    page.drawRectangle({
      x: width / 2 + 20,
      y: height - 460,
      width: 100,
      height: 100,
      color: rgb(1, 0.95, 0.9),
      borderColor: rgb(1, 0.85, 0.8),
      borderWidth: 2,
    });
    page.drawText('5', { x: width / 2 + 55, y: height - 430, size: 55, font: helveticaBold, color: rgb(0.9, 0.4, 0.3) });

    page.drawCircle({
      x: width / 2,
      y: height - 540,
      size: 40,
      color: rgb(1, 0.98, 0.85),
      borderColor: rgb(0.95, 0.85, 0.5),
      borderWidth: 2,
    });
    page.drawText('3', { x: width / 2 - 12, y: height - 558, size: 45, font: helveticaBold, color: rgb(0.75, 0.55, 0.1) });

    // User Info fields at the bottom of Cover
    page.drawText('NOME:', { x: 100, y: 180, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawLine({ start: { x: 155, y: 180 }, end: { x: width - 100, y: 180 }, thickness: 1.5, color: rgb(0.6, 0.6, 0.6) });
    if (name) {
      page.drawText(name.toUpperCase(), { x: 165, y: 183, size: 11, font: helveticaBold, color: rgb(0.1, 0.4, 0.8) });
    }
    
    page.drawText('DATA: [       /       /       ]', { x: 100, y: 135, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });

    page.drawText('Material Educativo Digital de Alta Resolução', {
      x: width / 2 - 110,
      y: 60,
      size: 10,
      font: helvetica,
      color: rgb(0.5, 0.5, 0.5),
    });
  }

  // Page 2: 5 exercises (Nível Fácil)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Fácil', 2);
    
    // Exercise 1: Conte e circule. (Circule 3 maçãs.)
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Conte e circule. (Circule 3 maçãs)', 1);
    // Draw 5 cute little circles simulating apples
    for (let i = 0; i < 5; i++) {
      const cx = 100 + i * 85;
      const cy = y + 40;
      page.drawCircle({ x: cx, y: cy, size: 18, color: rgb(0.92, 0.2, 0.2), borderColor: rgb(0.75, 0.1, 0.1), borderWidth: 2 });
      page.drawCircle({ x: cx + 2, y: cy + 18, size: 3, color: rgb(0.18, 0.5, 0.15) }); // leaf
    }

    // Exercise 2: Conte e escreva. (Quantas flores há?)
    y -= 125;
    drawExerciseBox(page, y, 105, 'Conte e escreva. (Quantas flores há?)', 2);
    // Draw 6 cute flowers
    for (let i = 0; i < 6; i++) {
      const cx = 90 + i * 55;
      const cy = y + 40;
      // flower center
      page.drawCircle({ x: cx, y: cy, size: 8, color: rgb(1, 0.85, 0) });
      // petals
      page.drawCircle({ x: cx, y: cy + 12, size: 6, color: rgb(0.9, 0.3, 0.6) });
      page.drawCircle({ x: cx, y: cy - 12, size: 6, color: rgb(0.9, 0.3, 0.6) });
      page.drawCircle({ x: cx + 12, y: cy, size: 6, color: rgb(0.9, 0.3, 0.6) });
      page.drawCircle({ x: cx - 12, y: cy, size: 6, color: rgb(0.9, 0.3, 0.6) });
    }
    // Answer Box
    page.drawRectangle({ x: width - 110, y: y + 25, width: 60, height: 45, color: rgb(0.98, 0.98, 0.98), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
    page.drawLine({ start: { x: width - 100, y: y + 30 }, end: { x: width - 60, y: y + 30 }, thickness: 1, color: rgb(0.7, 0.7, 0.7), dashArray: [3, 3] });

    // Exercise 3: Pinte a quantidade indicada. (Pinte 2 balões.)
    y -= 125;
    drawExerciseBox(page, y, 105, 'Pinte a quantidade indicada. (Pinte 2 balões)', 3);
    for (let i = 0; i < 5; i++) {
      const cx = 100 + i * 85;
      const cy = y + 42;
      page.drawCircle({ x: cx, y: cy, size: 16, color: rgb(0.97, 0.97, 0.97), borderColor: rgb(0.5, 0.5, 0.5), borderWidth: 1.5 });
      page.drawLine({ start: { x: cx, y: cy - 16 }, end: { x: cx, y: cy - 32 }, thickness: 1, color: rgb(0.5, 0.5, 0.5) });
    }

    // Exercise 4: Ligue número x quantidade
    y -= 125;
    drawExerciseBox(page, y, 105, 'Ligue o número à quantidade correta', 4);
    // Draw numbers
    page.drawText('1\n2\n3', { x: 80, y: y + 30, size: 14, font: helveticaBold, color: rgb(0.1, 0.1, 0.1), lineHeight: 24 });
    // Draw dots for matching
    page.drawCircle({ x: 110, y: y + 35, size: 4, color: rgb(0.2, 0.6, 1) });
    page.drawCircle({ x: 110, y: y + 59, size: 4, color: rgb(0.2, 0.6, 1) });
    page.drawCircle({ x: 110, y: y + 83, size: 4, color: rgb(0.2, 0.6, 1) });

    // Draw corresponding shapes on the right
    page.drawCircle({ x: 300, y: y + 35, size: 4, color: rgb(0.2, 0.6, 1) });
    page.drawCircle({ x: 300, y: y + 59, size: 4, color: rgb(0.2, 0.6, 1) });
    page.drawCircle({ x: 300, y: y + 83, size: 4, color: rgb(0.2, 0.6, 1) });

    page.drawText('**\n***\n*', { x: 330, y: y + 30, size: 16, font: helveticaBold, color: rgb(0.8, 0.3, 0.1), lineHeight: 24 });

    // Exercise 5: Complete a sequência até 5
    y -= 125;
    drawExerciseBox(page, y, 105, 'Complete a sequência até 5', 5);
    const boxSize = 35;
    const nums = ['1', '', '3', '4', ''];
    for (let i = 0; i < 5; i++) {
      const bx = 100 + i * 85;
      const by = y + 35;
      page.drawRectangle({ x: bx, y: by, width: boxSize, height: boxSize, color: rgb(1, 1, 1), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
      if (nums[i]) {
        page.drawText(nums[i], { x: bx + 12, y: by + 10, size: 16, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
      } else {
        page.drawRectangle({ x: bx + 2, y: by + 2, width: boxSize - 4, height: boxSize - 4, color: rgb(0.97, 0.97, 0.97), borderColor: rgb(0.9, 0.3, 0.3), borderWidth: 1, borderDashArray: [2, 2] });
      }
    }
  }

  // Page 3: 5 exercises (Nível Fácil)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Fácil', 3);
    
    // Exercise 1: Qual grupo tem mais?
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Qual grupo tem mais? (Marque um X no quadrado)', 6);
    // Draw Box A (3 apples)
    page.drawRectangle({ x: 70, y: y + 20, width: 150, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    for (let i = 0; i < 3; i++) {
      page.drawCircle({ x: 100 + i * 40, y: y + 45, size: 12, color: rgb(0.9, 0.1, 0.1) });
    }
    page.drawRectangle({ x: 230, y: y + 35, width: 20, height: 20, color: rgb(1, 1, 1), borderColor: rgb(0.5, 0.5, 0.5), borderWidth: 1.5 });

    // Draw Box B (5 circles)
    page.drawRectangle({ x: 300, y: y + 20, width: 150, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    for (let i = 0; i < 5; i++) {
      page.drawCircle({ x: 320 + i * 27, y: y + 45, size: 9, color: rgb(0.1, 0.7, 0.1) });
    }
    page.drawRectangle({ x: 460, y: y + 35, width: 20, height: 20, color: rgb(1, 1, 1), borderColor: rgb(0.5, 0.5, 0.5), borderWidth: 1.5 });

    // Exercise 2: Qual grupo tem menos?
    y -= 125;
    drawExerciseBox(page, y, 105, 'Qual grupo tem menos? (Marque um X)', 7);
    // Draw Box A (6 stars)
    page.drawRectangle({ x: 70, y: y + 20, width: 150, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    page.drawText('* * *\n* * *', { x: 110, y: y + 32, size: 16, font: helveticaBold, color: rgb(1, 0.7, 0.1), lineHeight: 18 });
    page.drawRectangle({ x: 230, y: y + 35, width: 20, height: 20, color: rgb(1, 1, 1), borderColor: rgb(0.5, 0.5, 0.5), borderWidth: 1.5 });

    // Draw Box B (2 stars)
    page.drawRectangle({ x: 300, y: y + 20, width: 150, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    page.drawText('* *', { x: 360, y: y + 38, size: 16, font: helveticaBold, color: rgb(1, 0.7, 0.1) });
    page.drawRectangle({ x: 460, y: y + 35, width: 20, height: 20, color: rgb(1, 1, 1), borderColor: rgb(0.5, 0.5, 0.5), borderWidth: 1.5 });

    // Exercise 3: Circule apenas 3 objetos
    y -= 125;
    drawExerciseBox(page, y, 105, 'Circule apenas 3 objetos do conjunto', 8);
    for (let i = 0; i < 6; i++) {
      const cx = 90 + i * 80;
      const cy = y + 42;
      page.drawRectangle({ x: cx - 14, y: cy - 14, width: 28, height: 28, color: rgb(0.95, 0.98, 1), borderColor: rgb(0.2, 0.6, 0.9), borderWidth: 1 });
    }

    // Exercise 4: Circule apenas 5 objetos
    y -= 125;
    drawExerciseBox(page, y, 105, 'Circule apenas 5 objetos do conjunto', 9);
    for (let i = 0; i < 7; i++) {
      const cx = 80 + i * 70;
      const cy = y + 42;
      page.drawCircle({ x: cx, y: cy, size: 14, color: rgb(1, 0.95, 0.95), borderColor: rgb(0.9, 0.2, 0.2), borderWidth: 1 });
    }

    // Exercise 5: Conte os animais
    y -= 125;
    drawExerciseBox(page, y, 105, 'Conte os animais e escreva nos quadradinhos', 10);
    // Illustrate animal names and drawing symbols
    page.drawText('Gatos: [   ]     Cachorros: [   ]     Pássaros: [   ]', {
      x: 60,
      y: y + 42,
      size: 13,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // Page 4: 5 exercises (Nível Fácil)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Fácil', 4);
    
    // Exercise 1: Qual grupo tem mais?
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Qual grupo tem mais estrelas?', 11);
    page.drawRectangle({ x: 100, y: y + 25, width: 140, height: 45, color: rgb(0.97, 0.97, 0.97) });
    page.drawText('* * * *', { x: 130, y: y + 40, size: 16, font: helveticaBold, color: rgb(0.8, 0.6, 0.1) });
    page.drawRectangle({ x: 340, y: y + 25, width: 140, height: 45, color: rgb(0.97, 0.97, 0.97) });
    page.drawText('* *', { x: 390, y: y + 40, size: 16, font: helveticaBold, color: rgb(0.8, 0.6, 0.1) });

    // Exercise 2: Qual grupo tem menos?
    y -= 125;
    drawExerciseBox(page, y, 105, 'Qual grupo tem menos quadrados?', 12);
    page.drawRectangle({ x: 100, y: y + 25, width: 140, height: 45, color: rgb(0.97, 0.97, 0.97) });
    page.drawText('[] []', { x: 150, y: y + 40, size: 16, font: helveticaBold, color: rgb(0.1, 0.5, 0.8) });
    page.drawRectangle({ x: 340, y: y + 25, width: 140, height: 45, color: rgb(0.97, 0.97, 0.97) });
    page.drawText('[] [] [] [] []', { x: 370, y: y + 40, size: 16, font: helveticaBold, color: rgb(0.1, 0.5, 0.8) });

    // Exercise 3: Circule apenas 3 objetos
    y -= 125;
    drawExerciseBox(page, y, 105, 'Circule exatamente 3 corações do grupo', 13);
    for (let i = 0; i < 6; i++) {
      const cx = 100 + i * 75;
      const cy = y + 42;
      page.drawText('<3', { x: cx - 10, y: cy - 10, size: 22, font: helveticaBold, color: rgb(0.9, 0.1, 0.3) });
    }

    // Exercise 4: Circule apenas 5 objetos
    y -= 125;
    drawExerciseBox(page, y, 105, 'Circule exatamente 5 triângulos do grupo', 14);
    for (let i = 0; i < 7; i++) {
      const cx = 90 + i * 70;
      const cy = y + 42;
      page.drawText('A', { x: cx - 10, y: cy - 10, size: 18, font: helveticaBold, color: rgb(0.1, 0.6, 0.6) });
    }

    // Exercise 5: Conte os animais
    y -= 125;
    drawExerciseBox(page, y, 105, 'Conte os brinquedos e anote o valor', 15);
    page.drawText('Carrinhos: [   ]           Bolas: [   ]           Bonecas: [   ]', {
      x: 70,
      y: y + 42,
      size: 13,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // Page 5: 5 exercises (Nível Fácil)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Fácil', 5);
    
    // Exercise 1: Conte as frutas
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Conte as frutas e escreva o total', 16);
    page.drawText('Morangos: [   ]         Bananas: [   ]         Laranjas: [   ]', {
      x: 70,
      y: y + 42,
      size: 13,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 2: Complete o número que falta
    y -= 125;
    drawExerciseBox(page, y, 105, 'Complete os números que faltam de 1 a 5', 17);
    const mnums = ['1', '', '3', '', '5'];
    for (let i = 0; i < 5; i++) {
      const bx = 100 + i * 85;
      const by = y + 35;
      page.drawRectangle({ x: bx, y: by, width: 35, height: 35, color: rgb(1, 1, 1), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
      if (mnums[i]) {
        page.drawText(mnums[i], { x: bx + 12, y: by + 10, size: 16, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
      } else {
        page.drawRectangle({ x: bx + 2, y: by + 2, width: 31, height: 31, color: rgb(0.97, 0.97, 0.97), borderColor: rgb(0.9, 0.3, 0.3), borderWidth: 1, borderDashArray: [2, 2] });
      }
    }

    // Exercise 3: Desenhe a quantidade indicada
    y -= 125;
    drawExerciseBox(page, y, 105, 'Desenhe círculos de acordo com o número', 18);
    for (let i = 0; i < 3; i++) {
      const bx = 90 + i * 150;
      const by = y + 20;
      page.drawRectangle({ x: bx, y: by, width: 120, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1 });
      page.drawText(`NÚMERO ${i + 2}`, { x: bx + 10, y: by + 35, size: 9, font: helveticaBold, color: rgb(0.5, 0.5, 0.5) });
      page.drawText(`${i + 2}`, { x: bx + 80, y: by + 12, size: 24, font: helveticaBold, color: rgb(0.1, 0.5, 0.8) });
    }

    // Exercise 4: Marque o número correto
    y -= 125;
    drawExerciseBox(page, y, 105, 'Conte e circule o número correto correspondente', 19);
    page.drawText('O O O', { x: 100, y: y + 42, size: 20, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawText('[ 2 ]    [ 3 ]    [ 4 ]    [ 5 ]', { x: 250, y: y + 42, size: 15, font: helveticaBold, color: rgb(0.1, 0.4, 0.8) });

    // Exercise 5: Complete os conjuntos
    y -= 125;
    drawExerciseBox(page, y, 105, 'Desenhe para completar 5 elementos', 20);
    // draw two boxes
    page.drawRectangle({ x: 90, y: y + 15, width: 180, height: 60, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1 });
    page.drawText('<3 <3 <3 (Faltam ____)', { x: 110, y: y + 38, size: 12, font: helveticaBold, color: rgb(0.9, 0.1, 0.1) });

    page.drawRectangle({ x: 310, y: y + 15, width: 180, height: 60, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1 });
    page.drawText('* * (Faltam ____)', { x: 335, y: y + 38, size: 12, font: helveticaBold, color: rgb(0.8, 0.6, 0.1) });
  }

  // ----------------------------------------------------
  // SECTION 2: NÍVEL MÉDIO (Worksheets starts with Cover)
  // ----------------------------------------------------
  
  // Page 6: Cover (Nível Médio)
  {
    const page = pdfDoc.addPage([width, height]);
    page.drawRectangle({ x: 0, y: 0, width: width, height: height, color: rgb(1, 0.98, 0.95) }); // pastel orange
    page.drawRectangle({ x: 20, y: 20, width: width - 40, height: height - 40, color: rgb(1, 1, 1), borderColor: rgb(0.95, 0.85, 0.7), borderWidth: 2 });
    
    page.drawText('ATIVIDADES DE MATEMÁTICA', { x: width / 2 - 140, y: height - 120, size: 18, font: helveticaBold, color: rgb(0.5, 0.3, 0.1) });
    page.drawText('MÓDULO INTERMEDIÁRIO', { x: width / 2 - 195, y: height - 170, size: 26, font: helveticaBold, color: rgb(0.7, 0.35, 0.05) });
    page.drawText('NÍVEL MÉDIO', { x: width / 2 - 80, y: height - 225, size: 22, font: helveticaBold, color: rgb(0.8, 0.45, 0.1) });

    // Math shapes on cover
    page.drawRectangle({ x: width / 2 - 90, y: height - 450, width: 180, height: 120, color: rgb(1, 0.95, 0.9), borderColor: rgb(0.9, 0.5, 0.2), borderWidth: 2 });
    page.drawText('3 + 4 = 7\n10 - 2 = 8', { x: width / 2 - 60, y: height - 410, size: 24, font: helveticaBold, color: rgb(0.2, 0.2, 0.2), lineHeight: 36 });

    // User Info
    page.drawText('NOME:', { x: 100, y: 180, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawLine({ start: { x: 155, y: 180 }, end: { x: width - 100, y: 180 }, thickness: 1.5, color: rgb(0.6, 0.6, 0.6) });
    if (name) {
      page.drawText(name.toUpperCase(), { x: 165, y: 183, size: 11, font: helveticaBold, color: rgb(0.1, 0.4, 0.8) });
    }
    page.drawText('DATA: [       /       /       ]', { x: 100, y: 135, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawText('Material Educativo Digital de Alta Resolução', { x: width / 2 - 110, y: 60, size: 10, font: helvetica, color: rgb(0.5, 0.5, 0.5) });
  }

  // Page 7: 5 exercises (Nível Médio)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Médio', 7);
    
    // Exercise 1: Conte e circule o número correto (até 10)
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Conte as estrelas e circule o número correto', 21);
    page.drawText('* * * * * * *', { x: 80, y: y + 42, size: 18, font: helveticaBold, color: rgb(0.8, 0.6, 0.1) });
    page.drawText('[ 6 ]    [ 7 ]    [ 8 ]    [ 9 ]    [ 10 ]', { x: 250, y: y + 42, size: 13, font: helveticaBold, color: rgb(0.1, 0.5, 0.8) });

    // Exercise 2: Conte e escreva o número
    y -= 125;
    drawExerciseBox(page, y, 105, 'Conte os objetos e escreva o número no quadrinho', 22);
    page.drawText('A A A A A A A A A', { x: 80, y: y + 42, size: 16, font: helveticaBold, color: rgb(0.1, 0.6, 0.6) });
    page.drawRectangle({ x: width - 110, y: y + 30, width: 50, height: 40, color: rgb(1, 1, 1), borderColor: rgb(0.5, 0.5, 0.5), borderWidth: 1.5 });

    // Exercise 3: Complete a sequência de 1 a 10
    y -= 125;
    drawExerciseBox(page, y, 105, 'Complete a sequência numérica de 1 a 10', 23);
    const snums = ['1', '', '3', '4', '', '6', '7', '', '9', '10'];
    for (let i = 0; i < 10; i++) {
      const bx = 45 + i * 50;
      const by = y + 35;
      page.drawRectangle({ x: bx, y: by, width: 30, height: 30, color: rgb(1, 1, 1), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
      if (snums[i]) {
        page.drawText(snums[i], { x: bx + 9, y: by + 8, size: 13, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
      } else {
        page.drawRectangle({ x: bx + 2, y: by + 2, width: 26, height: 26, color: rgb(0.97, 0.97, 0.97), borderColor: rgb(0.9, 0.3, 0.3), borderWidth: 1, borderDashArray: [2, 2] });
      }
    }

    // Exercise 4: Descubra o número que falta
    y -= 125;
    drawExerciseBox(page, y, 105, 'Descubra qual número somado resulta no total', 24);
    page.drawText('5  +  [      ]  =  8          7  +  [      ]  =  10          3  +  [      ]  =  9', {
      x: 65,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 5: Ligue número x quantidade (1 a 10)
    y -= 125;
    drawExerciseBox(page, y, 105, 'Ligue o número à quantidade correspondente', 25);
    page.drawText('6\n8\n10', { x: 80, y: y + 30, size: 12, font: helveticaBold, color: rgb(0.1, 0.1, 0.1), lineHeight: 22 });
    page.drawText('OOOOOOOO (oito)\nOOOOOO (seis)\nOOOOOOOOOO (dez)', { x: 300, y: y + 30, size: 12, font: helveticaBold, color: rgb(0.5, 0.2, 0.7), lineHeight: 22 });
  }

  // Page 8: 5 exercises (Nível Médio)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Médio', 8);
    
    // Exercise 1: Pinte a quantidade indicada
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Pinte exatamente 6 círculos', 26);
    for (let i = 0; i < 10; i++) {
      const cx = 65 + i * 48;
      const cy = y + 42;
      page.drawCircle({ x: cx, y: cy, size: 12, color: rgb(0.97, 0.97, 0.97), borderColor: rgb(0.5, 0.5, 0.5), borderWidth: 1 });
    }

    // Exercise 2: Circule o grupo com mais objetos
    y -= 125;
    drawExerciseBox(page, y, 105, 'Circule o conjunto que possui mais elementos', 27);
    page.drawRectangle({ x: 80, y: y + 20, width: 180, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    page.drawText('[] [] [] [] [] []', { x: 120, y: y + 38, size: 14, font: helveticaBold, color: rgb(0.1, 0.5, 0.8) });

    page.drawRectangle({ x: 320, y: y + 20, width: 180, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    page.drawText('[] [] [] [] [] [] [] []', { x: 350, y: y + 38, size: 14, font: helveticaBold, color: rgb(0.1, 0.5, 0.8) });

    // Exercise 3: Circule o grupo com menos objetos
    y -= 125;
    drawExerciseBox(page, y, 105, 'Circule o conjunto que possui menos elementos', 28);
    page.drawRectangle({ x: 80, y: y + 20, width: 180, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    page.drawText('A A A A A', { x: 130, y: y + 38, size: 14, font: helveticaBold, color: rgb(0.1, 0.6, 0.6) });

    page.drawRectangle({ x: 320, y: y + 20, width: 180, height: 50, color: rgb(1, 1, 1), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1.5 });
    page.drawText('A A A', { x: 380, y: y + 38, size: 14, font: helveticaBold, color: rgb(0.1, 0.6, 0.6) });

    // Exercise 4: Conte os animais e responda
    y -= 125;
    drawExerciseBox(page, y, 105, 'Quantos animais de cada tipo você vê?', 29);
    page.drawText('Cachorros: _____     Gatos: _____     Coelhos: _____     Pássaros: _____', {
      x: 65,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 5: Conte as frutas e responda
    y -= 125;
    drawExerciseBox(page, y, 105, 'Preencha a quantidade de frutas', 30);
    page.drawText('Maçãs: _____     Bananas: _____     Uvas: _____     Laranjas: _____', {
      x: 65,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // Page 9: 5 exercises (Nível Médio)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Médio', 9);
    
    // Exercise 1: Complete os conjuntos com a quantidade indicada
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Adicione corações para chegar ao número indicado', 31);
    page.drawText('Conjunto de 7 corações:  <3 <3 <3 <3 (Faltam ____)', { x: 70, y: y + 50, size: 11, font: helveticaBold, color: rgb(0.9, 0.1, 0.2) });
    page.drawText('Conjunto de 9 estrelas:   * * * * * (Faltam ____)', { x: 70, y: y + 25, size: 11, font: helveticaBold, color: rgb(0.8, 0.6, 0.1) });

    // Exercise 2: Escreva o número correspondente a cada grupo
    y -= 125;
    drawExerciseBox(page, y, 105, 'Conte e escreva o total de cada conjunto', 32);
    page.drawText('Grupo A (OOOOOOO): [   ]         Grupo B ([][][][][][][][][]): [   ]', {
      x: 80,
      y: y + 42,
      size: 12,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 3: Coloque os números em ordem crescente
    y -= 125;
    drawExerciseBox(page, y, 105, 'Ordene do menor para o maior:  7,  2,  9,  1,  5', 33);
    for (let i = 0; i < 5; i++) {
      const bx = 100 + i * 80;
      const by = y + 35;
      page.drawRectangle({ x: bx, y: by, width: 35, height: 35, color: rgb(1, 1, 1), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
      if (i < 4) page.drawText('->', { x: bx + 50, y: by + 12, size: 14, font: helveticaBold, color: rgb(0.5, 0.5, 0.5) });
    }

    // Exercise 4: Coloque os números em ordem decrescente
    y -= 125;
    drawExerciseBox(page, y, 105, 'Ordene do maior para o menor:  3,  10,  6,  1,  9', 34);
    for (let i = 0; i < 5; i++) {
      const bx = 100 + i * 80;
      const by = y + 35;
      page.drawRectangle({ x: bx, y: by, width: 35, height: 35, color: rgb(1, 1, 1), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
      if (i < 4) page.drawText('->', { x: bx + 50, y: by + 12, size: 14, font: helveticaBold, color: rgb(0.5, 0.5, 0.5) });
    }

    // Exercise 5: Compare duas quantidades (mais, menos ou igual)
    y -= 125;
    drawExerciseBox(page, y, 105, 'Use os símbolos  > ,  <  ou  =  para comparar', 35);
    page.drawText('6   [      ]   8            10   [      ]   10            9   [      ]   5', {
      x: 100,
      y: y + 42,
      size: 14,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // ----------------------------------------------------
  // SECTION 3: NÍVEL DIFÍCIL (Worksheets starts with Cover)
  // ----------------------------------------------------
  
  // Page 10: Cover (Nível Difícil)
  {
    const page = pdfDoc.addPage([width, height]);
    page.drawRectangle({ x: 0, y: 0, width: width, height: height, color: rgb(1, 0.95, 0.95) }); // pastel red/pink
    page.drawRectangle({ x: 20, y: 20, width: width - 40, height: height - 40, color: rgb(1, 1, 1), borderColor: rgb(0.95, 0.8, 0.8), borderWidth: 2 });
    
    page.drawText('ATIVIDADES DE MATEMÁTICA', { x: width / 2 - 140, y: height - 120, size: 18, font: helveticaBold, color: rgb(0.5, 0.2, 0.2) });
    page.drawText('MÓDULO AVANÇADO', { x: width / 2 - 145, y: height - 170, size: 26, font: helveticaBold, color: rgb(0.7, 0.15, 0.15) });
    page.drawText('NÍVEL DIFÍCIL', { x: width / 2 - 80, y: height - 225, size: 22, font: helveticaBold, color: rgb(0.8, 0.2, 0.2) });

    // Math shapes on cover
    page.drawRectangle({ x: width / 2 - 90, y: height - 450, width: 180, height: 120, color: rgb(1, 0.92, 0.92), borderColor: rgb(0.9, 0.3, 0.3), borderWidth: 2 });
    page.drawText('12 + 15 = 27\n20 - 13 = 7', { x: width / 2 - 70, y: height - 410, size: 24, font: helveticaBold, color: rgb(0.2, 0.2, 0.2), lineHeight: 36 });

    // User Info
    page.drawText('NOME:', { x: 100, y: 180, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawLine({ start: { x: 155, y: 180 }, end: { x: width - 100, y: 180 }, thickness: 1.5, color: rgb(0.6, 0.6, 0.6) });
    if (name) {
      page.drawText(name.toUpperCase(), { x: 165, y: 183, size: 11, font: helveticaBold, color: rgb(0.1, 0.4, 0.8) });
    }
    page.drawText('DATA: [       /       /       ]', { x: 100, y: 135, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawText('Material Educativo Digital de Alta Resolução', { x: width / 2 - 110, y: 60, size: 10, font: helvetica, color: rgb(0.5, 0.5, 0.5) });
  }

  // Page 11: 5 exercises (Nível Difícil)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Difícil', 11);
    
    // Exercise 1: Compare as quantidades (>, < ou = com desenhos, sem usar símbolos)
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Compare escrevendo "MAIOR", "MENOR" ou "IGUAL"', 36);
    page.drawText('Grupo A (15 bolas)   é   [                       ]   que   Grupo B (12 bolas)\nGrupo C (20 cubos)   é   [                       ]   que   Grupo D (20 cubos)', {
      x: 65,
      y: y + 36,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
      lineHeight: 25,
    });

    // Exercise 2: Resolva pequenas situações-problema com figuras
    y -= 125;
    drawExerciseBox(page, y, 105, 'Resolva o problema matemático abaixo', 37);
    page.drawText('João tinha 8 maçãs e ganhou mais 4 maçãs do seu pai.\nCom quantas maçãs João ficou no total?      Resposta: [        ]', {
      x: 65,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
      lineHeight: 20,
    });

    // Exercise 3: Conte objetos misturados e escreva o total
    y -= 125;
    drawExerciseBox(page, y, 105, 'Conte os símbolos misturados no quadro', 38);
    page.drawRectangle({ x: 70, y: y + 20, width: 220, height: 50, color: rgb(0.98, 0.98, 0.98), borderColor: rgb(0.8, 0.8, 0.8), borderWidth: 1 });
    page.drawText('A * O A * A O * O *', { x: 80, y: y + 38, size: 14, font: helveticaBold, color: rgb(0.3, 0.3, 0.3) });
    page.drawText('Triângulos (A): ____     Estrelas (*): ____     Círculos (O): ____', {
      x: 310,
      y: y + 40,
      size: 9,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 4: Complete a tabela de quantidades
    y -= 125;
    drawExerciseBox(page, y, 105, 'Preencha a quantidade correspondente de cada item', 39);
    page.drawText('Maçãs vermelhas: 12      Laranjas doces: 9      Uvas verdes: 15\nEscreva os totais na tabela:   [  Maçãs: ____  ]   [  Laranjas: ____  ]   [  Uvas: ____  ]', {
      x: 65,
      y: y + 38,
      size: 10,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
      lineHeight: 18,
    });

    // Exercise 5: Encontre o intruso (qual figura não pertence ao grupo?)
    y -= 125;
    drawExerciseBox(page, y, 105, 'Qual figura NÃO pertence ao grupo geométrico?', 40);
    page.drawText('Grupo:  Círculo,  Quadrado,  Triângulo,  Banana,  Hexágono', { x: 70, y: y + 45, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawText('O intruso é o/a: _______________________', { x: 70, y: y + 22, size: 12, font: helveticaBold, color: rgb(0.9, 0.2, 0.2) });
  }

  // Page 12: 5 exercises (Nível Difícil)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Difícil', 12);
    
    // Exercise 1: Complete a escada numérica
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Preencha os degraus da escada de 2 em 2', 41);
    page.drawText('2  ->  4  ->  [      ]  ->  8  ->  [      ]  ->  12  ->  [      ]  ->  16  ->  18  ->  20', {
      x: 65,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 2: Coloque os números em ordem crescente
    y -= 125;
    drawExerciseBox(page, y, 105, 'Ordene do menor para o maior:  15,  8,  20,  12,  5,  17', 42);
    for (let i = 0; i < 6; i++) {
      const bx = 80 + i * 70;
      const by = y + 35;
      page.drawRectangle({ x: bx, y: by, width: 32, height: 32, color: rgb(1, 1, 1), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
      if (i < 5) page.drawText('->', { x: bx + 45, y: by + 10, size: 14, font: helveticaBold, color: rgb(0.5, 0.5, 0.5) });
    }

    // Exercise 3: Coloque os números em ordem decrescente
    y -= 125;
    drawExerciseBox(page, y, 105, 'Ordene do maior para o menor:  14,  3,  19,  11,  6,  18', 43);
    for (let i = 0; i < 6; i++) {
      const bx = 80 + i * 70;
      const by = y + 35;
      page.drawRectangle({ x: bx, y: by, width: 32, height: 32, color: rgb(1, 1, 1), borderColor: rgb(0.7, 0.7, 0.7), borderWidth: 1.5 });
      if (i < 5) page.drawText('->', { x: bx + 45, y: by + 10, size: 14, font: helveticaBold, color: rgb(0.5, 0.5, 0.5) });
    }

    // Exercise 4: Encontre o maior número
    y -= 125;
    drawExerciseBox(page, y, 105, 'Encontre e circule o maior número da lista', 44);
    page.drawText('Lista:  14   |   29   |   37   |   18   |   42   |   25   |   31', { x: 80, y: y + 45, size: 13, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawText('O maior número é: [            ]', { x: 80, y: y + 20, size: 12, font: helveticaBold, color: rgb(0.1, 0.5, 0.8) });

    // Exercise 5: Encontre o menor número
    y -= 125;
    drawExerciseBox(page, y, 105, 'Encontre e circule o menor número da lista', 45);
    page.drawText('Lista:  35   |   12   |   48   |   22   |   9    |   54   |   19', { x: 80, y: y + 45, size: 13, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });
    page.drawText('O menor número é: [            ]', { x: 80, y: y + 20, size: 12, font: helveticaBold, color: rgb(0.9, 0.3, 0.1) });
  }

  // Page 13: 5 exercises (Nível Difícil)
  {
    const page = pdfDoc.addPage([width, height]);
    drawPageHeader(page, 'Nível Difícil', 13);
    
    // Exercise 1: Complete a sequência numérica
    let y = height - 200;
    drawExerciseBox(page, y, 105, 'Complete a sequência numérica pulando de 5 em 5', 46);
    page.drawText('5  ->  10  ->  [       ]  ->  20  ->  [       ]  ->  30  ->  [       ]  ->  40  ->  45  ->  50', {
      x: 65,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 2: Descubra o número que falta
    y -= 125;
    drawExerciseBox(page, y, 105, 'Preencha o número que falta na operação aritmética', 47);
    page.drawText('15  -  [       ]  =  9            24  +  [       ]  =  30            18  -  [       ]  =  11', {
      x: 70,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 3: Continue o padrão (círculo, quadrado, círculo...)
    y -= 125;
    drawExerciseBox(page, y, 105, 'Desenhe o próximo elemento geométrico do padrão', 48);
    page.drawText('Padrão:   O   []   A   O   []   A   O   [        ]', { x: 80, y: y + 42, size: 14, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });

    // Exercise 4: Continue a sequência de cores
    y -= 125;
    drawExerciseBox(page, y, 105, 'Preencha as cores correspondentes do padrão', 49);
    page.drawText('Sequência:   Verde  ->  Azul  ->  Vermelho  ->  Verde  ->  Azul  ->  [                ]', {
      x: 70,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Exercise 5: Continue a sequência de animais
    y -= 125;
    drawExerciseBox(page, y, 105, 'Complete o padrão de repetição de animais', 50);
    page.drawText('Padrão:   Gato  ->  Gato  ->  Cachorros  ->  Gato  ->  Gato  ->  [                       ]', {
      x: 70,
      y: y + 42,
      size: 11,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // If the user purchased "kit-completo", let's append another 12 worksheets (making 100 exercises total!)
  if (kitId === 'kit-completo') {
    // We'll generate pages 14 to 25 to represent another 50 premium advanced exercises!
    // For simplicity, we can beautifully lay out additional worksheets to make a massive 25-page, 100-exercise workbook.
    for (let pNum = 14; pNum <= 25; pNum++) {
      const page = pdfDoc.addPage([width, height]);
      drawPageHeader(page, 'Exercícios Extras - Módulo Especial', pNum);
      
      let y = height - 200;
      // 4 exercises per page to represent premium content
      for (let exOffset = 1; exOffset <= 4; exOffset++) {
        const exNum = 50 + (pNum - 14) * 4 + exOffset;
        drawExerciseBox(page, y, 130, `Exercício Avançado Especial Nº ${exNum}`, exNum);
        
        page.drawText('Resolva a operação e pinte a resposta correta no quadro:', {
          x: 70,
          y: y + 65,
          size: 10,
          font: helveticaBold,
          color: rgb(0.3, 0.3, 0.3),
        });
        
        const val1 = Math.floor(Math.random() * 20) + 10;
        const val2 = Math.floor(Math.random() * 15) + 5;
        const correct = val1 + val2;
        page.drawText(`${val1}  +  ${val2}  =  [       ]`, {
          x: 80,
          y: y + 35,
          size: 16,
          font: helveticaBold,
          color: rgb(0.1, 0.5, 0.8),
        });
        
        page.drawText(`Opções:  ( A ) ${correct - 2}    ( B ) ${correct}    ( C ) ${correct + 3}`, {
          x: 280,
          y: y + 38,
          size: 12,
          font: helveticaBold,
          color: rgb(0.4, 0.4, 0.4),
        });
        
        y -= 150;
      }
    }
  }

  // Serialize the PDF to bytes
  return await pdfDoc.save();
}
