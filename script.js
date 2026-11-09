/* ==========================================================================
   ELAS.CODE — ROSE-QUARTZ FRAGMENT STUDIO 3D ARC & WIDESCREEN PC ENGINE
   Three.js Rose-Quartz Frosted Glass Card Helix + Lenis + GSAP ScrollTrigger
   ========================================================================== */

const INITIATIVES_DATA = [
  {
    id: "#ELAS-001",
    monogram: "RP",
    name: "Bootcamp Front-End & Back-End Afirmativo",
    org: "{reprograma}",
    verified: true,
    topGroup: "bolsas",
    category: "Educação Base",
    status: "Inscrições Abertas",
    reach: "150 vagas",
    reachNumeric: 15000,
    actionLabel: "Candidatar-se",
    url: "https://reprograma.com.br/",
    modality: "100% Online",
    cost: "Bolsa 100%",
    leadFocus: "React, TypeScript, Node.js & Git",
    mentors: [
      { name: "Mariana Silva", role: "Staff Software Engineer • Back-End Node.js" },
      { name: "Camila Rocha", role: "Senior Front-End Architect • Acessibilidade & React" }
    ],
    sobre: {
      summary:
        "Formação intensiva focada em ensinar programação Front-End (React, TypeScript, Acessibilidade) e Back-End (Node.js, APIs, Bancos de Dados) para mulheres cis e trans em todo o Brasil, com prioridade para mulheres negras, indígenas e periféricas.",
      tracks: [
        "Desenvolvimento Web Full-Stack (React, TypeScript & Node.js)",
        "Git, GitHub, Testes Automatizados & Metodologias Ágeis",
        "Projetos Reais em Squads para Portfólio Técnico",
        "Speed Hiring Direto com Empresas de Tecnologia Parceiras"
      ],
      audience: "Mulheres maiores de 18 anos que desejam ingressar ou migrar para o mercado de engenharia de software."
    },
    requisitos: [
      "Identificar-se como mulher (cisgênero ou transgênero)",
      "Ensino médio completo (prioridade para rede pública e baixa renda)",
      "Disponibilidade para aulas síncronas e laboratórios práticos de código",
      "Não é exigida experiência profissional prévia na área de TI"
    ],
    impacto: {
      kpis: [
        { label: "Taxa de Empregabilidade", value: "78% em até 6 meses" },
        { label: "Protagonismo Negro e Indígena", value: "72% das turmas" },
        { label: "Alunas Formadas", value: "+2.400 desenvolvedoras" }
      ],
      note: "Programa auditado com acompanhamento direto de inserção em equipes de engenharia de software."
    }
  },
  {
    id: "#ELAS-002",
    monogram: "WM",
    name: "Mentoria 1-on-1 Cloud, DevOps & Cibersegurança",
    org: "WoMakersCode",
    verified: true,
    topGroup: "mentoria",
    category: "Mentoria 1-on-1",
    status: "Inscrições Abertas",
    reach: "500 bolsas",
    reachNumeric: 80000,
    actionLabel: "Candidatar-se",
    url: "https://womakerscode.org/",
    modality: "Remoto / Global",
    cost: "100% Gratuito",
    leadFocus: "AWS, Azure, Containers & DevSecOps",
    mentors: [
      { name: "Cynthia Zanoni", role: "Principal Cloud Advocate & Fundadora WoMakersCode" },
      { name: "Beatriz Oliveira", role: "Lead DevSecOps & Cloud Infrastructure Engineer" }
    ],
    sobre: {
      summary:
        "Programa de aceleração técnica e mentoria individual que conecta estudantes e desenvolvedoras júnior a engenheiras sênior, Staff Engineers e especialistas em Cloud Computing (AWS/Azure), DevOps e Segurança da Informação.",
      tracks: [
        "Pareamento 1-on-1 com Líderes de Engenharia",
        "Trilhas de Certificação Oficial Cloud & Linux",
        "Code Review, Containers, CI/CD e Arquitetura Distribuída",
        "Simulação de Entrevistas Técnicas (System Design & Live Coding)"
      ],
      audience: "Estudantes de tecnologia e desenvolvedoras buscando evolução acelerada para níveis Pleno e Sênior."
    },
    requisitos: [
      "Conhecimento básico de lógica de programação",
      "Comprometimento de 4 a 6 horas semanais para sessões de mentoria e laboratórios",
      "Inscrição ativa na comunidade WoMakersCode"
    ],
    impacto: {
      kpis: [
        { label: "Mulheres Impactadas", value: "+80.000 na rede" },
        { label: "Aceleração de Promoção", value: "+68% em 12 meses" },
        { label: "Bolsas e Certificações", value: "+18.500 emitidas" }
      ],
      note: "Reconhecida internacionalmente como uma das maiores redes de capacitação feminina em infraestrutura e código."
    }
  },
  {
    id: "#ELAS-003",
    monogram: "ET",
    name: "Programa ElasTech — Formação & Contratação Direta",
    org: "ElasTech",
    verified: true,
    topGroup: "vagas",
    category: "Contratação",
    status: "Inscrições Abertas",
    reach: "220 vagas",
    reachNumeric: 22000,
    actionLabel: "Candidatar-se",
    url: "https://www.programaria.org/",
    modality: "100% Remoto",
    cost: "Bolsa + Contratação",
    leadFocus: "Java, C#, Node.js & Blind Code Review",
    mentors: [
      { name: "Fernanda Costa", role: "Engineering Manager • Sistemas Financeiros" },
      { name: "Juliana Mendes", role: "Senior Back-End Engineer • Java & Microsserviços" }
    ],
    sobre: {
      summary:
        "Pipeline afirmativo de recrutamento e formação técnica desenhado em conjunto com empresas de tecnologia para contratar desenvolvedoras Júnior e Pleno através de processos seletivos às cegas (blind code review) e livres de viés.",
      tracks: [
        "Engenharia de Software Back-End (Java, C#, Node.js)",
        "Qualidade de Software, TDD e Automação de Testes",
        "Onboarding Guiado com Madrinha Técnica na Empresa",
        "Auditoria de Equidade Salarial na Contratação"
      ],
      audience: "Desenvolvedoras formadas em cursos técnicos (DS), bootcamps ou graduação buscando contratação formal."
    },
    requisitos: [
      "Domínio de lógica de programação e pelo menos uma linguagem orientada a objetos ou web",
      "Projetos práticos ou acadêmicos publicados no GitHub",
      "Disponibilidade para atuação remota em regime CLT"
    ],
    impacto: {
      kpis: [
        { label: "Redução de Viés na Triagem", value: "-54% via Blind Review" },
        { label: "Retenção no 1º Ano", value: "94% nas squads" },
        { label: "Paridade Salarial", value: "100% auditada" }
      ],
      note: "Garante bancas avaliadoras diversas e feedback técnico estruturado para 100% das participantes."
    }
  },
  {
    id: "#ELAS-004",
    monogram: "MD",
    name: "Meninas Digitais — Clubes de Programação & STEM",
    org: "Meninas Digitais SBC",
    verified: true,
    topGroup: "bolsas",
    category: "Educação Base",
    status: "Ativo",
    reach: "Nível Nacional",
    reachNumeric: 45000,
    actionLabel: "Acessar",
    url: "https://meninas.sbc.org.br/",
    modality: "Híbrido / Escolas",
    cost: "Público / Gratuito",
    leadFocus: "Algoritmos, Python, Robótica & Ensino Médio",
    mentors: [
      { name: "Comitê Gestor Meninas Digitais • SBC", role: "Sociedade Brasileira de Computação" },
      { name: "Rede de Professoras Pesquisadoras", role: "Universidades Federais & Institutos Técnicos" }
    ],
    sobre: {
      summary:
        "Programa institucional da Sociedade Brasileira de Computação (SBC) que coordena mais de 150 projetos parceiros em universidades, Institutos Federais e escolas técnicas (Desenvolvimento de Sistemas) para incentivar alunas do Ensino Médio a ingressarem na computação.",
      tracks: [
        "Clubes de Algoritmos e Olimpíadas Brasileiras de Informática",
        "Oficinas de Robótica, Jogos Digitais e Python",
        "Bolsas de Iniciação Científica Júnior (CNPq / SBC)",
        "Encontros Regionais e WIT (Women in Information Technology)"
      ],
      audience: "Alunas do Ensino Médio, estudantes de Desenvolvimento de Sistemas e calouras universitárias."
    },
    requisitos: [
      "Estar matriculada no ensino básico, técnico ou superior (ou atuar como educadora)",
      "Interesse em explorar criação de software, hardware e ciência da computação"
    ],
    impacto: {
      kpis: [
        { label: "Polos Universitários e Técnicos", value: "+150 projetos no Brasil" },
        { label: "Retenção no 1º Ano de TI", value: "+3.2x maior" },
        { label: "Alcance Territorial", value: "27 unidades federativas" }
      ],
      note: "Atua diretamente na base educacional para impedir a evasão feminina antes da universidade."
    }
  },
  {
    id: "#ELAS-005",
    monogram: "PL",
    name: "Ciclo Formativo PretaLab — Dados, IA Ética & Código",
    org: "PretaLab",
    verified: true,
    topGroup: "bolsas",
    category: "Educação Base",
    status: "Inscrições Abertas",
    reach: "300 bolsas",
    reachNumeric: 30000,
    actionLabel: "Candidatar-se",
    url: "https://www.pretalab.com/",
    modality: "100% Online",
    cost: "100% Gratuito",
    leadFocus: "Python, Ciência de Dados & IA Antirracista",
    mentors: [
      { name: "Silvana Bahia", role: "Codiretora Executiva Olabi / PretaLab" },
      { name: "Nina da Hora (Referência Científica)", role: "Cientista da Computação & Pesquisadora em IA Ética" }
    ],
    sobre: {
      summary:
        "Plataforma que conecta mulheres negras e indígenas à tecnologia e inovação por meio de ciclos formativos gratuitos em Python, Ciência de Dados, Inteligência Artificial Ética, Front-End e conexão com vagas afirmativas.",
      tracks: [
        "Python para Ciência de Dados & Machine Learning",
        "Desenvolvimento Front-End Moderno (HTML, CSS, JS, React)",
        "Ética Algorítmica e Combate a Vieses Discriminatórios",
        "Conexão Direta com Banco de Talentos Corporativo"
      ],
      audience: "Mulheres negras (pretas e pardas) e indígenas de todas as regiões do Brasil."
    },
    requisitos: [
      "Autodeclarar-se mulher negra ou indígena",
      "Acesso básico à internet para acompanhamento das aulas síncronas e mentorias",
      "Interesse em programação, dados ou engenharia de software"
    ],
    impacto: {
      kpis: [
        { label: "Mulheres na Rede PretaLab", value: "+12.000 mapeadas" },
        { label: "Bolsas Concedidas", value: "100% gratuitas" },
        { label: "Alcance Nacional", value: "Foco Norte, Nordeste e Periferias" }
      ],
      note: "Referência nacional na construção de uma tecnologia antirracista e interseccional."
    }
  },
  {
    id: "#ELAS-006",
    monogram: "PM",
    name: "Sprint Liderança Técnica: De Sênior a Staff & CTO",
    org: "PrograMaria",
    verified: true,
    topGroup: "mentoria",
    category: "Liderança",
    status: "Ativo",
    reach: "80 vagas",
    reachNumeric: 18000,
    actionLabel: "Acessar",
    url: "https://www.programaria.org/",
    modality: "Online Síncrono",
    cost: "Bolsas Integrais",
    leadFocus: "System Design, Staff Eng & C-Level",
    mentors: [
      { name: "Iana Chan", role: "Fundadora e CEO da PrograMaria" },
      { name: "Líderes Convidadas (CTOs & VPs Engineering)", role: "Mentoria Executiva em Grandes Techs" }
    ],
    sobre: {
      summary:
        "Programa avançado de mentoria executiva e arquitetura para mulheres que já atuam como desenvolvedoras Pleno/Sênior e buscam alcançar cadeiras de Tech Lead, Staff Engineer, Engineering Manager ou CTO.",
      tracks: [
        "Arquitetura de Sistemas Distribuídos & System Design",
        "Liderança de Engenharia, Gestão de Squads e Métricas DORA",
        "Submissão de Palestras Técnicas (Call for Papers / Keynotes)",
        "Negociação Executiva e Patrocínio de Carreira (Sponsorship)"
      ],
      audience: "Engenheiras de software, arquitetas, cientistas de dados e Tech Leads com 3+ anos de experiência."
    },
    requisitos: [
      "Atuação ativa em desenvolvimento de software, dados, segurança ou infraestrutura",
      "Objetivo de assumir posições de Staff Engineer, Tech Lead ou diretoria técnica"
    ],
    impacto: {
      kpis: [
        { label: "Comunidade PrograMaria", value: "+30.000 mulheres" },
        { label: "Promoções para Liderança", value: "+46% após o ciclo" },
        { label: "Palestrantes Técnicas", value: "+420 em conferências" }
      ],
      note: "Atua diretamente sobre o teto de vidro onde apenas 5% dos cargos de CTO são ocupados por mulheres."
    }
  },
  {
    id: "#ELAS-007",
    monogram: "PY",
    name: "PyLadies Brasil — Open Source, Python & Data Science",
    org: "PyLadies",
    verified: true,
    topGroup: "comunidades",
    category: "Mentoria 1-on-1",
    status: "Ativo",
    reach: "38 capítulos",
    reachNumeric: 25000,
    actionLabel: "Acessar",
    url: "https://brasil.pyladies.com/",
    modality: "Comunidade / Híbrido",
    cost: "100% Aberto",
    leadFocus: "Python, Django, FastAPI & Machine Learning",
    mentors: [
      { name: "Mantenedoras PyLadies Brasil", role: "Lideranças Regionais em 38 Cidades" },
      { name: "Core Contributors Python Software Foundation", role: "Mentoras de Software Livre" }
    ],
    sobre: {
      summary:
        "Braço brasileiro da comunidade internacional PyLadies. Organiza grupos de estudo, sprints de contribuição Open Source, coding dojos e mentoria contínua para mulheres dominarem Python, Django, FastAPI e Inteligência Artificial.",
      tracks: [
        "Coding Dojos de Algoritmos e Estruturas de Dados em Python",
        "Sprints Guiadas de Contribuição para Repositórios Open Source",
        "Mentoria de Submissão para a Conferência Python Brasil",
        "Engenharia de Dados, Pandas, PyTorch e IA"
      ],
      audience: "Desde estudantes dando o primeiro passo no código até mantenedoras de bibliotecas Python."
    },
    requisitos: [
      "Adesão ao Código de Conduta inclusivo e colaborativo (zero gatekeeping)",
      "Aberto a mulheres de qualquer nível de senioridade"
    ],
    impacto: {
      kpis: [
        { label: "Capítulos Ativos no País", value: "38 polos regionais" },
        { label: "Presença Feminina na PythonBR", value: "Evoluiu de 8% para 36%" },
        { label: "Material Didático", value: "100% Open Source" }
      ],
      note: "Pilar fundamental na descentralização do ensino de programação em universidades de todo o Brasil."
    }
  },
  {
    id: "#ELAS-008",
    monogram: "RG",
    name: "Rails Girls & Imersão Prática de Primeiro Deploy",
    org: "Rails Girls",
    verified: true,
    topGroup: "comunidades",
    category: "Educação Base",
    status: "Em Expansão",
    reach: "Nível Nacional",
    reachNumeric: 12000,
    actionLabel: "Acessar",
    url: "https://railsgirls.com/",
    modality: "Imersão Prática",
    cost: "100% Gratuito",
    leadFocus: "Arquitetura MVC, Web Dev & Deploy",
    mentors: [
      { name: "Engenheiras Voluntárias Rails Girls BR", role: "Full-Stack Developers & Tech Leads" }
    ],
    sobre: {
      summary:
        "Workshops práticos e acolhedores onde estudantes e iniciantes constroem e fazem o deploy de sua primeira aplicação web completa do zero, trabalhando em pequenos grupos com mentoras experientes.",
      tracks: [
        "Arquitetura Web MVC na Prática",
        "Modelagem de Banco de Dados, Rotas e Front-End",
        "Controle de Versão com Git e Deploy em Nuvem",
        "Roda de Carreira com Desenvolvedoras do Mercado"
      ],
      audience: "Mulheres que desejam colocar a mão no código e publicar seu primeiro sistema web em ambiente seguro."
    },
    requisitos: [
      "Nenhum conhecimento prévio em programação é necessário",
      "Curiosidade e vontade de construir software em equipe"
    ],
    impacto: {
      kpis: [
        { label: "Proporção Mentora / Aluna", value: "1 mentora para 3 alunas" },
        { label: "Índice de Confiança Técnica", value: "98% aprovação" },
        { label: "Continuidade nos Estudos", value: "81% seguem na área" }
      ],
      note: "Elimina a barreira inicial de configuração de ambiente e síndrome da impostora no primeiro contato com código."
    }
  },
  {
    id: "#ELAS-009",
    monogram: "VA",
    name: "Hub de Vagas Afirmativas — Engenharia Front/Back/QA",
    org: "Rede Empresas Equidade",
    verified: true,
    topGroup: "vagas",
    category: "Contratação",
    status: "Inscrições Abertas",
    reach: "95 vagas",
    reachNumeric: 9500,
    actionLabel: "Candidatar-se",
    url: "https://womakerscode.org/",
    modality: "Remoto / Híbrido",
    cost: "Contratação CLT",
    leadFocus: "Front-End, Back-End, QA & Equidade Salarial",
    mentors: [
      { name: "Tech Recruiters & Engineering Managers", role: "64 Empresas Signatárias do Pacto de Equidade" }
    ],
    sobre: {
      summary:
        "Painel unificado de vagas exclusivas e afirmativas para mulheres em empresas de tecnologia comprometidas com licença parental equitativa, faixas salariais transparentes e ambientes psicologicamente seguros.",
      tracks: [
        "Posições Júnior, Pleno, Sênior, Staff e Tech Lead",
        "Front-End (React/Next/Vue), Back-End (Node/Java/Go/Python)",
        "Engenharia de Dados, DevOps, SRE & Cibersegurança",
        "Processos Seletivos Sem Testes Tóxicos e com Feedback Garantido"
      ],
      audience: "Desenvolvedoras e formandas de cursos técnicos/superiores buscando contratação imediata."
    },
    requisitos: [
      "Requisitos técnicos enxutos e realistas (foco em fundamentos e resolução de problemas)",
      "Transparência salarial garantida em todas as etapas"
    ],
    impacto: {
      kpis: [
        { label: "Empresas Auditadas", value: "64 organizações" },
        { label: "Tempo Médio de Contratação", value: "21 dias" },
        { label: "Bancas Entrevistadoras", value: "Mínimo 50% mulheres" }
      ],
      note: "Neutraliza o efeito estatístico onde mulheres deixam de aplicar para vagas com listas infladas de requisitos."
    }
  },
  {
    id: "#ELAS-010",
    monogram: "TG",
    name: "Technovation Girls Brasil — Hackathon de IA & Mobile",
    org: "Technovation",
    verified: true,
    topGroup: "bolsas",
    category: "Educação Base",
    status: "Inscrições Abertas",
    reach: "400 equipes",
    reachNumeric: 16000,
    actionLabel: "Candidatar-se",
    url: "https://www.technovationbrasil.org/",
    modality: "100% Online",
    cost: "100% Gratuito",
    leadFocus: "Apps Mobile, Inteligência Artificial & UX",
    mentors: [
      { name: "Mentoras de Produto, Mobile & IA", role: "Rede Global Technovation Girls" }
    ],
    sobre: {
      summary:
        "Programa e competição global onde meninas de 8 a 18 anos formam equipes para identificar um problema real de sua comunidade e programar um aplicativo mobile ou modelo de Inteligência Artificial para resolvê-lo.",
      tracks: [
        "Lógica de Programação e Desenvolvimento de Apps Mobile",
        "Treinamento de Modelos de Inteligência Artificial",
        "Pesquisa de Usuárias, UX Design e Prototipação",
        "Pitch de Impacto e Liderança Feminina Jovem"
      ],
      audience: "Estudantes de 8 a 18 anos e mentoras voluntárias da indústria de software."
    },
    requisitos: [
      "Ter entre 8 e 18 anos (para alunas) ou atuar em tecnologia/educação (para mentoras)",
      "Inscrição 100% gratuita"
    ],
    impacto: {
      kpis: [
        { label: "Ingresso Posterior em Computação", value: "76% escolhem STEM" },
        { label: "Projetos Desenvolvidos no Brasil", value: "+1.200 aplicativos" },
        { label: "Presença Global", value: "+100 países" }
      ],
      note: "Desperta a autoconfiança tecnológica antes da escolha do curso técnico ou vestibular."
    }
  },
  {
    id: "#ELAS-011",
    monogram: "AL",
    name: "Fellowship Ada Lovelace & Margaret Hamilton — Arquitetura Crítica",
    org: "Consórcio Acadêmico STEM",
    verified: true,
    topGroup: "mentoria",
    category: "Liderança",
    status: "Em Expansão",
    reach: "60 bolsas",
    reachNumeric: 6000,
    actionLabel: "Acessar",
    url: "https://meninas.sbc.org.br/",
    modality: "Nacional / Remoto",
    cost: "Bolsa Auxílio",
    leadFocus: "Sistemas Críticos, Compiladores & Pesquisa",
    mentors: [
      { name: "Pesquisadoras Doutoras em Computação", role: "Sistemas Distribuídos, Compiladores & IA" }
    ],
    sobre: {
      summary:
        "Inspirado nas pioneiras Ada Lovelace (autora do 1º algoritmo da história, 1843) e Margaret Hamilton (diretora de Engenharia de Software da Apollo 11, 1969), apoia mulheres na pesquisa avançada e arquitetura de software crítico.",
      tracks: [
        "Engenharia de Sistemas Distribuídos e Compiladores",
        "Segurança Crítica, Criptografia e Protocolos de Rede",
        "Mentoria com Pesquisadoras Doutoras e Principal Engineers",
        "Apoio Financeiro para Publicações e Conferências"
      ],
      audience: "Estudantes de Desenvolvimento de Sistemas, Ciência da Computação, Engenharia e pós-graduandas."
    },
    requisitos: [
      "Projeto técnico ou iniciação científica em andamento",
      "Compromisso de amadrinhar uma estudante iniciante da rede"
    ],
    impacto: {
      kpis: [
        { label: "Pesquisas e Arquiteturas Apoiadas", value: "+95 projetos" },
        { label: "Liderança em Laboratórios", value: "42% coordenadoras" },
        { label: "Memória & Visibilidade", value: "Resgate das Pioneiras" }
      ],
      note: "Conecta o legado histórico feminino que fundou a programação às arquitetas que lideram o futuro."
    }
  },
  {
    id: "#ELAS-012",
    monogram: "OS",
    name: "First Pull Request — Mentoria de Contribuição Open Source",
    org: "Comunidade Devas BR",
    verified: true,
    topGroup: "comunidades",
    category: "Mentoria 1-on-1",
    status: "Inscrições Abertas",
    reach: "250 vagas",
    reachNumeric: 11000,
    actionLabel: "Candidatar-se",
    url: "https://github.com/womakerscode",
    modality: "100% Online / Git",
    cost: "100% Gratuito",
    leadFocus: "Git Avançado, Pull Requests & Open Source",
    mentors: [
      { name: "Mantenedoras Open Source BR", role: "JavaScript, TypeScript, Python, Go & Rust" }
    ],
    sobre: {
      summary:
        "Programa prático que pareia desenvolvedoras com mantenedoras experientes de software livre para realizar, revisar e aprovar seus primeiros Pull Requests em grandes projetos Open Source internacionais e nacionais.",
      tracks: [
        "Fluxo Git Avançado, Rebasing e Boas Práticas de Code Review",
        "Curadoria de Issues Reais (Good First Issue & Bug Fixes)",
        "Testes Unitários, CI/CD e Documentação Técnica",
        "Construção de Portfólio Público Verificável no GitHub"
      ],
      audience: "Desenvolvedoras de qualquer stack que desejam destravar a participação ativa no ecossistema Open Source."
    },
    requisitos: [
      "Conta ativa no GitHub e familiaridade básica com linha de comando / Git",
      "Disponibilidade para code reviews assíncronos com a mentora"
    ],
    impacto: {
      kpis: [
        { label: "Pull Requests Aprovados", value: "+1.840 PRs merged" },
        { label: "Novas Mantenedoras", value: "34 líderes de repositório" },
        { label: "Visibilidade Internacional", value: "+3x convites técnicos" }
      ],
      note: "Aumenta diretamente a representatividade feminina nos repositórios que sustentam a infraestrutura mundial de software."
    }
  }
];

