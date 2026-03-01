export const NAV = ["About", "Stack", "Projects", "Journey", "Contact"];
export const WORDS = ["Ideas", "Concepts", "Products", "Experiences"];

export const PROJECTS = [
  {
    id: 1,
    title: "DevCollab",
    sub: "Real-time developer workspace",
    desc: "Full-stack platform for shared code environments, live chat, and collaborative PR reviews. Synced in real-time using WebSockets.",
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=900&q=80",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "ShopSphere",
    sub: "Modern e-commerce platform",
    desc: "End-to-end shopping app with JWT auth, Stripe payments, admin dashboard, inventory control, and real-time order tracking.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
    stack: ["React", "Express", "MySQL", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "PulseAPI",
    sub: "API health monitoring tool",
    desc: "Monitor REST endpoints with scheduled pings, response-time graphs, email downtime alerts, and public status page generation.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    stack: ["React", "Node.js", "MongoDB", "REST APIs"],
    live: "#",
    github: "#",
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
    desc: "Discovered component-driven architecture. Built 6 UI projects, learned hooks, state management, and shipped my first portfolio.",
  },
  {
    year: "Early 2024",
    title: "Going Full-Stack",
    desc: "Picked up Node.js and Express. Built REST APIs, connected databases, and finally understood the complete picture of web development.",
  },
  {
    year: "Mid 2024",
    title: "Real Projects",
    desc: "Shipped three production-grade full-stack apps. Learned JWT auth, Stripe payments, Socket.io, and the importance of error handling.",
  },
  {
    year: "Now",
    title: "Ready to Contribute",
    desc: "Actively seeking full-time roles. I bring speed, clean code, and a relentless learning mindset to every team I join.",
  },
];

export const HERO_IMG = "/images/hero-room.jpg";
export const HERO_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80";
export const ABOUT_IMG = "/images/about-photo.jpeg";
export const ABOUT_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80";
