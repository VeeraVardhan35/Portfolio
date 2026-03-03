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
    title: "CVAstra",
    sub: "Intelligent Job Application & Resume Optimization Assistant",
    desc: "Developed a smart job application assistant that parses resumes, extracts job keywords, computes ATS match scores, and generates tailored cover letters. Designed scalable architecture to support local AI models, browser autofill automation, and application tracking analytics.",
    img: "/images/projects/clickit-featured.svg",
    stack: ["React", "Node.js", "Express", "MongoDB", "NLP", "TF-IDF", "Chrome Extension", "Ollama (planned)"],
    live: "#",
    github: "https://github.com/VeeraVardhan35/",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "ResQFlash",
    sub: "AI-Driven Emergency Response & Ambulance Dispatch Platform",
    desc: "Built an intelligent emergency response system that prioritizes patients using a dynamic severity scoring engine and automatically dispatches the nearest available ambulance and hospital. Implemented real-time tracking with Socket.io, live GPS updates, and continuous priority recalculation to maximize patient survival probability.",
    img: "/images/projects/resqflash-featured.svg",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Leaflet", "JWT", "Docker"],
    live: "#",
    github: "https://github.com/VeeraVardhan35/ResQFlash",
    status: "Currently Working",
  },
  {
    id: 3,
    title: "Toopz",
    sub: "Real-time social collaboration SaaS",
    desc: "Full-stack platform for social collaboration with JWT authentication, role-based access, and real-time messaging using Socket.IO. Optimized backend performance with Redis caching and deployed a production-ready scalable system.",
    img: "/images/projects/toopz-featured.svg",
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Tailwind CSS",
    ],
    live: "#",
    github: "https://github.com/VeeraVardhan35/Toopz",
  },
  {
    id: 4,
    title: "Trash Collector and Sorter Robot",
    sub: "AI-powered recyclable material sorting robot",
    desc: "Built an autonomous robotic arm that detects and sorts recyclable materials using TensorFlow Lite and OpenCV on Raspberry Pi, with Arduino-controlled servo actuation for precise movement.",
    img: "/images/projects/robotic-arm-featured.svg",
    stack: ["Raspberry Pi", "Arduino", "TensorFlow Lite", "OpenCV", "Python", "C++"],
    live: "#",
    github: "https://github.com/VeeraVardhan35/Trash-Collector-and-Sorter-Robot",
  },
  {
    id: 5,
    title: "Codeforces Problem Picker",
    sub: "Smart competitive programming problem selector",
    desc: "Web app that dynamically selects Codeforces problems by difficulty and tags while avoiding duplicates. Automated database updates via Codeforces API and deployed on Render.",
    img: "/images/projects/codeforces-featured.svg",
    stack: ["Django", "PostgreSQL", "Bootstrap", "Render"],
    live: "#",
    github: "https://github.com/VeeraVardhan35/Codeforces-Problem-Picker",
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
    title: "The Beginning",
    desc: "Wrote my first HTML page and got hooked. Spent the entire summer learning HTML, CSS, and vanilla JavaScript obsessively.",
  },
  {
    year: "Late 2023",
    title: "Mastering React",
    desc: "Discovered component-driven architecture. Built multiple UI projects, learned hooks, state management, and shipped my first portfolio.",
  },
  {
    year: "Early 2024",
    title: "Algorithmic Foundations",
    desc: "Strengthened problem-solving through Data Structures & Algorithms and competitive programming. Solved hundreds of problems and achieved strong ratings on Codeforces and LeetCode, improving my ability to write efficient and scalable code.",
  },
  {
    year: "Early 2024",
    title: "Going Full-Stack",
    desc: "Picked up Node.js and Express. Built REST APIs, connected databases, and understood the complete end-to-end flow of web applications.",
  },
  {
    year: "Mid 2024",
    title: "Real Projects & Deployment",
    desc: "Shipped production-grade full-stack applications with JWT auth, real-time features using Socket.io, and containerized deployments using Docker and modern cloud platforms.",
  },
  {
    year: "Now",
    title: "Ready to Contribute",
    desc: "Actively building scalable systems and AI-powered applications. I bring strong problem-solving, clean architecture, and a production mindset to every team I join.",
  },
];

export const HERO_IMG = "/images/hero-room.jpg";
export const HERO_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80";
export const ABOUT_IMG = "/images/about-photo.jpeg";
export const ABOUT_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80";
