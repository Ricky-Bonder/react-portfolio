// app/experiences/[expslug]/page.tsx
import ExperienceDetailClient from './client'

// --- 1. RICH DATA SOURCE ---
// This replaces your simple array. It acts as a database.
const projectsData: Record<string, any> = {
 'go-svelte-web-app': {
    title: "Modern Full-Stack Platform",
    role: "Lead Software Engineer",
    timeline: "2021 - Present",
    tagline: "Architecting the migration from legacy monoliths to Go & SvelteKit.",
    overview:
      "A strategic modernization initiative to replace legacy systems with a high-performance, cross-platform architecture. The solution runs natively on resource-constrained Embedded Linux devices while simultaneously serving a responsive web interface for remote management.\n\nOperating with total autonomy and reporting directly to management, I drove the full lifecycle—bridging the gap between Product (PO) requirements and User Experience (UX) designs to deliver a robust, scalable product.",
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
        description: "Replacing a heavy Java monolith with Go allowed us to reduce the memory footprint by 60% on limited hardware, while maintaining feature parity through a Domain-Driven Design (DDD) approach.",
      },
      {
        title: "Unified UX Architecture",
        description: "The UI required a 'native' feel on touch-screen embedded devices and responsiveness on desktop. SvelteKit + Tailwind allowed us to build a shared component system (documented in Storybook) for consistent UX across targets.",
      },
    ],
    responsibilities: [
      "Translated vague business requirements into concrete technical specifications (TDD/DDD).",
      "Acted as the primary technical stakeholder between the Product Owner and UX Designer.",
      "Designed the RESTful API contract and implemented automated E2E testing pipelines."
    ]
  },
