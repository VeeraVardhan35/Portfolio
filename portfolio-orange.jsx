import { useState, useEffect, useRef, createContext, useContext } from "react";

// ─── Theme Context ────────────────────────────────────────────────────────────
const ThemeCtx = createContext();
function useTheme() { return useContext(ThemeCtx); }

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV = ["About", "Stack", "Projects", "Journey", "Contact"];
const WORDS = ["Ideas", "Concepts", "Products", "Experiences"];

const PROJECTS = [
  {
    id: 1,
    title: "DevCollab",
    sub: "Real-time developer workspace",
    desc: "Full-stack platform for shared code environments, live chat, and collaborative PR reviews. Synced in real-time using WebSockets.",
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=900&q=80",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "#", github: "#",
  },
  {
    id: 2,
    title: "ShopSphere",
    sub: "Modern e-commerce platform",
    desc: "End-to-end shopping app with JWT auth, Stripe payments, admin dashboard, inventory control, and real-time order tracking.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
    stack: ["React", "Express", "MySQL", "Stripe"],
    live: "#", github: "#",
  },
  {
    id: 3,
    title: "PulseAPI",
    sub: "API health monitoring tool",
    desc: "Monitor REST endpoints with scheduled pings, response-time graphs, email downtime alerts, and public status page generation.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    stack: ["React", "Node.js", "MongoDB", "REST APIs"],
    live: "#", github: "#",
  },
];

const STACK = [
  { name: "React", icon: "⚛", cat: "Frontend" },
  { name: "JavaScript", icon: "JS", cat: "Frontend" },
  { name: "Tailwind CSS", icon: "✦", cat: "Frontend" },
  { name: "HTML / CSS", icon: "◈", cat: "Frontend" },
  { name: "Node.js", icon: "⬡", cat: "Backend" },
  { name: "Express.js", icon: "⚡", cat: "Backend" },
  { name: "MongoDB", icon: "◉", cat: "Database" },
  { name: "MySQL", icon: "◎", cat: "Database" },
  { name: "Git / GitHub", icon: "◈", cat: "Tools" },
  { name: "REST APIs", icon: "⇌", cat: "Tools" },
];

const TIMELINE = [
  { year: "2023", title: "The Beginning", desc: "Wrote my first HTML page and got hooked. Spent the entire summer learning HTML, CSS, and vanilla JavaScript obsessively." },
  { year: "Late 2023", title: "Mastering React", desc: "Discovered component-driven architecture. Built 6 UI projects, learned hooks, state management, and shipped my first portfolio." },
  { year: "Early 2024", title: "Going Full-Stack", desc: "Picked up Node.js and Express. Built REST APIs, connected databases, and finally understood the complete picture of web development." },
  { year: "Mid 2024", title: "Real Projects", desc: "Shipped three production-grade full-stack apps. Learned JWT auth, Stripe payments, Socket.io, and the importance of error handling." },
  { year: "Now", title: "Ready to Contribute", desc: "Actively seeking full-time roles. I bring speed, clean code, and a relentless learning mindset to every team I join." },
];

const HERO_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80";

// ─── Utility Hooks ─────────────────────────────────────────────────────────────
function useScrolled() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const fn = () => setS(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return s;
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function useWordCycle(words, ms = 2500) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setI(x => (x + 1) % words.length); setShow(true); }, 350);
    }, ms);
    return () => clearInterval(t);
  }, []);
  return [words[i], show];
}

// ─── Shared Components ─────────────────────────────────────────────────────────
function SectionTag({ text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-0.5 bg-orange-500" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">{text}</span>
    </div>
  );
}

function OrangeBtn({ children, onClick }) {
  return (
    <button onClick={onClick}
      className="relative group px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 text-white bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] active:scale-95">
      {children}
    </button>
  );
}

function GhostBtn({ children, href }) {
  return (
    <a href={href}
      className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-orange-500/40 text-orange-500 hover:bg-orange-500/10 transition-all duration-200">
      {children}
    </a>
  );
}

