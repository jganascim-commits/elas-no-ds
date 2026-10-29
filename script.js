// ============================================================================
// 1. BANCO DE DADOS HISTÓRICO: 12+ MULHERES QUE MUDARAM A PROGRAMAÇÃO E O DS
// ============================================================================
const PIONEERS_DATA = [
  {
    name: "Ada Lovelace",
    era: "1815 – 1852",
    initials: "AL",
    category: "fundadoras",
    role: "Primeira Pessoa Programadora da História",
    bio: "Matemática visionária que enxergou muito além dos cálculos mecânicos. Em 1843, escreveu o 'Nota G' para a Máquina Analítica de Charles Babbage, contendo o primeiro algoritmo completo da história com laços de repetição (loops) e variáveis.",
    dsImpact: "Fundou a Lógica de Programação e previu que computadores poderiam criar música, arte e sistemas simbólicos.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Ada_Lovelace"
  },
  {
    name: "Grace Hopper",
    era: "1906 – 1992",
    initials: "GH",
    category: "fundadoras",
    role: "Criadora do Primeiro Compilador & Mãe do COBOL",
    bio: "Contra-almirante e cientista da computação. Criou o primeiro compilador (A-0) em 1952, provando que era possível programar usando palavras em vez de binário puro. Sua obra deu origem ao COBOL, linguagem que estruturou bancos e sistemas comerciais no mundo todo.",
    dsImpact: "Sem Grace Hopper, não existiriam linguagens de alto nível (Python, Java, JS, C#) nem o termo 'debugging'.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Grace_Hopper"
  },
  {
    name: "As 6 Garotas do ENIAC",
    era: "1945",
    initials: "E6",
    category: "fundadoras",
    role: "Primeira Equipe de Desenvolvimento do Mundo",
    bio: "Jean Bartik, Betty Holberton, Kathleen Antonelli, Marlyn Meltzer, Ruth Teitelbaum e Frances Spence programaram o primeiro computador eletrônico digital de grande escala (ENIAC) sem nenhum manual, inventando sub-rotinas e pontos de parada (breakpoints).",
    dsImpact: "Criaram na prática a profissão de Desenvolvedora de Sistemas e a depuração estruturada.",
    wikiUrl: "https://pt.wikipedia.org/wiki/ENIAC#O_papel_das_mulheres"
  },
  {
    name: "Margaret Hamilton",
    era: "1936 – Presente",
    initials: "MH",
    category: "espaco",
    role: "Fundadora da Engenharia de Software (Apollo 11)",
    bio: "Diretora da Divisão de Engenharia de Software do MIT. Liderou a equipe que escreveu o código de navegação da Apollo 11. Seu sistema de priorização assíncrona impediu que o computador travasse a 3 minutos de pousar na Lua.",
    dsImpact: "Cunhou o termo 'Engenharia de Software' para que o desenvolvimento de sistemas fosse respeitado como ciência.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Margaret_Hamilton_(cientista_da_computa%C3%A7%C3%A3o)"
  },
  {
    name: "Dorothy Vaughan",
    era: "1910 – 2008",
    initials: "DV",
    category: "espaco",
    role: "Pioneira Negra da NASA & Especialista em FORTRAN",
    bio: "Primeira supervisora negra da NACA/NASA. Quando percebeu que os computadores eletrônicos IBM substituiriam o cálculo manual, aprendeu FORTRAN sozinha e ensinou toda a sua equipe de mulheres negras a programar, garantindo o futuro delas na engenharia aeroespacial.",
    dsImpact: "Símbolo máximo de liderança técnica, requalificação em código e inclusão racial na tecnologia.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Dorothy_Vaughan"
  },
  {
    name: "Katherine Johnson & Mary Jackson",
    era: "1918 – 2020",
    initials: "KJ",
    category: "espaco",
    role: "Matemática Orbital & Primeira Engenheira Negra da NASA",
    bio: "Enquanto Mary Jackson enfrentou a segregação nos tribunais para se tornar a primeira engenheira negra da NASA, Katherine Johnson calculou as trajetórias exatas dos voos espaciais — e os astronautas só decolavam quando ela validava os números do computador.",
    dsImpact: "Base da computação científica, validação de algoritmos críticos e modelagem matemática de sistemas.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Katherine_Johnson"
  },
  {
    name: "Irmã Mary Kenneth Keller",
    era: "1913 – 1985",
    initials: "MK",
    category: "fundadoras",
    role: "1ª Doutora em Computação & Coautora do BASIC",
    bio: "Primeira mulher a conquistar um PhD em Ciência da Computação nos EUA (1965). Ajudou a desenvolver a linguagem BASIC em Dartmouth com um objetivo revolucionário: permitir que qualquer estudante, e não apenas matemáticos de elite, pudesse aprender a programar.",
    dsImpact: "Pioneira do ensino inclusivo de Desenvolvimento de Sistemas e autora de 4 livros sobre computação.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Mary_Kenneth_Keller"
  },
  {
    name: "Adele Goldberg",
    era: "1945 – Presente",
    initials: "AG",
    category: "modernas",
    role: "Pioneira de POO (Smalltalk) e Interfaces Gráficas",
    bio: "Pesquisadora do lendário Xerox PARC, co-desenvolveu a linguagem Smalltalk-80. Seus conceitos de janelas sobrepostas, ícones, menus e Programação Orientada a Objetos (POO) serviram de modelo direto para os sistemas Apple Macintosh e Windows.",
    dsImpact: "Criou a base da matéria de Programação Orientada a Objetos (POO) e do design de interfaces modernas.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Adele_Goldberg"
  },
  {
    name: "Radia Perlman",
    era: "1951 – Presente",
    initials: "RP",
    category: "modernas",
    role: "A 'Mãe da Internet' & Criadora do Protocolo STP",
    bio: "Engenheira de software e redes que inventou o Spanning Tree Protocol (STP), algoritmo fundamental que permitiu que redes locais (LANs) escalassem sem entrar em colapso, tornando possível a arquitetura da Internet moderna.",
    dsImpact: "Detentora de mais de 100 patentes em redes de computadores, roteamento e segurança da informação.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Radia_Perlman"
  },
  {
    name: "Carol Shaw",
    era: "1955 – Presente",
    initials: "CS",
    category: "modernas",
    role: "Primeira Mulher Desenvolvedora de Games da História",
    bio: "Engenheira de software na Atari e na Activision, projetou e programou sozinha o clássico 'River Raid' (1982), um marco de geração procedural de cenários e gerenciamento de memória em sistemas embarcados.",
    dsImpact: "Derrubou o mito de que jogos digitais eram território masculino, abrindo caminho para mulheres em Game Dev.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Carol_Shaw"
  },
  {
    name: "Fei-Fei Li",
    era: "1976 – Presente",
    initials: "FL",
    category: "modernas",
    role: "Pioneira da Visão Computacional & IA Humanizada",
    bio: "Professora em Stanford e criadora do ImageNet, o banco de dados massivo que destravou a revolução do Deep Learning e da Inteligência Artificial moderna. Co-fundou a organização AI4ALL para aumentar a inclusão de mulheres e minorias na IA.",
    dsImpact: "Referência mundial em Ciência de Dados, Redes Neurais e Inteligência Artificial centrada no ser humano.",
    wikiUrl: "https://pt.wikipedia.org/wiki/Fei-Fei_Li"
  },
  {
    name: "Nina da Hora & Sônia Guimarães",
    era: "Brasil 🇧🇷",
    initials: "BR",
    category: "brasil",
    role: "Cientistas Brasileiras, Computação & Inclusão Preta",
    bio: "Sônia Guimarães foi a primeira mulher negra doutora em Física no Brasil e primeira professora negra do ITA, abrindo portas nas exatas. Nina da Hora é cientista da computação e pesquisadora brasileira referência em ética algorítmica, cibersegurança e tecnologia antirracista.",
    dsImpact: "Inspiram milhares de jovens brasileiras de escolas técnicas e públicas a ocuparem o Desenvolvimento de Sistemas.",
    wikiUrl: "https://pt.wikipedia.org/wiki/S%C3%B4nia_Guimar%C3%A3es"
  }
];