// Global State
const state = {
  topFilter: "all",
  categoryFilter: "all",
  statusFilter: "all",
  partnerFilter: "",
  searchQuery: "",
  sortBy: "featured",
  viewMode: "table",
  activeItem: null,
  activeDrawerTab: "sobre"
};

let lenisInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  initLenisSmoothScroll();
  initFragmentKineticArc3D();
  initHeroEntranceAndStatTickers();
  initDirectoryControls();
  initDrawerAndModals();
  initKeyboardShortcuts();
  renderDirectory(true);
});

/* ==========================================================================
   1. LENIS SMOOTH SCROLLING INTEGRATED WITH GSAP SCROLLTRIGGER
   ========================================================================== */
function initLenisSmoothScroll() {
  if (typeof Lenis === "undefined") return;

  lenisInstance = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5
  });

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    lenisInstance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl && lenisInstance) {
        e.preventDefault();
        lenisInstance.scrollTo(targetEl, { offset: -64 });
      }
    });
  });
}

/* ==========================================================================
   2. HERO 3D KINETIC ROSE-QUARTZ FLOATING ARC (FULL-SCREEN WIDESCREEN PC)
   Curving Helix / Cascading Spiral of Frosted Rose Glass & Pink Polycarbonate
   ========================================================================== */
