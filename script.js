/* ==========================================================================
   ELAS.CODE — MOVIMENTO DE INCENTIVO & PROTAGONISMO FEMININO EM TECH
   Three.js Kinetic Rose-Quartz Arc + Interactive Vibe Explorer + Lenis Smooth Scroll
   ========================================================================== */

// 1. DATA: VIBE EXPLORER (O QUE COMBINA COM VOCÊ)
const VIBE_DATA = {
  frontend: {
    badge: "VISUAL & EXPERIÊNCIA",
    title: "Front-End & UI/UX Design",
    emoji: "🎨",
    quote: "Transforme ideias em telas deslumbrantes que milhões de pessoas usam todos os dias.",
    description:
      "Se você gosta de estética, cores, organização visual e se importa com o que as usuárias sentem ao navegar em um site ou app, essa área é perfeita para você. Você usa HTML, CSS, JavaScript, React e Figma para criar experiências digitais mágicas.",
    projects: [
      "Aplicativos de streaming de música e vídeos com layouts interativos",
      "E-commerces de moda, cosméticos ou sustentabilidade com animações fluidas",
      "Portfólios artísticos e plataformas educacionais acessíveis e intuitivas"
    ],
    superpower: "Sensibilidade estética + empatia de navegação = interfaces que encantam o mundo."
  },
  cyber: {
    badge: "DEFESA & INVESTIGAÇÃO",
    title: "Cibersegurança & Hacking Ético",
    emoji: "🕵️‍♀️",
    quote: "Proteja dados confidenciais, encontre vulnerabilidades e seja a guardiã digital de sistemas globais.",
    description:
      "Se você curte decifrar mistérios, resolver enigmas e garantir a privacidade e segurança de pessoas e empresas, cibersegurança é adrenalina pura. O mundo precisa urgentemente de mulheres pensando em segurança digital para impedir fraudes e proteger direitos.",
    projects: [
      "Testes de invasão controlados (Pentest) para descobrir falhas antes dos criminosos",
      "Sistemas de criptografia e proteção de contas bancárias e dados médicos",
      "Defesa contra vazamentos de dados pessoais e inteligência contra ameaças"
    ],
    superpower: "Pensamento analítico e astúcia para prever riscos e proteger vidas digitais."
  },
  ai: {
    badge: "FUTURO & DADOS",
    title: "Ciência de Dados & Inteligência Artificial",
    emoji: "🧠",
    quote: "Ensine computadores a aprender padrões, prever o futuro e criar tecnologias revolucionárias.",
    description:
      "Inteligência Artificial não é ficção científica: é a nossa realidade hoje. Mulheres nessa área são fundamentais para garantir que os algoritmos sejam justos, éticos e representem toda a sociedade, usando Python e modelos de Machine Learning.",
    projects: [
      "Modelos de IA na medicina para diagnóstico precoce de câncer de mama",
      "Algoritmos de recomendação musical e previsão de tendências de comportamento",
      "Sistemas de linguagem natural para assistentes virtuais empáticas e inclusivas"
    ],
    superpower: "Curiosidade infinita para transformar montanhas de dados em sabedoria e inovação."
  },
  games: {
    badge: "MUNDOS & UNIVERSOS",
    title: "Game Development & Experiências 3D",
    emoji: "🎮",
    quote: "Construa universos inteiros, mecânicas envolventes, personagens inesquecíveis e histórias interativas.",
    description:
      "A indústria de games fatura mais que cinema e música juntos, e as mulheres são mais de 50% do público gamer no Brasil! É hora de estarmos criando as histórias, a arte 3D, a física e a programação dos próximos grandes sucessos.",
    projects: [
      "Jogos indie poéticos com narrativas focadas em emoção e superação",
      "Mundos virtuais 3D interativos utilizando Unity, Unreal Engine ou Three.js",
      "Simuladores interativos para treinamentos médicos, espaciais ou educativos"
    ],
    superpower: "Capacidade de dar vida a personagens e criar memórias inesquecíveis para jogadoras."
  },
  lead: {
    badge: "ESTRATÉGIA & IMPACTO",
    title: "Tech Lead & Gestão de Produto",
    emoji: "👑",
    quote: "Conecte mentes brilhantes, tome decisões estratégicas e veja grandes ideias se tornarem realidade.",
    description:
      "Se você tem visão ampla, adora colaborar com pessoas e tem talento natural para liderar, você pode ser a mente que guia desenvolvedoras, designers e negócios. Mulheres líderes em tech transformam a cultura de trabalho e inspiram novas gerações.",
    projects: [
      "Liderança de squads multidisciplinares para lançamento de produtos inovadores",
      "Pesquisas estratégicas de produto para resolver problemas de milhões de pessoas",
      "Mentoria e desenvolvimento de carreiras de novas desenvolvedoras"
    ],
    superpower: "Visão estratégica combinada com inteligência emocional para levar times ao sucesso."
  }
};