// ============================================================================
// 2. RENDERIZAÇÃO DA GALERIA DE PIONEIRAS + EFEITO 3D TILT
// ============================================================================
const pioneersGrid = document.getElementById("pioneers-grid");
const filterButtons = document.querySelectorAll("#pioneer-filters .filter-btn");
const searchInput = document.getElementById("pioneer-search");

let activeCategory = "all";
let searchQuery = "";

function renderPioneers() {
  if (!pioneersGrid) return;

  const filtered = PIONEERS_DATA.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const textBlob = `${item.name} ${item.role} ${item.bio} ${item.dsImpact}`.toLowerCase();
    const matchesSearch = textBlob.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    pioneersGrid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 3.5rem; text-align: center; color: var(--text-body);">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 0.5rem;">Nenhuma pioneira encontrada para essa busca</h3>
        <p>Tente buscar por termos como "Ada", "COBOL", "NASA", "Jogos" ou "Brasil".</p>
      </div>
    `;
    return;
  }

  pioneersGrid.innerHTML = filtered
    .map(
      (p) => `
      <article class="pioneer-card-3d" data-url="${p.wikiUrl}">
        <div>
          <div class="pioneer-top-meta">
            <span class="pioneer-era-badge">${p.era}</span>
            <div class="pioneer-avatar-monogram">${p.initials}</div>
          </div>
          <h3>${p.name}</h3>
          <span class="pioneer-role-title">${p.role}</span>
          <p>${p.bio}</p>
        </div>

        <div>
          <div class="pioneer-impact-box">
            <strong>Legado no DS:</strong> ${p.dsImpact}
          </div>
          <div class="pioneer-card-footer">
            <a href="${p.wikiUrl}" target="_blank" rel="noopener noreferrer" class="pioneer-link-redirect">
              Redirecionar para Biografia Completa ↗
            </a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  attach3DTiltToCards();
}