function initFragmentKineticArc3D() {
  const canvas = document.getElementById("hero-arc-canvas");
  const heroSection = document.getElementById("hero");
  const fpsReadout = document.getElementById("webgl-fps-readout");

  if (!canvas || !heroSection || typeof THREE === "undefined") return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
  } catch (err) {
    return;
  }

  const setRendererSize = () => {
    const w = heroSection.clientWidth || window.innerWidth;
    const h = heroSection.clientHeight || window.innerHeight;
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    return { w, h };
  };

  const { w, h } = setRendererSize();
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100);
  camera.position.set(0, 0, 12.2);

  // Rose-Quartz & Magenta Studio Lighting Setup
  const ambientLight = new THREE.AmbientLight(0xffd6eb, 0.65);
  scene.add(ambientLight);

  // Key Directional Light 1 (Luminous Blush-White from Top-Right)
  const dirLightKey = new THREE.DirectionalLight(0xffebf5, 3.6);
  dirLightKey.position.set(7, 9, 8);
  scene.add(dirLightKey);

  // Rim Directional Light 2 (Vibrant Rose-Pink Fresnel Rim)
  const dirLightRim = new THREE.DirectionalLight(0xff2a85, 3.4);
  dirLightRim.position.set(-7, 5, -5);
  scene.add(dirLightRim);

  // Fill Light 3 (Warm Fuchsia-Magenta Glow from Below)
  const pointLightFill = new THREE.PointLight(0xd946ef, 2.4, 28);
  pointLightFill.position.set(2, -6, 6);
  scene.add(pointLightFill);

  // Dynamic Cursor Specular Light (Rose-Gold highlight that sweeps across bevels)
  const cursorSpecularLight = new THREE.PointLight(0xff80bf, 3.4, 18);
  cursorSpecularLight.position.set(2, 2, 5);
  scene.add(cursorSpecularLight);

  // Build Rounded Rectangular Bevelled Plate Geometry
  function createRoundedCardGeometry(width, height, radius, depth) {
    const shape = new THREE.Shape();
    const x = -width / 2;
    const y = -height / 2;

    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);

    const extrudeSettings = {
      depth: depth,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.025,
      bevelThickness: 0.025,
      curveSegments: 16
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }

  const cardGeo = createRoundedCardGeometry(2.65, 1.64, 0.2, 0.048);
  const edgesGeo = new THREE.EdgesGeometry(cardGeo, 18);

  // Frosted Rose-Quartz & Glossy Pink Polycarbonate Material
  const rosePolycarbonateMat = new THREE.MeshPhysicalMaterial({
    color: 0x2b0618,
    emissive: 0x1a030f,
    roughness: 0.14,
    metalness: 0.18,
    transmission: 0.56,
    transparent: true,
    opacity: 0.93,
    reflectivity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.06
  });

  // Rose-Pink Fresnel Edge Highlight Materials
  const roseFresnelEdgeMat = new THREE.LineBasicMaterial({
    color: 0xf472b6,
    transparent: true,
    opacity: 0.34
  });

  const brightPinkEdgeMat = new THREE.LineBasicMaterial({
    color: 0xffb3d9,
    transparent: true,
    opacity: 0.68
  });

  // Group Hierarchy for Widescreen Parallax & Scroll Dispersion
  const spiralRootGroup = new THREE.Group();
  scene.add(spiralRootGroup);

  const cardsPivotGroup = new THREE.Group();
  spiralRootGroup.add(cardsPivotGroup);

  // Create the Curving Helix / Cascading Spiral of 26 Floating Rose Plates
  const CARD_COUNT = 26;
  const cardItems = [];

  for (let i = 0; i < CARD_COUNT; i++) {
    const t = i / (CARD_COUNT - 1); // 0.0 -> 1.0 along the widescreen arc

    const cardHolder = new THREE.Group();
    const mesh = new THREE.Mesh(cardGeo, rosePolycarbonateMat);
    const edgeLines = new THREE.LineSegments(
      edgesGeo,
      i % 4 === 0 ? brightPinkEdgeMat : roseFresnelEdgeMat
    );

    mesh.add(edgeLines);
    cardHolder.add(mesh);

    // Widescreen Parametric 3D Arc: sweeps across the PC viewport from lower-center to upper-right
    const angle = (t - 0.35) * Math.PI * 1.22;
    const baseX = -2.4 + t * 8.4 + Math.sin(t * Math.PI) * 0.95;
    const baseY = -1.9 + Math.pow(t, 1.02) * 5.6 + Math.sin(t * Math.PI * 1.2) * 0.6;
    const baseZ = Math.sin(t * Math.PI * 1.4) * 2.0 - Math.pow(t - 0.5, 2) * 3.4;

    const baseRotX = 0.44 - t * 0.98 + Math.cos(angle) * 0.26;
    const baseRotY = -0.62 + t * 0.88;
    const baseRotZ = -0.68 + t * 1.48;

    cardHolder.position.set(baseX, baseY, baseZ);
    cardHolder.rotation.set(baseRotX, baseRotY, baseRotZ);

    const scaleFactor = 0.88 + Math.sin(t * Math.PI) * 0.25;
    cardHolder.scale.setScalar(scaleFactor);

    cardsPivotGroup.add(cardHolder);

    cardItems.push({
      holder: cardHolder,
      mesh,
      t,
      index: i,
      baseX,
      baseY,
      baseZ,
      baseRotX,
      baseRotY,
      baseRotZ,
      scaleFactor
    });
  }

  // Subtle Rose-Gold Floating Stardust Particles in the 3D Stage
  const dustCount = 140;
  const dustGeo = new THREE.BufferGeometry();
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3] = (Math.random() - 0.35) * 18;
    dustPositions[i * 3 + 1] = (Math.random() - 0.4) * 12;
    dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0xff80bf,
    size: 0.055,
    transparent: true,
    opacity: 0.55
  });
  const dustParticles = new THREE.Points(dustGeo, dustMat);
  scene.add(dustParticles);

  const updateResponsiveArcTransform = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      spiralRootGroup.position.set(-0.5, 0.8, -2.5);
      spiralRootGroup.scale.setScalar(0.72);
    } else {
      spiralRootGroup.position.set(0.25, -0.1, 0);
      spiralRootGroup.scale.setScalar(1.04);
    }
  };
  updateResponsiveArcTransform();

  // Mouse & Touch Inertia State
  let targetMouseX = 0;
  let targetMouseY = 0;
  let smoothMouseX = 0;
  let smoothMouseY = 0;

  window.addEventListener(
    "mousemove",
    (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches && e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouseY = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
      }
    },
    { passive: true }
  );

  // Scroll Reaction State (GSAP ScrollTrigger folds/disperses cards backwards in 3D space)
  const scrollState = { progress: 0 };

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      trigger: heroSection,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      onUpdate: (self) => {
        scrollState.progress = self.progress;
      }
    });
  }

  let isHeroInView = true;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroInView = entry.isIntersecting;
        });
      },
      { threshold: 0.02 }
    );
    observer.observe(heroSection);
  }

  // 60 FPS Telemetry & Render Loop
  const clock = new THREE.Clock();
  let frameCounter = 0;
  let lastFpsTimestamp = performance.now();

  function renderKineticArc(now) {
    requestAnimationFrame(renderKineticArc);

    frameCounter++;
    if (now - lastFpsTimestamp >= 1000) {
      const currentFps = Math.min(60, Math.round((frameCounter * 1000) / (now - lastFpsTimestamp)));
      if (fpsReadout) {
        fpsReadout.textContent = `${currentFps} FPS`;
      }
      frameCounter = 0;
      lastFpsTimestamp = now;
    }

    if (!isHeroInView) return;

    const elapsed = clock.getElapsedTime();

    // Smooth lerp damping for mouse inertia
    smoothMouseX += (targetMouseX - smoothMouseX) * 0.045;
    smoothMouseY += (targetMouseY - smoothMouseY) * 0.045;

    // Move cursor-following rose-gold specular light in 3D space
    cursorSpecularLight.position.x = 1.5 + smoothMouseX * 6.0;
    cursorSpecularLight.position.y = 1.0 - smoothMouseY * 4.0;

    // Tilt and shift the entire spiral with cursor inertia + scroll dispersion
    const sp = scrollState.progress;
    cardsPivotGroup.rotation.y = smoothMouseX * 0.28 + sp * 0.55;
    cardsPivotGroup.rotation.x = smoothMouseY * 0.18 - sp * 0.42;
    cardsPivotGroup.position.z = -sp * 4.5;
    cardsPivotGroup.position.y = sp * 1.65;

    dustParticles.rotation.y = elapsed * 0.025 + smoothMouseX * 0.1;

    // Per-card sinusoidal levitation + cursor ripple + scroll folding
    for (let i = 0; i < cardItems.length; i++) {
      const c = cardItems[i];

      const wave = Math.sin(elapsed * 1.25 - c.index * 0.26);
      const secondaryWave = Math.cos(elapsed * 0.9 + c.index * 0.19);

      const cursorArcPos = (smoothMouseX + 1) * 0.5;
      const distToMouse = Math.abs(c.t - cursorArcPos);
      const hoverLift = Math.max(0, 1 - distToMouse * 3.2) * 0.32;

      const foldZ = -sp * (1.2 + c.t * 4.2);
      const foldSpreadX = sp * (c.t - 0.35) * 2.4;
      const foldRotX = sp * (0.65 + c.t * 0.9);

      c.holder.position.x = c.baseX + foldSpreadX + secondaryWave * 0.04;
      c.holder.position.y = c.baseY + wave * 0.12 + hoverLift * 0.4;
      c.holder.position.z = c.baseZ + foldZ + wave * 0.08 + hoverLift;

      c.holder.rotation.x = c.baseRotX + wave * 0.05 + foldRotX;
      c.holder.rotation.y = c.baseRotY + secondaryWave * 0.04 + hoverLift * 0.22;
      c.holder.rotation.z = c.baseRotZ + wave * 0.03 - sp * 0.35;
    }

    renderer.render(scene, camera);
  }

  requestAnimationFrame(renderKineticArc);

  window.addEventListener("resize", () => {
    const { w: nw, h: nh } = setRendererSize();
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    updateResponsiveArcTransform();
  });
}