// 2. DATA: COMUNIDADES DE ACOLHIMENTO E APOIO
const COMMUNITIES_DATA = [
  {
    name: "{reprograma}",
    tag: "Inclusão & Diversidade",
    summary: "Iniciativa de impacto social que capacita mulheres cis e trans com foco em tecnologia e redução do gap de gênero.",
    url: "https://reprograma.com.br/",
    badge: "Referência Nacional",
    dotColor: "emerald"
  },
  {
    name: "WoMakersCode",
    tag: "Mentoria & Aceleração",
    summary: "A maior comunidade de mulheres em tecnologia da América Latina, oferecendo eventos gratuitos e trilhas de mentoria.",
    url: "https://womakerscode.org/",
    badge: "+80k Mulheres",
    dotColor: "pink"
  },
  {
    name: "PrograMaria",
    tag: "Empoderamento & Conteúdo",
    summary: "Cursos, eventos inspiradores e conteúdos que incentivam mulheres a debater, programar e transformar o mercado de TI.",
    url: "https://www.programaria.org/",
    badge: "Comunidade Viva",
    dotColor: "pink"
  },
  {
    name: "PyLadies Brasil",
    tag: "Comunidade Python",
    summary: "Grupo internacional com mais de 35 capítulos no Brasil focado em acolher mulheres no ecossistema Python e Open Source.",
    url: "https://brasil.pyladies.com/",
    badge: "35+ Cidades BR",
    dotColor: "emerald"
  },
  {
    name: "PretaLab",
    tag: "Mulheres Negras em Tech",
    summary: "Plataforma que estimula e conecta mulheres negras e indígenas à tecnologia e inovação por meio de ciclos formativos.",
    url: "https://www.pretalab.com/",
    badge: "Antirracismo & IA",
    dotColor: "amber"
  },
  {
    name: "Meninas Digitais (SBC)",
    tag: "Educação & Escolas",
    summary: "Programa da Sociedade Brasileira de Computação presente em escolas técnicas e universidades para atrair garotas para TI.",
    url: "https://meninas.sbc.org.br/",
    badge: "SBC Oficial",
    dotColor: "emerald"
  },
  {
    name: "Technovation Girls",
    tag: "Jovens Inovadoras",
    summary: "Competição global onde meninas de 8 a 18 anos criam aplicativos mobile e soluções de IA para problemas de suas comunidades.",
    url: "https://www.technovationbrasil.org/",
    badge: "Global STEM",
    dotColor: "pink"
  },
  {
    name: "Rails Girls",
    tag: "Primeiros Passos",
    summary: "Workshops acolhedores de final de semana para mulheres aprenderem a criar sua primeira aplicação web do zero.",
    url: "https://railsgirls.com/",
    badge: "100% Voluntário",
    dotColor: "pink"
  }
];

let lenisInstance = null;

// ==========================================================================
// DOMContentLoaded
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  initLenisSmoothScroll();
  initKineticArc3D();
  initVibeSelector();
  renderCommunities();
  initModalListeners();
});

