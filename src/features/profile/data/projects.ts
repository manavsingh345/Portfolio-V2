import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "graphidraw",
    title: "GraphiDraw",
    period: { start: "01.2025" },
    link: "https://github.com/manavsingh345/GraphiDraw",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "WebSocket",
      "Tailwind CSS",
      "MySQL",
    ],
    isExpanded: true,
    description: `A web-based collaborative whiteboard that allows users to draw, sketch, and visually organize ideas using a clean hand-drawn style. Built with a scalable project structure to support collaboration, performance, and future feature growth.

**Key Features**
- Real-time collaboration allowing multiple users to draw and edit simultaneously
- Support for drawing and manipulating different shapes, lines, and freehand sketches
- Live cursor and canvas updates to reflect changes across all connected users
- User authentication and session-based access to shared boards
- Automated testing and CI pipelines for a monorepo-based Next.js app with real-time WebSocket features`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=GraphiDraw",
  },
  {
    id: "brainbox-ai-visual-knowledge-base",
    title: "BrainBox - AI Visual and Knowledge Base",
    period: { start: "02.2025" },
    link: "https://github.com/manavsingh345/BrainBox",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Docker",
      "Redis",
      "LangChain",
      "BullMQ",
      "MySQL",
    ],
    description: `BrainBox is an intelligent assistant designed to help users think, learn, and remember better. It allows users to chat with AI, upload links (YouTube, articles, tweets, etc.), and ask contextual questions based on those sources, turning scattered information into structured knowledge.

**Key Features**
- Upload content via drag-and-drop and paste for all file types
- Process files, videos, and websites to deliver answers in simple language
- Build Notion-style pages for detailed notes
- Automated organization to handle tasks
- Instant search and chat across stored content`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=BrainBox",
  },
  {
    id: "varsity-stock-trading-platform",
    title: "Varsity - Stock Trading Platform",
    period: { start: "03.2025" },
    link: "https://github.com/manavsingh345/Varsity",
    skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    description: `A modern and full-featured trading platform built with the MERN stack + Razorpay integration. This project replicates a complete online stock trading experience, including user authentication, dashboard analytics, live stock prices, order management, wallet system, and a support ticket system.

**Key Features**
- View user-specific holdings, positions, orders
- Interactive data visualization and charts
- Wallet & Razorpay integration
- Real-time updated holdings & positions fetched by user`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Varsity",
  },
  {
    id: "edustack-modern-lms",
    title: "EduStack - Modern Learning Management System (LMS)",
    period: { start: "04.2025" },
    link: "https://github.com/manavsingh345/EduStack",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Google Gemini API",
    ],
    description: `EduStack is a modern LMS built with the MERN stack, Tailwind CSS, and Clerk for authentication. It features dynamic dashboards for educators and students, enabling efficient course management, content delivery, and interactive learning—all designed to streamline online education.

**Key Features**
- Create, update, and manage courses with syllabus/resources, student monitoring, and performance analytics
- Browse available courses, enroll easily, and access all course materials in one place
- Leave ratings and reviews to share feedback and improve learning quality
- Track personal profile details and learning progress seamlessly`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=EduStack",
  },
  {
    id: "quick-ai",
    title: "Quick AI",
    period: { start: "05.2025" },
    link: "https://github.com/manavsingh345/Quick-AI",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "BullMQ",
      "Docker",
      "Google Gemini API",
    ],
    description: `The platform supports secure PDF upload and AI-based processing, asynchronous job handling, and seamless service integration.

**Key Features**
- Secure PDF upload & AI processing
- AI responses powered by Google Gemini
- Background job handling using BullMQ
- Queue-based task execution and dockerized architecture
- High-speed data store with Valkey`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Quick+AI",
  },
];