/* ==========================================================================
   3. HERO ENTRANCE & MONOSPACED NUMERICAL TICKERS
   ========================================================================== */
function initHeroEntranceAndStatTickers() {
  if (typeof gsap !== "undefined") {
    gsap.from(".hero-stagger", {
      y: 24,
      opacity: 0,
      duration: 0.9,
      stagger: 0.11,
      ease: "power3.out",
      delay: 0.1
    });
  }

  const tickers = document.querySelectorAll(".stat-ticker");
  const duration = 1000;
  const start = performance.now();

  function tickNumbers(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);

    tickers.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const prefix = el.getAttribute("data-prefix") || "";
      const suffix = el.getAttribute("data-suffix") || "";

      const current = target * eased;
      const formatted =
        decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString("pt-BR");
      el.textContent = `${prefix}${formatted}${suffix}`;
    });

    if (progress < 1) {
      requestAnimationFrame(tickNumbers);
    }
  }

  requestAnimationFrame(tickNumbers);
}

/* ==========================================================================
   4. WIDESCREEN INITIATIVES TABLE RENDERING & ROSE SPOTLIGHT
   ========================================================================== */
function getFilteredInitiatives() {
  return INITIATIVES_DATA.filter((item) => {
    if (state.topFilter !== "all" && item.topGroup !== state.topFilter) return false;
    if (state.categoryFilter !== "all" && item.category !== state.categoryFilter) return false;
    if (state.statusFilter !== "all" && item.status !== state.statusFilter) return false;
    if (state.partnerFilter && !item.org.toLowerCase().includes(state.partnerFilter.toLowerCase())) {
      return false;
    }

    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      const blob = `${item.id} ${item.name} ${item.org} ${item.category} ${item.status} ${item.reach} ${item.leadFocus} ${item.sobre.summary}`.toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === "open") {
      const rank = (s) => (s === "Inscrições Abertas" ? 3 : s === "Ativo" ? 2 : 1);
      return rank(b.status) - rank(a.status);
    }
    if (state.sortBy === "reach") {
      return b.reachNumeric - a.reachNumeric;
    }
    if (state.sortBy === "az") {
      return a.name.localeCompare(b.name, "pt-BR");
    }
    return 0;
  });
}