// ==========================================================================
// 1. LENIS SMOOTH SCROLLING
// ==========================================================================
function initLenisSmoothScroll() {
  if (typeof Lenis === "undefined") return;

  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.4
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

  // Smooth hash anchors
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

// ==========================================================================
// 2. HERO THREE.JS 3D KINETIC ROSE-QUARTZ ARC
// ==========================================================================
function initKineticArc3D() {
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

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffd6eb, 0.7);
  scene.add(ambientLight);

  const dirLightKey = new THREE.DirectionalLight(0xffebf5, 3.6);
  dirLightKey.position.set(7, 9, 8);
  scene.add(dirLightKey);

  const dirLightRim = new THREE.DirectionalLight(0xff2a85, 3.5);
  dirLightRim.position.set(-7, 5, -5);
  scene.add(dirLightRim);

  const pointLightFill = new THREE.PointLight(0xd946ef, 2.5, 28);
  pointLightFill.position.set(2, -6, 6);
  scene.add(pointLightFill);

  const cursorSpecularLight = new THREE.PointLight(0xff80bf, 3.5, 18);
  cursorSpecularLight.position.set(2, 2, 5);
  scene.add(cursorSpecularLight);

  // Card geometry builder
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

  const roseFresnelEdgeMat = new THREE.LineBasicMaterial({
    color: 0xf472b6,
    transparent: true,
    opacity: 0.35
  });

  const brightPinkEdgeMat = new THREE.LineBasicMaterial({
    color: 0xffb3d9,
    transparent: true,
    opacity: 0.7
  });

  const spiralRootGroup = new THREE.Group();
  scene.add(spiralRootGroup);

  const cardsPivotGroup = new THREE.Group();
  spiralRootGroup.add(cardsPivotGroup);

  const CARD_COUNT = 24;
  const cardItems = [];

  for (let i = 0; i < CARD_COUNT; i++) {
    const t = i / (CARD_COUNT - 1);
    const cardHolder = new THREE.Group();
    const mesh = new THREE.Mesh(cardGeo, rosePolycarbonateMat);
    const edgeLines = new THREE.LineSegments(
      edgesGeo,
      i % 4 === 0 ? brightPinkEdgeMat : roseFresnelEdgeMat
    );
    cardHolder.add(mesh);
    cardHolder.add(edgeLines);

    // Dynamic parametric helix arc curve across the widescreen viewport
    const arcAngle = (t - 0.5) * Math.PI * 1.5;
    const radiusX = 6.2;
    const radiusY = 2.8;

    const posX = Math.cos(arcAngle) * radiusX + 3.2;
    const posY = Math.sin(arcAngle) * radiusY + (1.0 - t) * 1.6 - 0.3;
    const posZ = Math.sin(arcAngle * 1.8) * 2.2 - (1.0 - t) * 1.2;

    cardHolder.position.set(posX, posY, posZ);
    cardHolder.rotation.x = 0.2 + (t - 0.5) * 0.4;
    cardHolder.rotation.y = -arcAngle * 0.75;
    cardHolder.rotation.z = (t - 0.5) * 0.3;

    cardsPivotGroup.add(cardHolder);
    cardItems.push({
      holder: cardHolder,
      basePos: cardHolder.position.clone(),
      baseRot: cardHolder.rotation.clone(),
      phase: t * Math.PI * 2,
      floatSpeed: 0.9 + (i % 5) * 0.18
    });
  }

  // Pointer tracking
  let mouseTargetX = 0;
  let mouseTargetY = 0;
  let mouseCurrentX = 0;
  let mouseCurrentY = 0;

  window.addEventListener("pointermove", (e) => {
    mouseTargetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseTargetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  let lastTime = performance.now();
  let frameCount = 0;
  let fpsTimer = 0;

  function animate(now) {
    requestAnimationFrame(animate);
    const delta = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // FPS Meter
    frameCount++;
    fpsTimer += delta;
    if (fpsTimer >= 1.0) {
      if (fpsReadout) {
        fpsReadout.textContent = `${Math.round(frameCount / fpsTimer)} FPS`;
      }
      frameCount = 0;
      fpsTimer = 0;
    }

    // Smooth cursor interpolation
    mouseCurrentX += (mouseTargetX - mouseCurrentX) * 0.05;
    mouseCurrentY += (mouseTargetY - mouseCurrentY) * 0.05;

    // Move specular light
    cursorSpecularLight.position.x = mouseCurrentX * 8 + 2;
    cursorSpecularLight.position.y = mouseCurrentY * 6 + 1;

    // Subtle parallax tilt
    cardsPivotGroup.rotation.y = mouseCurrentX * 0.22;
    cardsPivotGroup.rotation.x = -mouseCurrentY * 0.16;

    // Float each card
    const timeSec = now * 0.001;
    cardItems.forEach((item) => {
      const floatY = Math.sin(timeSec * item.floatSpeed + item.phase) * 0.12;
      const floatRot = Math.cos(timeSec * 0.8 + item.phase) * 0.04;
      item.holder.position.y = item.basePos.y + floatY;
      item.holder.rotation.z = item.baseRot.z + floatRot;
    });

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    const { w, h } = setRendererSize();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
}

// ==========================================================================
// 3. INTERACTIVE VIBE SELECTOR (QUIZ / EXPLORADOR DE ÁREAS)
// ==========================================================================
function initVibeSelector() {
  const buttons = document.querySelectorAll(".vibe-selector-card");
  const showcaseBox = document.getElementById("vibe-showcase-box");

  if (!buttons.length || !showcaseBox) return;

  function renderVibe(vibeKey) {
    const data = VIBE_DATA[vibeKey] || VIBE_DATA.frontend;

    showcaseBox.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Left: Superpower & Description -->
        <div class="lg:col-span-7 space-y-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a85]/20 border border-[#ff2a85]/40 font-mono text-xs text-[#fbcfe8]">
            <span>${data.emoji}</span>
            <span>${data.badge}</span>
          </div>

          <h3 class="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            ${data.title}
          </h3>

          <p class="text-base sm:text-lg text-[#fce7f3] italic leading-snug">
            "${data.quote}"
          </p>

          <p class="text-sm text-[#f4b8d4] leading-relaxed">
            ${data.description}
          </p>

          <div class="p-4 rounded-xl bg-[#080205]/70 border border-[#4a1531] text-xs font-mono text-[#fbcfe8]">
            <span class="text-[#ff2a85] font-bold">✨ SEU SUPERPODER:</span> ${data.superpower}
          </div>
        </div>

        <!-- Right: Projects & Call to Action -->
        <div class="lg:col-span-5 studio-box p-6 sm:p-7 space-y-5">
          <div class="flex items-center justify-between border-b border-[#331022] pb-3">
            <span class="font-mono text-xs text-[#f472b6] uppercase font-semibold">Projetos Reais Que Você Pode Criar:</span>
            <span class="dot-pink"></span>
          </div>

          <ul class="space-y-3 text-xs sm:text-sm text-[#fce7f3]">
            ${data.projects
              .map(
                (proj) => `
              <li class="flex items-start gap-2.5">
                <span class="text-[#30d158] font-bold shrink-0 mt-0.5">●</span>
                <span>${proj}</span>
              </li>`
              )
              .join("")}
          </ul>

          <div class="pt-4 border-t border-[#331022]">
            <button
              type="button"
              class="btn-capsule-rose w-full !text-xs !py-3"
              onclick="document.getElementById('btn-open-connect-modal').click()"
            >
              <span>Essa é a Minha Praia! Quero Aprender Mais 🌸</span>
            </button>
          </div>
        </div>
      </div>
    `;

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Initial render
  renderVibe("frontend");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const vibe = btn.getAttribute("data-vibe");
      renderVibe(vibe);
    });
  });
}

// ==========================================================================
// 4. RENDER COMMUNITIES CARDS (REDES DE APOIO)
// ==========================================================================
function renderCommunities() {
  const container = document.getElementById("community-cards-grid");
  if (!container) return;

  container.innerHTML = COMMUNITIES_DATA.map((comm) => {
    const dotClass =
      comm.dotColor === "emerald"
        ? "dot-emerald"
        : comm.dotColor === "amber"
        ? "dot-amber"
        : "dot-pink";

    return `
      <div class="studio-box p-6 flex flex-col justify-between hover:border-[#ff2a85] transition-all group">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="status-pill status-pill-rose !py-0.5 !px-2.5 !text-[10px] font-mono">
              <span class="${dotClass}"></span>
              <span>${comm.badge}</span>
            </span>
            <span class="font-mono text-[10px] text-[#b87b98]">${comm.tag}</span>
          </div>

          <h3 class="text-lg font-bold text-white group-hover:text-[#ff2a85] transition-colors">
            ${comm.name}
          </h3>

          <p class="text-xs text-[#f4b8d4] leading-relaxed">
            ${comm.summary}
          </p>
        </div>

        <div class="pt-5 mt-4 border-t border-[#331022]">
          <a
            href="${comm.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-row-action w-full justify-between"
          >
            <span>Conhecer Coletivo</span>
            <span class="action-arrow">↗</span>
          </a>
        </div>
      </div>
    `;
  }).join("");

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// ==========================================================================
// 5. MODAL INTERATIVO (FAZER PARTE / INCENTIVO)
// ==========================================================================
function initModalListeners() {
  const modalBackdrop = document.getElementById("connect-modal-backdrop");
  const openBtn = document.getElementById("btn-open-connect-modal");
  const closeBtn = document.getElementById("btn-close-connect-modal");
  const gotItBtn = document.getElementById("btn-modal-got-it");
  const manifestoActionBtn = document.getElementById("btn-manifesto-action");

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  }

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (manifestoActionBtn) manifestoActionBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (gotItBtn) gotItBtn.addEventListener("click", closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
