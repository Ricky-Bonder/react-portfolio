// Single source of truth for every project shown on the site.
// Home, /projects and /experiences/[expslug] all read from here.

export type ProjectKind = "work" | "personal";

export type ProjectIcon =
  | "layers"
  | "monitor"
  | "activity"
  | "radio"
  | "thermometer"
  | "server";

export interface Project {
  slug: string;
  kind: ProjectKind;
  icon: ProjectIcon;
  title: string;
  /** Short stack line shown under the card title. */
  stack: string;
  /** Two-line card summary. */
  summary: string;
  /** Concrete, measurable results. Only real numbers belong here. */
  highlights?: string[];
  role: string;
  timeline: string;
  tagline: string;
  overview: string;
  techStack: Array<{ name: string; category: string }>;
  challenges: Array<{ title: string; description: string }>;
  responsibilities: string[];
}

export const SITE_NAME = "Riccardo Ossola";

/** First year of professional experience, used to compute "N+ years". */
export const CAREER_START_YEAR = 2020;

export function yearsOfExperience(now = new Date()): number {
  return Math.max(1, now.getFullYear() - CAREER_START_YEAR);
}

export const projects: Project[] = [
  {
    slug: "go-svelte-web-app",
    kind: "work",
    icon: "layers",
    title: "Modern Full-Stack Platform",
    stack: "Go, SvelteKit & Product Architecture",
    summary:
      "On-premise full-stack architecture: one Go backend serves the embedded device, the browser and external clients such as mobile apps, with a SvelteKit frontend on all of them.",
    highlights: ["Sub-200 ms API responses on constrained hardware", "60% lower memory footprint"],
    role: "Lead Developer",
    timeline: "2021 - Present",
    tagline: "One backend for the device, the browser and mobile clients.",
    overview:
      "A modernization initiative replacing a legacy Java monolith with a cross-platform architecture. The Go backend runs natively on resource-constrained Embedded Linux devices and serves the SvelteKit interface to the device's own screen, to desktop browsers and to external clients such as mobile apps, opening the product to broader access and scale.\n\nReporting directly to management, I own the full lifecycle: from Product Owner requirements and UX designs to features shipped through GitLab CI/CD.",
    techStack: [
      { name: "Go (Gin/Gorm)", category: "Backend Core" },
      { name: "SvelteKit", category: "Frontend Framework" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "TypeScript", category: "Language" },
      { name: "Playwright", category: "E2E Testing" },
      { name: "Docker", category: "Deployment" },
      { name: "GitLab CI/CD", category: "Delivery" },
    ],
    challenges: [
      {
        title: "Legacy Migration & Performance",
        description:
          "Replacing a heavy Java monolith with Go cut the memory footprint by 60% and keeps API responses under 200 ms on limited hardware, while a Domain-Driven Design approach kept feature parity.",
      },
      {
        title: "One UI for Touch Screens and Desktops",
        description:
          "The interface had to feel native on embedded touch screens and stay responsive on desktop. SvelteKit and Tailwind allowed a shared component system, documented in Storybook, across both targets.",
      },
    ],
    responsibilities: [
      "Translated business requirements into concrete technical specifications (TDD/DDD).",
      "Acted as the technical counterpart to the Product Owner and UX Designer.",
      "Designed the RESTful API contract and built the automated E2E testing pipeline.",
      "Ship features through GitLab CI/CD with Docker, keeping test coverage above 90%.",
    ],
  },
  {
    slug: "java-embedded-app",
    kind: "work",
    icon: "monitor",
    title: "Self-Contained Device Apps",
    stack: "Java 11/17, JavaFX & MQTT",
    summary:
      "Two standalone device applications where frontend and backend both run on the embedded device: sensor interfacing, offline data buffering, REST integration and in-field firmware updates.",
    highlights: ["2 device apps shipped and maintained across multiple releases"],
    role: "Lead Developer",
    timeline: "2020 - Present",
    tagline: "Frontend and backend running entirely on the embedded device.",
    overview:
      "Design, development and maintenance of two standalone applications for Linux-based embedded devices. Each one is a self-contained system: the JavaFX Human-Machine Interface and the control logic run in the same process on the device, with no external server required.\n\nI own the whole stack, from sensor interfacing and offline data buffering to RESTful API integration and the in-field firmware-update workflow, across multiple releases.",
    techStack: [
      { name: "Java 11/17", category: "Core Runtime" },
      { name: "JavaFX", category: "UI Framework" },
      { name: "Linux (Embedded)", category: "OS" },
      { name: "REST API", category: "Integration" },
      { name: "MQTT", category: "Telemetry" },
      { name: "JUnit & Mockito", category: "Testing" },
    ],
    challenges: [
      {
        title: "UI Performance on Embedded Hardware",
        description:
          "Running a JavaFX GUI on constrained Linux hardware required strict memory management and tuning of the rendering pipeline to avoid stutter.",
      },
      {
        title: "Protocol Integration",
        description:
          "Real-time data from Serial and MQTT sources had to reach the screen without blocking the UI thread, which called for an asynchronous event-handling architecture.",
      },
      {
        title: "Offline First",
        description:
          "Devices lose connectivity in the field. Data is buffered locally and synchronised when the link returns, and firmware updates can be applied on site without a network.",
      },
    ],
    responsibilities: [
      "Designed the JavaFX UI components and wired them to the on-device services.",
      "Own sensor interfacing, offline buffering and REST API integration.",
      "Run the in-field firmware-update workflow across releases.",
    ],
  },
  {
    slug: "scala-backend",
    kind: "work",
    icon: "activity",
    title: "Sensor Aggregator Device",
    stack: "Scala, Akka & Concurrency",
    summary:
      "A fault-tolerant sensor aggregator on Scala and Akka Actors. I add new sensor types as actor-based modules and tune the pipelines that buffer and forward data over MQTT.",
    role: "Maintenance & Features",
    timeline: "2020 - Present",
    tagline: "Actor-based sensor aggregation with Scala and Akka.",
    overview:
      "A backend service that ingests, processes and forwards high-frequency sensor data. Built on the Actor Model with Scala and Akka, it handles concurrency natively so that a failure in one stream, such as a single sensor, never takes down the whole system.\n\nThe service acts as the reliability layer: it buffers data during network instability and guarantees delivery over MQTT.",
    techStack: [
      { name: "Scala", category: "Language" },
      { name: "Akka Actors", category: "Concurrency" },
      { name: "MQTT", category: "Messaging" },
      { name: "Serial", category: "Hardware Interface" },
      { name: "API Integration", category: "Connectivity" },
    ],
    challenges: [
      {
        title: "Concurrency & Fault Tolerance",
        description:
          "Simultaneous data streams required a non-blocking design. Akka's 'let it crash' model isolates failures to individual actors.",
      },
      {
        title: "Backpressure",
        description:
          "Custom buffering handles the case where the upstream network is slower than the ingestion rate.",
      },
    ],
    responsibilities: [
      "Add support for new sensor types as actor-based modules.",
      "Refine the existing pipelines and algorithms for throughput and reliability.",
      "Maintain the web server communication and the internal APIs between components.",
    ],
  },
  {
    slug: "gateway-backend",
    kind: "work",
    icon: "radio",
    title: "Industrial Gateway Device",
    stack: "Java 8, Serial & Web Protocols",
    summary:
      "Gateway modules that give industrial machines network connectivity: remote retrieval of mechanical and sensor data plus command and control, on a Java 8 runtime.",
    highlights: ["99.9% uptime"],
    role: "Maintenance & Features",
    timeline: "2020 - Present",
    tagline: "Connecting industrial machines to the network on Java 8.",
    overview:
      "Maintenance and feature development for the gateway modules that connect industrial machines to the network. The gateway translates low-level Serial data into web-compatible formats, enabling remote retrieval of mechanical and sensor data and command-and-control operations from web dashboards.\n\nRunning on a legacy Java 8 environment, the priorities are stability, backwards compatibility and efficient transmission over both wired and wireless links, sustaining 99.9% uptime.",
    techStack: [
      { name: "Java 8", category: "Language" },
      { name: "Serial Comm", category: "Protocol" },
      { name: "Web Protocols", category: "Transmission" },
      { name: "Linux", category: "OS" },
    ],
    challenges: [
      {
        title: "Legacy Constraints",
        description:
          "Java 8 meant implementing modern patterns without newer language features, while staying stable on older hardware revisions.",
      },
      {
        title: "Data Integrity",
        description:
          "Zero data corruption while translating raw Serial bytes into structured web payloads.",
      },
    ],
    responsibilities: [
      "Owned the data transmission logic between Serial ports and web interfaces.",
      "Patched and extended the legacy codebase to support new devices.",
      "Optimized the serial reading routines for lower latency.",
    ],
  },
  {
    slug: "ev-monitor-backend",
    kind: "work",
    icon: "thermometer",
    title: "Environmental Monitoring Device",
    stack: "Python & Sensor Data Acquisition",
    summary:
      "Sensor data acquisition for a device that monitors environmental parameters: Python that talks to the hardware, parses proprietary formats and logs the readings.",
    role: "Maintenance & Features",
    timeline: "2020 - Present",
    tagline: "Python sensor acquisition for environmental monitoring.",
    overview:
      "The data-acquisition layer of a device that monitors environmental parameters. Python interfaces directly with the hardware sensors, parses their data structures and formats the readings for logging and analysis.\n\nThe same tooling doubles as a standalone monitor that can be deployed quickly to verify hardware performance in the field.",
    techStack: [
      { name: "Python", category: "Language" },
      { name: "Sensor APIs", category: "Hardware" },
      { name: "Linux Scripting", category: "Automation" },
      { name: "Data Parsing", category: "Processing" },
    ],
    challenges: [
      {
        title: "Hardware Interfacing",
        description:
          "Drivers and scripts for proprietary sensor interfaces, including parsing of non-standard binary formats.",
      },
    ],
    responsibilities: [
      "Built the Python scripts for automated sensor data retrieval.",
      "Developed the environmental monitoring and logging routines.",
      "Automated the sensor calibration verification tests.",
    ],
  },
  {
    slug: "homelab-infrastructure",
    kind: "personal",
    icon: "server",
    title: "Self-Hosted Private Cloud",
    stack: "Proxmox, Docker & Hybrid Networking",
    summary:
      "A personal cloud on Proxmox and Docker with split-DNS networking, VPN-tunnelled containers and automated cold-storage backups driven by a smart relay.",
    highlights: ["20+ self-hosted services"],
    role: "System Engineer & Administrator",
    timeline: "Ongoing",
    tagline: "20+ services on Proxmox and Docker, built and run at home.",
    overview:
      "Design and administration of a personal cloud on Proxmox VE. It hosts applications from media streaming (Jellyfin and the Arr stack) to productivity tools (Nextcloud, Paperless-ngx), orchestrated with Docker on an Ubuntu VM.\n\nThe network uses a split-DNS strategy for seamless local and remote access, VPN tunnelling (Gluetun) for selected containers, and a custom disaster-recovery routine that physically controls hardware power for cold backups.",
    techStack: [
      { name: "Proxmox VE", category: "Virtualization" },
      { name: "Docker & Compose", category: "Orchestration" },
      { name: "Nginx Proxy Manager", category: "Edge Router" },
      { name: "Bash & Python", category: "Automation" },
      { name: "Tailscale", category: "Mesh VPN" },
      { name: "AdGuard Home", category: "DNS/Security" },
    ],
    challenges: [
      {
        title: "Hybrid Networking & Security",
        description:
          "Split DNS (AdGuard/DuckDNS) resolves the same URLs correctly on LAN and WAN. Gluetun tunnels specific containers (P2P, indexing) through a commercial VPN while the rest of the stack stays reachable locally.",
      },
      {
        title: "Automated Cold Storage",
        description:
          "A Bash and MQTT (Tasmota) routine powers on a USB drive through a smart relay, mounts it, stops the services for database consistency, runs an rsync backup and cuts the power when done.",
      },
    ],
    responsibilities: [
      "Manage lifecycle and storage volumes (bind mounts) for over 20 concurrent services.",
      "Run a secure reverse proxy (Nginx) with wildcard SSL certificates.",
      "Balance resources between heavy workloads such as media transcoding and database IO.",
    ],
  },
];