function getStatusPillHTML(status) {
  if (status === "Inscrições Abertas") {
    return `
      <span class="status-pill status-pill-emerald">
        <span class="dot-emerald"></span>
        <span>Inscrições Abertas</span>
      </span>
    `;
  }
  if (status === "Ativo") {
    return `
      <span class="status-pill status-pill-rose">
        <span class="dot-pink"></span>
        <span>Ativo</span>
      </span>
    `;
  }
  return `
    <span class="status-pill status-pill-amber">
      <span class="dot-amber"></span>
      <span>Em Expansão</span>
    </span>
  `;
}

function renderDirectory(isInitialLoad = false) {
  const tableBody = document.getElementById("directory-table-body");
  const tableView = document.getElementById("directory-table-view");
  const gridView = document.getElementById("directory-grid-view");
  const emptyState = document.getElementById("directory-empty-state");
  const countLabel = document.getElementById("results-count-label");
  const countAllEl = document.getElementById("count-all");
  const clearFiltersBtn = document.getElementById("btn-clear-filters");

  if (countAllEl) {
    countAllEl.textContent = String(INITIATIVES_DATA.length);
  }

  const filtered = getFilteredInitiatives();

  const hasFilters =
    state.topFilter !== "all" ||
    state.categoryFilter !== "all" ||
    state.statusFilter !== "all" ||
    state.partnerFilter !== "" ||
    state.searchQuery.trim() !== "";

  if (clearFiltersBtn) {
    clearFiltersBtn.classList.toggle("hidden", !hasFilters);
  }

  if (countLabel) {
    const partnerNote = state.partnerFilter ? ` • Filtro: ${state.partnerFilter}` : "";
    countLabel.textContent = `Exibindo ${filtered.length} de ${INITIATIVES_DATA.length} iniciativas verificadas${partnerNote}`;
  }

  if (filtered.length === 0) {
    tableView?.classList.add("hidden");
    if (gridView) {
      gridView.classList.add("hidden");
      gridView.classList.remove("grid");
    }
    emptyState?.classList.remove("hidden");
    return;
  }

  emptyState?.classList.add("hidden");

  if (state.viewMode === "table") {
    tableView?.classList.remove("hidden");
    if (gridView) {
      gridView.classList.add("hidden");
      gridView.classList.remove("grid");
    }
  } else {
    tableView?.classList.add("hidden");
    if (gridView) {
      gridView.classList.remove("hidden");
      gridView.classList.add("grid");
    }
  }

  // Render Widescreen Table Rows
  if (tableBody) {
    tableBody.innerHTML = filtered
      .map(
        (item) => `
        <tr class="initiative-table-row" data-initiative-id="${item.id}" tabindex="0" role="button" aria-label="Abrir detalhes de ${item.name}">
          <td data-label="Iniciativa">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff2a85]/20 to-[#d946ef]/20 border border-[#ff2a85]/35 flex items-center justify-center font-mono font-bold text-xs text-[#fbcfe8] shrink-0">
                ${item.monogram}
              </div>
              <div class="min-w-0">
                <div class="font-semibold text-white text-sm sm:text-[15px] leading-snug">
                  ${item.name}
                </div>
                <div class="flex items-center gap-1.5 mt-0.5 font-mono text-[11px] text-[#b87b98]">
                  <span class="text-[#f472b6]">${item.id}</span>
                  <span>•</span>
                  <span class="text-[#fce7f3]">${item.org}</span>
                  <i data-lucide="badge-check" class="w-3.5 h-3.5 text-[#ff2a85] inline"></i>
                </div>
              </div>
            </div>
          </td>

          <td data-label="Categoria">
            <span class="category-pill">${item.category}</span>
          </td>

          <td data-label="Foco Técnico" class="hidden xl:table-cell">
            <span class="text-xs text-[#fce7f3] font-medium block">${item.leadFocus || item.category}</span>
            <span class="font-mono text-[11px] text-[#b87b98] block">${item.cost}</span>
          </td>

          <td data-label="Status / Impacto">
            ${getStatusPillHTML(item.status)}
          </td>

          <td data-label="Alcance / Vagas" class="text-right font-mono-tabular">
            <span class="text-white font-semibold text-sm block">${item.reach}</span>
            <span class="text-[11px] text-[#b87b98] block">${item.modality}</span>
          </td>

          <td data-label="Ação" class="text-right">
            <a
              href="${item.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-row-action direct-action-link"
            >
              <span>${item.actionLabel}</span>
              <span class="action-arrow font-mono">↗</span>
            </a>
          </td>
        </tr>
      `
      )
      .join("");
  }

  // Render Widescreen Grid Cards
  if (gridView) {
    gridView.innerHTML = filtered
      .map(
        (item) => `
        <article
          data-initiative-id="${item.id}"
          tabindex="0"
          role="button"
          class="studio-box p-5 hover:bg-[#240919] hover:border-[#ff2a85] transition-all cursor-pointer flex flex-col justify-between space-y-5"
        >
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff2a85]/20 to-[#d946ef]/20 border border-[#ff2a85]/35 flex items-center justify-center font-mono font-bold text-xs text-[#fbcfe8]">
                  ${item.monogram}
                </div>
                <div>
                  <div class="flex items-center gap-1 font-mono text-[11px] text-[#fce7f3]">
                    <span>${item.org}</span>
                    <i data-lucide="badge-check" class="w-3.5 h-3.5 text-[#ff2a85]"></i>
                  </div>
                  <span class="font-mono text-[10px] text-[#b87b98]">${item.id} • ${item.modality}</span>
                </div>
              </div>
              ${getStatusPillHTML(item.status)}
            </div>

            <h3 class="font-semibold text-base text-white leading-snug">
              ${item.name}
            </h3>

            <p class="text-xs text-[#f4b8d4] line-clamp-2 leading-relaxed">
              ${item.sobre.summary}
            </p>
          </div>

          <div class="pt-3.5 border-t border-[#331022] flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="category-pill">${item.category}</span>
              <span class="font-mono-tabular text-xs font-semibold text-white">${item.reach}</span>
            </div>

            <a
              href="${item.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-row-action direct-action-link"
            >
              <span>${item.actionLabel}</span>
              <span class="action-arrow font-mono">↗</span>
            </a>
          </div>
        </article>
      `
      )
      .join("");
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  attachRowInteractionsAndAnimations(isInitialLoad);
}

function attachRowInteractionsAndAnimations(isInitialLoad) {
  const rows = document.querySelectorAll(".initiative-table-row");

  // Cursor-following Rose-Pink spotlight glow on table rows
  rows.forEach((row) => {
    row.addEventListener("mousemove", (e) => {
      const rect = row.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      row.style.setProperty("--row-mouse-x", `${x}px`);
      row.style.setProperty("--row-mouse-y", `${y}px`);
    });
  });

  // Row & Card Click to Open Drawer
  const items = document.querySelectorAll("[data-initiative-id]");
  items.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest(".direct-action-link")) {
        e.stopPropagation();
        return;
      }
      const id = el.getAttribute("data-initiative-id");
      openInitiativeDrawer(id);
    });

    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = el.getAttribute("data-initiative-id");
        openInitiativeDrawer(id);
      }
    });
  });

  // Staggered GSAP fade-and-slide up on table rows
  if (typeof gsap !== "undefined" && rows.length > 0) {
    if (isInitialLoad && typeof ScrollTrigger !== "undefined") {
      gsap.fromTo(
        rows,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.045,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#directory-table-view",
            start: "top 86%",
            once: true
          }
        }
      );
    } else {
      gsap.fromTo(
        rows,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.32, stagger: 0.025, ease: "power2.out" }
      );
    }
  }
}