function attach3DTiltToCards() {
  const cards = document.querySelectorAll(".pioneer-card-3d");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });

    card.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() !== "a") {
        const url = card.getAttribute("data-url");
        if (url) window.open(url, "_blank", "noopener,noreferrer");
      }
    });
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-filter") || "all";
    renderPioneers();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderPioneers();
  });
}

renderPioneers();

// ============================================================================
// 3. PORTAL DE ENTRADA EXCLUSIVO & SISTEMA DE REDIRECIONAMENTO
// ============================================================================
const portalGate = document.getElementById("portal-gate");
const btnUnlockPortal = document.getElementById("btn-unlock-portal");
const btnReopenPortal = document.getElementById("btn-reopen-portal");
const visitorNameInput = document.getElementById("visitor-name");
const portalDestSelect = document.getElementById("portal-destination");
const visitorBadge = document.getElementById("visitor-badge");
const rolePills = document.querySelectorAll("#role-pills .role-pill");

let selectedRole = "Aluna de DS";

rolePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    rolePills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    selectedRole = pill.getAttribute("data-role") || "Aluna de DS";
  });
});

if (btnUnlockPortal) {
  btnUnlockPortal.addEventListener("click", () => {
    const rawName = visitorNameInput ? visitorNameInput.value.trim() : "";
    const displayName = rawName ? rawName : "Deva";
    if (visitorBadge) {
      visitorBadge.textContent = `🌸 ${displayName} // ${selectedRole}`;
    }

    if (portalGate) {
      portalGate.classList.add("unlocked");
    }

    const targetHash = portalDestSelect ? portalDestSelect.value : "#inicio";
    setTimeout(() => {
      const targetEl = document.querySelector(targetHash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 350);
  });
}

if (btnReopenPortal) {
  btnReopenPortal.addEventListener("click", () => {
    if (portalGate) {
      portalGate.classList.remove("unlocked");
    }
  });
}

// Modal de Redirecionamento Rápido
const redirectModal = document.getElementById("redirect-modal");
const btnOpenModal = document.getElementById("btn-open-redirect-modal");
const btnCloseModal = document.getElementById("btn-close-modal");

if (btnOpenModal && redirectModal) {
  btnOpenModal.addEventListener("click", () => {
    redirectModal.classList.add("open");
  });
}

if (btnCloseModal && redirectModal) {
  btnCloseModal.addEventListener("click", () => {
    redirectModal.classList.remove("open");
  });
}

if (redirectModal) {
  redirectModal.addEventListener("click", (e) => {
    if (e.target === redirectModal) {
      redirectModal.classList.remove("open");
    }
  });
}

// ============================================================================
// 4. GRÁFICO INTERATIVO DO AFASTAMENTO HISTÓRICO (1950 - HOJE)
// ============================================================================
const barCols = document.querySelectorAll("#history-bars .bar-col");
const chartCaption = document.getElementById("chart-caption");

barCols.forEach((col) => {
  const updateCaption = () => {
    const info = col.getAttribute("data-info");
    if (info && chartCaption) {
      chartCaption.innerHTML = `<strong>📌 Fato Histórico:</strong> ${info}`;
    }
  };
  col.addEventListener("mouseenter", updateCaption);
  col.addEventListener("click", updateCaption);
});

// ============================================================================
// 5. REDIRECIONADOR INTELIGENTE DE TRILHA NO CURSO DE DS
// ============================================================================
const TRACKS_DATA = {
  frontend: {
    badge: "TRILHA RECOMENDADA NO DS // FRONT-END & CRIATIVIDADE",
    title: "Engenharia Front-End, WebGL 3D & Design de Interfaces",
    desc: "Você une sensibilidade visual com lógica de código! No curso de DS, você vai dominar HTML5, CSS moderno, JavaScript, React e experiências 3D para transformar telas em plataformas inclusivas e rápidas. Sua inspiração histórica: Adele Goldberg, pioneira das interfaces gráficas!",
    tags: ["HTML5 & CSS3", "JavaScript / TypeScript", "React & Three.js 3D", "Acessibilidade Web (WCAG)"],
    primaryText: "Redirecionar para PrograMaria (Front-End)",
    primaryUrl: "https://www.programaria.org/",
    secondaryText: "Guia MDN Web Docs ↗",
    secondaryUrl: "https://developer.mozilla.org/pt-BR/"
  },
  backend: {
    badge: "TRILHA RECOMENDADA NO DS // ARQUITETURA & BACK-END",
    title: "Engenharia Back-End, APIs & Sistemas Distribuídos",
    desc: "Você gosta de entender como tudo funciona por trás dos panos! No DS, você construirá servidores, microsserviços, regras de negócio e sistemas de alta confiabilidade. Sua inspiração histórica: Margaret Hamilton (Engenharia de Software da Apollo 11) e Grace Hopper!",
    tags: ["Node.js / Python / Java", "APIs REST & GraphQL", "Arquitetura de Software", "Cloud & Containers"],
    primaryText: "Redirecionar para {reprograma} & Bootcamps",
    primaryUrl: "https://reprograma.com.br/",
    secondaryText: "Comunidade WoMakersCode ↗",
    secondaryUrl: "https://womakerscode.org/"
  },
  dados: {
    badge: "TRILHA RECOMENDADA NO DS // DADOS & IA ÉTICA",
    title: "Bancos de Dados, Ciência de Dados & IA Antirracista",
    desc: "Você transforma dados brutos em decisões inteligentes e justas! No curso de DS, você aprenderá modelagem SQL/NoSQL, Python e aprendizado de máquina sem vieses discriminatórios. Sua inspiração: Dorothy Vaughan, Fei-Fei Li e Nina da Hora!",
    tags: ["SQL & Modelagem de Dados", "Python & Pandas", "Machine Learning", "Ética Algorítmica"],
    primaryText: "Redirecionar para PretaLab & PyLadies",
    primaryUrl: "https://www.pretalab.com/",
    secondaryText: "PyLadies Brasil ↗",
    secondaryUrl: "https://brasil.pyladies.com/"
  },
  seguranca: {
    badge: "TRILHA RECOMENDADA NO DS // REDES & CIBERSEGURANÇA",
    title: "Segurança da Informação, Criptografia & Infraestrutura",
    desc: "Você quer proteger pessoas e sistemas no mundo digital! No curso de DS, você estuda protocolos de rede, prevenção de invasões, LGPD e defesa cibernética. Sua inspiração histórica: Radia Perlman, a Mãe da Internet!",
    tags: ["Protocolos de Rede", "Segurança Ofensiva & Defensiva", "Criptografia", "Privacidade & LGPD"],
    primaryText: "Redirecionar para Mulheres em Cibersegurança",
    primaryUrl: "https://womakerscode.org/",
    secondaryText: "Meninas Digitais SBC ↗",
    secondaryUrl: "https://meninas.sbc.org.br/"
  },
  games: {
    badge: "TRILHA RECOMENDADA NO DS // GAMES & MOBILE",
    title: "Desenvolvimento de Jogos Digitais & Aplicativos Mobile",
    desc: "Você quer criar mundos interativos ou apps que estão no bolso de milhões de pessoas! No curso de DS, você aprende programação orientada a eventos, motores gráficos e apps nativos/híbridos. Sua inspiração histórica: Carol Shaw (criadora de River Raid)!",
    tags: ["C# & Unity / Godot", "React Native / Flutter", "Física & Lógica 3D", "Game Design Inclusivo"],
    primaryText: "Redirecionar para Trilhas Gratuitas (freeCodeCamp)",
    primaryUrl: "https://www.freecodecamp.org/portuguese/",
    secondaryText: "Meninas Digitais SBC ↗",
    secondaryUrl: "https://meninas.sbc.org.br/"
  }
};

const matcherButtons = document.querySelectorAll("#matcher-buttons .interest-option-btn");
const trackBadge = document.getElementById("track-badge");
const trackTitle = document.getElementById("track-title");
const trackDesc = document.getElementById("track-desc");
const trackTags = document.getElementById("track-tags");
const trackPrimaryLink = document.getElementById("track-primary-link");
const trackSecondaryLink = document.getElementById("track-secondary-link");

matcherButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    matcherButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.getAttribute("data-track") || "frontend";
    const data = TRACKS_DATA[key];
    if (!data) return;

    if (trackBadge) trackBadge.textContent = data.badge;
    if (trackTitle) trackTitle.textContent = data.title;
    if (trackDesc) trackDesc.textContent = data.desc;
    if (trackTags) {
      trackTags.innerHTML = data.tags.map((t) => `<span class="stack-tag">${t}</span>`).join("");
    }
    if (trackPrimaryLink) {
      trackPrimaryLink.href = data.primaryUrl;
      trackPrimaryLink.innerHTML = `<span>${data.primaryText}</span><span>↗</span>`;
    }
    if (trackSecondaryLink) {
      trackSecondaryLink.href = data.secondaryUrl;
      trackSecondaryLink.textContent = data.secondaryText;
    }
  });
});

