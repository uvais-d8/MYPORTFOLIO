export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  achievements: string[];
  metrics?: { label: string; value: string }[];
  codeUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  status: 'ACTIVE' | 'COMPLETED';
  summary: string;
  tech: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  status: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface PortfolioData {
  profile: {
    name: string;
    alias: string;
    title: string;
    status: string;
    location: string;
    uptime: string;
    bio: string;
    shortBio: string;
    avatarPrompt: string;
    stats: { label: string; value: string }[];
  };
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skillsList: string[];
  learning: string[];
  achievements: string[];
  philosophy: string;
  timeline: string[];
  contactInfo: {
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string; 
    instagram: string;
    facebook: string; 
    location: string;
    mapLink: string;
  };
  terminal: {
    welcomeMessage: string;
    helpText: string;
  };
}

export const portfolioConfig: PortfolioData = {
  profile: {
    name: "Muhammed Uvais",
    alias: "UVAIS_DEV_02",
    title: "Backend Developer | MERN Stack Developer",
    status: "TELEMETRY STABLE // INGESTING MESSAGES",
    location: "Malappuram, Kerala, India",
    uptime: "99.98%",
    bio: "I'm a passionate Backend Developer specializing in scalable web applications, REST APIs, real-time systems, and cloud-ready backend architectures. I enjoy solving real-world problems, optimizing performance, designing clean architectures, and continuously learning modern technologies.",
    shortBio: "Building powerful, scalable backend systems and high-throughput REST APIs.",
    avatarPrompt: "futuristic holographic glowing human face mesh cyan neon lines digital grid wireframe background",
    stats: [
      { label: "Years Learning", value: "4+" },
      { label: "Projects Completed", value: "15+" },
      { label: "Technologies Mastered", value: "25+" },
      { label: "Production Uptime", value: "99.9%" }
    ]
  },
  skills: [
    {
      title: "Backend Core",
      skills: [
        { name: "Node.js", level: 93, icon: "Cpu" },
        { name: "NestJS", level: 92, icon: "Server" },
        { name: "Express.js", level: 90, icon: "Terminal" },
        { name: "REST API Design", level: 95, icon: "Layers" },
        { name: "Socket.io", level: 85, icon: "Radio" },
        { name: "WebRTC", level: 75, icon: "Video" }
      ]
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "MongoDB", level: 90, icon: "Database" },
        { name: "PostgreSQL", level: 82, icon: "Database" },
        { name: "MySQL", level: 80, icon: "Database" },
        { name: "Redis", level: 75, icon: "Layers" }
      ]
    },
    {
      title: "Frontend Integration",
      skills: [
        { name: "React.js", level: 85, icon: "Atom" },
        { name: "Redux / Context API", level: 80, icon: "Sliders" },
        { name: "Tailwind CSS", level: 88, icon: "Layout" },
        { name: "Vite", level: 85, icon: "Zap" }
      ]
    },
    {
      title: "DevOps & Languages",
      skills: [
        { name: "TypeScript", level: 90, icon: "Code" },
        { name: "JavaScript (ESNext)", level: 92, icon: "Code" },
        { name: "Docker", level: 78, icon: "Package" },
        { name: "AWS EC2 / S3", level: 76, icon: "Cloud" },
        { name: "Nginx / PM2", level: 80, icon: "Sliders" },
        { name: "Linux Systems", level: 82, icon: "Terminal" }
      ]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Backend Developer",
      company: "Product Based Logistics Company",
      period: "2024 - PRESENT",
      status: "ACTIVE",
      summary: "Responsible for building and maintaining enterprise logistics software using NestJS and MongoDB.",
      tech: ["NestJS", "MongoDB", "TypeScript", "REST APIs", "Git", "Docker", "PM2"],
      achievements: [
        "Developing and optimizing scalable REST APIs handling fleet telemetry and shipment lifecycles.",
        "Designing MongoDB databases with complex aggregations, schemas, and indexing strategies.",
        "Implementing authentication & authorization policies alongside granular permission rules.",
        "Fixing critical production bugs, analyzing query bottle-necks, and conducting code reviews."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Higher Secondary (+2)",
      institution: "State Board, Kerala",
      status: "COMPLETED"
    },
    {
      id: "edu-2",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "IGNOU (Distance Mode)",
      status: "CURRENTLY PURSUING"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "S9 Trucks Hub",
      category: "Enterprise System",
      tagline: "Logistics Dispatch & Operations Platform",
      description: "An enterprise fleet management platform designed to orchestrate schedules, trip logs, and vehicle driver registries in real time.",
      tech: ["NestJS", "MongoDB", "TypeScript", "REST APIs", "Docker"],
      role: "Backend Developer",
      achievements: [
        "Implemented Driver Management and Trip Management workflow state-machines.",
        "Built modular authentication, JWT transmission, and API route security checks.",
        "Analyzed database query telemetry to optimize lookup indexing profiles."
      ],
      metrics: [
        { label: "Framework", value: "NestJS" },
        { label: "Database", value: "MongoDB" }
      ]
    },
    {
      id: "proj-2",
      title: "NEXTICK Platform",
      category: "E-Commerce Suite",
      tagline: "Smartwatch E-commerce & Operations Portal",
      description: "A comprehensive smartwatch e-commerce platform offering product categorization, stock checks, discount coupons, and payment flows.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      role: "Fullstack Developer",
      achievements: [
        "Integrated Razorpay secure payment gateway endpoints.",
        "Designed back-office admin dashboard for product categories, image cropping, and stock levels.",
        "Created promotional coupon validator and dynamic discount calculation rules."
      ],
      metrics: [
        { label: "Payment Gateway", value: "Razorpay" },
        { label: "Core Stack", value: "MERN Stack" }
      ]
    },
    {
      id: "proj-3",
      title: "Netflix Streaming Client",
      category: "Frontend UI",
      tagline: "React Media Catalog Clone",
      description: "A responsive Netflix catalog replica demonstrating high-fidelity CSS overlays, user auth flows, and media listing displays.",
      tech: ["React.js", "CSS Modules", "Context API", "TMDB API"],
      role: "Frontend Developer",
      achievements: [
        "Constructed fluid grid layout responsive to Mobile, Tablet, and Desktop screens.",
        "Configured TMDB media streams feed loading."
      ],
      metrics: [
        { label: "UX Fidelity", value: "98%" },
        { label: "Render Frame", value: "60 FPS" }
      ]
    },
    {
      id: "proj-4",
      title: "OLX Classifieds Clone",
      category: "Fullstack Platform",
      tagline: "Peer-to-Peer Product Trade Platform",
      description: "A classified listing app offering creation, updates, lookup, and deletion of user advertising boards.",
      tech: ["React.js", "Express.js", "MongoDB", "Firebase Auth"],
      role: "Fullstack Developer",
      achievements: [
        "Implemented CRUD APIs for ads listing and user verification steps.",
        "Wrote structured file uploads linked to cloud storage assets."
      ]
    },
    {
      id: "proj-5",
      title: "Art Results Portal",
      category: "Web Application",
      tagline: "Excel-driven Student Grade Analyzer",
      description: "A specialized grade management system supporting bulk excel imports and student lookup dashboards.",
      tech: ["React.js", "Node.js", "MongoDB", "xlsx parser"],
      role: "Fullstack Developer",
      achievements: [
        "Wrote fast parsing scripts rendering Excel sheets into MongoDB records.",
        "Designed secure student login pages verifying score sheet keys."
      ]
    }
  ],
  skillsList: [
    "Backend Development", "REST API Development", "Authentication", "Authorization",
    "Database Design", "API Security", "Scalable Architecture", "JWT",
    "MongoDB Aggregation", "Performance Optimization", "Clean Code", "Problem Solving",
    "Debugging", "Git Workflow", "Linux Systems", "Docker Containers"
  ],
  learning: [
    "Advanced NestJS", "System Design", "Microservices Architecture", "Docker & Kubernetes",
    "AWS Ecosystem", "CI/CD Pipelines", "Redis Caching", "WebSockets Integration", "Backend Performance"
  ],
  achievements: [
    "Working professionally as Backend Developer",
    "Built multiple full stack applications",
    "Experience with enterprise software codebase",
    "Strong debugging and profiling skills",
    "Continuously learning modern backend technologies"
  ],
  philosophy: "Great software is built through clean architecture, continuous learning, and solving real-world problems—not by chasing complexity.",
  timeline: [
    "Learning Web Development",
    "Learning MERN Stack",
    "Building Full Stack Projects",
    "Started Professional Career",
    "Backend Developer",
    "Learning System Design",
    "Future Software Architect"
  ],
  contactInfo: {
    email: "muhammeduvais6060@gmail.com",
    phone: "+91 7594060696",
    whatsapp: "917594060696",
    github: "github.com/uvais-d8",
    linkedin: "linkedin.com/in/muhammed-uvais-t-aab0a5320", 
    instagram: "instagram.com/uvais_d8",
    facebook: "facebook.com/profile.php?id=61562901427940", 
    location: "Malappuram, Kerala, India",
    mapLink: "https://www.google.com/maps/place/11%C2%B008'05.6%22N+76%C2%B002'51.2%22E/@11.1329403,76.0446171,16.8z/data=!4m4!3m3!8m2!3d11.134899!4d76.047542?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
  },
  terminal: {
    welcomeMessage: `==========================================================
// ACCESS GRANTED // WELCOME TO UVAIS_DEV CORE TERMINAL v2.8
// DEPLOYED ON: Malappuram, Kerala, India
// TYPE 'help' TO INITIATE DECRYPTION CODES
==========================================================`,
    helpText: `
Available commands:
  help     - Show command options.
  about    - Load occupant bio and active system profile.
  skills   - Telemetry of tech stack and proficiency.
  projects - Query listing of deployed projects.
  experience - Stream timeline of professional service logs.
  contact  - Output encrypted communication links.
  clear    - Flush telemetry log from buffer.
  hack     - Trigger Matrix rain system bypass overlay.
`
  }
};
