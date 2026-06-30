import { useState, useEffect } from "react";
import { ABOUT_IMG, ABOUT_IMG_FALLBACK, SOCIAL_LINKS } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTag from "../common/SectionTag";

// Helper hook for smooth typing effect
function useTypingEffect(words, typeSpeed = 80, eraseSpeed = 40, delay = 2000) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (isDeleting) {
      // Erasing
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, eraseSpeed);
    } else {
      // Typing
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }, typeSpeed);
    }

    // Fully typed -> pause -> start deleting
    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    }

    // Fully erased -> move to next word
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typeSpeed, eraseSpeed, delay]);

  return currentText;
}

const TITLES = [
  "Full-Stack Developer",
  "Backend Developer",
  "Competitive Programmer",
  "AI Engineer",
  "Distributed Systems Engineer"
];

// Helper to format cycling title with first word in orange
const formatTypedTitle = (text) => {
  if (text.startsWith("Full-Stack")) {
    const second = text.slice(10).trim();
    return (
      <>
        <span className={`text-orange-500 ${second ? "mr-2" : ""}`}>Full-Stack</span>
        {second && <span>{second}</span>}
      </>
    );
  }
  if (text.startsWith("Backend")) {
    const second = text.slice(7).trim();
    return (
      <>
        <span className={`text-orange-500 ${second ? "mr-2" : ""}`}>Backend</span>
        {second && <span>{second}</span>}
      </>
    );
  }
  if (text.startsWith("Competitive")) {
    const second = text.slice(11).trim();
    return (
      <>
        <span className={`text-orange-500 ${second ? "mr-2" : ""}`}>Competitive</span>
        {second && <span>{second}</span>}
      </>
    );
  }
  if (text.startsWith("AI")) {
    const second = text.slice(2).trim();
    return (
      <>
        <span className={`text-orange-500 ${second ? "mr-2" : ""}`}>AI</span>
        {second && <span>{second}</span>}
      </>
    );
  }
  if (text.startsWith("Distributed Systems")) {
    const second = text.slice(19).trim();
    return (
      <>
        <span className={`text-orange-500 ${second ? "mr-2" : ""}`}>Distributed Systems</span>
        {second && <span>{second}</span>}
      </>
    );
  }
  return text;
};