/* ==========================================================================
   5. FILTER CONTROLS & PARTNER QUICK-FILTERS
   ========================================================================== */
function initDirectoryControls() {
  const topButtons = document.querySelectorAll("[data-top-filter]");
  topButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-top-filter") || "all";
      state.topFilter = val;

      topButtons.forEach((b) => {
        const active = b.getAttribute("data-top-filter") === val;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", String(active));
      });

      renderDirectory(false);

      const dirSection = document.getElementById("iniciativas");
      if (dirSection && window.scrollY < dirSection.offsetTop - 120) {
        if (lenisInstance) {
          lenisInstance.scrollTo(dirSection, { offset: -64 });
        } else {
          dirSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  const categoryBtns = document.querySelectorAll("[data-category]");
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category") || "all";
      state.categoryFilter = cat;
      categoryBtns.forEach((b) => b.classList.toggle("active", b.getAttribute("data-category") === cat));
      renderDirectory(false);
    });
  });

  document.getElementById("status-filter-select")?.addEventListener("change", (e) => {
    state.statusFilter = e.target.value;
    renderDirectory(false);
  });

  document.getElementById("sort-select")?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderDirectory(false);
  });

  document.getElementById("global-search-input")?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderDirectory(false);
  });

  const viewBtnTable = document.getElementById("view-btn-table");
  const viewBtnGrid = document.getElementById("view-btn-grid");

  viewBtnTable?.addEventListener("click", () => {
    state.viewMode = "table";
    viewBtnTable.classList.add("active");
    viewBtnGrid?.classList.remove("active");
    renderDirectory(false);
  });

  viewBtnGrid?.addEventListener("click", () => {
    state.viewMode = "grid";
    viewBtnGrid.classList.add("active");
    viewBtnTable?.classList.remove("active");
    renderDirectory(false);
  });

  const partnerTiles = document.querySelectorAll("[data-partner]");
  partnerTiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      const pName = tile.getAttribute("data-partner") || "";
      if (state.partnerFilter === pName) {
        state.partnerFilter = "";
        tile.classList.remove("border-[#ff2a85]");
      } else {
        state.partnerFilter = pName;
        partnerTiles.forEach((t) => t.classList.remove("border-[#ff2a85]"));
        tile.classList.add("border-[#ff2a85]");
      }
      renderDirectory(false);
      const tableEl = document.getElementById("iniciativas");
      if (tableEl && lenisInstance) {
        lenisInstance.scrollTo(tableEl, { offset: -64 });
      }
    });
  });

  const resetAllFilters = () => {
    state.topFilter = "all";
    state.categoryFilter = "all";
    state.statusFilter = "all";
    state.partnerFilter = "";
    state.searchQuery = "";

    topButtons.forEach((b) => b.classList.toggle("active", b.getAttribute("data-top-filter") === "all"));
    categoryBtns.forEach((b) => b.classList.toggle("active", b.getAttribute("data-category") === "all"));
    partnerTiles.forEach((t) => t.classList.remove("border-[#ff2a85]"));

    const statusSel = document.getElementById("status-filter-select");
    if (statusSel) statusSel.value = "all";
    const searchInp = document.getElementById("global-search-input");
    if (searchInp) searchInp.value = "";

    renderDirectory(false);
  };

  document.getElementById("btn-clear-filters")?.addEventListener("click", resetAllFilters);
  document.getElementById("btn-empty-reset")?.addEventListener("click", resetAllFilters);
}

