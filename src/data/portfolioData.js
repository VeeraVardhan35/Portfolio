export const NAV = ["About", "Stack", "Projects", "Journey", "Contact"];
export const WORDS = ["Building", "Showcasing", "Digitalizing", "Designing"];
export const BRAND = "VeeraVardhan";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/veeravardhan-lingasani-35a4992b5/",
  github: "https://github.com/VeeraVardhan35",
  codeforces: "https://codeforces.com/profile/veeravardhan",
  leetcode: "https://leetcode.com/u/Veeravardhan/",
  atcoder: "https://atcoder.jp/users/Veeravardhan",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Hashnet",
    sub: "Real-time Distributed RAG-based Multiplayer Coding Platform",
    desc: "Real-time multiplayer coding with AI-powered question generation, live collaboration, intelligent code execution and leaderboards.",
    img: "/images/projects/hashnet-featured.svg",
    logo: "code",
    stack: ["React.js", "TypeScript", "Colyseus.js", "Node.js", "MongoDB", "Qdrant"],
    live: "https://hashnet.vercel.app",
    github: "https://github.com/VeeraVardhan35/hashnet",
  },
  {
    id: 2,
    title: "CosmoKV",
    sub: "High-Performance Sharded Distributed Key-Value Store",
    desc: "Fault-tolerant key-value store with consistent hashing, WAL, read repair, sharding, and automatic failover for high availability.",
    img: "/images/projects/cosmokv-featured.svg",
    logo: "database",
    stack: ["C++", "gRPC", "Protobuf", "WAL", "Consistent Hashing", "POSIX Threads"],
    live: "#",
    github: "https://github.com/VeeraVardhan35/cosmo-kv",
  },
  {
    id: 3,
    title: "ResQFlash",
    sub: "AI-Driven Emergency Response & Healthcare Dispatch Platform",
    desc: "Optimizes dispatch allocation, real-time tracking, and hospital coordination using AI and predictive analytics.",
    img: "/images/projects/resqflash-featured.svg",
    logo: "rescue",
    stack: ["FastAPI", "Python", "React.js", "PostgreSQL", "Redis", "Socket.IO"],
    live: "#",
    github: "https://github.com/VeeraVardhan35/resQflash-emergency-system",
  },
  {
    id: 4,
    title: "Toopz",
    sub: "University Social Collaboration SaaS Platform",
    desc: "Connect, collaborate and stay informed with real-time messaging, groups, and role-based access control.",
    img: "/images/projects/toopz-featured.svg",
    logo: "toopz",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "JWT"],
    live: "https://toopz-1.onrender.com/",
    github: "https://github.com/VeeraVardhan35/Toopz",
  },
  {
    id: 5,
    title: "Trash Collector & Sorter Robot",
    sub: "AI-powered recyclable material sorting robot",
    desc: "Autonomous robot that detects and sorts recyclable materials using computer vision and robotic automation.",
    img: "/images/projects/robotic-arm-featured.svg",
    logo: "robot",
    stack: ["OpenCV", "Python", "TensorFlow Lite", "Arduino", "IoT", "Robotics"],
    live: "#",
    github: "https://github.com/VeeraVardhan35/Trash_collector_robot",
  },
  {
    id: 6,
    title: "Codeforces Problem Picker",
    sub: "Smart problem suggestion engine",
    desc: "Recommends Codeforces problems based on difficulty, tags, and user progress to improve problem solving efficiency.",
    img: "/images/projects/codeforces-featured.svg",
    logo: "chart",
    stack: ["Next.js", "TypeScript", "Codeforces API", "PostgreSQL", "Tailwind CSS", "ShadCN UI"],
    live: "https://codeforces-problem-picker-2.onrender.com/",
    github: "https://github.com/VeeraVardhan35/Codeforces_Problem_Picker",
  },
];

export const STACK = [
  { name: "React", icon: "react", cat: "Frontend" },
  { name: "JavaScript", icon: "javascript", cat: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", cat: "Frontend" },
  { name: "HTML / CSS", icon: "htmlcss", cat: "Frontend" },
  { name: "Node.js", icon: "node", cat: "Backend" },
  { name: "Express.js", icon: "express", cat: "Backend" },
  { name: "MongoDB", icon: "mongodb", cat: "Database" },
  { name: "MySQL", icon: "mysql", cat: "Database" },
  { name: "Git / GitHub", icon: "github", cat: "Tools" },
  { name: "REST APIs", icon: "api", cat: "Tools" },
];

export const TIMELINE = [
  {
    year: "2023",
    title: "Started with Programming",
    desc: "Began my programming journey with C++ and Python while exploring core computer science concepts. Built a strong foundation in problem solving before moving into development.",
    icon: "rocket",
    tags: ["C++", "Python", "Basics", "Problem Solving"]
  },
  {
    year: "EARLY 2024",
    title: "DSA & Machine Learning Foundations",
    desc: "Focused on Data Structures & Algorithms, competitive programming, and machine learning fundamentals. Built strong analytical thinking and learned the mathematics behind modern AI systems.",
    icon: "brain",
    tags: ["DSA", "Algorithms", "Python", "NumPy", "ML Basics"]
  },
  {
    year: "MID 2024",
    title: "Backend Development with Django",
    desc: "Started backend development using Django. Learned REST APIs, authentication, ORM, database design, and how to build secure and scalable web applications.",
    icon: "django",
    tags: ["Django", "REST APIs", "PostgreSQL", "ORM"]
  },
  {
    year: "LATE 2024",
    title: "Full-Stack Development",
    desc: "Expanded into Node.js, Express.js, React.js, PostgreSQL, MongoDB, Redis, and WebSockets. Built production-ready full-stack applications with real-time communication and optimized backend architectures.",
    icon: "react",
    tags: ["Node.js", "Express.js", "React.js", "MongoDB", "PostgreSQL", "Redis", "WebSockets", "JWT", "Socket.IO"]
  },
  {
    year: "2025",
    title: "Distributed Systems",
    desc: "Explored distributed computing by building scalable systems using gRPC, Consistent Hashing, Write-Ahead Logging (WAL), replication, and concurrent programming concepts.",
    icon: "distributed",
    tags: ["C++", "gRPC", "Protobuf", "Consistent Hashing", "WAL", "Replication", "Multithreading"]
  },
  {
    year: "PRESENT",
    title: "Generative AI & Agentic Systems",
    desc: "Building AI-powered applications using RAG, LangChain, LangGraph, vector databases, embeddings, and multi-step agent workflows to solve real-world problems with LLMs.",
    icon: "agentic",
    tags: ["RAG", "LangChain", "LangGraph", "Qdrant", "Cohere", "OpenRouter", "LLMs", "Embeddings", "AI Agents"]
  }
];

export const HERO_IMG = "/images/hero-room.jpg";
export const HERO_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80";
export const ABOUT_IMG = "/images/about-photo.jpeg";
export const ABOUT_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80";
