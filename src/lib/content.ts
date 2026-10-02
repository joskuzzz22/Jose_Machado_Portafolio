export type Lang = "en" | "es";

export interface Project {
  index: string;
  title: string;
  role: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  featured?: boolean;
  link?: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  kind: string;
  logo?: string;
  monogram?: string;
  roles: ExperienceRole[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SkillKey {
  k: string;
  label: string;
  blurb: string;
  tone?: "accent" | "mid";
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SchoolEntry {
  school: string;
  program: string;
  detail: string;
  period: string;
  location: string;
  logo?: string;
}

export interface Content {
  nav: {
    about: string;
    experience: string;
    projects: string;
    research: string;
    skills: string;
    education: string;
    certifications: string;
    contact: string;
    homeAria: string;
    menuAria: string;
  };
  hero: {
    eyebrow: string;
    headline1: string;
    headlineAccent: string;
    headline2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    cvCta: string;
    scroll: string;
    stats: { value: string; label: string }[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  experience: {
    label: string;
    title: string;
    entries: ExperienceEntry[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    codeCta: string;
    items: Project[];
  };
  research: {
    label: string;
    title: string;
    intro: string;
    cards: {
      code: string;
      status: string;
      title: string;
      description: string;
      tags: string[];
      link?: string;
    }[];
  };
  skills: {
    label: string;
    title: string;
    groups: SkillGroup[];
    keyboard: {
      hint: string;
      idle: string;
      keys: SkillKey[];
    };
  };
  certifications: {
    label: string;
    title: string;
    certs: Certification[];
    trainingTitle: string;
    training: Certification[];
  };
  education: {
    label: string;
    title: string;
    schools: SchoolEntry[];
  };
  contact: {
    label: string;
    title1: string;
    titleAccent: string;
    sub: string;
    emailCta: string;
    linkedinCta: string;
    githubCta: string;
    availability: string;
  };
  footer: {
    rights: string;
    built: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Products",
      research: "Research",
      skills: "Skills",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
      homeAria: "José Machado — home",
      menuAria: "Toggle menu",
    },
    hero: {
      eyebrow: "José Leonardo Machado Tabraj — AI Solutions Engineer · Lima, Perú",
      headline1: "I build AI-powered products that turn",
      headlineAccent: "manual operations",
      headline2: "into measurable outcomes.",
      sub: "AI Solutions Engineer & Digital Transformation Product Owner. Founder of the Process Automation Office at Veritas Prime (SAP Gold Partner) — shipping production products at the intersection of SAP, Google Cloud and large language models.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View products",
      cvCta: "Download CV",
      scroll: "Scroll",
      stats: [
        { value: "7+", label: "Products in production" },
        { value: "100%", label: "Adoption — embedded in company methodology" },
        { value: "8 · 24", label: "MCP tools · passing tests" },
        { value: "6h", label: "Saved weekly, per user" },
      ],
    },
    about: {
      label: "01 — About",
      title: "Business fluency. SAP depth. AI execution.",
      paragraphs: [
        "I operate at the intersection most companies struggle to bridge: business operations, enterprise SAP, and applied AI. Trained in business — BSBA Cum Laude at the University of Arizona, top 20% of my class at UPC — and certified as an SAP SuccessFactors consultant, I made the leap that most analysts never make: I stopped writing requirements and started shipping the products myself.",
        "At Veritas Prime, an SAP Gold Partner serving LATAM & the Caribbean, that leap earned me a role created specifically around what I had built. Today I own the internal product roadmap for AI-enabled tooling, lead the Process Automation Office I founded, and serve as Functional Lead on three concurrent products — including an MCP server that connects large language models to the SAP SuccessFactors ecosystem.",
        "I don't hand off specs and hope. I do discovery with real users, write the acceptance criteria, build or co-build the product, run the validation loop, and drive the change management that makes adoption stick — including two corporate AI literacy programs and the company's AI Flight Manual.",
      ],
      facts: [
        { label: "Location", value: "Lima, Perú — UTC-5, year-round US ET/CT overlap" },
        { label: "Languages", value: "Spanish (native) · English (professional)" },
        { label: "Focus", value: "AI solutions · Product ownership · SAP" },
        { label: "Currently", value: "Process Reengineering Analyst @ Veritas Prime" },
      ],
    },
    experience: {
      label: "02 — Experience",
      title: "A role invented for what I build.",
      entries: [
        {
          company: "Veritas Prime LATAM & Caribe",
          logo: "/logos/veritas-prime.png",
          location: "Lima, Perú",
          kind: "SAP Gold Partner",
          roles: [
            {
              title: "Process Reengineering Associate Analyst",
              period: "Feb 2026 — Present",
              bullets: [
                "Appointed to a newly-created position after prior AI-powered products delivered measurable adoption; own the internal product roadmap for AI-enabled tools across Consulting and AMS delivery operations.",
                "Founded and lead the Process Automation Office (PAO): defined the discovery process, prioritization framework and AUTO-000 documentation standard; shipped 7+ production products serving LATAM delivery teams.",
                "Functional Lead across three concurrent products under the Avengers Initiative — Data Toolkit, MCP server for SAP SuccessFactors, and Smartsheet delivery automation — owning functional specs, acceptance criteria and the validation loop with the VP Labs engineering team.",
                "Drove enablement through 2 corporate AI Literacy programs and the Corporate AI Flight Manual; co-designed security and data-classification guardrails with IT to unlock enterprise adoption.",
                "Host the PAO automation stack on Google Cloud Platform and harden the Ubuntu environments behind it — remediating findings from IT's recurring internal penetration tests so vulnerabilities are closed before they reach production.",
              ],
            },
            {
              title: "Prime Associate Project Coordinator",
              period: "Sept 2025 — Feb 2026",
              bullets: [
                "Owned end-to-end delivery of the Smartsheet Workspace Configuration product — a 17-step automated setup saving ~2 billable hours per client implementation.",
                "Partnered with Project Managers, consultants and clients to gather requirements, validate user stories and prioritize the internal tooling backlog.",
              ],
            },
            {
              title: "Prime Associate Member",
              period: "Apr 2025 — Dec 2025",
              bullets: [
                "Identified recurring manual pain points through user research; shipped automation MVPs that reclaimed ~6 hours per week, per user.",
                "Established the AUTO-000 template pattern — adopted LATAM-wide as the standard for documentation, onboarding and handover of internal automations.",
              ],
            },
          ],
        },
        {
          company: "KeyStock Perú",
          monogram: "KS",
          location: "Lima, Perú",
          kind: "Founder venture",
          roles: [
            {
              title: "Founder & B2B Wholesale Supplier",
              period: "2024 — Present",
              bullets: [
                "Validated an underserved locksmith and auto-shop segment through customer discovery; launched a B2B wholesale line of automotive key shells sourced from Chinese manufacturers (KEYDIY, Xhorse).",
                "Defined go-to-market strategy — pricing, distribution and brand — and executed landed-cost analysis under Peruvian customs regulations.",
                "Now runs as a passive operation — no conflict with full-time commitments.",
              ],
            },
          ],
        },
        {
          company: "The Focus Club",
          monogram: "FC",
          location: "Lima, Perú",
          kind: "Apparel brand",
          roles: [
            {
              title: "CEO & Founder",
              period: "Jun 2022 — Dec 2023",
              bullets: [
                "Achieved a 30% operating margin through strategic pricing, SKU curation and inventory management across two seasonal collections.",
                "Led end-to-end product operations: financial modeling, supplier sourcing and direct-to-consumer sales strategy.",
              ],
            },
          ],
        },
      ],
    },
    projects: {
      label: "03 — Products",
      title: "Shipped, adopted, in production.",
      intro:
        "Not concepts — products running today inside a company that bills by the hour. Every one of them started as a manual pain point and ended as adopted tooling. Most of this code is proprietary to Veritas Prime; what can be public lives on GitHub.",
      codeCta: "View code on GitHub",
      items: [
        {
          index: "P—01",
          title: "Process Automation Office (PAO)",
          role: "Founder & Product Lead",
          description:
            "An internal product function built from zero: discovery process, prioritization framework and the AUTO-000 documentation standard — now the LATAM-wide norm for how automations are documented, onboarded and handed over. Products AUTO-006 through AUTO-013 shipped and serving delivery teams; two of them — workspace provisioning and Zoom-transcript processing — are embedded in the corporate delivery methodology with 100% adoption.",
          metric: "7+",
          metricLabel: "products in production",
          tags: ["Product strategy", "Governance", "Change management"],
          featured: true,
        },
        {
          index: "P—02",
          title: "MCP Server for SAP SuccessFactors",
          role: "Product vision & build",
          description:
            "A Python-based Model Context Protocol server that lets large language models operate against the SAP SuccessFactors ecosystem. Part of the Avengers Initiative portfolio.",
          metric: "8 · 24",
          metricLabel: "tools · passing tests",
          tags: ["Python", "MCP", "SAP APIs", "LLM"],
        },
        {
          index: "P—03",
          title: "Smartsheet Workspace Configuration",
          role: "End-to-end owner",
          description:
            "A 17-step automated workspace setup — Google Apps Script backend, HTML frontend. 100% adoption: embedded in the corporate delivery methodology as a mandatory step of every client implementation.",
          metric: "100%",
          metricLabel: "adoption · −2h billable per client",
          tags: ["Apps Script", "Smartsheet API", "HTML"],
        },
        {
          index: "P—04",
          title: "Skills Analytics System",
          role: "Migration & dashboard lead",
          description:
            "Migrated team competency data from Sheets to Smartsheet and delivered React dashboards with single-point-of-failure analysis and skill-gap heatmaps for executive staffing decisions.",
          metric: "SPOF",
          metricLabel: "risk analysis for execs",
          tags: ["React", "Smartsheet", "Analytics"],
        },
        {
          index: "P—05",
          title: "Data Toolkit — Avengers Initiative",
          role: "Functional Lead",
          description:
            "Consultant-facing data tooling: translated business needs into a prioritized functional backlog with acceptance criteria, and validated engineering deliverables before every release.",
          metric: "1 of 3",
          metricLabel: "concurrent products led",
          tags: ["Product ownership", "Data tooling", "UAT"],
        },
        {
          index: "P—06",
          title: "Client Onboarding Automation",
          role: "Spec & build",
          description:
            "Auto-provisions Drive folders, DNA workbooks and Google Chat spaces for every new client engagement — onboarding setup cut from hours to minutes.",
          metric: "h → min",
          metricLabel: "onboarding setup time",
          tags: ["Apps Script", "Drive API", "Chat API"],
        },
        {
          index: "P—07",
          title: "SuccessFactors Test Automation",
          role: "Automation engineer",
          description:
            "Model-based automated regression-test assets in Tricentis Tosca for SAP SuccessFactors configurations — less manual QA, faster release validation on client implementations.",
          metric: "QA",
          metricLabel: "manual effort reduced",
          tags: ["Tricentis Tosca", "SAP", "Test automation"],
        },
      ],
    },
    research: {
      label: "04 — Research & Audits",
      title: "Audit first. Automate second.",
      intro:
        "Research and analysis behind the products — process audits, market-entry plans and policy research — because the right automation starts with understanding the real operation.",
      cards: [
        {
          code: "R—01 · Market research & financial model",
          status: "Completed · 2026",
          title: "D'FitoLife Soy — Peru → US internationalization plan",
          description:
            "End-to-end internationalization plan for a Peruvian supplement built on soy and Andean superfoods, targeting the US Hispanic segment through Amazon FBA: market-selection matrix, bottom-up demand build (SOM), landed-cost and tariff analysis, and a fully traceable financial model — NPV of USD 31,658, IRR of 49.7% and a 2.16-year payback in the conservative scenario, stress-tested against a 15% US tariff.",
          tags: ["Market research", "Financial modeling", "Amazon FBA", "Foreign trade"],
        },
        {
          code: "R—02 · Research & framework",
          status: "In development",
          title: "Perú SMB — Operational audit for consultancies",
          description:
            "A process-audit and digital-maturity framework focused on Peruvian SMBs: a methodology for consultancies to assess operations, detect bottlenecks and prioritize automation opportunities before implementing technology. Its first working prototype is public — an AI reasoning agent that pre-qualifies Peruvian property-transfer deeds through an explicit 10-step legal verification chain, grounded with cited sources and fail-safe by design: the agent proposes, the notary decides.",
          tags: ["Process audit", "Peruvian SMBs", "Agentic AI", "Framework"],
          link: "https://github.com/joskuzzz22/Peru-SMB-Agent-",
        },
        {
          code: "R—03 · Thesis research",
          status: "In progress",
          title: "The EU's CBAM — impact on Peruvian and Andean exports",
          description:
            "Research on the European Carbon Border Adjustment Mechanism and the Green Deal: how unilateral EU climate policy reshapes market access for Andean economies, and which carbon-pricing responses are available to Peru and the Andean Community.",
          tags: ["Climate policy", "CBAM", "Foreign trade", "Andean Community"],
        },
      ],
    },
    skills: {
      label: "05 — Skills",
      title: "One profile, four disciplines.",
      groups: [
        {
          title: "AI & Automation",
          items: [
            "Claude Code",
            "Model Context Protocol (MCP)",
            "RAG pipelines",
            "LLM workflow design",
            "Enterprise AI adoption frameworks",
            "NotebookLM",
          ],
        },
        {
          title: "Product & Delivery",
          items: [
            "Product discovery",
            "Backlog prioritization",
            "Roadmap definition",
            "Stakeholder management",
            "User research",
            "MVP scoping",
            "Change management",
            "UAT coordination",
          ],
        },
        {
          title: "Engineering",
          items: [
            "Python",
            "Google Cloud Platform (GCP)",
            "Google Apps Script (OAuth, Webhooks)",
            "Ubuntu — hardening & security guardrails",
            "React · HTML",
            "SQL Server",
            "Power BI",
            "Smartsheet API",
            "Tricentis Tosca",
            "Excel (advanced)",
          ],
        },
        {
          title: "SAP",
          items: [
            "SuccessFactors EC Core (certified consultant)",
            "SAP Activate methodology",
            "SAP API integration",
            "S/4HANA MM & WM (expert user)",
          ],
        },
      ],
      keyboard: {
        hint: "hint: press a key — or tap a cap",
        idle: "Waiting for input…",
        keys: [
          { k: "C", label: "Claude Code", blurb: "My daily driver — AI pair-engineering behind every product I ship.", tone: "accent" },
          { k: "M", label: "MCP", blurb: "Built an MCP server for SAP SuccessFactors — 8 tools, 24 passing tests.", tone: "accent" },
          { k: "S", label: "SuccessFactors", blurb: "Certified EC Core implementation consultant.", tone: "accent" },
          { k: "P", label: "Python", blurb: "Backbone of my MCP server and automation pipelines." },
          { k: "R", label: "React", blurb: "Dashboards with SPOF analysis and skill-gap heatmaps.", tone: "mid" },
          { k: "G", label: "GCP", blurb: "Google Cloud hosts the automation stack — where most PAO products run.", tone: "mid" },
          { k: "W", label: "Apps Script", blurb: "OAuth, webhooks, Drive/Gmail/Chat/Sheets — automation that ships.", tone: "mid" },
          { k: "A", label: "SAP Activate", blurb: "Certified project manager in SAP's delivery methodology." },
          { k: "L", label: "LLM Workflows", blurb: "RAG pipelines and enterprise AI workflow design.", tone: "mid" },
          { k: "I", label: "SAP APIs", blurb: "Integration across the SuccessFactors ecosystem." },
          { k: "T", label: "Smartsheet", blurb: "API automation for delivery operations at scale." },
          { k: "B", label: "Power BI", blurb: "Executive reporting and analytics.", tone: "mid" },
          { k: "Q", label: "SQL Server", blurb: "Data modeling and queries behind the dashboards." },
          { k: "K", label: "Tosca", blurb: "Model-based test automation for SAP configurations." },
          { k: "N", label: "NotebookLM", blurb: "Research and knowledge synthesis for delivery teams." },
          { k: "O", label: "OAuth", blurb: "Server-to-server auth and webhook integrations.", tone: "mid" },
          { k: "H", label: "Security", blurb: "Hardened Ubuntu environments and guardrails — built to withstand IT's recurring internal pentests." },
          { k: "D", label: "Discovery", blurb: "User research that finds the pain worth automating.", tone: "mid" },
          { k: "U", label: "UAT", blurb: "Validation loops between consultants and engineering." },
          { k: "E", label: "Enterprise AI", blurb: "Adoption frameworks, literacy programs, security guardrails.", tone: "mid" },
        ],
      },
    },
    certifications: {
      label: "07 — Certifications",
      title: "SAP, AI and data. Certified.",
      certs: [
        { name: "SAP Certified Associate — SuccessFactors EC Core, Implementation Consultant", issuer: "SAP", year: "2025 · recert. 2026" },
        { name: "SAP Certified Associate — Project Manager, SAP Activate", issuer: "SAP", year: "2025" },
        { name: "Strategic Transformation with AI", issuer: "Pacífico Business School", year: "2026" },
        { name: "Cambridge FCE — English (B2 First)", issuer: "Cambridge", year: "2023" },
      ],
      trainingTitle: "Recent training",
      training: [
        { name: "Claude Code 101 & Claude 101", issuer: "Anthropic", year: "2026" },
        { name: "Claude Code desde Cero", issuer: "Coding Latam", year: "2026" },
        { name: "Diplomado en Logística y Operaciones", issuer: "ADEX", year: "2024" },
        { name: "SAP Logistics MM/WM", issuer: "UNI", year: "2024" },
        { name: "SQL Server & Power BI Bootcamp", issuer: "Cibertec", year: "2024" },
      ],
    },
    education: {
      label: "06 — Education",
      title: "Two continents, one discipline.",
      schools: [
        {
          school: "University of Arizona",
          logo: "/logos/arizona.png",
          program: "Eller College of Management — B.S.B.A.",
          detail: "Dual-degree program with UPC · Graduated Cum Laude · GPA 3.55/4.00 · Dean's List with Distinction (Summer 2024) · Dean's List (Spring 2024, Fall 2025)",
          period: "2023 — 2025",
          location: "Arizona, USA",
        },
        {
          school: "Universidad Peruana de Ciencias Aplicadas",
          logo: "/logos/upc.png",
          program: "B.A. International Business Administration",
          detail: "Graduated · Top 20% of class · International Trade, Global Supply Chain, Corporate Governance",
          period: "2021 — 2026",
          location: "Lima, Perú",
        },
      ],
    },
    contact: {
      label: "08 — Contact",
      title1: "Let's build the",
      titleAccent: "next product",
      sub: "Open to AI Solutions Engineer, Technical Product Manager and AI-enabled transformation roles — remote or hybrid. If you're bridging enterprise systems and AI, we should talk.",
      emailCta: "joskuzzz22@gmail.com",
      linkedinCta: "LinkedIn",
      githubCta: "GitHub",
      availability: "Lima, Perú (UTC-5, no DST) — year-round overlap with US Eastern & Central",
    },
    footer: {
      rights: "© 2026 José Leonardo Machado Tabraj. All rights reserved.",
      built: "Designed & built with Next.js — deployed on Vercel.",
    },
  },

  es: {
    nav: {
      about: "Perfil",
      experience: "Experiencia",
      projects: "Productos",
      research: "Research",
      skills: "Capacidades",
      education: "Educación",
      certifications: "Certificaciones",
      contact: "Contacto",
      homeAria: "José Machado — inicio",
      menuAria: "Abrir o cerrar menú",
    },
    hero: {
      eyebrow: "José Leonardo Machado Tabraj — AI Solutions Engineer · Lima, Perú",
      headline1: "Construyo productos con IA que convierten",
      headlineAccent: "operaciones manuales",
      headline2: "en resultados medibles.",
      sub: "AI Solutions Engineer y Product Owner de Transformación Digital. Fundador de la Process Automation Office en Veritas Prime (SAP Gold Partner) — llevando productos a producción en la intersección de SAP, Google Cloud y modelos de lenguaje.",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Ver productos",
      cvCta: "Descargar CV",
      scroll: "Desliza",
      stats: [
        { value: "7+", label: "Productos en producción" },
        { value: "100%", label: "Adopción — embebida en la metodología corporativa" },
        { value: "8 · 24", label: "Tools MCP · tests aprobados" },
        { value: "6h", label: "Ahorradas por usuario/semana" },
      ],
    },
    about: {
      label: "01 — Perfil",
      title: "Visión de negocio. Profundidad SAP. Ejecución con IA.",
      paragraphs: [
        "Opero en la intersección que a la mayoría de empresas le cuesta cubrir: operaciones de negocio, SAP empresarial e IA aplicada. Formado en negocios — BSBA Cum Laude en University of Arizona, top 20% de mi promoción en UPC — y certificado como consultor SAP SuccessFactors, di el salto que la mayoría de analistas nunca da: dejé de escribir requerimientos y empecé a construir los productos yo mismo.",
        "En Veritas Prime, SAP Gold Partner para LATAM y el Caribe, ese salto me valió un puesto creado específicamente alrededor de lo que había construido. Hoy soy dueño del roadmap interno de herramientas con IA, lidero la Process Automation Office que fundé, y soy Functional Lead de tres productos simultáneos — incluyendo un servidor MCP que conecta modelos de lenguaje con el ecosistema SAP SuccessFactors.",
        "No entrego especificaciones y cruzo los dedos. Hago discovery con usuarios reales, escribo los criterios de aceptación, construyo o co-construyo el producto, dirijo el ciclo de validación y manejo la gestión del cambio que hace que la adopción funcione — incluyendo dos programas corporativos de alfabetización en IA y el AI Flight Manual de la compañía.",
      ],
      facts: [
        { label: "Ubicación", value: "Lima, Perú — UTC-5, overlap todo el año con US ET/CT" },
        { label: "Idiomas", value: "Español (nativo) · Inglés (profesional)" },
        { label: "Enfoque", value: "Soluciones IA · Product ownership · SAP" },
        { label: "Actualmente", value: "Process Reengineering Analyst @ Veritas Prime" },
      ],
    },
    experience: {
      label: "02 — Experiencia",
      title: "Un puesto inventado para lo que construyo.",
      entries: [
        {
          company: "Veritas Prime LATAM & Caribe",
          logo: "/logos/veritas-prime.png",
          location: "Lima, Perú",
          kind: "SAP Gold Partner",
          roles: [
            {
              title: "Process Reengineering Associate Analyst",
              period: "Feb 2026 — Actualidad",
              bullets: [
                "Designado a un puesto de nueva creación después de que mis productos con IA demostraran adopción medible; dueño del roadmap interno de herramientas con IA para las operaciones de Consultoría y AMS.",
                "Fundé y lidero la Process Automation Office (PAO): definí el proceso de discovery, el framework de priorización y el estándar de documentación AUTO-000; 7+ productos en producción sirviendo a los equipos de delivery de LATAM.",
                "Functional Lead de tres productos simultáneos bajo la Avengers Initiative — Data Toolkit, servidor MCP para SAP SuccessFactors y automatización de delivery en Smartsheet — con specs funcionales, criterios de aceptación y el ciclo de validación con el equipo de ingeniería de VP Labs.",
                "Impulsé la adopción con 2 programas corporativos de alfabetización en IA y el Corporate AI Flight Manual; co-diseñé los guardrails de seguridad y clasificación de datos con IT.",
                "Alojo el stack de automatización de la PAO en Google Cloud Platform y endurezco los entornos Ubuntu que lo sostienen — remediando los hallazgos de los pentests internos recurrentes de IT para cerrar vulnerabilidades antes de que lleguen a producción.",
              ],
            },
            {
              title: "Prime Associate Project Coordinator",
              period: "Sept 2025 — Feb 2026",
              bullets: [
                "Dueño de la entrega end-to-end del producto Smartsheet Workspace Configuration — un setup automatizado de 17 pasos que ahorra ~2 horas facturables por implementación de cliente.",
                "Trabajé con Project Managers, consultores y clientes para levantar requerimientos, validar historias de usuario y priorizar el backlog de tooling interno.",
              ],
            },
            {
              title: "Prime Associate Member",
              period: "Abr 2025 — Dic 2025",
              bullets: [
                "Identifiqué dolores manuales recurrentes mediante investigación con usuarios; lancé MVPs de automatización que recuperaron ~6 horas semanales por usuario.",
                "Establecí el patrón de plantilla AUTO-000 — adoptado en toda LATAM como estándar de documentación, onboarding y handover de automatizaciones internas.",
              ],
            },
          ],
        },
        {
          company: "KeyStock Perú",
          monogram: "KS",
          location: "Lima, Perú",
          kind: "Emprendimiento",
          roles: [
            {
              title: "Fundador & Proveedor Mayorista B2B",
              period: "2024 — Actualidad",
              bullets: [
                "Validé un segmento desatendido de cerrajeros y talleres automotrices mediante customer discovery; lancé una línea mayorista B2B de carcasas de llaves vehiculares importadas de fabricantes chinos (KEYDIY, Xhorse).",
                "Definí la estrategia go-to-market — precios, distribución y marca — y ejecuté el análisis de costos de importación bajo la regulación aduanera peruana.",
                "Hoy opera de forma pasiva — sin conflicto con compromisos a tiempo completo.",
              ],
            },
          ],
        },
        {
          company: "The Focus Club",
          monogram: "FC",
          location: "Lima, Perú",
          kind: "Marca de ropa",
          roles: [
            {
              title: "CEO & Fundador",
              period: "Jun 2022 — Dic 2023",
              bullets: [
                "Logré un margen operativo del 30% con precios estratégicos, curaduría de SKUs y gestión de inventario en dos colecciones de temporada.",
                "Lideré la operación de producto end-to-end: modelamiento financiero, sourcing de proveedores y estrategia de venta directa al consumidor.",
              ],
            },
          ],
        },
      ],
    },
    projects: {
      label: "03 — Productos",
      title: "Lanzados, adoptados, en producción.",
      intro:
        "No son conceptos — son productos operando hoy dentro de una empresa que factura por hora. Cada uno empezó como un dolor manual y terminó como herramienta adoptada. La mayoría del código es propiedad de Veritas Prime; lo que puede ser público vive en GitHub.",
      codeCta: "Ver código en GitHub",
      items: [
        {
          index: "P—01",
          title: "Process Automation Office (PAO)",
          role: "Fundador & Product Lead",
          description:
            "Una función de producto interna construida desde cero: proceso de discovery, framework de priorización y el estándar de documentación AUTO-000 — hoy la norma en toda LATAM para documentar, adoptar y transferir automatizaciones. Productos AUTO-006 a AUTO-013 en producción sirviendo a los equipos de delivery; dos de ellos — el aprovisionamiento de workspaces y el procesamiento de transcripciones de Zoom — están embebidos en la metodología corporativa de delivery con 100% de adopción.",
          metric: "7+",
          metricLabel: "productos en producción",
          tags: ["Estrategia de producto", "Gobernanza", "Gestión del cambio"],
          featured: true,
        },
        {
          index: "P—02",
          title: "Servidor MCP para SAP SuccessFactors",
          role: "Visión de producto & build",
          description:
            "Un servidor Model Context Protocol en Python que permite a los modelos de lenguaje operar sobre el ecosistema SAP SuccessFactors. Parte del portafolio de la Avengers Initiative.",
          metric: "8 · 24",
          metricLabel: "tools · tests aprobados",
          tags: ["Python", "MCP", "APIs SAP", "LLM"],
        },
        {
          index: "P—03",
          title: "Smartsheet Workspace Configuration",
          role: "Dueño end-to-end",
          description:
            "Un setup de workspace automatizado de 17 pasos — backend en Google Apps Script, frontend HTML. 100% de adopción: embebido en la metodología corporativa de delivery como paso obligatorio de cada implementación de cliente.",
          metric: "100%",
          metricLabel: "adopción · −2h facturables por cliente",
          tags: ["Apps Script", "API Smartsheet", "HTML"],
        },
        {
          index: "P—04",
          title: "Skills Analytics System",
          role: "Líder de migración & dashboards",
          description:
            "Migré la data de competencias del equipo de Sheets a Smartsheet y entregué dashboards en React con análisis de puntos únicos de falla (SPOF) y mapas de calor de brechas de habilidades para decisiones ejecutivas de staffing.",
          metric: "SPOF",
          metricLabel: "análisis de riesgo ejecutivo",
          tags: ["React", "Smartsheet", "Analytics"],
        },
        {
          index: "P—05",
          title: "Data Toolkit — Avengers Initiative",
          role: "Functional Lead",
          description:
            "Tooling de datos para consultores: traduje necesidades de negocio en un backlog funcional priorizado con criterios de aceptación, y validé los entregables de ingeniería antes de cada release.",
          metric: "1 de 3",
          metricLabel: "productos simultáneos liderados",
          tags: ["Product ownership", "Data tooling", "UAT"],
        },
        {
          index: "P—06",
          title: "Automatización de Onboarding de Clientes",
          role: "Spec & build",
          description:
            "Aprovisiona automáticamente carpetas de Drive, workbooks DNA y espacios de Google Chat para cada nuevo cliente — el setup de onboarding pasó de horas a minutos.",
          metric: "h → min",
          metricLabel: "tiempo de setup de onboarding",
          tags: ["Apps Script", "API Drive", "API Chat"],
        },
        {
          index: "P—07",
          title: "Test Automation para SuccessFactors",
          role: "Ingeniero de automatización",
          description:
            "Assets de regresión automatizada basados en modelos con Tricentis Tosca para configuraciones de SAP SuccessFactors — menos QA manual y validación de releases más rápida.",
          metric: "QA",
          metricLabel: "esfuerzo manual reducido",
          tags: ["Tricentis Tosca", "SAP", "Test automation"],
        },
      ],
    },
    research: {
      label: "04 — Research & Auditorías",
      title: "Auditar primero. Automatizar después.",
      intro:
        "Investigación y análisis detrás de los productos — auditorías de procesos, planes de entrada a mercados e investigación de políticas — porque la automatización correcta empieza por entender la operación real.",
      cards: [
        {
          code: "R—01 · Investigación de mercado & modelo financiero",
          status: "Concluido · 2026",
          title: "D'FitoLife Soy — Plan de internacionalización Perú → EE.UU.",
          description:
            "Plan integral de internacionalización de un suplemento peruano a base de soya y superalimentos andinos, dirigido al segmento hispano de EE.UU. vía Amazon FBA: matriz de selección de mercados, construcción bottom-up de la demanda (SOM), análisis de costos de importación y aranceles, y un modelo financiero completamente trazable — VAN de USD 31,658, TIR de 49.7% y recuperación en 2.16 años en el escenario conservador, resistente a un arancel del 15%.",
          tags: ["Investigación de mercado", "Modelado financiero", "Amazon FBA", "Comercio exterior"],
        },
        {
          code: "R—02 · Investigación & framework",
          status: "En desarrollo",
          title: "Perú SMB — Auditoría operativa para consultoras",
          description:
            "Framework de auditoría de procesos y madurez digital enfocado en PYMEs peruanas: una metodología para que consultoras evalúen operaciones, detecten cuellos de botella y prioricen oportunidades de automatización antes de implementar tecnología. Su primer prototipo funcional es público — un agente de razonamiento con IA que precalifica escrituras de transferencia de propiedad mediante una cadena explícita de verificación legal de 10 pasos, con fuentes citadas y diseño a prueba de fallos: el agente propone, el notario decide.",
          tags: ["Auditoría de procesos", "PYMEs Perú", "IA agéntica", "Framework"],
          link: "https://github.com/joskuzzz22/Peru-SMB-Agent-",
        },
        {
          code: "R—03 · Investigación de tesis",
          status: "En curso",
          title: "El CBAM europeo — impacto en exportaciones peruanas y andinas",
          description:
            "Investigación sobre el Mecanismo de Ajuste en Frontera por Carbono de la UE y el Pacto Verde Europeo: cómo la política climática unilateral europea redefine el acceso a mercados para las economías andinas, y qué respuestas de precios al carbono tienen disponibles el Perú y la Comunidad Andina.",
          tags: ["Política climática", "CBAM", "Comercio exterior", "Comunidad Andina"],
        },
      ],
    },
    skills: {
      label: "05 — Capacidades",
      title: "Un perfil, cuatro disciplinas.",
      groups: [
        {
          title: "IA & Automatización",
          items: [
            "Claude Code",
            "Model Context Protocol (MCP)",
            "Pipelines RAG",
            "Diseño de workflows LLM",
            "Frameworks de adopción de IA empresarial",
            "NotebookLM",
          ],
        },
        {
          title: "Producto & Delivery",
          items: [
            "Discovery de producto",
            "Priorización de backlog",
            "Definición de roadmap",
            "Gestión de stakeholders",
            "Investigación de usuarios",
            "Alcance de MVPs",
            "Gestión del cambio",
            "Coordinación de UAT",
          ],
        },
        {
          title: "Ingeniería",
          items: [
            "Python",
            "Google Cloud Platform (GCP)",
            "Google Apps Script (OAuth, Webhooks)",
            "Ubuntu — hardening y guardrails de seguridad",
            "React · HTML",
            "SQL Server",
            "Power BI",
            "API de Smartsheet",
            "Tricentis Tosca",
            "Excel (avanzado)",
          ],
        },
        {
          title: "SAP",
          items: [
            "SuccessFactors EC Core (consultor certificado)",
            "Metodología SAP Activate",
            "Integración de APIs SAP",
            "S/4HANA MM & WM (usuario experto)",
          ],
        },
      ],
      keyboard: {
        hint: "pista: presiona una tecla — o toca un keycap",
        idle: "Esperando input…",
        keys: [
          { k: "C", label: "Claude Code", blurb: "Mi herramienta diaria — ingeniería en pareja con IA detrás de cada producto.", tone: "accent" },
          { k: "M", label: "MCP", blurb: "Construí un servidor MCP para SAP SuccessFactors — 8 tools, 24 tests aprobados.", tone: "accent" },
          { k: "S", label: "SuccessFactors", blurb: "Consultor de implementación certificado en EC Core.", tone: "accent" },
          { k: "P", label: "Python", blurb: "La columna vertebral de mi servidor MCP y mis pipelines de automatización." },
          { k: "R", label: "React", blurb: "Dashboards con análisis SPOF y mapas de calor de brechas de habilidades.", tone: "mid" },
          { k: "G", label: "GCP", blurb: "Google Cloud aloja el stack de automatización — donde corren la mayoría de productos de la PAO.", tone: "mid" },
          { k: "W", label: "Apps Script", blurb: "OAuth, webhooks, Drive/Gmail/Chat/Sheets — automatización en producción.", tone: "mid" },
          { k: "A", label: "SAP Activate", blurb: "Project manager certificado en la metodología de delivery de SAP." },
          { k: "L", label: "LLM Workflows", blurb: "Pipelines RAG y diseño de workflows de IA empresarial.", tone: "mid" },
          { k: "I", label: "APIs SAP", blurb: "Integración en todo el ecosistema SuccessFactors." },
          { k: "T", label: "Smartsheet", blurb: "Automatización por API para operaciones de delivery a escala." },
          { k: "B", label: "Power BI", blurb: "Reportería ejecutiva y analytics.", tone: "mid" },
          { k: "Q", label: "SQL Server", blurb: "Modelado de datos y queries detrás de los dashboards." },
          { k: "K", label: "Tosca", blurb: "Test automation basada en modelos para configuraciones SAP." },
          { k: "N", label: "NotebookLM", blurb: "Investigación y síntesis de conocimiento para los equipos." },
          { k: "O", label: "OAuth", blurb: "Autenticación server-to-server e integraciones con webhooks.", tone: "mid" },
          { k: "H", label: "Seguridad", blurb: "Entornos Ubuntu endurecidos y guardrails — diseñados para resistir los pentests internos recurrentes de IT." },
          { k: "D", label: "Discovery", blurb: "Investigación de usuarios que encuentra el dolor que vale automatizar.", tone: "mid" },
          { k: "U", label: "UAT", blurb: "Ciclos de validación entre consultores e ingeniería." },
          { k: "E", label: "IA Empresarial", blurb: "Frameworks de adopción, programas de alfabetización y guardrails.", tone: "mid" },
        ],
      },
    },
    certifications: {
      label: "07 — Certificaciones",
      title: "SAP, IA y datos. Certificado.",
      certs: [
        { name: "SAP Certified Associate — SuccessFactors EC Core, Implementation Consultant", issuer: "SAP", year: "2025 · recert. 2026" },
        { name: "SAP Certified Associate — Project Manager, SAP Activate", issuer: "SAP", year: "2025" },
        { name: "Strategic Transformation with AI", issuer: "Pacífico Business School", year: "2026" },
        { name: "Cambridge FCE — Inglés (B2 First)", issuer: "Cambridge", year: "2023" },
      ],
      trainingTitle: "Formación reciente",
      training: [
        { name: "Claude Code 101 & Claude 101", issuer: "Anthropic", year: "2026" },
        { name: "Claude Code desde Cero", issuer: "Coding Latam", year: "2026" },
        { name: "Diplomado en Logística y Operaciones", issuer: "ADEX", year: "2024" },
        { name: "SAP Logistics MM/WM", issuer: "UNI", year: "2024" },
        { name: "SQL Server & Power BI Bootcamp", issuer: "Cibertec", year: "2024" },
      ],
    },
    education: {
      label: "06 — Educación",
      title: "Dos continentes, una disciplina.",
      schools: [
        {
          school: "University of Arizona",
          logo: "/logos/arizona.png",
          program: "Eller College of Management — B.S.B.A.",
          detail: "Doble grado con UPC · Graduado Cum Laude · GPA 3.55/4.00 · Dean's List with Distinction (verano 2024) · Dean's List (primavera 2024, otoño 2025)",
          period: "2023 — 2025",
          location: "Arizona, EE. UU.",
        },
        {
          school: "Universidad Peruana de Ciencias Aplicadas",
          logo: "/logos/upc.png",
          program: "Administración y Negocios Internacionales",
          detail: "Graduado · Top 20% de la promoción · Comercio Internacional, Supply Chain Global, Gobierno Corporativo",
          period: "2021 — 2026",
          location: "Lima, Perú",
        },
      ],
    },
    contact: {
      label: "08 — Contacto",
      title1: "Construyamos el",
      titleAccent: "próximo producto",
      sub: "Abierto a roles de AI Solutions Engineer, Technical Product Manager y transformación con IA — remoto o híbrido. Si estás conectando sistemas empresariales con IA, hablemos.",
      emailCta: "joskuzzz22@gmail.com",
      linkedinCta: "LinkedIn",
      githubCta: "GitHub",
      availability: "Lima, Perú (UTC-5, sin horario de verano) — overlap todo el año con US Eastern y Central",
    },
    footer: {
      rights: "© 2026 José Leonardo Machado Tabraj. Todos los derechos reservados.",
      built: "Diseñado y construido con Next.js — desplegado en Vercel.",
    },
  },
};
