/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BenefitItem,
  LearnItem,
  ForWhoItem,
  KitItem,
  BonusItem,
  TestimonialItem,
  FAQItem
} from './types';

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'b1',
    title: 'Reconhecimento dos números',
    description: 'A criança aprende a identificar e escrever visualmente os numerais de forma intuitiva.',
  },
  {
    id: 'b2',
    title: 'Coordenação motora',
    description: 'Exercícios de cobrir tracejados e pintura auxiliam no desenvolvimento da escrita inicial.',
  },
  {
    id: 'b3',
    title: 'Raciocínio lógico',
    description: 'Desafios infantis saudáveis que despertam a habilidade de resolver pequenos problemas.',
  },
  {
    id: 'b4',
    title: 'Contagem divertida',
    description: 'Aprender a contar elementos visualmente relacionando números ao mundo real.',
  },
  {
    id: 'b5',
    title: 'Atenção redobrada',
    description: 'Atividades elaboradas para prender o foco e aumentar o tempo de concentração das crianças.',
  },
  {
    id: 'b6',
    title: 'Foco e Concentração',
    description: 'Estruturação simples e cativante que evita a distração visual do aprendizado.',
  },
  {
    id: 'b7',
    title: 'Aprendizado divertido',
    description: 'Longe das telas, o aprendizado ocorre de forma lúdica com diversão genuína.',
  },
  {
    id: 'b8',
    title: 'Material pronto para imprimir',
    description: 'Baixe em formato PDF de altíssima definição e imprima quando e onde desejar.',
  },
];

export const LEARN_DATA: LearnItem[] = [
  {
    id: 'l1',
    title: 'Contagem',
    description: 'Associar números à contagem física de objetos com desenhos fofos.',
    iconName: 'Hash',
  },
  {
    id: 'l2',
    title: 'Sequência Numérica',
    description: 'Completar sequências e caminhos numéricos desenvolvendo o raciocínio sequencial.',
    iconName: 'TrendingUp',
  },
  {
    id: 'l3',
    title: 'Quantidades',
    description: 'Aprender a discernir grupos visuais: onde tem mais, menos ou igual.',
    iconName: 'PieChart',
  },
  {
    id: 'l4',
    title: 'Comparação',
    description: 'Introdução lúdica sobre maior, menor, maior número e pesos visuais.',
    iconName: 'Columns',
  },
  {
    id: 'l5',
    title: 'Ligar Número à Quantidade',
    description: 'Atividades interativas ligando grupos de figurinhas fofas ao seu respectivo numeral.',
    iconName: 'Link',
  },
  {
    id: 'l6',
    title: 'Pintura Educativa',
    description: 'Pintar de acordo com o resultado numérico ou ligando pontos com cores vibrantes.',
    iconName: 'Paintbrush',
  },
  {
    id: 'l7',
    title: 'Jogos de Labirintos',
    description: 'Encontrar a saída seguindo sequências de números específicas.',
    iconName: 'Map',
  },
  {
    id: 'l8',
    title: 'Coordenação Motora',
    description: 'Tracejar numerais, desenhos de formas geométricas e linhas pontilhadas.',
    iconName: 'PenTool',
  },
  {
    id: 'l9',
    title: 'Desafios Matemáticos',
    description: 'Enigmas de matemática simples com ilustrações animadas cativantes.',
    iconName: 'Brain',
  },
];

export const FOR_WHO_DATA: ForWhoItem[] = [
  {
    id: 'w1',
    title: 'Pais Dedicados',
    description: 'Que desejam auxiliar no desenvolvimento escolar dos filhos fora das telas de celulares.',
    iconName: 'Heart',
  },
  {
    id: 'w2',
    title: 'Professores de Educação Infantil',
    description: 'Que necessitam de material pedagógico complementar, criativo e pronto para imprimir nas aulas.',
    iconName: 'GraduationCap',
  },
  {
    id: 'w3',
    title: 'Creches & Escolas',
    description: 'Que buscam atividades didáticas de alto padrão visual com excelente sequência pedagógica.',
    iconName: 'School',
  },
  {
    id: 'w4',
    title: 'Reforço Escolar',
    description: 'Profissionais de apoio que necessitam motivar seus alunos com exercícios ilustrados rápidos.',
    iconName: 'Sparkles',
  },
  {
    id: 'w5',
    title: 'Práticas de Homeschooling',
    description: 'Para quem ensina em casa e deseja uma estrutura de atividades planejada e sequencial.',
    iconName: 'Home',
  },
  {
    id: 'w6',
    title: 'Apoio na Pré-Escola',
    description: 'Crianças de 4 e 5 anos que precisam fixar contagem, coordenação fina e formas.',
    iconName: 'Baby',
  },
];