'java-embedded-app': {
    title: "Embedded HMI & Control Application",
    role: "Embedded Software Engineer",
    timeline: "2020 - 2021",
    tagline: "Rich UI and control logic for Embedded Linux using JavaFX & Java 17.",
    overview:
      "This project involved designing the primary Human-Machine Interface (HMI) and high-level control logic for Linux-based embedded devices. By leveraging Java 11/17 and JavaFX, we delivered a responsive local user interface while simultaneously handling background logic for API integration and protocol management.\n\nMy focus was on ensuring the application remained performant on limited hardware while maintaining a seamless user experience.",
    techStack: [
      { name: "Java 11/17", category: "Core Runtime" },
      { name: "JavaFX", category: "UI Framework" },
      { name: "Linux (Embedded)", category: "OS" },
      { name: "REST API", category: "Integration" },
      { name: "MQTT", category: "Telemetry" }
    ],
    challenges: [
      {
        title: "UI Performance on Embedded",
        description: "Running a JavaFX GUI on resource-constrained Linux hardware required strict memory management and optimization of the rendering pipeline to prevent UI stutter.",
      },
      {
        title: "Protocol Integration",
        description: "The app had to visualize real-time data from Serial/MQTT sources without blocking the UI thread, requiring a robust asynchronous event-handling architecture.",
      }
    ],
    responsibilities: [
      "Designed the JavaFX UI components and tied them to backend logical services.",
      "Maintained the high-level application lifecycle on the Linux target.",
      "Implemented REST API clients for external configuration and remote control."
    ]
  },

  'scala-backend': {
    title: "High-Throughput Data Acquisition Service",
    role: "Backend Engineer",
    timeline: "2020 - 2021",
    tagline: "Reactive stream processing using Scala and Akka Actors.",
    overview:
      "A specialized backend service designed to ingest, process, and forward high-frequency data streams. Utilizing the Actor Model via Scala and Akka, the system was architected to handle concurrency natively, ensuring that failures in one data stream (e.g., a specific sensor) would not crash the entire system.\n\nThe service acted as the reliability layer, buffering data during network instability and guaranteeing delivery via MQTT.",
    techStack: [
      { name: "Scala", category: "Language" },
      { name: "Akka Actors", category: "Concurrency" },
      { name: "MQTT", category: "Messaging" },
      { name: "Serial", category: "Hardware Interface" },
      { name: "API Integration", category: "Connectivity" }
    ],
    challenges: [
      {
        title: "Concurrency & Fault Tolerance",
        description: "Managing simultaneous data streams required a non-blocking architecture. The Akka Actor system allowed for 'Let it Crash' fault tolerance, isolating failures to individual actors.",
      },
      {
        title: "Algorithm Optimization",
        description: "Implemented custom buffering algorithms to handle backpressure when the upstream network was slower than the ingestion rate.",
      }
    ],
    responsibilities: [
      "Developed robust data acquisition services using the Actor Model.",
      "Ensured reliable communication via Serial and MQTT protocols.",
      "Designed APIs for internal communication between system components."
    ]
  },

  'gateway-backend': {
    title: "Legacy IoT Gateway Middleware",
    role: "Java Developer",
    timeline: "2020 - 2021",
    tagline: "Bridging Serial devices to Web Protocols using Java 8.",
    overview:
      "Maintenance and feature development for a critical gateway application responsible for translating low-level Serial data into web-compatible formats. Running on a legacy Java 8 environment, this system served as the bridge between industrial fieldbus protocols and modern web dashboards.\n\nThe focus was on stability, backwards compatibility, and efficient data transmission over both wired and wireless interfaces.",
    techStack: [
      { name: "Java 8", category: "Language" },
      { name: "Serial Comm", category: "Protocol" },
      { name: "Web Protocols", category: "Transmission" },
      { name: "Linux", category: "OS" }
    ],
    challenges: [
      {
        title: "Legacy Constraints",
        description: "Working within the constraints of Java 8 required implementing modern patterns without access to newer language features, ensuring stability on older hardware revisions.",
      },
      {
        title: "Data Integrity",
        description: "Ensuring zero data corruption during the translation from raw Serial bytes to structured web payloads."
      }
    ],
    responsibilities: [
      "Managed data transmission logic between Serial ports and Web interfaces.",
      "Maintained and patched the legacy codebase for extended device support.",
      "Optimized serial port reading routines for lower latency."
    ]
  },

  'ev-monitor-backend': {
    title: "Automated Sensor Monitoring",
    role: "Automation Engineer",
    timeline: "2020 - 2021",
    tagline: "Python-driven data extraction and environmental sensing.",
    overview:
      "A dedicated scripting and backend solution for automated sensor data retrieval. This project utilized Python's rich ecosystem to interface directly with hardware sensors (environmental/EV metrics), parse complex data structures, and format them for analysis.\n\nIt served as a standalone monitoring tool that could be deployed rapidly to verify hardware performance in the field.",
    techStack: [
      { name: "Python", category: "Language" },
      { name: "Sensor APIs", category: "Hardware" },
      { name: "Linux Scripting", category: "Automation" },
      { name: "Data Parsing", category: "Processing" }
    ],
    challenges: [
      {
        title: "Hardware Interfacing",
        description: "Writing drivers and scripts to communicate with proprietary sensor interfaces and parsing non-standard binary data formats."
      }
    ],
    responsibilities: [
      "Built Python scripts for automated sensor data retrieval.",
      "Developed routines for environmental monitoring and logging.",
      "Automated the testing process for sensor calibration verification."
    ]
  },
 'homelab-infrastructure': {
    title: "Self-Hosted Private Cloud",
    role: "System Engineer & Administrator",
    timeline: "Ongoing",
    tagline: "Production-grade infrastructure managing 20+ services via Proxmox & Docker.",
    overview:
      "Design and administration of a high-availability personal cloud running on Proxmox VE. The system hosts a comprehensive suite of applications ranging from media streaming (Jellyfin/Arr-stack) to productivity tools (Nextcloud, Paperless-ngx), orchestrated via Docker on an Ubuntu VM.\n\n\n\nThe infrastructure features a sophisticated 'Split DNS' networking strategy for seamless local/remote access, hardened security via VPN tunneling (Gluetun), and a custom disaster recovery system that physically manages hardware power states for cold backups.",
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
        description: "Implemented a Split DNS strategy (AdGuard/DuckDNS) to ensure seamless URL resolution across LAN and WAN. Integrated 'Gluetun' to tunnel specific containers (P2P/Indexing) through a commercial VPN while keeping the rest of the stack accessible locally.",
      },
      {
        title: "Automated Cold Storage",
        description: "Developed a disaster recovery protocol using Bash and MQTT (Tasmota). The system automatically powers on a physical USB drive via a smart relay, mounts the filesystem, performs an rsync backup (stopping services to ensure DB consistency), and cuts power upon completion.",
      },
    ],
    responsibilities: [
      "Managed the lifecycle and storage volumes (Bind Mounts) for over 20 concurrent microservices.",
      "Configured a secure reverse proxy (Nginx) with Wildcard SSL certificates.",
      "Optimized resource allocation for heavy workloads (Media Transcoding vs. Database IO)."
    ]
  },
};

// --- 2. GENERATE STATIC PARAMS ---
// This tells Next.js which pages to build
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    expslug: slug,
  }))
}

// --- 3. THE PAGE COMPONENT ---
export default function ExperienceDetail({
  params,
}: {
  params: { expslug: string }
}) {
  // Fetch the data for this specific project
  const project = projectsData[params.expslug];

  // If the project doesn't exist (404 protection), return null or a not found component
  if (!project) {
    return <div>Project not found</div>;
  }

  // Pass the rich data to the Client Component
  return <ExperienceDetailClient data={project} />
}