/* ==========================================================================
   6. FROSTED SLIDE-OVER DETAIL DRAWER (WITH MENTOR ROSTER) & MODAL
   ========================================================================== */
function openInitiativeDrawer(id) {
  const item = INITIATIVES_DATA.find((x) => x.id === id);
  if (!item) return;

  state.activeItem = item;
  state.activeDrawerTab = "sobre";

  const backdrop = document.getElementById("drawer-backdrop");
  const drawer = document.getElementById("detail-drawer");

  const iconBox = document.getElementById("drawer-icon-box");
  const idEl = document.getElementById("drawer-id");
  const orgEl = document.getElementById("drawer-org");
  const titleEl = document.getElementById("drawer-title");
  const badgesRow = document.getElementById("drawer-badges-row");
  const reachEl = document.getElementById("drawer-reach");
  const modalityEl = document.getElementById("drawer-modality");
  const costEl = document.getElementById("drawer-cost");
  const extLink = document.getElementById("drawer-external-link");
  const ctaLabel = document.getElementById("drawer-cta-label");

  if (iconBox) iconBox.textContent = item.monogram;
  if (idEl) idEl.textContent = item.id;
  if (orgEl) orgEl.textContent = item.org;
  if (titleEl) titleEl.textContent = item.name;
  if (reachEl) reachEl.textContent = item.reach;
  if (modalityEl) modalityEl.textContent = item.modality;
  if (costEl) costEl.textContent = item.cost;
  if (extLink) extLink.href = item.url;
  if (ctaLabel) ctaLabel.textContent = `${item.actionLabel} no Portal Oficial`;

  if (badgesRow) {
    badgesRow.innerHTML = `
      ${getStatusPillHTML(item.status)}
      <span class="category-pill">${item.category}</span>
    `;
  }

  const drawerTabBtns = document.querySelectorAll("[data-drawer-tab]");
  drawerTabBtns.forEach((b) => {
    const isSobre = b.getAttribute("data-drawer-tab") === "sobre";
    b.classList.toggle("active", isSobre);
    b.setAttribute("aria-selected", String(isSobre));
  });

  renderDrawerTabContent();

  backdrop?.classList.add("is-open");
  if (drawer) {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
  }
}

function closeInitiativeDrawer() {
  document.getElementById("drawer-backdrop")?.classList.remove("is-open");
  const drawer = document.getElementById("detail-drawer");
  if (drawer) {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
  }
  state.activeItem = null;
}

