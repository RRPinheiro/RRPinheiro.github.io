import type { TranslationKeys } from './en';

export const pt: TranslationKeys = {
  // Navigation & UI
  darkMode: 'Modo escuro',
  lightMode: 'Modo claro',
  language: 'Idioma',

  // Hero Section
  hero: {
    badge: 'Disponível para novos projetos',
    headline: 'Desenvolvo software que faz a diferença em produção — simples, útil e pensado para pessoas.',
    subline:
      'De aplicações internas a sistemas com IA, foco-me em criar soluções práticas que reduzem falhas, automatizam tarefas e ajudam equipas a trabalhar de forma mais eficiente.',
    scrollHint: 'Deslize para explorar o meu percurso',

    proofs: {
      martifer: {
        text:
          'Desenvolvi ferramentas internas na Martifer para mais de 1 500 colaboradores — APIs, integrações com SAP, SharePoint e soluções automáticas em Power Apps, entre outras.',
        tooltip: 'Apoiei mais de 1 500 colaboradores com ferramentas empresariais e processos automáticos'
      },
      events: {
        text:
          'Concebi e implementei uma plataforma de gestão de eventos com inventário, encomendas, aprovações e relatórios ao serviço da comunidade universitária.',
        tooltip: 'Mais de 1 000 utilizadores dependem das plataformas de gestão de eventos que desenvolvi'
      },
      ai: {
        text:
          'Desenvolvi um projeto de deteção de peões para prevenir colisões com veículos autónomos usando YOLO e OpenCV.',
        tooltip: 'Projeto de IA com classificação máxima para prevenção de colisões com peões'
      },
      tiktok: {
        text:
          'Construí um pipeline automático de vídeos com IA que fez crescer uma conta de TikTok para mais de 10 000 seguidores.',
        tooltip: 'Pipeline automático de vídeos que levou uma conta de TikTok a mais de 10 000 seguidores'
      }
    },
    cta: {
      meeting: 'Enviar-me um e‑mail',
      resume: 'Transferir CV (PDF)'
    }
  },

  // Timeline
  timeline: {
    workExperience: 'Experiência profissional',
    projects: 'Projetos',
    education: 'Educação',
    present: 'Presente',

    // Generic terms
    technologies: 'Tecnologias',
    achievements: 'Principais conquistas',
    features: 'Funcionalidades principais',
    responsibilities: 'Responsabilidades',
    duration: 'Duração',
    company: 'Empresa',
    position: 'Cargo',
    location: 'Localização',
    description: 'Descrição'
  },

  // Work Experience
  work: {
    martiferCurrent: {
      title: 'Engenheiro de software',
      company: 'Grupo Martifer (via UASK)',
      period: 'Desde 2024',
      description:
        'Desde 2024, trabalho no Grupo Martifer através da UASK, onde desenvolvo e dou suporte a aplicações internas para uma organização com mais de 1 500 colaboradores. O trabalho abrange a criação de APIs, scripts e o que for necessário para melhorar as operações diárias e aumentar a fiabilidade. Integro sistemas como SAP, SharePoint e Power Apps para reduzir tarefas manuais e tornar os fluxos de trabalho mais eficientes.'
    }
  },

  // Projects
  projects: {
    tiktokAutomation: {
      title: 'Automação no TikTok — BucketPulls',
      period: 'Projeto pessoal',
      description:
        'Em paralelo, criei o projeto BucketPulls no TikTok, que cresceu para mais de 10 000 seguidores com um pipeline automático de vídeos suportado por IA. Combinei Whisper para transcrição em legendas, Taknet para processamento, FFmpeg para edição e IA para geração de títulos. Consigo produzir e publicar novos vídeos em dois cliques — o resto é tratado automaticamente.'
    },
    utadPlatform: {
      title: 'Plataforma de gestão de eventos',
      company: 'Associação Académica da UTAD',
      period: '2024',
      description:
        'Em 2024, desenvolvi uma plataforma de gestão de inventário e encomendas para eventos. A solução substituiu processos manuais por acompanhamento em tempo real, aprovações, perfis de acesso e relatórios. Integrei um bot no Telegram com consultas assistidas por IA para apoiar a equipa durante os eventos, além de melhorias de segurança e desempenho no site.'
    },
    pedestrianDetection: {
      title: 'Deteção de peões com IA',
      period: 'Projeto universitário',
      description:
        'Como parte da minha licenciatura, desenvolvi um sistema de deteção de peões baseado em IA para o projeto A-Mover, um veículo autónomo cujo objetivo era prevenir colisões entre o veículo e peões, tornando as ruas mais seguras. O sistema foi construído com YOLO e OpenCV, incluindo preparação de datasets, treino de modelos, avaliação e lógica básica de previsão de colisões. O projeto obteve excelentes resultados em testes reais e recebeu uma das melhores classificações do curso.'
    }
  },

  // Education
  education: {
    utad: {
      degree: 'Engenharia Informática',
      institution: 'UTAD',
      period: '2021–2024',
      description:
        'Estudei Engenharia Informática na UTAD, adquirindo bases sólidas em engenharia de software, bases de dados, desenvolvimento web e machine learning. Durante este período, desenvolvi vários projetos:',
      projects: [
        'Jogo de damas 3D em Three.js, com demonstração animada em tempo real.',
        'Exploração de protocolos de mensagens com RabbitMQ para aprofundar comunicações TCP/UDP.',
        'Aplicação simples de rede social para aplicar conceitos de bases de dados e autenticação.',
        'Várias aplicações web combinando back‑end, front‑end e desenho de bases de dados.'
      ]
    },
    earlyProjects: {
      title: 'Primeiros projetos',
      period: 'Antes da universidade',
      description:
        'Antes da universidade, já experimentava com código. Um dos primeiros projetos foi um portão deslizante controlado por Arduino, que despertou o meu interesse em conjugar hardware e software para resolver problemas práticos.'
    }
  },

  // Common phrases
  common: {
    learnMore: 'Saiba mais',
    viewProject: 'Ver projeto',
    contact: 'Contacto',
    about: 'Sobre',
    skills: 'Competências',
    experience: 'Experiência',
    portfolio: 'Portefólio',
    home: 'Início'
  }
};