// ============================================================================
// 6. CENAS 3D INTERATIVAS EM TEMPO REAL (THREE.JS WEBGL)
// ============================================================================
function initThreeScenes() {
  if (typeof THREE === "undefined") return;

  // --------------------------------------------------------------------------
  // CENA 3D #1: PORTAL DE ENTRADA (#portal-canvas)
  // --------------------------------------------------------------------------
  const portalCanvas = document.getElementById("portal-canvas");
  if (portalCanvas) {
    const scene1 = new THREE.Scene();
    const camera1 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera1.position.set(1.2, 0, 8.5);

    const renderer1 = new THREE.WebGLRenderer({
      canvas: portalCanvas,
      alpha: true,
      antialias: true
    });
    renderer1.setSize(window.innerWidth, window.innerHeight);
    renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambient1 = new THREE.AmbientLight(0xfff0f5, 0.9);
    scene1.add(ambient1);

    const dirLight1 = new THREE.DirectionalLight(0xff2a7a, 1.4);
    dirLight1.position.set(5, 6, 5);
    scene1.add(dirLight1);

    const pointLight1 = new THREE.PointLight(0xd81b60, 1.8, 20);
    pointLight1.position.set(-4, -3, 4);
    scene1.add(pointLight1);

    const group1 = new THREE.Group();
    group1.position.set(-1.3, 0.2, 0);
    scene1.add(group1);

    // Escultura TorusKnot Quartzo Rosa
    const knotGeo = new THREE.TorusKnotGeometry(1.45, 0.36, 140, 24);
    const knotMat = new THREE.MeshPhysicalMaterial({
      color: 0xf06292,
      emissive: 0x4a0720,
      roughness: 0.2,
      metalness: 0.15,
      clearcoat: 1.0
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    group1.add(knotMesh);

    // Malha Wireframe Branca ao redor
    const wireGeo = new THREE.IcosahedronGeometry(2.55, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd81b60,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group1.add(wireMesh);

    // Partículas Flutuantes Rosa & Branco
    const partGeo = new THREE.BufferGeometry();
    const partCount = 220;
    const positions = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 16;
    }
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0xd81b60,
      size: 0.065,
      transparent: true,
      opacity: 0.65
    });
    const particles1 = new THREE.Points(partGeo, partMat);
    scene1.add(particles1);

    let mouseX1 = 0;
    let mouseY1 = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX1 = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY1 = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animatePortal() {
      requestAnimationFrame(animatePortal);
      if (portalGate && portalGate.classList.contains("unlocked")) return;

      knotMesh.rotation.x += 0.0045;
      knotMesh.rotation.y += 0.0065;
      wireMesh.rotation.x -= 0.002;
      wireMesh.rotation.y -= 0.003;

      group1.rotation.y += (mouseX1 * 0.5 - group1.rotation.y) * 0.05;
      group1.rotation.x += (mouseY1 * 0.35 - group1.rotation.x) * 0.05;
      particles1.rotation.y += 0.0008;

      renderer1.render(scene1, camera1);
    }
    animatePortal();

    window.addEventListener("resize", () => {
      camera1.aspect = window.innerWidth / window.innerHeight;
      camera1.updateProjectionMatrix();
      renderer1.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // --------------------------------------------------------------------------
  // CENA 3D #2: PALCO PRINCIPAL DO HERO (#hero-3d-canvas)
  // --------------------------------------------------------------------------
  const heroCanvas = document.getElementById("hero-3d-canvas");
  if (heroCanvas) {
    const stageContainer = heroCanvas.parentElement;
    const scene2 = new THREE.Scene();
    const camera2 = new THREE.PerspectiveCamera(
      45,
      stageContainer.clientWidth / stageContainer.clientHeight,
      0.1,
      100
    );
    camera2.position.set(0, 0, 7.2);

    const renderer2 = new THREE.WebGLRenderer({
      canvas: heroCanvas,
      alpha: true,
      antialias: true
    });
    renderer2.setSize(stageContainer.clientWidth, stageContainer.clientHeight);
    renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambient2 = new THREE.AmbientLight(0xffffff, 0.95);
    scene2.add(ambient2);

    const dirLight2 = new THREE.DirectionalLight(0xff2a7a, 1.5);
    dirLight2.position.set(4, 6, 5);
    scene2.add(dirLight2);

    const rimLight2 = new THREE.PointLight(0xd81b60, 2, 15);
    rimLight2.position.set(-4, -4, 3);
    scene2.add(rimLight2);

    const mainGroup = new THREE.Group();
    scene2.add(mainGroup);

    const pinkCrystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xe91e63,
      emissive: 0x3b0419,
      roughness: 0.18,
      metalness: 0.12,
      clearcoat: 1.0,
      flatShading: true
    });

    const whiteWireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });

    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0xd81b60,
      roughness: 0.3,
      metalness: 0.4
    });

    let coreMesh;
    let cageMesh;

    function buildShape(mode) {
      while (mainGroup.children.length > 0) {
        mainGroup.remove(mainGroup.children[0]);
      }

      if (mode === "crystal") {
        const geo = new THREE.OctahedronGeometry(1.65, 1);
        coreMesh = new THREE.Mesh(geo, pinkCrystalMat);
        const cageGeo = new THREE.IcosahedronGeometry(2.15, 1);
        cageMesh = new THREE.Mesh(cageGeo, whiteWireMat);
      } else if (mode === "torus") {
        const geo = new THREE.TorusKnotGeometry(1.25, 0.35, 120, 20);
        coreMesh = new THREE.Mesh(geo, pinkCrystalMat);
        const cageGeo = new THREE.TorusGeometry(2.2, 0.04, 16, 90);
        cageMesh = new THREE.Mesh(cageGeo, outerRingMat);
      } else {
        const geo = new THREE.IcosahedronGeometry(1.6, 2);
        coreMesh = new THREE.Mesh(geo, pinkCrystalMat);
        const cageGeo = new THREE.SphereGeometry(2.15, 16, 16);
        cageMesh = new THREE.Mesh(cageGeo, whiteWireMat);
      }

      // Anel Orbital Rosa & Branco
      const orbitRingGeo = new THREE.TorusGeometry(2.45, 0.035, 16, 100);
      const orbitRing = new THREE.Mesh(orbitRingGeo, outerRingMat);
      orbitRing.rotation.x = Math.PI / 2.6;

      mainGroup.add(coreMesh);
      mainGroup.add(cageMesh);
      mainGroup.add(orbitRing);
    }

    buildShape("crystal");

    // Botões de troca de geometria 3D
    const modeButtons = document.querySelectorAll(".mode-3d-buttons .mode-btn");
    modeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modeButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const shape = btn.getAttribute("data-shape") || "crystal";
        buildShape(shape);
      });
    });

    let targetRotX = 0;
    let targetRotY = 0;

    stageContainer.addEventListener("mousemove", (e) => {
      const rect = stageContainer.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 1.4;
      targetRotX = ny * 1.1;
    });

    function animateHero3D() {
      requestAnimationFrame(animateHero3D);
      if (coreMesh) {
        coreMesh.rotation.y += 0.007;
        coreMesh.rotation.x += 0.004;
      }
      if (cageMesh) {
        cageMesh.rotation.y -= 0.004;
        cageMesh.rotation.z += 0.003;
      }
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.06;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.06;

      renderer2.render(scene2, camera2);
    }
    animateHero3D();

    window.addEventListener("resize", () => {
      if (!stageContainer) return;
      camera2.aspect = stageContainer.clientWidth / stageContainer.clientHeight;
      camera2.updateProjectionMatrix();
      renderer2.setSize(stageContainer.clientWidth, stageContainer.clientHeight);
    });
  }
}

window.addEventListener("DOMContentLoaded", initThreeScenes);