function renderDrawerTabContent() {
  const container = document.getElementById("drawer-tab-content");
  const item = state.activeItem;
  if (!container || !item) return;

  if (state.activeDrawerTab === "sobre") {
    const mentorsList = (item.mentors || [])
      .map(
        (m) => `
        <div class="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#ff2a85]/[0.06] border border-[#331022]">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff2a85] to-[#d946ef] text-white font-mono text-xs flex items-center justify-center font-bold">
              ${m.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div class="text-xs font-semibold text-white">${m.name}</div>
              <div class="text-[11px] text-[#f4b8d4]">${m.role}</div>
            </div>
          </div>
          <span class="font-mono text-[10px] text-[#ff2a85] uppercase font-semibold">Mentora 🌸</span>
        </div>
      `
      )
      .join("");

    container.innerHTML = `
      <div class="space-y-5">
        <div>
          <h4 class="font-mono text-[10px] uppercase tracking-wider text-[#f472b6] mb-2">Visão Geral do Programa</h4>
          <p class="text-[13.5px] text-[#fce7f3] leading-relaxed">
            ${item.sobre.summary}
          </p>
        </div>

        <div class="bg-[#0d0208]/80 border border-[#331022] rounded-xl p-4">
          <h4 class="font-mono text-[10px] uppercase tracking-wider text-[#fbcfe8] mb-3">Estrutura &amp; Trilhas Técnicas</h4>
          <ul class="space-y-2 text-xs sm:text-[13px] text-[#fce7f3]">
            ${item.sobre.tracks
              .map(
                (t) => `
              <li class="flex items-start gap-2.5">
                <span class="text-[#ff2a85] font-mono mt-0.5">✦</span>
                <span>${t}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>

        <div>
          <h4 class="font-mono text-[10px] uppercase tracking-wider text-[#f472b6] mb-2.5">Quadro de Mentoras &amp; Liderança</h4>
          <div class="space-y-2">
            ${mentorsList}
          </div>
        </div>
      </div>
    `;
  } else if (state.activeDrawerTab === "requisitos") {
    container.innerHTML = `
      <div class="space-y-4">
        <h4 class="font-mono text-[10px] uppercase tracking-wider text-[#f472b6]">Critérios de Elegibilidade</h4>
        <div class="bg-[#0d0208]/80 border border-[#331022] rounded-xl divide-y divide-[#331022]">
          ${item.requisitos
            .map(
              (req, idx) => `
            <div class="p-4 flex items-start gap-3">
              <span class="font-mono text-xs text-[#ff2a85] font-bold">0${idx + 1}</span>
              <span class="text-xs sm:text-[13px] text-[#fce7f3]">${req}</span>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="p-4 rounded-xl bg-[#ff2a85]/[0.06] border border-[#331022] text-xs text-[#f4b8d4]">
          <strong class="text-white block mb-1">Público Prioritário:</strong>
          ${item.sobre.audience}
        </div>
      </div>
    `;
  } else if (state.activeDrawerTab === "impacto") {
    container.innerHTML = `
      <div class="space-y-4">
        <h4 class="font-mono text-[10px] uppercase tracking-wider text-[#f472b6]">Métricas Auditadas de Impacto</h4>
        <div class="space-y-2.5">
          ${item.impacto.kpis
            .map(
              (kpi) => `
            <div class="bg-[#0d0208]/80 border border-[#331022] rounded-xl p-4 flex items-center justify-between">
              <span class="text-xs text-[#f4b8d4]">${kpi.label}</span>
              <strong class="font-mono-tabular text-sm text-[#ff2a85]">${kpi.value}</strong>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="bg-[#ff2a85]/[0.06] border border-[#331022] rounded-xl p-4">
          <span class="font-mono text-[10px] uppercase text-[#fbcfe8] block mb-1">Relatório de Execução</span>
          <p class="text-xs sm:text-[13px] text-[#fce7f3] leading-relaxed">${item.impacto.note}</p>
        </div>
      </div>
    `;
  }
}

function initDrawerAndModals() {
  document.getElementById("btn-close-drawer")?.addEventListener("click", closeInitiativeDrawer);
  document.getElementById("drawer-backdrop")?.addEventListener("click", closeInitiativeDrawer);

  const drawerTabs = document.querySelectorAll("[data-drawer-tab]");
  drawerTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-drawer-tab") || "sobre";
      state.activeDrawerTab = tab;
      drawerTabs.forEach((b) => {
        const active = b.getAttribute("data-drawer-tab") === tab;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", String(active));
      });
      renderDrawerTabContent();
    });
  });

  // Connect / Submit Modal
  const connectModal = document.getElementById("connect-modal-backdrop");
  const openModal = () => {
    if (connectModal) {
      connectModal.classList.add("is-open");
      connectModal.setAttribute("aria-hidden", "false");
      document.getElementById("form-name")?.focus();
    }
  };
  const closeModal = () => {
    if (connectModal) {
      connectModal.classList.remove("is-open");
      connectModal.setAttribute("aria-hidden", "true");
    }
  };

  document.getElementById("btn-open-connect-modal")?.addEventListener("click", openModal);
  document.getElementById("btn-hero-submit")?.addEventListener("click", openModal);
  document.getElementById("btn-submit-initiative")?.addEventListener("click", openModal);
  document.getElementById("btn-close-connect-modal")?.addEventListener("click", closeModal);
  document.getElementById("btn-cancel-connect-modal")?.addEventListener("click", closeModal);

  connectModal?.addEventListener("click", (e) => {
    if (e.target === connectModal) closeModal();
  });

  const form = document.getElementById("new-initiative-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value.trim();
      const org = document.getElementById("form-org").value.trim();
      const category = document.getElementById("form-category").value;
      const status = document.getElementById("form-status").value;
      const reach = document.getElementById("form-reach").value.trim();
      const url = document.getElementById("form-url").value.trim();

      if (!name || !org) return;

      const newId = `#ELAS-0${INITIATIVES_DATA.length + 1}`;
      const monogram = org.slice(0, 2).toUpperCase();
      const groupMap = {
        "Mentoria 1-on-1": "mentoria",
        "Educação Base": "bolsas",
        "Contratação": "vagas",
        "Liderança": "comunidades"
      };

      const newEntry = {
        id: newId,
        monogram,
        name,
        org,
        verified: true,
        topGroup: groupMap[category] || "all",
        category,
        status,
        reach: reach || "100 vagas",
        reachNumeric: 10000,
        actionLabel: status === "Inscrições Abertas" ? "Candidatar-se" : "Acessar",
        url: url || "https://womakerscode.org/",
        modality: "100% Online",
        cost: "100% Gratuito",
        leadFocus: `${category} • Rede Feminina`,
        mentors: [
          { name: `Coordenação ${org}`, role: `Liderança Técnica • ${category}` }
        ],
        sobre: {
          summary: `Iniciativa catalogada via diretório aberto ELAS.CODE por ${org}, focada em ${category} para impulsionar mulheres na engenharia de software.`,
          tracks: [category, "Mentoria Prática e Acompanhamento", "Rede Aberta de Apoio"],
          audience: "Mulheres estudantes e profissionais de tecnologia em todo o Brasil."
        },
        requisitos: [
          "Inscrição aberta pelo portal oficial da organização",
          "Adesão ao código de conduta afirmativo e inclusivo"
        ],
        impacto: {
          kpis: [
            { label: "Status de Submissão", value: "Ativo na Sessão" },
            { label: "Capacidade / Alcance", value: reach || "Nacional" }
          ],
          note: "Programa adicionado dinamicamente ao índice verificado."
        }
      };

      INITIATIVES_DATA.unshift(newEntry);
      form.reset();
      closeModal();
      renderDirectory(false);
      openInitiativeDrawer(newId);
    });
  }
}

/* ==========================================================================
   7. KEYBOARD SHORTCUTS (⌘K SEARCH & ESC DISMISS)
   ========================================================================== */
function initKeyboardShortcuts() {
  const searchInput = document.getElementById("global-search-input");

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
        const dirSection = document.getElementById("iniciativas");
        if (dirSection && window.scrollY < dirSection.offsetTop - 200) {
          lenisInstance?.scrollTo(dirSection, { offset: -64 });
        }
      }
    }

    if (e.key === "Escape") {
      const drawer = document.getElementById("detail-drawer");
      const modal = document.getElementById("connect-modal-backdrop");
      if (drawer?.classList.contains("is-open")) {
        closeInitiativeDrawer();
        return;
      }
      if (modal?.classList.contains("is-open")) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        return;
      }
      if (document.activeElement === searchInput) {
        searchInput.blur();
      }
    }
  });
}