export const workProjects = projects.filter((p) => p.kind === "work");
export const personalProjects = projects.filter((p) => p.kind === "personal");

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * How I develop: AI-assisted engineering with Claude. Not a project of its own,
 * but the working method behind the recent ones.
 */
export const aiWorkflow = {
  kicker: "AI-native development",
  title: "How I Work",
  intro:
    "Claude is part of my daily engineering loop, not an autocomplete. I design the workflow around it: reusable skills for recurring tasks, hooks that enforce the project's rules automatically, MCP servers that connect the agent to real tools, and sub-agents that research, implement and review in parallel while I stay on architecture and product decisions.",
  points: [
    {
      icon: "layers",
      title: "Skills & Hooks",
      description:
        "Skills capture how a task is done in a given codebase so it is done the same way every time. Hooks run checks and formatting on every change, without anyone having to remember.",
    },
    {
      icon: "radio",
      title: "MCP & Agents",
      description:
        "MCP servers give the agent access to the tools around the code: issue trackers, browsers, deploy targets. Sub-agents split research, implementation and review so the work runs in parallel.",
    },
    {
      icon: "activity",
      title: "About 3x faster",
      description:
        "From requirement to reviewed, tested code in roughly a third of the time it used to take me, measured on my own delivery cycle.",
    },
  ] satisfies Array<{ icon: ProjectIcon; title: string; description: string }>,
  /** Anthropic certificates, shown as chips when present. */
  certifications: [
    { name: "Introduction to Agent Skills", issuer: "Anthropic", issued: "June 2026", credentialId: "u8os6jnnaqbc" },
    { name: "Introduction to Subagents", issuer: "Anthropic", issued: "June 2026", credentialId: "y7uvhmxbccbp" },
  ],
};

/** Career-wide numbers, shown as a strip under the hero. */
export const stats = [
  { value: "<200 ms", label: "API responses on constrained hardware" },
  { value: "99.9%", label: "uptime on the industrial gateway" },
  { value: "20+", label: "features per quarter, zero rollbacks" },
  { value: "90%+", label: "test coverage with JUnit, Mockito & Playwright" },
];