export default function AboutSection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();
  const [aboutImage, setAboutImage] = useState(ABOUT_IMG);
  const currentText = useTypingEffect(TITLES, 80, 40, 2000);

  return (
    <section
      id="about"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#050814]" : "bg-[#f5f5f5]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className="flex flex-col gap-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(40px)",
            transition: "all 0.7s ease",
          }}
        >
          {/* Main profile layout */}
          <div className="grid items-center gap-16 lg:grid-cols-12">
            
            {/* Left Column: Avatar Profile Card */}
            <div className="lg:col-span-5 relative mx-auto w-full max-w-[420px]">
              
              {/* Outer Card border container */}
              <div className={`relative border rounded-[2.5rem] p-4 ${dark ? "border-white/10 bg-zinc-950/40" : "border-black/10 bg-white"} shadow-2xl`}>
                
                {/* Dotted grid decorative background behind the frame */}
                <div 
                  className="absolute -left-6 top-12 w-12 h-24 opacity-25 pointer-events-none" 
                  style={{ 
                    backgroundImage: 'radial-gradient(#ff6b00 1.5px, transparent 1.5px)', 
                    backgroundSize: '8px 8px' 
                  }} 
                />
                
                {/* Inner double border photo slot */}
                <div className={`relative rounded-[2rem] border-2 overflow-hidden p-3 ${dark ? "border-orange-500/25 bg-zinc-900/60" : "border-orange-300/40 bg-zinc-50"}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  <img
                    src={aboutImage}
                    alt="Veeravardhan Lingasani"
                    className="rounded-[1.5rem] w-full h-80 lg:h-[360px] object-cover object-top"
                    onError={() => setAboutImage(ABOUT_IMG_FALLBACK)}
                  />
                  
                  {/* Card bottom metrics (Three columns) */}
                  <div className="grid grid-cols-3 gap-2 pt-5 pb-1 border-t border-white/5 mt-4 text-center">
                    
                    {/* Item 1: Variable active role */}
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-orange-400 mb-1.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                      </span>
                      <span className={`text-[10px] font-extrabold leading-tight block h-7 flex items-center justify-center ${dark ? "text-zinc-300" : "text-zinc-700"}`}>
                        {currentText || "Full-Stack Developer"}
                      </span>
                    </div>
                    
                    {/* Item 2: Problem Solver */}
                    <div className="flex flex-col items-center justify-center border-x border-white/5">
                      <span className="text-orange-400 mb-1.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.96 14.96 0 01-5.96 0m5.96 0a14.96 14.96 0 000-5.96m-5.96 0a14.96 14.96 0 00-5.96 0" />
                        </svg>
                      </span>
                      <span className={`text-[10px] font-extrabold leading-tight block h-7 flex items-center justify-center ${dark ? "text-zinc-300" : "text-zinc-700"}`}>
                        Problem Solver
                      </span>
                    </div>

                    {/* Item 3: Backend Engineer */}
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-orange-400 mb-1.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
                        </svg>
                      </span>
                      <span className={`text-[10px] font-extrabold leading-tight block h-7 flex items-center justify-center ${dark ? "text-zinc-300" : "text-zinc-700"}`}>
                        Backend Engineer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Bio details */}
            <div className="lg:col-span-7">
              <SectionTag text="About Me" />
              
              {/* Full Name */}
              <h2
                className={`mb-1 text-4xl font-black leading-tight transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
              >
                Veeravardhan Lingasani
              </h2>
              
              {/* Variable subtitle typed title */}
              <div className={`mb-4 text-xl font-bold uppercase tracking-wider h-8 flex items-center ${dark ? "text-white" : "text-zinc-800"}`}>
                {formatTypedTitle(currentText)}
                <span className="animate-pulse ml-0.5 font-light text-orange-500">|</span>
              </div>
              
              {/* Degree status card */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold mb-6 ${
                dark ? "border-white/5 bg-white/[0.02] text-zinc-300" : "border-black/5 bg-zinc-100 text-zinc-700"
              }`}>
                <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 018.9 5.842 50.57 50.57 0 00-2.658.813m-12.484 0A50.78 50.78 0 0012 11.23c2.197-.186 4.31-.6 6.23-1.085m-12.48 0a50.78 50.78 0 01-6.23-1.085m6.23 1.085v8.158" />
                </svg>
                B.Tech, IIITDM Jabalpur (Expected 2027)
              </div>
              
              {/* Highlight Quote Block */}
              <div className={`relative rounded-2xl border p-5 mb-6 ${
                dark ? 'border-white/5 bg-zinc-950/20' : 'border-black/5 bg-zinc-50'
              }`}>
                <span className="absolute left-4 top-2 text-5xl font-serif text-orange-500/40 font-black leading-none pointer-events-none">“</span>
                <p className={`pl-8 text-base font-semibold leading-relaxed ${dark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  I build scalable APIs and production-ready backend systems that solve <span className="text-orange-500">real-world</span> problems.
                </p>
              </div>

              {/* Bio Paragraph description */}
              <p
                className={`mb-8 text-base leading-relaxed ${dark ? "text-zinc-400" : "text-[#555]"}`}
              >
                I'm a backend-focused full-stack developer who loves building scalable, secure, and performant applications. I specialize in the <span className="text-orange-400 font-semibold">MERN</span> stack and <span className="text-orange-400 font-semibold">Django</span>, with strong expertise in system design, clean architecture, and database optimization. I also enjoy solving complex problems through Data Structures, Algorithms, and Competitive Programming.
              </p>

              {/* Bio action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/resume_new.pdf"
                  target="_blank"
                  className="rounded-xl bg-orange-500 px-6 py-3.5 text-xs font-bold tracking-wide text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(255,107,0,0.45)] flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  View Resume
                  <span className="text-xs">&rarr;</span>
                </a>
                
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-xl border px-6 py-3.5 text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    dark
                      ? "border-white/10 bg-white/[0.01] text-zinc-300 hover:border-orange-500/40 hover:text-orange-400"
                      : "border-black/10 bg-zinc-50 text-zinc-700 hover:border-orange-500/60 hover:text-orange-600"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-xl border px-6 py-3.5 text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    dark
                      ? "border-white/10 bg-white/[0.01] text-zinc-300 hover:border-orange-500/40 hover:text-orange-400"
                      : "border-black/10 bg-zinc-50 text-zinc-700 hover:border-orange-500/60 hover:text-orange-600"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom stats row */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl border ${
            dark ? "border-white/5 bg-white/[0.01] backdrop-blur-md" : "border-black/5 bg-zinc-50 shadow-sm"
          }`}>
            {/* Stat 1: Problems Solved */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <p className={`text-xl font-black ${dark ? "text-white" : "text-[#111]"}`}>1500+</p>
                <p className="text-xs font-semibold text-zinc-400">Problems Solved</p>
              </div>
            </div>
            
            {/* Stat 2: LeetCode */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
                {/* Trophy */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.493m5.007 0a3 3 0 01-5.007 0m5.007 0V5.25m-5.007 0V5.25m5.007 0H9.493m5.007 0a3 3 0 00-5.007 0m5.007 0v-1.5a.75.75 0 00-.75-.75h-3.507a.75.75 0 00-.75.75v1.5m8.507 0V5.25m-8.507 0V5.25" />
                </svg>
              </div>
              <div>
                <p className={`text-xl font-black ${dark ? "text-white" : "text-[#111]"}`}>Knight</p>
                <p className="text-xs font-semibold text-zinc-400">LeetCode (1910)</p>
              </div>
            </div>

            {/* Stat 3: Codeforces */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
                {/* Star */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.15-.461.826-.461.97 0l3 9.14a1.5 1.5 0 001.4 1.01h9.585c.484 0 .686.621.296.918l-7.753 5.632a1.5 1.5 0 00-.54 1.66l3 9.14c.15.461-.383.85-.774.557l-7.753-5.632a1.5 1.5 0 00-1.68 0l-7.753 5.632c-.39.293-.924-.096-.774-.557l3-9.14a1.5 1.5 0 00-.54-1.66L1.137 15.183c-.39-.297-.188-.918.296-.918h9.585a1.5 1.5 0 001.4-1.01l3-9.14z" />
                </svg>
              </div>
              <div>
                <p className={`text-xl font-black ${dark ? "text-white" : "text-[#111]"}`}>Specialist</p>
                <p className="text-xs font-semibold text-zinc-400">Codeforces (1484)</p>
              </div>
            </div>

            {/* Stat 4: Hackbyte */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
                {/* Target */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21m-9-9a9 9 0 100 18 9 9 0 000-18zm0 4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
              </div>
              <div>
                <p className={`text-xl font-black ${dark ? "text-white" : "text-[#111]"}`}>Top 6</p>
                <p className="text-xs font-semibold text-zinc-400">Hackbyte 4.0 Finalist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
