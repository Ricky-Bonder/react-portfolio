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
  /** One concrete, measurable result. Only set when there is a real number. */
  highlight?: string;
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
      "Led the migration of a legacy Java monolith to a Go backend and SvelteKit frontend that runs both on embedded Linux devices and in the browser.",
    highlight: "60% lower memory footprint",
    role: "Lead Software Engineer",
    timeline: "2021 - Present",
    tagline: "Migrating a legacy monolith to Go & SvelteKit.",
    overview:
      "A modernization initiative replacing legacy systems with a cross-platform architecture. The same application runs natively on resource-constrained Embedded Linux devices and serves a responsive web interface for remote management.\n\nReporting directly to management, I drove the full lifecycle: from Product Owner requirements and UX designs to a shipped, scalable product.",
    techStack: [
      { name: "Go (Gin/Gorm)", category: "Backend Core" },
      { name: "SvelteKit", category: "Frontend Framework" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "TypeScript", category: "Language" },
      { name: "Playwright", category: "E2E Testing" },
      { name: "Docker", category: "Deployment" },
    ],
    challenges: [
      {
        title: "Legacy Migration & Performance",
        description:
          "Replacing a heavy Java monolith with Go cut the memory footprint by 60% on limited hardware, while a Domain-Driven Design approach kept feature parity.",
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
    ],
  },
  {
    slug: "java-embedded-app",
    kind: "work",
    icon: "monitor",
    title: "Embedded Linux HMI",
    stack: "Java 11/17, JavaFX & MQTT",
    summary:
      "Built the on-device HMI and control logic in JavaFX for Embedded Linux, keeping the UI responsive while API integration and telemetry run in the background.",
    role: "Embedded Software Engineer",
    timeline: "2020 - 2021",
    tagline: "Rich UI and control logic for Embedded Linux with JavaFX.",
    overview:
      "Design of the primary Human-Machine Interface (HMI) and high-level control logic for Linux-based embedded devices. Java 11/17 and JavaFX delivered a responsive local interface while the same process handled API integration and protocol management in the background.\n\nThe focus was keeping the application fast on limited hardware without compromising the user experience.",
    techStack: [
      { name: "Java 11/17", category: "Core Runtime" },
      { name: "JavaFX", category: "UI Framework" },
      { name: "Linux (Embedded)", category: "OS" },
      { name: "REST API", category: "Integration" },
      { name: "MQTT", category: "Telemetry" },
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
    ],
    responsibilities: [
      "Designed the JavaFX UI components and wired them to the backend services.",
      "Maintained the application lifecycle on the Linux target.",
      "Implemented REST API clients for external configuration and remote control.",
    ],
  },
  {
    slug: "scala-backend",
    kind: "work",
    icon: "activity",
    title: "Reactive IoT Middleware",
    stack: "Scala, Akka & Concurrency",
    summary:
      "A fault-tolerant data acquisition service on Scala and Akka Actors that buffers and forwards sensor streams over MQTT through unstable networks.",
    role: "Backend Engineer",
    timeline: "2020 - 2021",
    tagline: "Reactive stream processing with Scala and Akka Actors.",
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
      "Developed the data acquisition services using the Actor Model.",
      "Ensured reliable communication over Serial and MQTT.",
      "Designed the internal APIs between system components.",
    ],
  },
  {
    slug: "gateway-backend",
    kind: "work",
    icon: "radio",
    title: "Legacy IoT Gateway",
    stack: "Java 8, Serial & Web Protocols",
    summary:
      "Maintained and extended the gateway middleware that translates industrial Serial data into web-compatible payloads on a Java 8 runtime.",
    role: "Java Developer",
    timeline: "2020 - 2021",
    tagline: "Bridging Serial devices to web protocols on Java 8.",
    overview:
      "Maintenance and feature development for the gateway application that translates low-level Serial data into web-compatible formats. Running on a legacy Java 8 environment, it is the bridge between industrial fieldbus protocols and modern web dashboards.\n\nStability, backwards compatibility and efficient transmission over both wired and wireless links were the priorities.",
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
    title: "Sensor Data Automation",
    stack: "Python & Hardware Interfacing",
    summary:
      "Python tooling that talks directly to hardware sensors, parses proprietary binary formats and logs environmental data for field verification.",
    role: "Automation Engineer",
    timeline: "2020 - 2021",
    tagline: "Python-driven data extraction and environmental sensing.",
    overview:
      "A scripting and backend toolset for automated sensor data retrieval. Python interfaces directly with hardware sensors (environmental and EV metrics), parses their data structures and formats the output for analysis.\n\nIt works as a standalone monitoring tool that can be deployed quickly to verify hardware performance in the field.",
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
    highlight: "20+ self-hosted services",
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
  /** Anthropic certification names, shown as chips when present. */
  certifications: [] as string[],
};