export const KITS_DATA: KitItem[] = [
  {
    id: 'kit-basico',
    name: 'KIT BÁSICO',
    price: 9.99,
    originalPrice: 29.90,
    features: [
      '50 exercícios matemáticos',
      'Formato PDF de alta qualidade',
      'Impressão ilimitada',
      'Acesso vitalício ao material',
      'Envio imediato no e-mail',
    ],
    isPopular: true,
    color: 'green',
    buttonText: 'QUERO O KIT BÁSICO',
  },
  {
    id: 'kit-completo',
    name: 'KIT COMPLETO',
    price: 14.99,
    originalPrice: 59.90,
    features: [
      '100 exercícios matemáticos',
      'Planejamento didático para os pais',
      'Jogos de labirinto divertidos',
      'Certificado infantil de conclusão',
      'Atividades extras exclusivas',
      'Formato PDF de alta qualidade',
      'Impressão ilimitada',
      'Acesso vitalício ao material',
      'Envio imediato no e-mail',
    ],
    isPopular: false,
    color: 'blue',
    buttonText: 'QUERO O KIT COMPLETO',
  },
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bo1',
    title: '🎁 Planejamento Didático para os Pais',
    value: 19.90,
    description: 'Um guia completo ensinando como aplicar as atividades no dia a dia sem frustração e com máximo progresso.',
  },
  {
    id: 'bo2',
    title: '🎁 Jogos de Labirinto Divertidos',
    value: 14.90,
    description: 'Exercícios adicionais de labirintos que unem lógica, sequência e foco enquanto estimulam a escrita.',
  },
  {
    id: 'bo3',
    title: '🎁 Certificado Infantil de Matemática',
    value: 9.90,
    description: 'Um diploma fofo personalizável para imprimir e entregar à criança, promovendo orgulho e incentivo.',
  },
  {
    id: 'bo4',
    title: '🎁 Atividades Extras Exclusivas',
    value: 24.90,
    description: 'Uma coletânea surpresa de atividades de pintura e desenhos numéricos para estender a brincadeira.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Juliana Mendes',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    text: 'Meu filho de 4 anos não queria saber de números de jeito nenhum. Com o kit, ele começou a ver como brincadeira. Agora todo dia depois do almoço ele pede para pintar e contar as figurinhas fofas!',
    tag: 'Mãe do Lucas (4 anos)',
  },
  {
    id: 't2',
    name: 'Prof. Márcia Pinheiro',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    text: 'O material é extremamente bem desenhado e pedagogicamente correto. Utilizo as atividades como tarefas complementares na minha turma da pré-escola e os pais têm me dado feedbacks maravilhosos. Recomendo muito o Kit Completo!',
    tag: 'Professora de Educação Infantil',
  },
  {
    id: 't3',
    name: 'Rodrigo Alves',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    text: 'Fiquei impressionado com a qualidade visual. O Kit Completo vale muito a pena, principalmente pelos bônus de labirinto e o certificado. Minha filha amou receber o "diploma" dela ao final dos exercícios!',
    tag: 'Pai da Sofia (5 anos)',
  },
  {
    id: 't4',
    name: 'Patrícia Goulart',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    text: 'Faço homeschooling com meu neto e este kit organizou perfeitamente nossa rotina de matemática básica. PDF em excelente resolução, simples de baixar e imprimir em qualquer impressora caseira.',
    tag: 'Avó e Tutora do Arthur',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'fq1',
    question: 'Recebo o material na hora?',
    answer: 'Sim! O envio é 100% automático e imediato. Assim que o pagamento for aprovado (no Pix ou Cartão de Crédito), você receberá um e-mail contendo o link exclusivo para fazer o download dos arquivos em formato PDF.',
  },
  {
    id: 'fq2',
    question: 'Posso imprimir as atividades quantas vezes quiser?',
    answer: 'Sim! Os arquivos em PDF são seus para sempre. Você pode salvá-los no seu computador ou celular e imprimir as atividades em casa, na escola ou em uma gráfica rápida, quantas vezes achar necessário.',
  },
  {
    id: 'fq3',
    question: 'O material serve para crianças de 4 anos?',
    answer: 'Perfeitamente! Toda a sequência pedagógica foi planejada para atender às capacidades intelectuais e de coordenação motora fina de crianças de 4 e 5 anos, introduzindo numerais e contagem de modo gradativo e focado.',
  },
  {
    id: 'fq4',
    question: 'Serve também para professores aplicarem em sala?',
    answer: 'Sim, o kit é ideal para professores da Educação Infantil, creches e reforço escolar. Ele funciona muito bem como material didático de apoio para enriquecer suas aulas presenciais ou entregar como dever de casa.',
  },
  {
    id: 'fq5',
    question: 'As atividades funcionam no celular ou tablet?',
    answer: 'Você pode baixar e visualizar o material perfeitamente no celular ou tablet. No entanto, para que a criança faça as atividades, é essencial realizar a impressão física das páginas, pois o objetivo principal é tirá-la das telas e estimular a escrita manual e a coordenação física.',
  },
  {
    id: 'fq6',
    question: 'O acesso ao material expira em quanto tempo?',
    answer: 'Não expira nunca! Seu acesso é vitalício. Você poderá fazer o download do kit e de qualquer atualização futura sem pagar nenhuma mensalidade ou tarifa adicional.',
  },
];