function Badge({ label }) {
  const { dark } = useTheme();
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-300 ${
      dark ? "bg-[#1a1a1a] border-orange-500/25 text-orange-300" : "bg-orange-50 border-orange-200 text-orange-700"
    }`}>
      {label}
    </span>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const { dark, toggle } = useTheme();
  const scrolled = useScrolled();
  const go = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? dark
          ? "bg-[#0f0f0f]/85 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
          Alex<span className="text-orange-500">.</span>Dev
        </span>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(l => (
            <button key={l} onClick={() => go(l)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-orange-500 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
              {l}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button onClick={toggle}
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 border ${
              dark ? "bg-[#1a1a1a] border-white/10 hover:border-orange-500/50 text-white" : "bg-[#f5f5f5] border-black/10 hover:border-orange-500/50 text-[#0f0f0f]"
            }`}>
            {dark ? "☀" : "◐"}
          </button>
          <OrangeBtn onClick={() => go("Contact")}>Hire Me</OrangeBtn>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const { dark } = useTheme();
  const [word, show] = useWordCycle(WORDS);

  return (
    <section id="hero" className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[100px] ${dark ? "bg-orange-500" : "bg-orange-300"}`} />
        {/* subtle dot grid */}
        <div className={`absolute inset-0 ${dark ? "opacity-[0.04]" : "opacity-[0.07]"}`}
          style={{ backgroundImage: `radial-gradient(circle, ${dark ? "#fff" : "#000"} 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Available badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
              dark ? "bg-orange-500/10 border border-orange-500/30 text-orange-400" : "bg-orange-50 border border-orange-200 text-orange-600"
            }`}>
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Available for full-time roles
            </div>

            {/* Headline */}
            <h1 className={`text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.06] tracking-tight mb-6 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
              Shaping{" "}
              <span
                className="text-orange-500 inline-block"
                style={{
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0px)" : "translateY(14px)",
                  transition: "opacity 0.32s ease, transform 0.32s ease",
                  minWidth: "200px",
                  display: "inline-block",
                }}>
                {word}
              </span>
              <br />into Real Projects<br />
              <span className={dark ? "text-[#b3b3b3]" : "text-[#555]"}>that Deliver Results</span>
            </h1>

            <p className={`text-lg leading-relaxed mb-10 max-w-lg transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
              Full-stack developer obsessed with clean architecture, meaningful UX,
              and building software that <em>actually works</em> in production.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <OrangeBtn onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View My Projects →
              </OrangeBtn>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 hover:border-orange-500/60 ${
                  dark ? "border-white/15 text-[#b3b3b3] hover:text-white" : "border-black/15 text-[#555] hover:text-[#0f0f0f]"
                }`}>
                Let's Talk
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 mt-14 pt-8 border-t border-dashed border-orange-500/20">
              {[["3+", "Projects Shipped"], ["10+", "Technologies"], ["1 yr", "of Building"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-black text-orange-500">{n}</p>
                  <p className={`text-xs mt-0.5 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-orange-500/30 to-orange-600/10 blur-2xl" />
              {/* Orange border frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[24px] overflow-hidden"
                style={{ boxShadow: "0 0 0 2px #ff6b00, 0 0 60px rgba(255,107,0,0.25), 0 30px 60px rgba(0,0,0,0.4)" }}>
                <img src={HERO_IMG} alt="Developer portrait"
                  className="w-full h-full object-cover object-top" />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
              {/* floating badge */}
              <div className={`absolute -bottom-4 -left-6 px-4 py-3 rounded-2xl flex items-center gap-2 shadow-2xl transition-colors duration-300 ${
                dark ? "bg-[#1a1a1a] border border-white/10" : "bg-white border border-black/8"
              }`}>
                <span className="text-xl">💻</span>
                <div>
                  <p className={`text-xs font-bold ${dark ? "text-white" : "text-[#0f0f0f]"}`}>Full-Stack</p>
                  <p className="text-[11px] text-orange-500">Developer</p>
                </div>
              </div>
              {/* floating badge 2 */}
              <div className={`absolute -top-4 -right-6 px-4 py-3 rounded-2xl shadow-2xl transition-colors duration-300 ${
                dark ? "bg-[#1a1a1a] border border-white/10" : "bg-white border border-black/8"
              }`}>
                <p className="text-xs font-bold text-orange-500">Open to Work</p>
                <p className={`text-[11px] ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>FT / Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────
function About() {
  const { dark } = useTheme();
  const [ref, vis] = useInView();

  return (
    <section id="about" className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center"
          style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.7s ease" }}>
          {/* Left — About image */}
          <div className="relative">
            <div className={`absolute -inset-3 rounded-[28px] ${dark ? "bg-orange-500/8" : "bg-orange-100/60"} blur-xl`} />
            <div className={`relative rounded-[24px] overflow-hidden border-2 ${dark ? "border-orange-500/25" : "border-orange-300/50"}`}>
              <img src={ABOUT_IMG} alt="Developer working"
                className="w-full h-80 lg:h-[440px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`px-4 py-3 rounded-xl backdrop-blur-md border ${dark ? "bg-black/60 border-white/10" : "bg-white/80 border-white/60"}`}>
                  <p className={`text-sm font-bold ${dark ? "text-white" : "text-[#0f0f0f]"}`}>Currently exploring</p>
                  <p className="text-xs text-orange-500 font-semibold mt-0.5">Docker · TypeScript · System Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <SectionTag text="About Me" />
            <h2 className={`text-4xl lg:text-5xl font-black leading-tight mb-6 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
              I don't just write code.<br />
              <span className="text-orange-500">I solve problems.</span>
            </h2>
            <p className={`text-base leading-relaxed mb-5 transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
              I'm a fresher full-stack developer who went from complete beginner to shipping
              production-ready applications in under a year. I care deeply about clean code,
              thoughtful system design, and user experiences that feel effortless.
            </p>
            <p className={`text-base leading-relaxed mb-8 transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
              My mindset: understand the problem first, architect the solution second,
              and write maintainable code third. I learn fast, adapt faster, and I'm always
              building something — even on weekends.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Problem-First Thinking", "Clean Architecture", "Fast Learner", "Team Collaborator"].map(t => (
                <div key={t} className={`flex items-center gap-2 text-sm font-medium ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
                  <span className="w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-[10px]">✓</span>
                  {t}
                </div>
              ))}
            </div>

            <OrangeBtn onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Let's Build Together →
            </OrangeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Tech Stack ────────────────────────────────────────────────────────────────
function TechStack() {
  const { dark } = useTheme();
  const [ref, vis] = useInView();

  return (
    <section id="stack" className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}>
          <SectionTag text="Tech Stack" />
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
            Tools I build with
          </h2>
          <p className={`text-base mb-14 max-w-lg transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
            Technologies I've invested time mastering — from idea to deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {STACK.map(({ name, icon, cat }, i) => (
            <div key={name}
              className={`group rounded-2xl p-5 cursor-default border transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 ${
                dark
                  ? "bg-[#1a1a1a] border-white/8 hover:bg-[#1f1f1f] hover:shadow-[0_0_30px_rgba(255,107,0,0.12)]"
                  : "bg-[#f5f5f5] border-black/6 hover:bg-white hover:shadow-[0_8px_40px_rgba(255,107,0,0.12)]"
              }`}
              style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: `opacity 0.5s ease ${i * 55}ms, transform 0.5s ease ${i * 55}ms, box-shadow 0.3s, border-color 0.3s, background 0.3s, translate 0.3s` }}>
              <div className={`text-2xl font-black mb-3 transition-colors duration-300 group-hover:text-orange-500 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
                {icon}
              </div>
              <p className={`text-sm font-bold mb-1 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>{name}</p>
              <p className={`text-xs transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  const { dark } = useTheme();
  const [ref, vis] = useInView();

  return (
    <section id="projects" className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}>
          <SectionTag text="Projects" />
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
            Things I've shipped
          </h2>
          <p className={`text-base mb-14 max-w-lg transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
            Real full-stack projects — not just tutorial clones.
          </p>
        </div>

        <div className="space-y-10">
          {PROJECTS.map((p, i) => {
            const [pRef, pVis] = useInView(0.1);
            const even = i % 2 === 0;
            return (
              <div key={p.id} ref={pRef}
                className={`group grid lg:grid-cols-2 rounded-3xl overflow-hidden border transition-all duration-500 ${
                  dark ? "bg-[#1a1a1a] border-white/6 hover:border-orange-500/30" : "bg-white border-black/6 hover:border-orange-500/30"
                } ${pVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                {/* image */}
                <div className={`relative overflow-hidden h-64 lg:h-auto ${even ? "" : "lg:order-last"}`}>
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black/40" />
                  <div className={`absolute top-5 ${even ? "left-5" : "right-5"} px-3 py-1.5 rounded-full text-xs font-bold bg-orange-500 text-white`}>
                    0{p.id}
                  </div>
                </div>
                {/* content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Featured Project</span>
                  <h3 className={`text-2xl lg:text-3xl font-black mb-2 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>{p.title}</h3>
                  <p className={`text-sm mb-4 transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>{p.sub}</p>
                  <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.stack.map(s => <Badge key={s} label={s} />)}
                  </div>
                  <div className="flex gap-4">
                    <GhostBtn href={p.live}>Live Demo ↗</GhostBtn>
                    <a href={p.github} className={`flex items-center text-sm font-semibold transition-colors duration-200 hover:text-orange-500 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Journey / Timeline ────────────────────────────────────────────────────────
function Journey() {
  const { dark } = useTheme();
  const [ref, vis] = useInView();

  return (
    <section id="journey" className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}>
          <SectionTag text="Learning Journey" />
          <h2 className={`text-4xl lg:text-5xl font-black mb-16 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
            How I got here
          </h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/40 to-transparent" />

          <div className="space-y-12">
            {TIMELINE.map(({ year, title, desc }, i) => {
              const [tRef, tVis] = useInView(0.1);
              return (
                <div key={i} ref={tRef} className="relative pl-20"
                  style={{ opacity: tVis ? 1 : 0, transform: tVis ? "none" : "translateX(-24px)", transition: `all 0.5s ease ${i * 100}ms` }}>
                  {/* dot */}
                  <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"
                    style={{ boxShadow: "0 0 18px rgba(255,107,0,0.5)" }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  <div className={`rounded-2xl p-6 border transition-colors duration-300 ${
                    dark ? "bg-[#1a1a1a] border-white/6" : "bg-[#f5f5f5] border-black/6"
                  }`}>
                    <span className="text-xs font-black uppercase tracking-widest text-orange-500">{year}</span>
                    <h3 className={`text-xl font-black mt-1 mb-2 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>{title}</h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const { dark } = useTheme();
  const [ref, vis] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4500);
  };

  const fieldClass = `w-full rounded-xl px-4 py-3.5 text-sm border outline-none font-medium transition-all duration-200 ${
    dark
      ? "bg-[#1a1a1a] border-white/10 text-white placeholder-[#555] focus:border-orange-500/60 focus:shadow-[0_0_0_3px_rgba(255,107,0,0.12)]"
      : "bg-[#f5f5f5] border-black/10 text-[#0f0f0f] placeholder-[#aaa] focus:border-orange-500/50 focus:shadow-[0_0_0_3px_rgba(255,107,0,0.1)] focus:bg-white"
  }`;

  return (
    <section id="contact" className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}>
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}>
          <SectionTag text="Contact" />
          <h2 className={`text-4xl lg:text-5xl font-black mb-3 transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
            Let's build something
          </h2>
          <p className={`mb-12 text-base transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
            Open to full-time roles, internships, and exciting collaborations. Don't be a stranger.
          </p>

          <div className={`rounded-3xl p-8 lg:p-12 border transition-colors duration-300 ${
            dark ? "bg-[#1a1a1a] border-white/6" : "bg-white border-black/6"
          }`}>
            {sent && (
              <div className="rounded-xl px-5 py-4 mb-6 text-sm font-semibold bg-orange-500/10 border border-orange-500/30 text-orange-500">
                ✓ Message received! I'll get back to you within 24 hours.
              </div>
            )}

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>Full Name</label>
                  <input className={fieldClass} placeholder="John Doe" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>Email Address</label>
                  <input className={fieldClass} placeholder="john@company.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>Message</label>
                <textarea rows={5} className={`${fieldClass} resize-none`} placeholder="Tell me about the role or project..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-5">
                {["GitHub", "LinkedIn", "Twitter"].map(s => (
                  <a key={s} href="#" className={`text-sm font-semibold transition-colors duration-200 hover:text-orange-500 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>
                    {s}
                  </a>
                ))}
              </div>
              <OrangeBtn onClick={submit}>Send Message →</OrangeBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const { dark } = useTheme();
  return (
    <footer className={`py-8 border-t transition-colors duration-500 ${
      dark ? "bg-[#0f0f0f] border-white/6" : "bg-white border-black/6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <span className={`text-lg font-black transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
          Alex<span className="text-orange-500">.</span>Dev
        </span>
        <p className={`text-xs transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>
          © {new Date().getFullYear()} — Designed & built with care.
        </p>
        <div className="flex gap-5">
          {["GitHub", "LinkedIn", "Twitter", "Email"].map(s => (
            <a key={s} href="#" className={`text-xs font-semibold transition-colors duration-200 hover:text-orange-500 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const toggle = () => setDark(d => !d);

  return (
    <ThemeCtx.Provider value={{ dark, toggle }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', 'Mona Sans', sans-serif; }
        ::selection { background: rgba(255,107,0,0.35); color: #fff; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #ff6b00; border-radius: 4px; }
        input, textarea { font-family: inherit; }
        a { text-decoration: none; }
        .transition-colors { transition-property: color, background-color, border-color; }
      `}</style>
      <div className={`transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeCtx.Provider>
  );
}
