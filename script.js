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
// 2. HERO THREE.JS 3D IRIDESCENT LIQUID ROSE-QUARTZ SCULPTURE
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
  renderer.toneMappingExposure = 1.25;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
  camera.position.set(0, 0, 11.5);

  // Root sculpture group with responsive placement
  const sculptureGroup = new THREE.Group();
  scene.add(sculptureGroup);

  function updateResponsiveLayout(width) {
    if (width >= 1280) {
      sculptureGroup.position.set(2.55, 0.35, 0);
      sculptureGroup.scale.setScalar(1.05);
    } else if (width >= 900) {
      sculptureGroup.position.set(1.85, 0.35, 0);
      sculptureGroup.scale.setScalar(0.9);
    } else {
      sculptureGroup.position.set(0.0, 0.85, -1.0);
      sculptureGroup.scale.setScalar(0.72);
    }
  }
  updateResponsiveLayout(w);

  // Procedural soft radial glow texture helper
  function createGlowTexture(stops) {
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 128;
    texCanvas.height = 128;
    const ctx = texCanvas.getContext("2d");
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    stops.forEach(([offset, color]) => grad.addColorStop(offset, color));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    const texture = new THREE.CanvasTexture(texCanvas);
    texture.needsUpdate = true;
    return texture;
  }

  // Soft ambient aura backdrop behind the liquid sculpture
  const auraTexture = createGlowTexture([
    [0, "rgba(255, 42, 133, 0.45)"],
    [0.35, "rgba(217, 70, 239, 0.22)"],
    [0.7, "rgba(120, 16, 90, 0.06)"],
    [1, "rgba(0, 0, 0, 0)"]
  ]);
  const auraMaterial = new THREE.SpriteMaterial({
    map: auraTexture,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.55,
    depthWrite: false
  });
  const auraSprite = new THREE.Sprite(auraMaterial);
  auraSprite.position.set(0, 0, -2.2);
  auraSprite.scale.set(9.5, 9.5, 1);
  sculptureGroup.add(auraSprite);

  // ------------------------------------------------------------------------
  // Centerpiece: Custom GLSL Iridescent Morphing Liquid Rose-Quartz Orb
  // ------------------------------------------------------------------------
  const orbVertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;

    varying vec3 vNormal;
    varying vec3 vViewPos;
    varying float vDisp;
    varying vec3 vLocalNormal;

    // 3D Simplex Noise (Ashima Arts)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);

      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);

      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;

      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));

      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);

      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);

      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);

      vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
    }

    float getDisplacement(vec3 dir, float t) {
      float n1 = snoise(dir * 1.15 + vec3(t * 0.22, -t * 0.16, t * 0.18));
      float n2 = snoise(dir * 2.35 + vec3(-t * 0.28, t * 0.24, -t * 0.14));
      float mouseRipple = sin(dot(dir.xy, uMouse) * 4.2 - t * 2.1) * 0.028 * clamp(length(uMouse), 0.0, 1.0);
      return n1 * 0.28 + n2 * 0.085 + mouseRipple;
    }

    void main() {
      vec3 n = normalize(position);
      vec3 up = abs(n.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
      vec3 tangent = normalize(cross(up, n));
      vec3 bitangent = normalize(cross(n, tangent));

      float eps = 0.015;
      vec3 dir1 = normalize(n + tangent * eps);
      vec3 dir2 = normalize(n + bitangent * eps);

      float d0 = getDisplacement(n, uTime);
      float d1 = getDisplacement(dir1, uTime);
      float d2 = getDisplacement(dir2, uTime);

      float baseRadius = 2.05;
      vec3 p0 = n * (baseRadius + d0);
      vec3 p1 = dir1 * (baseRadius + d1);
      vec3 p2 = dir2 * (baseRadius + d2);

      vec3 displacedNormal = normalize(cross(p1 - p0, p2 - p0));

      vec4 mvPosition = modelViewMatrix * vec4(p0, 1.0);
      vNormal = normalize(normalMatrix * displacedNormal);
      vViewPos = -mvPosition.xyz;
      vDisp = d0;
      vLocalNormal = displacedNormal;

      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const orbFragmentShader = `
    uniform float uTime;

    varying vec3 vNormal;
    varying vec3 vViewPos;
    varying float vDisp;
    varying vec3 vLocalNormal;

    void main() {
      vec3 N = normalize(vNormal);
      vec3 V = normalize(vViewPos);

      float ndotv = clamp(dot(N, V), 0.0, 1.0);
      float fresnel = pow(1.0 - ndotv, 2.5);
      float secondaryFresnel = pow(1.0 - ndotv, 1.35);

      // Virtual studio 3-point lighting
      vec3 L1 = normalize(vec3(0.7, 0.8, 0.9));    // Key top-right
      vec3 L2 = normalize(vec3(-0.85, -0.4, 0.35)); // Rim bottom-left
      vec3 L3 = normalize(vec3(-0.5, 0.9, 0.4));    // Accent top-left

      float wrap1 = clamp((dot(N, L1) + 0.45) / 1.45, 0.0, 1.0);
      float wrap2 = clamp((dot(N, L2) + 0.35) / 1.35, 0.0, 1.0);
      float wrap3 = clamp((dot(N, L3) + 0.3) / 1.3, 0.0, 1.0);

      vec3 H1 = normalize(L1 + V);
      vec3 H2 = normalize(L2 + V);
      vec3 H3 = normalize(L3 + V);

      float specSharp = pow(max(dot(N, H1), 0.0), 72.0);
      float sheenBroad = pow(max(dot(N, H1), 0.0), 14.0);
      float specRim = pow(max(dot(N, H2), 0.0), 32.0);
      float specAccent = pow(max(dot(N, H3), 0.0), 26.0);

      // Iridescent Rose-Quartz Palette
      vec3 colObsidian = vec3(0.078, 0.012, 0.055);  // #14030e
      vec3 colMagenta  = vec3(0.753, 0.149, 0.827);  // #c026d3
      vec3 colFuchsia  = vec3(0.851, 0.275, 0.937);  // #d946ef
      vec3 colRose     = vec3(1.0, 0.165, 0.522);    // #ff2a85
      vec3 colViolet   = vec3(0.545, 0.361, 0.965);  // #8b5cf6
      vec3 colPearl    = vec3(1.0, 0.894, 0.949);    // #ffe4f2

      float dispNorm = clamp(vDisp * 2.2 + 0.5, 0.0, 1.0);
      float iridShift = 0.5 + 0.5 * sin(vLocalNormal.y * 3.0 + vLocalNormal.x * 2.0 + uTime * 0.45);

      vec3 baseColor = mix(colObsidian, colMagenta, wrap1 * 0.55 + dispNorm * 0.28);
      baseColor = mix(baseColor, colFuchsia, wrap3 * 0.32 * iridShift);
      baseColor = mix(baseColor, colViolet, secondaryFresnel * 0.34 * (1.0 - iridShift));
      baseColor = mix(baseColor, colRose, fresnel * 0.78 + dispNorm * wrap2 * 0.28);

      // Luminous silk sheen & specular highlights
      baseColor += colRose * sheenBroad * 0.42;
      baseColor += colFuchsia * specRim * 0.55;
      baseColor += colViolet * specAccent * 0.35;
      baseColor += colPearl * (fresnel * 0.58 + specSharp * 1.15);

      gl_FragColor = vec4(baseColor, 1.0);
    }
  `;

  const orbGeo = new THREE.SphereGeometry(2.05, 112, 112);
  const orbUniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  };
  const orbMat = new THREE.ShaderMaterial({
    vertexShader: orbVertexShader,
    fragmentShader: orbFragmentShader,
    uniforms: orbUniforms
  });
  const orbMesh = new THREE.Mesh(orbGeo, orbMat);
  sculptureGroup.add(orbMesh);

  // Subtle Outer Tech Wireframe Lattice
  const latticeGeo = new THREE.IcosahedronGeometry(2.58, 2);
  const latticeMat = new THREE.MeshBasicMaterial({
    color: 0xf472b6,
    wireframe: true,
    transparent: true,
    opacity: 0.075,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const latticeMesh = new THREE.Mesh(latticeGeo, latticeMat);
  sculptureGroup.add(latticeMesh);

  // ------------------------------------------------------------------------
  // 3 Flowing Fiber-Optic Orbital Rings + 6 Glowing Satellite Sparks
  // ------------------------------------------------------------------------
  const ringVertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const ringFragmentShader = `
    uniform float uTime;
    uniform float uSpeed;
    uniform vec3 uColorA;
    uniform vec3 uColorB;

    varying vec2 vUv;

    void main() {
      float phase = vUv.x * 6.2831853 * 2.0 - uTime * uSpeed;
      float pulse = pow(0.5 + 0.5 * sin(phase), 6.0);
      float alpha = mix(0.14, 0.95, pulse);
      vec3 col = mix(uColorA, uColorB, pulse);
      gl_FragColor = vec4(col, alpha);
    }
  `;

  const sparkTexture = createGlowTexture([
    [0, "rgba(255, 255, 255, 1.0)"],
    [0.22, "rgba(255, 180, 222, 0.9)"],
    [0.5, "rgba(255, 42, 133, 0.45)"],
    [1, "rgba(0, 0, 0, 0)"]
  ]);

  const ringConfigs = [
    {
      radius: 2.85,
      tilt: [0.95, 0.35, 0.2],
      speed: 1.6,
      spinZ: 0.14,
      colorA: 0xff2a85,
      colorB: 0xffe4f2,
      sparkScale: 0.34
    },
    {
      radius: 3.25,
      tilt: [-0.75, 0.65, -0.4],
      speed: -1.25,
      spinZ: -0.1,
      colorA: 0xd946ef,
      colorB: 0xfbcfe8,
      sparkScale: 0.3
    },
    {
      radius: 3.65,
      tilt: [0.45, -0.85, 0.7],
      speed: 1.05,
      spinZ: 0.08,
      colorA: 0xf472b6,
      colorB: 0xffffff,
      sparkScale: 0.28
    }
  ];

  const orbitalRings = [];

  ringConfigs.forEach((cfg, idx) => {
    const ringPivot = new THREE.Group();
    ringPivot.rotation.set(cfg.tilt[0], cfg.tilt[1], cfg.tilt[2]);
    sculptureGroup.add(ringPivot);

    const ringGeo = new THREE.TorusGeometry(cfg.radius, 0.014, 12, 180);
    const ringUniforms = {
      uTime: { value: 0 },
      uSpeed: { value: cfg.speed },
      uColorA: { value: new THREE.Color(cfg.colorA) },
      uColorB: { value: new THREE.Color(cfg.colorB) }
    };
    const ringMat = new THREE.ShaderMaterial({
      vertexShader: ringVertexShader,
      fragmentShader: ringFragmentShader,
      uniforms: ringUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringPivot.add(ringMesh);

    const sparks = [];
    for (let s = 0; s < 2; s++) {
      const spriteMat = new THREE.SpriteMaterial({
        map: sparkTexture,
        color: s === 0 ? 0xffffff : cfg.colorA,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.95,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(spriteMat);
      const scale = cfg.sparkScale + (s === 0 ? 0.04 : 0);
      sprite.scale.set(scale, scale, 1);
      ringPivot.add(sprite);
      sparks.push({
        sprite,
        offsetAngle: s * Math.PI + idx * 0.6
      });
    }

    orbitalRings.push({
      pivot: ringPivot,
      uniforms: ringUniforms,
      radius: cfg.radius,
      speed: cfg.speed,
      spinZ: cfg.spinZ,
      sparks
    });
  });

  // ------------------------------------------------------------------------
  // Soft Bokeh 3D Stardust Particle Field
  // ------------------------------------------------------------------------
  const PARTICLE_COUNT = 240;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const sizes = new Float32Array(PARTICLE_COUNT);
  const phases = new Float32Array(PARTICLE_COUNT);
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  const palette = [
    new THREE.Color(0xff2a85),
    new THREE.Color(0xf472b6),
    new THREE.Color(0xd946ef),
    new THREE.Color(0xfbcfe8),
    new THREE.Color(0xa855f7)
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;      // [-9, 9]
    positions[i * 3 + 1] = (Math.random() - 0.5) * 11;  // [-5.5, 5.5]
    positions[i * 3 + 2] = Math.random() * 9.5 - 6.0;   // [-6, 3.5]

    sizes[i] = 14 + Math.random() * 28;
    phases[i] = Math.random() * Math.PI * 2;

    const c = palette[i % palette.length];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  particleGeo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  particleGeo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

  const particleVertexShader = `
    uniform float uTime;
    uniform float uPixelRatio;

    attribute float aSize;
    attribute float aPhase;
    attribute vec3 aColor;

    varying vec3 vColor;
    varying float vPhase;

    void main() {
      vColor = aColor;
      vPhase = aPhase;

      vec3 pos = position;
      pos.y += sin(uTime * 0.45 + aPhase) * 0.18;
      pos.x += cos(uTime * 0.35 + aPhase * 1.3) * 0.14;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = aSize * uPixelRatio * (8.0 / max(-mvPosition.z, 1.0));
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const particleFragmentShader = `
    uniform float uTime;

    varying vec3 vColor;
    varying float vPhase;

    void main() {
      float dist = length(gl_PointCoord - vec2(0.5));
      float disc = smoothstep(0.5, 0.08, dist);
      float twinkle = 0.55 + 0.45 * sin(uTime * 1.4 + vPhase);
      float alpha = disc * twinkle * 0.72;
      if (alpha < 0.01) discard;
      gl_FragColor = vec4(vColor, alpha);
    }
  `;

  const particleUniforms = {
    uTime: { value: 0 },
    uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) }
  };

  const particleMat = new THREE.ShaderMaterial({
    vertexShader: particleVertexShader,
    fragmentShader: particleFragmentShader,
    uniforms: particleUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const particlePoints = new THREE.Points(particleGeo, particleMat);
  scene.add(particlePoints);

  // Pointer tracking
  let mouseTargetX = 0;
  let mouseTargetY = 0;
  let mouseCurrentX = 0;
  let mouseCurrentY = 0;

  window.addEventListener("pointermove", (e) => {
    mouseTargetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseTargetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Visibility pause when hero is scrolled completely out of view
  let isHeroVisible = true;
  if (typeof IntersectionObserver !== "undefined") {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.02 }
    );
    observer.observe(heroSection);
  }

  let lastTime = performance.now();
  let frameCount = 0;
  let fpsTimer = 0;

  function animate(now) {
    requestAnimationFrame(animate);

    if (!isHeroVisible) {
      lastTime = now;
      return;
    }

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

    const timeSec = now * 0.001;

    // Smooth cursor interpolation
    mouseCurrentX += (mouseTargetX - mouseCurrentX) * 0.05;
    mouseCurrentY += (mouseTargetY - mouseCurrentY) * 0.05;

    // Update Orb shader & gentle rotation
    orbUniforms.uTime.value = timeSec;
    orbUniforms.uMouse.value.set(mouseCurrentX, mouseCurrentY);
    orbMesh.rotation.y = timeSec * 0.12;
    orbMesh.rotation.x = Math.sin(timeSec * 0.2) * 0.08;

    // Counter-rotate outer tech wireframe lattice
    latticeMesh.rotation.y = -timeSec * 0.08;
    latticeMesh.rotation.z = timeSec * 0.05;

    // Subtle parallax tilt on root sculpture & stardust
    sculptureGroup.rotation.y = mouseCurrentX * 0.24;
    sculptureGroup.rotation.x = -mouseCurrentY * 0.18;

    particlePoints.rotation.y = mouseCurrentX * 0.06;
    particlePoints.rotation.x = -mouseCurrentY * 0.04;
    particleUniforms.uTime.value = timeSec;

    // Pulse aura gently
    const auraScale = 9.5 + Math.sin(timeSec * 1.1) * 0.45;
    auraSprite.scale.set(auraScale, auraScale, 1);

    // Animate orbital rings & satellite sparks
    orbitalRings.forEach((ring) => {
      ring.uniforms.uTime.value = timeSec;
      ring.pivot.rotation.z += delta * ring.spinZ;

      ring.sparks.forEach((spark) => {
        const angle = (timeSec * ring.speed * 0.5) + spark.offsetAngle;
        spark.sprite.position.set(
          Math.cos(angle) * ring.radius,
          Math.sin(angle) * ring.radius,
          0
        );
      });
    });

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    const { w: newW, h: newH } = setRendererSize();
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    particleUniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 2);
    updateResponsiveLayout(newW);
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
