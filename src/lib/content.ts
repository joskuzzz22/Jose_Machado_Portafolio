export type Lang = "en" | "es";

export type SectionId =
  | "inicio"
  | "productos"
  | "perfil"
  | "experiencia"
  | "capacidades"
  | "investigacion"
  | "formacion"
  | "contacto";

/** Contact points and files — identical in both languages. */
export const links = {
  email: "joskuzzz22@gmail.com",
  linkedin: "https://www.linkedin.com/in/jose--machado/",
  github: "https://github.com/joskuzzz22",
  cv: "/Jose-Machado-CV.pdf",
  cvFile: "Jose-Machado-CV.pdf",
} as const;

/** Fictional data for the Case 03 heatmap (levels 0–3). Illustrative only. */
export const heatmap = {
  people: ["P1", "P2", "P3", "P4", "P5", "P6"],
  rows: [
    { skill: "SuccessFactors EC Core", levels: [3, 2, 2, 1, 0, 2] },
    { skill: "SAP Activate", levels: [2, 3, 1, 2, 1, 0] },
    { skill: "Apps Script", levels: [1, 0, 3, 2, 2, 1] },
    { skill: "Python", levels: [0, 1, 2, 3, 0, 1] },
    { skill: "Tricentis Tosca", levels: [0, 0, 0, 3, 0, 0] },
  ],
} as const;

export interface LabeledValue {
  label: string;
  value: string;
}

export interface Step {
  n: string;
  title: string;
  text: string;
}

export interface TextLink {
  label: string;
  href: string;
}

export interface WorkspaceVisual {
  kind: "workspace";
  manual: string;
  manualDesc: string;
  auto: string;
  autoDesc: string;
  run: string;
  bar: string;
  saved: LabeledValue;
  note: string;
}

export interface McpVisual {
  kind: "mcp";
  /** Assistant → MCP server → SAP; the middle node is the product. */
  nodes: { title: string; sub: string }[];
  stats: LabeledValue[];
  note: string;
}

export interface HeatmapVisual {
  kind: "heatmap";
  title: string;
  tag: string;
  aria: string;
  legend: string;
  spof: string;
  note: string;
}

export type CaseVisual = WorkspaceVisual | McpVisual | HeatmapVisual;

export interface CaseStudy {
  slug: string;
  n: string;
  title: string;
  roleTag: string;
  explainer?: string;
  rows: LabeledValue[];
  /** Condensed rows for the mobile home page (Case 01 only). */
  rowsShort?: LabeledValue[];
  visual: CaseVisual;
  detail: {
    kicker: string;
    lede: string;
    meta: LabeledValue[];
    sections: { title: string; text: string }[];
    metrics: LabeledValue[];
  };
}

export interface Role {
  title: string;
  period: string;
  tag: string;
  summary: string;
  bullets: string[];
  links: TextLink[];
}

export interface Venture {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface CapabilityGroup {
  title: string;
  description: string;
  tools: string;
  used: string;
  href: string;
}

export interface TechKey {
  k: string;
  label: string;
  blurb: string;
}

export type ResearchStatus = "done" | "dev" | "prog";

export interface ResearchItem {
  code: string;
  status: ResearchStatus;
  type: string;
  title: string;
  description: string;
  projection?: { label: string; rows: LabeledValue[]; note: string };
  related?: { text: string; linkLabel: string; href: string };
}

export interface School {
  school: string;
  logo: string;
  period: string;
  program: string;
  detail: string;
  honors: string;
  location: string;
}

export interface Credential {
  name: string;
  issuer: string;
  year: string;
}

export interface Content {
  ui: {
    homeAria: string;
    navAria: string;
    langAria: string;
    footAria: string;
    menu: string;
    close: string;
    menuLabel: string;
    myRole: string;
    more: string;
    copy: string;
    copied: string;
    copiedStatus: string;
  };
  nav: { id: SectionId; label: string }[];
  hero: {
    name: string;
    fullName: string;
    role: string;
    title: string;
    sub: string;
    cta1: string;
    cta2: string;
    cv: string;
    loc: string;
    avail: string;
    alt: string;
    official: string;
  };
  impact: {
    label: string;
    note: string;
    items: { value: string; label: string; caption: string; href: string }[];
  };
  products: { label: string; title: string; intro: string };
  pao: {
    kicker: string;
    title: string;
    abbr: string;
    role: string;
    body: string;
    steps: Step[];
    stats: { value: string; text: string; short: string }[];
  };
  cases: CaseStudy[];
  others: {
    title: string;
    ownership: string;
    items: { n: string; title: string; role: string; description: string; tech: string }[];
  };
  profile: {
    label: string;
    title: string;
    paragraphs: string[];
    facts: LabeledValue[];
    workTitle: string;
    steps: Step[];
  };
  experience: {
    label: string;
    title: string;
    company: string;
    kind: string;
    logo: string;
    roles: Role[];
    venturesTitle: string;
    ventures: Venture[];
  };
  capabilities: {
    label: string;
    title: string;
    usedLabel: string;
    groups: CapabilityGroup[];
    keyboard: { title: string; hint: string; idle: string; keys: TechKey[] };
  };
  research: {
    label: string;
    title: string;
    intro: string;
    status: Record<ResearchStatus, string>;
    items: ResearchItem[];
  };
  education: {
    label: string;
    title: string;
    eduTitle: string;
    certTitle: string;
    trainTitle: string;
    schools: School[];
    certs: Credential[];
    training: Credential[];
  };
  contact: { label: string; title: string; sub: string; avail: string };
  footer: { rights: string; links: TextLink[] };
  detail: { back: string };
}

const SLUGS = {
  workspace: "smartsheet-workspace-configuration",
  mcp: "mcp-server-sap-successfactors",
  skills: "skills-analytics-system",
} as const;

const PERU_SMB_REPO = "https://github.com/joskuzzz22/Peru-SMB-Agent-";

export const content: Record<Lang, Content> = {
  en: {
    ui: {
      homeAria: "José Machado — home",
      navAria: "Main navigation",
      langAria: "Language",
      footAria: "Footer links",
      menu: "Open menu",
      close: "Close menu",
      menuLabel: "Menu",
      myRole: "My role",
      more: "View full case",
      copy: "Copy email",
      copied: "✓ Copied",
      copiedStatus: "Email copied to clipboard.",
    },
    nav: [
      { id: "productos", label: "Products" },
      { id: "perfil", label: "Profile" },
      { id: "experiencia", label: "Experience" },
      { id: "investigacion", label: "Research" },
      { id: "contacto", label: "Contact" },
    ],
    hero: {
      name: "José Machado",
      fullName: "José Leonardo Machado Tabraj",
      role: "AI Solutions Engineer & Digital Transformation Product Owner",
      title: "I connect business, SAP and AI to build products that work.",
      sub: "AI Solutions Engineer and Product Owner. I founded the Process Automation Office at Veritas Prime, where I build and lead solutions that automate enterprise operations.",
      cta1: "View products",
      cta2: "Let’s talk",
      cv: "Download CV",
      loc: "Lima, Perú · UTC−5",
      avail: "Open to remote or hybrid roles",
      alt: "Portrait of José Leonardo Machado Tabraj",
      official: "Current title: Process Reengineering Associate Analyst · Veritas Prime",
    },
    impact: {
      label: "Impact summary",
      note: "Reported results from Veritas Prime internal products.",
      items: [
        {
          value: "7+",
          label: "products in production",
          caption: "Process Automation Office · AUTO-006 to AUTO-013",
          href: "#pao",
        },
        {
          value: "≈6 h",
          label: "saved per user, per week",
          caption: "Automation MVPs built from user research",
          href: "#experiencia",
        },
        {
          value: "≈2 h",
          label: "saved per implementation",
          caption: "Case 01 · Smartsheet Workspace Configuration",
          href: "#caso-01",
        },
      ],
    },
    products: {
      label: "Products",
      title: "Products in production, built from the operation up.",
      intro:
        "Each product started as a recurring manual task in delivery teams and ended as adopted tooling.",
    },
    pao: {
      kicker: "Initiative · 2025 — present",
      title: "Process Automation Office",
      abbr: "PAO",
      role: "Founder & Product Lead",
      body: "I created an internal product function at Veritas Prime that defines how automations are found, prioritized, documented and adopted. Its AUTO-000 standard is now the LATAM-wide norm for documenting, onboarding and handing over internal automations.",
      steps: [
        { n: "01", title: "Discovery", text: "User research to find recurring manual work." },
        { n: "02", title: "Prioritization", text: "An in-house framework for deciding what to automate first." },
        { n: "03", title: "Documentation", text: "The AUTO-000 standard for documentation, onboarding and handover." },
        { n: "04", title: "Adoption", text: "Two AI literacy programs and the Corporate AI Flight Manual." },
      ],
      stats: [
        {
          value: "7+",
          text: "products in production for LATAM delivery teams (AUTO-006 to AUTO-013).",
          short: "products in production",
        },
        {
          value: "100%",
          text: "adoption in two processes embedded in the corporate delivery methodology: workspace provisioning (Case 01) and Zoom-transcript processing.",
          short: "adoption in 2 corporate methodology processes",
        },
      ],
    },
    cases: [
      {
        slug: SLUGS.workspace,
        n: "Case 01",
        title: "Smartsheet Workspace Configuration",
        roleTag: "End-to-end owner",
        rows: [
          { label: "Problem", value: "Setting up the Smartsheet workspace for each client implementation was a manual 17-step process." },
          { label: "Users & context", value: "Veritas Prime Project Managers and consultants on client implementations." },
          { label: "My contribution", value: "End-to-end delivery owner: requirements, build, validation and adoption." },
          { label: "Solution", value: "A 17-step automated setup with a Google Apps Script backend, an HTML interface and the Smartsheet API." },
          { label: "Result", value: "≈2 billable hours saved per implementation. 100% adoption: a mandatory step of every implementation in the corporate methodology." },
          { label: "Technology", value: "Google Apps Script · HTML · Smartsheet API" },
        ],
        rowsShort: [
          { label: "My contribution", value: "End-to-end delivery owner." },
          { label: "Result", value: "100% adoption as a mandatory step of every implementation." },
          { label: "Technology", value: "Google Apps Script · HTML · Smartsheet API" },
        ],
        visual: {
          kind: "workspace",
          manual: "Manual",
          manualDesc: "17 steps by hand, every implementation",
          auto: "Automated",
          autoDesc: "One run; the script completes all 17 steps",
          run: "Configure workspace",
          bar: "Apps Script · 1–17",
          saved: { value: "≈2 h", label: "saved per implementation" },
          note: "Diagram based on the product description. Step durations are not represented.",
        },
        detail: {
          kicker: "Delivery automation",
          lede: "Automated Smartsheet workspace setup for every client implementation, embedded in the corporate delivery methodology.",
          meta: [
            { label: "My role", value: "End-to-end owner" },
            { label: "Period", value: "Sept 2025 — Feb 2026" },
            { label: "Company", value: "Veritas Prime" },
            { label: "Technology", value: "Apps Script · HTML · Smartsheet API" },
          ],
          sections: [
            { title: "Context", text: "Veritas Prime, an SAP Gold Partner for LATAM and the Caribbean, runs client implementation delivery in Smartsheet." },
            { title: "Problem", text: "Every implementation needed a workspace configured by hand in 17 steps." },
            { title: "My role", text: "End-to-end delivery owner, working with Project Managers, consultants and clients." },
            { title: "Solution", text: "A Google Apps Script backend and HTML interface that run all 17 steps through the Smartsheet API." },
            { title: "Validation & adoption", text: "Embedded in the corporate delivery methodology as a mandatory step of every client implementation." },
            { title: "Results", text: "≈2 billable hours saved per implementation and 100% adoption in the process." },
          ],
          metrics: [
            { value: "17", label: "automated steps" },
            { value: "≈2 h", label: "saved per implementation" },
            { value: "100%", label: "adoption in the methodology" },
          ],
        },
      },
      {
        slug: SLUGS.mcp,
        n: "Case 02",
        title: "MCP Server for SAP SuccessFactors",
        roleTag: "Product vision & build",
        explainer:
          "MCP (Model Context Protocol) is an open standard that lets an AI assistant use tools and data from other systems in a controlled way.",
        rows: [
          { label: "Problem", value: "Language models cannot query or act on the SAP SuccessFactors ecosystem on their own." },
          { label: "Users & context", value: "A Veritas Prime Avengers Initiative product, with the VP Labs engineering team." },
          { label: "My contribution", value: "Product vision and build. As Functional Lead: functional specs, acceptance criteria and the validation loop." },
          { label: "Solution", value: "A Python MCP server exposing 8 tools so a language model can work with SAP SuccessFactors through its APIs." },
          { label: "Result", value: "8 MCP tools and 24 passing tests." },
          { label: "Technology", value: "Python · MCP · SAP APIs · LLM" },
        ],
        visual: {
          kind: "mcp",
          nodes: [
            { title: "AI assistant", sub: "Language model" },
            { title: "MCP server", sub: "Python · 8 tools" },
            { title: "SAP SuccessFactors", sub: "SAP APIs" },
          ],
          stats: [
            { value: "8", label: "MCP tools" },
            { value: "24", label: "passing tests" },
          ],
          note: "Conceptual diagram. Includes only components documented in the portfolio.",
        },
        detail: {
          kicker: "Enterprise AI integration",
          lede: "Connects language models to the SAP SuccessFactors ecosystem, so an AI assistant can query it and act on it in a controlled way.",
          meta: [
            { label: "My role", value: "Product vision & build" },
            { label: "Company", value: "Veritas Prime" },
            { label: "Technology", value: "Python · MCP · SAP APIs · LLM" },
          ],
          sections: [
            { title: "Context", text: "MCP (Model Context Protocol) is an open standard that lets an AI assistant use tools and data from other systems in a controlled way. This server is a Veritas Prime Avengers Initiative product, built with the VP Labs engineering team." },
            { title: "Problem", text: "Language models cannot query or act on the SAP SuccessFactors ecosystem on their own." },
            { title: "My role", text: "Product vision and build. As Functional Lead: functional specs, acceptance criteria and the validation loop." },
            { title: "Solution", text: "A Python MCP server exposing 8 tools so a language model can work with SAP SuccessFactors through its APIs." },
            { title: "Results", text: "8 MCP tools and 24 passing tests." },
          ],
          // The diagram above already shows 8 tools and 24 tests.
          metrics: [],
        },
      },
      {
        slug: SLUGS.skills,
        n: "Case 03",
        title: "Skills Analytics System",
        roleTag: "Migration & dashboard lead",
        rows: [
          { label: "Problem", value: "Team competency data lived in Google Sheets, with no view to spot skill gaps or key-person dependencies." },
          { label: "Users & context", value: "Veritas Prime leadership, for team staffing decisions." },
          { label: "My contribution", value: "Led the data migration to Smartsheet and the delivery of the dashboards." },
          { label: "Solution", value: "React dashboards with skill-gap heatmaps and single-point-of-failure (SPOF) analysis: skills that depend on one person." },
          { label: "Result", value: "Support for executive staffing decisions." },
          { label: "Technology", value: "React · Smartsheet · Analytics" },
        ],
        visual: {
          kind: "heatmap",
          title: "Skills heatmap",
          tag: "Illustrative · fictional data",
          aria: "Illustrative heatmap with fictional data: five skills by six people; Tricentis Tosca depends on a single person.",
          legend: "Level 0–3",
          spof: "one person covers the skill",
          note: "Conceptual visualization.",
        },
        detail: {
          kicker: "Workforce analytics",
          lede: "Dashboards that show skill gaps and key-person dependencies across the team, to support leadership staffing decisions.",
          meta: [
            { label: "My role", value: "Migration & dashboard lead" },
            { label: "Company", value: "Veritas Prime" },
            { label: "Technology", value: "React · Smartsheet · Analytics" },
          ],
          sections: [
            { title: "Context", text: "Built for Veritas Prime leadership, to support team staffing decisions." },
            { title: "Problem", text: "Team competency data lived in Google Sheets, with no view to spot skill gaps or key-person dependencies." },
            { title: "My role", text: "Led the data migration to Smartsheet and the delivery of the dashboards." },
            { title: "Solution", text: "React dashboards with skill-gap heatmaps and single-point-of-failure (SPOF) analysis: skills that depend on one person." },
            { title: "Results", text: "Support for executive staffing decisions." },
          ],
          metrics: [],
        },
      },
    ],
    others: {
      title: "Other products",
      ownership: "Most of this code is owned by Veritas Prime. What can be public is on",
      items: [
        {
          n: "04",
          title: "Data Toolkit — Avengers Initiative",
          role: "Functional Lead",
          description: "Consultant-facing data tooling: a prioritized functional backlog with acceptance criteria, and validation of every engineering release.",
          tech: "Product ownership · UAT",
        },
        {
          n: "05",
          title: "Client onboarding automation",
          role: "Spec & build",
          description: "Creates Drive folders, DNA workbooks and Google Chat spaces for every new client. Setup went from hours to minutes.",
          tech: "Apps Script · Drive API · Chat API",
        },
        {
          n: "06",
          title: "SuccessFactors test automation",
          role: "Automation engineer",
          description: "Model-based regression tests in Tricentis Tosca for SAP SuccessFactors configurations.",
          tech: "Tricentis Tosca · SAP",
        },
      ],
    },
    profile: {
      label: "Profile",
      title: "Business judgment, SAP depth and building with AI.",
      paragraphs: [
        "I trained in business—BBA Cum Laude at the University of Arizona and top 5% of my class at UPC—and certified as an SAP SuccessFactors consultant. From there I moved from writing requirements to building the products: I research with users, write the acceptance criteria and build or co-build the solution.",
        "At Veritas Prime, an SAP Gold Partner for LATAM and the Caribbean, I founded and lead the Process Automation Office and own the internal roadmap for AI-enabled tools. I support adoption through two corporate AI literacy programs and the company’s AI Flight Manual.",
      ],
      facts: [
        { label: "Location", value: "Lima, Perú · UTC−5, no DST" },
        { label: "Languages", value: "Spanish (native) · English (professional)" },
        { label: "Current title", value: "Process Reengineering Associate Analyst, Veritas Prime" },
      ],
      workTitle: "How I work",
      steps: [
        { n: "01", title: "Understand the process", text: "Research with real users." },
        { n: "02", title: "Prioritize", text: "What to automate first, and why." },
        { n: "03", title: "Build", text: "Build or co-build with engineering." },
        { n: "04", title: "Validate", text: "Acceptance criteria and UAT." },
        { n: "05", title: "Support adoption", text: "AUTO-000 documentation and training." },
      ],
    },
    experience: {
      label: "Experience",
      title: "One progression inside Veritas Prime.",
      company: "Veritas Prime LATAM & Caribe",
      kind: "SAP Gold Partner · Lima, Perú",
      logo: "/logos/veritas-prime.png",
      roles: [
        {
          title: "Process Reengineering Associate Analyst",
          period: "Feb 2026 — present",
          tag: "Newly created role",
          summary: "Created after earlier AI-powered products delivered measurable adoption.",
          bullets: [
            "Own the internal roadmap for AI-enabled tools across Consulting and AMS.",
            "Founded and lead the Process Automation Office: 7+ products in production.",
            "Functional Lead on three Avengers Initiative products with the VP Labs team.",
          ],
          links: [
            { label: "PAO", href: "#pao" },
            { label: "Case 02", href: "#caso-02" },
          ],
        },
        {
          title: "Prime Associate Project Coordinator",
          period: "Sept 2025 — Feb 2026",
          tag: "Coordination",
          summary: "Internal tooling with Project Managers, consultants and clients.",
          bullets: [
            "End-to-end delivery of Smartsheet Workspace Configuration.",
            "Requirements, user-story validation and backlog prioritization.",
          ],
          links: [{ label: "Case 01", href: "#caso-01" }],
        },
        {
          title: "Prime Associate Member",
          period: "Apr 2025 — Dec 2025",
          tag: "Start",
          summary: "User research to find recurring manual work.",
          bullets: [
            "Automation MVPs that reclaimed ≈6 hours per week, per user.",
            "Created the AUTO-000 pattern, adopted LATAM-wide as the documentation standard.",
          ],
          links: [{ label: "PAO", href: "#pao" }],
        },
      ],
      venturesTitle: "Ventures",
      ventures: [
        {
          company: "KeyStock Perú",
          role: "Founder & B2B wholesale supplier",
          period: "2024 — present",
          description: "Validated an underserved locksmith and auto-shop segment, and set pricing, distribution and landed costs. Now runs passively.",
        },
        {
          company: "The Focus Club",
          role: "CEO & Founder · apparel brand",
          period: "Jun 2022 — Dec 2023",
          description: "30% operating margin across two collections, with financial modeling, supplier sourcing and direct sales.",
        },
      ],
    },
    capabilities: {
      label: "Capabilities",
      title: "Four disciplines, applied in real projects.",
      usedLabel: "Applied in",
      groups: [
        {
          title: "AI & automation",
          description: "I design language-model workflows and connect AI assistants to enterprise systems.",
          tools: "Claude Code · MCP · RAG pipelines · LLM workflows · NotebookLM",
          used: "Case 02",
          href: "#caso-02",
        },
        {
          title: "Product & delivery",
          description: "I find needs, prioritize the backlog and support adoption until the product is used.",
          tools: "Discovery · Prioritization · Roadmap · MVP · UAT · Change management",
          used: "PAO",
          href: "#pao",
        },
        {
          title: "Engineering",
          description: "I build automations, integrations and dashboards, and run them on Google Cloud.",
          tools: "Python · Apps Script · React · GCP · SQL Server · Power BI · Smartsheet API · Tosca · Ubuntu",
          used: "Cases 01 & 03",
          href: "#caso-01",
        },
        {
          title: "SAP",
          description: "Certified in SuccessFactors EC Core and the SAP Activate methodology.",
          tools: "SuccessFactors EC Core · SAP Activate · SAP APIs · S/4HANA MM & WM",
          used: "Case 02",
          href: "#caso-02",
        },
      ],
      keyboard: {
        title: "Technology keyboard",
        hint: "Optional detail. Press a key to see where I’ve used it.",
        idle: "Select a key.",
        keys: [
          { k: "C", label: "Claude Code", blurb: "Daily AI pair-engineering tool behind every product I ship." },
          { k: "M", label: "MCP", blurb: "MCP server for SAP SuccessFactors: 8 tools, 24 passing tests. → Case 02" },
          { k: "S", label: "Success\u00ADFactors", blurb: "Certified EC Core implementation consultant." },
          { k: "P", label: "Python", blurb: "Backbone of the MCP server and automation pipelines." },
          { k: "R", label: "React", blurb: "Skill-gap and SPOF dashboards. → Case 03" },
          { k: "G", label: "GCP", blurb: "Google Cloud hosts the PAO automation stack." },
          { k: "W", label: "Apps Script", blurb: "OAuth, webhooks and Google Workspace APIs. → Case 01" },
          { k: "T", label: "Smartsheet", blurb: "API automation for delivery operations. → Case 01" },
          { k: "K", label: "Tosca", blurb: "Model-based test automation for SAP configurations." },
          { k: "H", label: "Security", blurb: "Ubuntu environments hardened against IT’s internal pentests." },
        ],
      },
    },
    research: {
      label: "Research",
      title: "Audit first, automate second.",
      intro:
        "Process audits, market-entry plans and policy research: the right automation starts with understanding the real operation.",
      status: { done: "Completed · 2026", dev: "In development", prog: "In progress" },
      items: [
        {
          code: "R—01",
          status: "done",
          type: "Market research & financial model",
          title: "D’FitoLife Soy — Peru → US internationalization plan",
          description: "A plan to take a Peruvian soy and Andean-superfood supplement to the US Hispanic segment via Amazon FBA: market selection, bottom-up demand, landed costs and tariffs.",
          projection: {
            label: "Projected results · conservative scenario",
            rows: [
              { label: "NPV", value: "USD 31,658" },
              { label: "IRR", value: "49.7%" },
              { label: "Payback", value: "2.16 years" },
            ],
            note: "Projection from a financial model, stress-tested against a 15% US tariff. Not the results of an operating company.",
          },
        },
        {
          code: "R—02",
          status: "dev",
          type: "Research & audit framework",
          title: "Perú SMB — Operational audit for consultancies",
          description: "A process-audit and digital-maturity framework for consultancies to assess Peruvian SMB operations and prioritize what to automate before implementing technology.",
          related: {
            text: "The framework’s first public prototype: an AI agent that pre-qualifies property-transfer deeds through a 10-step legal verification chain with cited sources. The agent proposes; the notary decides.",
            linkLabel: "View prototype on GitHub",
            href: PERU_SMB_REPO,
          },
        },
        {
          code: "R—03",
          status: "prog",
          type: "Thesis research",
          title: "The EU’s CBAM and Peruvian and Andean exports",
          description: "CBAM (Carbon Border Adjustment Mechanism) puts a carbon price on certain EU imports. The research looks at how it changes market access for Andean economies and which responses are available to Peru and the Andean Community.",
        },
      ],
    },
    education: {
      label: "Education",
      title: "Trained in business, certified in SAP.",
      eduTitle: "Education",
      certTitle: "Certifications",
      trainTitle: "Courses & further training",
      schools: [
        {
          school: "University of Arizona",
          logo: "/logos/arizona.png",
          period: "2023 — 2025",
          program: "Eller College of Management — B.B.A.",
          detail: "Dual degree with UPC · GPA 3.55/4.00",
          honors: "Cum Laude · Dean’s List with Distinction (Summer 2024) · Dean’s List (Spring 2024, Fall 2025)",
          location: "Arizona, USA",
        },
        {
          school: "Universidad Peruana de Ciencias Aplicadas",
          logo: "/logos/upc.png",
          period: "2021 — 2026",
          program: "B.A. International Business Administration",
          detail: "International Trade, Global Supply Chain, Corporate Governance",
          honors: "Top 5% of class",
          location: "Lima, Perú",
        },
      ],
      certs: [
        { name: "SAP Certified Associate — SuccessFactors EC Core, Implementation Consultant", issuer: "SAP", year: "2025 · recert. 2026" },
        { name: "SAP Certified Associate — Project Manager, SAP Activate", issuer: "SAP", year: "2025" },
        { name: "Cambridge FCE — English (B2 First)", issuer: "Cambridge", year: "2023" },
      ],
      training: [
        { name: "Strategic Transformation with AI", issuer: "Pacífico Business School", year: "2026" },
        { name: "Claude Code 101 & Claude 101", issuer: "Anthropic", year: "2026" },
        { name: "Claude Code desde Cero", issuer: "Coding Latam", year: "2026" },
        { name: "Diploma in Logistics & Operations", issuer: "ADEX", year: "2024" },
        { name: "SAP Logistics MM/WM", issuer: "UNI", year: "2024" },
        { name: "SQL Server & Power BI Bootcamp", issuer: "Cibertec", year: "2024" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s talk about your next product.",
      sub: "Open to AI Solutions Engineer, Technical Product Manager and AI-enabled transformation roles, remote or hybrid.",
      avail: "Lima, Perú (UTC−5, no DST) · year-round overlap with US Eastern and Central",
    },
    footer: {
      rights: "© 2026 José Leonardo Machado Tabraj",
      links: [
        { label: "Capabilities", href: "#capacidades" },
        { label: "Education", href: "#formacion" },
        { label: "Certifications", href: "#certificaciones" },
        { label: "CV", href: links.cv },
      ],
    },
    detail: { back: "Products" },
  },

  es: {
    ui: {
      homeAria: "José Machado — inicio",
      navAria: "Navegación principal",
      langAria: "Idioma",
      footAria: "Enlaces del pie",
      menu: "Abrir menú",
      close: "Cerrar menú",
      menuLabel: "Menú",
      myRole: "Mi rol",
      more: "Ver caso completo",
      copy: "Copiar correo",
      copied: "✓ Copiado",
      copiedStatus: "Correo copiado al portapapeles.",
    },
    nav: [
      { id: "productos", label: "Productos" },
      { id: "perfil", label: "Perfil" },
      { id: "experiencia", label: "Experiencia" },
      { id: "investigacion", label: "Investigación" },
      { id: "contacto", label: "Contacto" },
    ],
    hero: {
      name: "José Machado",
      fullName: "José Leonardo Machado Tabraj",
      role: "AI Solutions Engineer & Digital Transformation Product Owner",
      title: "Conecto negocio, SAP e IA para crear productos que funcionan.",
      sub: "AI Solutions Engineer y Product Owner. Fundé la Process Automation Office en Veritas Prime, donde desarrollo y lidero soluciones para automatizar operaciones empresariales.",
      cta1: "Ver productos",
      cta2: "Hablemos",
      cv: "Descargar CV",
      loc: "Lima, Perú · UTC−5",
      avail: "Disponible para roles remotos o híbridos",
      alt: "Retrato de José Leonardo Machado Tabraj",
      official: "Cargo actual: Process Reengineering Associate Analyst · Veritas Prime",
    },
    impact: {
      label: "Resumen de impacto",
      note: "Resultados reportados de productos internos de Veritas Prime.",
      items: [
        {
          value: "7+",
          label: "productos en producción",
          caption: "Process Automation Office · AUTO-006 a AUTO-013",
          href: "#pao",
        },
        {
          value: "≈6 h",
          label: "ahorradas por usuario a la semana",
          caption: "MVPs de automatización surgidos de investigación con usuarios",
          href: "#experiencia",
        },
        {
          value: "≈2 h",
          label: "ahorradas por implementación",
          caption: "Caso 01 · Smartsheet Workspace Configuration",
          href: "#caso-01",
        },
      ],
    },
    products: {
      label: "Productos",
      title: "Productos en producción, construidos desde la operación.",
      intro:
        "Cada producto empezó como una tarea manual recurrente en los equipos de delivery y terminó como herramienta adoptada.",
    },
    pao: {
      kicker: "Iniciativa · 2025 — actualidad",
      title: "Process Automation Office",
      abbr: "PAO",
      role: "Fundador y Product Lead",
      body: "Creé una función interna de producto en Veritas Prime que define cómo se detectan, priorizan, documentan y adoptan las automatizaciones. Su estándar AUTO-000 es hoy la norma en LATAM para documentar, incorporar y transferir automatizaciones internas.",
      steps: [
        { n: "01", title: "Descubrimiento", text: "Investigación con usuarios para encontrar tareas manuales recurrentes." },
        { n: "02", title: "Priorización", text: "Framework propio para decidir qué automatizar primero." },
        { n: "03", title: "Documentación", text: "Estándar AUTO-000 para documentación, onboarding y traspaso." },
        { n: "04", title: "Adopción", text: "Dos programas de alfabetización en IA y el Corporate AI Flight Manual." },
      ],
      stats: [
        {
          value: "7+",
          text: "productos en producción para los equipos de delivery de LATAM (AUTO-006 a AUTO-013).",
          short: "productos en producción",
        },
        {
          value: "100 %",
          text: "de adopción en dos procesos incorporados a la metodología corporativa de delivery: el aprovisionamiento de workspaces (Caso 01) y el procesamiento de transcripciones de Zoom.",
          short: "adopción en 2 procesos de la metodología corporativa",
        },
      ],
    },
    cases: [
      {
        slug: SLUGS.workspace,
        n: "Caso 01",
        title: "Smartsheet Workspace Configuration",
        roleTag: "Responsable end-to-end",
        rows: [
          { label: "Problema", value: "La configuración del workspace de Smartsheet para cada implementación de cliente era un proceso manual de 17 pasos." },
          { label: "Usuarios y contexto", value: "Project Managers y consultores de Veritas Prime en implementaciones de clientes." },
          { label: "Mi contribución", value: "Responsable de la entrega end-to-end: requerimientos, construcción, validación y adopción." },
          { label: "Solución", value: "Configuración automatizada de 17 pasos con backend en Google Apps Script, interfaz HTML y la API de Smartsheet." },
          { label: "Resultado", value: "≈2 horas facturables ahorradas por implementación. 100 % de adopción: es paso obligatorio de cada implementación en la metodología corporativa." },
          { label: "Tecnologías", value: "Google Apps Script · HTML · API de Smartsheet" },
        ],
        rowsShort: [
          { label: "Mi contribución", value: "Responsable de la entrega end-to-end." },
          { label: "Resultado", value: "100 % de adopción como paso obligatorio de cada implementación." },
          { label: "Tecnologías", value: "Google Apps Script · HTML · API de Smartsheet" },
        ],
        visual: {
          kind: "workspace",
          manual: "Manual",
          manualDesc: "17 pasos a mano en cada implementación",
          auto: "Automatizado",
          autoDesc: "Una ejecución; el script completa los 17 pasos",
          run: "Configurar workspace",
          bar: "Apps Script · 1–17",
          saved: { value: "≈2 h", label: "ahorradas por implementación" },
          note: "Diagrama basado en la descripción del producto. No representa la duración de cada paso.",
        },
        detail: {
          kicker: "Automatización de delivery",
          lede: "Configuración automatizada del workspace de Smartsheet para cada implementación de cliente, incorporada a la metodología corporativa de delivery.",
          meta: [
            { label: "Mi rol", value: "Responsable end-to-end" },
            { label: "Periodo", value: "Sept 2025 — Feb 2026" },
            { label: "Empresa", value: "Veritas Prime" },
            { label: "Tecnologías", value: "Apps Script · HTML · API de Smartsheet" },
          ],
          sections: [
            { title: "Contexto", text: "Veritas Prime, SAP Gold Partner para LATAM y el Caribe, usa Smartsheet en la entrega de sus implementaciones de clientes." },
            { title: "Problema", text: "Cada implementación requería configurar a mano un workspace en 17 pasos." },
            { title: "Mi rol", text: "Responsable de la entrega end-to-end, en coordinación con Project Managers, consultores y clientes." },
            { title: "Solución", text: "Backend en Google Apps Script e interfaz HTML que ejecutan los 17 pasos mediante la API de Smartsheet." },
            { title: "Validación y adopción", text: "Incorporado a la metodología corporativa de delivery como paso obligatorio de cada implementación de cliente." },
            { title: "Resultados", text: "≈2 horas facturables ahorradas por implementación y 100 % de adopción en el proceso." },
          ],
          metrics: [
            { value: "17", label: "pasos automatizados" },
            { value: "≈2 h", label: "ahorradas por implementación" },
            { value: "100 %", label: "de adopción en la metodología" },
          ],
        },
      },
      {
        slug: SLUGS.mcp,
        n: "Caso 02",
        title: "Servidor MCP para SAP SuccessFactors",
        roleTag: "Visión de producto y construcción",
        explainer:
          "MCP (Model Context Protocol) es un estándar abierto que permite a un asistente de IA usar herramientas y datos de otros sistemas de forma controlada.",
        rows: [
          { label: "Problema", value: "Los modelos de lenguaje no pueden consultar ni operar por sí solos sobre el ecosistema SAP SuccessFactors." },
          { label: "Usuarios y contexto", value: "Producto de la Avengers Initiative de Veritas Prime, con el equipo de ingeniería de VP Labs." },
          { label: "Mi contribución", value: "Visión de producto y construcción. Como Functional Lead: especificaciones funcionales, criterios de aceptación y ciclo de validación." },
          { label: "Solución", value: "Servidor MCP en Python que expone 8 herramientas para que un modelo de lenguaje trabaje con SAP SuccessFactors mediante sus APIs." },
          { label: "Resultado", value: "8 herramientas MCP y 24 pruebas aprobadas." },
          { label: "Tecnologías", value: "Python · MCP · APIs SAP · LLM" },
        ],
        visual: {
          kind: "mcp",
          nodes: [
            { title: "Asistente de IA", sub: "Modelo de lenguaje" },
            { title: "Servidor MCP", sub: "Python · 8 herramientas" },
            { title: "SAP SuccessFactors", sub: "APIs SAP" },
          ],
          stats: [
            { value: "8", label: "herramientas MCP" },
            { value: "24", label: "pruebas aprobadas" },
          ],
          note: "Diagrama conceptual. Solo incluye componentes documentados en el portafolio.",
        },
        detail: {
          kicker: "Integración de IA empresarial",
          lede: "Conecta los modelos de lenguaje con el ecosistema SAP SuccessFactors para que un asistente de IA pueda consultarlo y operar sobre él de forma controlada.",
          meta: [
            { label: "Mi rol", value: "Visión de producto y construcción" },
            { label: "Empresa", value: "Veritas Prime" },
            { label: "Tecnologías", value: "Python · MCP · APIs SAP · LLM" },
          ],
          sections: [
            { title: "Contexto", text: "MCP (Model Context Protocol) es un estándar abierto que permite a un asistente de IA usar herramientas y datos de otros sistemas de forma controlada. Este servidor es un producto de la Avengers Initiative de Veritas Prime, construido con el equipo de ingeniería de VP Labs." },
            { title: "Problema", text: "Los modelos de lenguaje no pueden consultar ni operar por sí solos sobre el ecosistema SAP SuccessFactors." },
            { title: "Mi rol", text: "Visión de producto y construcción. Como Functional Lead: especificaciones funcionales, criterios de aceptación y ciclo de validación." },
            { title: "Solución", text: "Servidor MCP en Python que expone 8 herramientas para que un modelo de lenguaje trabaje con SAP SuccessFactors mediante sus APIs." },
            { title: "Resultados", text: "8 herramientas MCP y 24 pruebas aprobadas." },
          ],
          // The diagram above already shows 8 tools and 24 tests.
          metrics: [],
        },
      },
      {
        slug: SLUGS.skills,
        n: "Caso 03",
        title: "Skills Analytics System",
        roleTag: "Líder de migración y dashboards",
        rows: [
          { label: "Problema", value: "Los datos de competencias del equipo estaban en Google Sheets, sin una vista para detectar brechas ni dependencias de personas clave." },
          { label: "Usuarios y contexto", value: "Dirección de Veritas Prime, para decisiones de asignación de equipos." },
          { label: "Mi contribución", value: "Lideré la migración de los datos a Smartsheet y la entrega de los dashboards." },
          { label: "Solución", value: "Dashboards en React con mapas de calor de brechas de habilidades y análisis de puntos únicos de falla (SPOF): habilidades que dependen de una sola persona." },
          { label: "Resultado", value: "Apoyo a las decisiones ejecutivas de asignación de equipos." },
          { label: "Tecnologías", value: "React · Smartsheet · Analytics" },
        ],
        visual: {
          kind: "heatmap",
          title: "Mapa de calor de habilidades",
          tag: "Ilustrativo · datos ficticios",
          aria: "Mapa de calor ilustrativo con datos ficticios: cinco habilidades por seis personas; Tricentis Tosca depende de una sola persona.",
          legend: "Nivel 0–3",
          spof: "una sola persona cubre la habilidad",
          note: "Visualización conceptual.",
        },
        detail: {
          kicker: "Analítica de talento",
          lede: "Dashboards que muestran las brechas de habilidades y las dependencias de personas clave del equipo, como apoyo a las decisiones de asignación de la dirección.",
          meta: [
            { label: "Mi rol", value: "Líder de migración y dashboards" },
            { label: "Empresa", value: "Veritas Prime" },
            { label: "Tecnologías", value: "React · Smartsheet · Analytics" },
          ],
          sections: [
            { title: "Contexto", text: "Construido para la dirección de Veritas Prime, como apoyo a las decisiones de asignación de equipos." },
            { title: "Problema", text: "Los datos de competencias del equipo estaban en Google Sheets, sin una vista para detectar brechas ni dependencias de personas clave." },
            { title: "Mi rol", text: "Lideré la migración de los datos a Smartsheet y la entrega de los dashboards." },
            { title: "Solución", text: "Dashboards en React con mapas de calor de brechas de habilidades y análisis de puntos únicos de falla (SPOF): habilidades que dependen de una sola persona." },
            { title: "Resultados", text: "Apoyo a las decisiones ejecutivas de asignación de equipos." },
          ],
          metrics: [],
        },
      },
    ],
    others: {
      title: "Otros productos",
      ownership: "La mayor parte del código es propiedad de Veritas Prime. Lo público está en",
      items: [
        {
          n: "04",
          title: "Data Toolkit — Avengers Initiative",
          role: "Functional Lead",
          description: "Herramientas de datos para consultores: backlog funcional priorizado con criterios de aceptación y validación de cada entrega de ingeniería.",
          tech: "Product ownership · UAT",
        },
        {
          n: "05",
          title: "Automatización de onboarding de clientes",
          role: "Especificación y construcción",
          description: "Crea carpetas de Drive, workbooks DNA y espacios de Google Chat para cada nuevo cliente. El setup pasó de horas a minutos.",
          tech: "Apps Script · API Drive · API Chat",
        },
        {
          n: "06",
          title: "Automatización de pruebas para SuccessFactors",
          role: "Ingeniero de automatización",
          description: "Pruebas de regresión basadas en modelos con Tricentis Tosca para configuraciones de SAP SuccessFactors.",
          tech: "Tricentis Tosca · SAP",
        },
      ],
    },
    profile: {
      label: "Perfil",
      title: "Criterio de negocio, experiencia SAP y construcción con IA.",
      paragraphs: [
        "Me formé en negocios —BBA Cum Laude en la University of Arizona y top 5 % de mi promoción en la UPC— y me certifiqué como consultor SAP SuccessFactors. Con esa base paso de definir requerimientos a construir los productos: investigo con usuarios, escribo los criterios de aceptación y construyo o coconstruyo la solución.",
        "En Veritas Prime, SAP Gold Partner para LATAM y el Caribe, fundé y lidero la Process Automation Office y soy responsable del roadmap interno de herramientas con IA. Acompaño la adopción con dos programas corporativos de alfabetización en IA y el AI Flight Manual de la compañía.",
      ],
      facts: [
        { label: "Ubicación", value: "Lima, Perú · UTC−5, sin horario de verano" },
        { label: "Idiomas", value: "Español (nativo) · Inglés (profesional)" },
        { label: "Cargo actual", value: "Process Reengineering Associate Analyst, Veritas Prime" },
      ],
      workTitle: "Forma de trabajo",
      steps: [
        { n: "01", title: "Entender el proceso", text: "Investigación con usuarios reales." },
        { n: "02", title: "Priorizar", text: "Qué automatizar primero y por qué." },
        { n: "03", title: "Construir", text: "Construyo o coconstruyo con ingeniería." },
        { n: "04", title: "Validar", text: "Criterios de aceptación y UAT." },
        { n: "05", title: "Acompañar la adopción", text: "Documentación AUTO-000 y formación." },
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Una progresión dentro de Veritas Prime.",
      company: "Veritas Prime LATAM & Caribe",
      kind: "SAP Gold Partner · Lima, Perú",
      logo: "/logos/veritas-prime.png",
      roles: [
        {
          title: "Process Reengineering Associate Analyst",
          period: "Feb 2026 — actualidad",
          tag: "Puesto de nueva creación",
          summary: "Creado a partir de productos con IA que ya habían demostrado adopción medible.",
          bullets: [
            "Responsable del roadmap interno de herramientas con IA para Consultoría y AMS.",
            "Fundé y lidero la Process Automation Office: 7+ productos en producción.",
            "Functional Lead de tres productos de la Avengers Initiative con el equipo de VP Labs.",
          ],
          links: [
            { label: "PAO", href: "#pao" },
            { label: "Caso 02", href: "#caso-02" },
          ],
        },
        {
          title: "Prime Associate Project Coordinator",
          period: "Sept 2025 — Feb 2026",
          tag: "Coordinación",
          summary: "Herramientas internas junto a Project Managers, consultores y clientes.",
          bullets: [
            "Entrega end-to-end de Smartsheet Workspace Configuration.",
            "Requerimientos, validación de historias de usuario y priorización del backlog.",
          ],
          links: [{ label: "Caso 01", href: "#caso-01" }],
        },
        {
          title: "Prime Associate Member",
          period: "Abr 2025 — Dic 2025",
          tag: "Inicio",
          summary: "Investigación con usuarios para encontrar tareas manuales recurrentes.",
          bullets: [
            "MVPs de automatización que recuperaron ≈6 horas semanales por usuario.",
            "Creé el patrón AUTO-000, adoptado en LATAM como estándar de documentación.",
          ],
          links: [{ label: "PAO", href: "#pao" }],
        },
      ],
      venturesTitle: "Emprendimientos",
      ventures: [
        {
          company: "KeyStock Perú",
          role: "Fundador y proveedor mayorista B2B",
          period: "2024 — actualidad",
          description: "Validé un segmento desatendido de cerrajeros y talleres, y definí precios, distribución y costos de importación. Hoy opera de forma pasiva.",
        },
        {
          company: "The Focus Club",
          role: "CEO y fundador · marca de ropa",
          period: "Jun 2022 — Dic 2023",
          description: "Margen operativo del 30 % en dos colecciones, con modelamiento financiero, sourcing de proveedores y venta directa.",
        },
      ],
    },
    capabilities: {
      label: "Capacidades",
      title: "Cuatro áreas aplicadas en proyectos reales.",
      usedLabel: "Aplicado en",
      groups: [
        {
          title: "IA y automatización",
          description: "Diseño flujos con modelos de lenguaje y conecto asistentes de IA con sistemas empresariales.",
          tools: "Claude Code · MCP · Pipelines RAG · Workflows LLM · NotebookLM",
          used: "Caso 02",
          href: "#caso-02",
        },
        {
          title: "Producto y entrega",
          description: "Descubro necesidades, priorizo el backlog y acompaño la adopción hasta que el producto se usa.",
          tools: "Discovery · Priorización · Roadmap · MVP · UAT · Gestión del cambio",
          used: "PAO",
          href: "#pao",
        },
        {
          title: "Ingeniería",
          description: "Construyo automatizaciones, integraciones y dashboards, y los opero en Google Cloud.",
          tools: "Python · Apps Script · React · GCP · SQL Server · Power BI · API de Smartsheet · Tosca · Ubuntu",
          used: "Casos 01 y 03",
          href: "#caso-01",
        },
        {
          title: "SAP",
          description: "Consultor certificado en SuccessFactors EC Core y en la metodología SAP Activate.",
          tools: "SuccessFactors EC Core · SAP Activate · APIs SAP · S/4HANA MM y WM",
          used: "Caso 02",
          href: "#caso-02",
        },
      ],
      keyboard: {
        title: "Teclado de tecnologías",
        hint: "Detalle opcional. Pulsa una tecla para ver dónde la he aplicado.",
        idle: "Selecciona una tecla.",
        keys: [
          { k: "C", label: "Claude Code", blurb: "Herramienta diaria de ingeniería en pareja con IA detrás de cada producto." },
          { k: "M", label: "MCP", blurb: "Servidor MCP para SAP SuccessFactors: 8 herramientas, 24 pruebas aprobadas. → Caso 02" },
          { k: "S", label: "Success\u00ADFactors", blurb: "Consultor de implementación certificado en EC Core." },
          { k: "P", label: "Python", blurb: "Base del servidor MCP y de los pipelines de automatización." },
          { k: "R", label: "React", blurb: "Dashboards de brechas de habilidades y SPOF. → Caso 03" },
          { k: "G", label: "GCP", blurb: "Google Cloud aloja el stack de automatización de la PAO." },
          { k: "W", label: "Apps Script", blurb: "OAuth, webhooks y APIs de Google Workspace. → Caso 01" },
          { k: "T", label: "Smartsheet", blurb: "Automatización por API para la operación de delivery. → Caso 01" },
          { k: "K", label: "Tosca", blurb: "Pruebas automatizadas basadas en modelos para configuraciones SAP." },
          { k: "H", label: "Seguridad", blurb: "Entornos Ubuntu endurecidos frente a los pentests internos de IT." },
        ],
      },
    },
    research: {
      label: "Investigación",
      title: "Auditar primero, automatizar después.",
      intro:
        "Auditorías de procesos, planes de entrada a mercados e investigación de políticas: la automatización correcta empieza por entender la operación real.",
      status: { done: "Concluido · 2026", dev: "En desarrollo", prog: "En curso" },
      items: [
        {
          code: "R—01",
          status: "done",
          type: "Investigación de mercado y modelo financiero",
          title: "D’FitoLife Soy — Plan de internacionalización Perú → EE. UU.",
          description: "Plan para llevar un suplemento peruano de soya y superalimentos andinos al segmento hispano de EE. UU. vía Amazon FBA: selección de mercados, demanda bottom-up, costos de importación y aranceles.",
          projection: {
            label: "Resultados proyectados · escenario conservador",
            rows: [
              { label: "VAN", value: "USD 31,658" },
              { label: "TIR", value: "49.7 %" },
              { label: "Recuperación", value: "2.16 años" },
            ],
            note: "Proyección de un modelo financiero, con prueba de estrés ante un arancel del 15 % en EE. UU. No corresponde a una empresa en operación.",
          },
        },
        {
          code: "R—02",
          status: "dev",
          type: "Investigación y marco de auditoría",
          title: "Perú SMB — Auditoría operativa para consultoras",
          description: "Marco de auditoría de procesos y madurez digital para que consultoras evalúen operaciones de pymes peruanas y prioricen qué automatizar antes de implementar tecnología.",
          related: {
            text: "Primer prototipo público del marco: un agente de IA que precalifica escrituras de transferencia de propiedad con una verificación legal de 10 pasos y fuentes citadas. El agente propone; el notario decide.",
            linkLabel: "Ver prototipo en GitHub",
            href: PERU_SMB_REPO,
          },
        },
        {
          code: "R—03",
          status: "prog",
          type: "Investigación de tesis",
          title: "El CBAM europeo y las exportaciones peruanas y andinas",
          description: "El CBAM (Mecanismo de Ajuste en Frontera por Carbono) pone precio al carbono de ciertas importaciones a la UE. La investigación analiza cómo cambia el acceso al mercado europeo para las economías andinas y qué respuestas tienen el Perú y la Comunidad Andina.",
        },
      ],
    },
    education: {
      label: "Formación",
      title: "Formación en negocios, certificación en SAP.",
      eduTitle: "Educación",
      certTitle: "Certificaciones",
      trainTitle: "Cursos y formación complementaria",
      schools: [
        {
          school: "University of Arizona",
          logo: "/logos/arizona.png",
          period: "2023 — 2025",
          program: "Eller College of Management — B.B.A.",
          detail: "Doble grado con UPC · GPA 3.55/4.00",
          honors: "Cum Laude · Dean’s List with Distinction (verano 2024) · Dean’s List (primavera 2024, otoño 2025)",
          location: "Arizona, EE. UU.",
        },
        {
          school: "Universidad Peruana de Ciencias Aplicadas",
          logo: "/logos/upc.png",
          period: "2021 — 2026",
          program: "Administración y Negocios Internacionales",
          detail: "Comercio Internacional, Supply Chain Global, Gobierno Corporativo",
          honors: "Top 5 % de la promoción",
          location: "Lima, Perú",
        },
      ],
      certs: [
        { name: "SAP Certified Associate — SuccessFactors EC Core, Implementation Consultant", issuer: "SAP", year: "2025 · recert. 2026" },
        { name: "SAP Certified Associate — Project Manager, SAP Activate", issuer: "SAP", year: "2025" },
        { name: "Cambridge FCE — Inglés (B2 First)", issuer: "Cambridge", year: "2023" },
      ],
      training: [
        { name: "Strategic Transformation with AI", issuer: "Pacífico Business School", year: "2026" },
        { name: "Claude Code 101 y Claude 101", issuer: "Anthropic", year: "2026" },
        { name: "Claude Code desde Cero", issuer: "Coding Latam", year: "2026" },
        { name: "Diplomado en Logística y Operaciones", issuer: "ADEX", year: "2024" },
        { name: "SAP Logistics MM/WM", issuer: "UNI", year: "2024" },
        { name: "SQL Server y Power BI Bootcamp", issuer: "Cibertec", year: "2024" },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Hablemos de tu próximo producto.",
      sub: "Abierto a roles de AI Solutions Engineer, Technical Product Manager y transformación con IA, en remoto o híbrido.",
      avail: "Lima, Perú (UTC−5, sin horario de verano) · coincidencia horaria todo el año con US Eastern y Central",
    },
    footer: {
      rights: "© 2026 José Leonardo Machado Tabraj",
      links: [
        { label: "Capacidades", href: "#capacidades" },
        { label: "Formación", href: "#formacion" },
        { label: "Certificaciones", href: "#certificaciones" },
        { label: "CV", href: links.cv },
      ],
    },
    detail: { back: "Productos" },
  },
};
