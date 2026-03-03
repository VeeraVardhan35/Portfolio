import { useEffect, useMemo, useRef, useState } from "react";
import SectionTag from "../common/SectionTag";
import { useTheme } from "../../context/ThemeContext";

const TECH_CATEGORIES = [
  {
    id: "frontend",
    name: "Frontend",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    skills: [
      { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS", logo: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    skills: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express.js", logo: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "Django", logo: "https://cdn.simpleicons.org/django/44B78B" },
      {
        name: "Django REST Framework",
        logo: "https://cdn.simpleicons.org/djangorestframework/FF1709",
      },
      { name: "JWT", logo: "https://cdn.simpleicons.org/jsonwebtokens/F97316" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    skills: [
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Deployment",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
    skills: [
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "CI/CD", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Swagger", logo: "https://cdn.simpleicons.org/swagger/85EA2D" },
    ],
  },
  {
    id: "ai",
    name: "AI Integration",
    logo: "https://cdn.simpleicons.org/openai/10A37F",
    skills: [
      { name: "OpenAI / LLM APIs", logo: "https://cdn.simpleicons.org/openai/10A37F" },
      { name: "RAG", logo: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "Embeddings", logo: "https://cdn.simpleicons.org/weaviate/00E88F" },
      { name: "FAISS / Chroma", logo: "https://cdn.simpleicons.org/chromatic/FC521F" },
    ],
  },
];

function SkillLogo({ logo, name }) {
  const [error, setError] = useState(false);

  if (error || !logo) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-500/15 text-xs font-bold text-orange-400">
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${name} logo`}
      className="h-6 w-6 object-contain"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

function CategoryCard({ category, isOpen, onClick, dark }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`skills-${category.id}`}
      className={`group rounded-[2rem] border p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)] ${
        dark ? "bg-white/[0.03]" : "bg-white"
      } ${
        isOpen ? "border-orange-500/40" : dark ? "border-white/10" : "border-black/10"
      }`}
    >
      <div
        className={`mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${
          dark ? "border-white/10 bg-[#1a1a1a]" : "border-black/10 bg-[#f5f5f5]"
        }`}
      >
        <SkillLogo logo={category.logo} name={category.name} />
      </div>
      <p
        className={`text-sm font-bold transition-colors duration-300 ${
          isOpen ? "text-orange-400" : dark ? "text-white" : "text-[#111]"
        }`}
      >
        {category.name}
      </p>
    </button>
  );
}

function SkillCard({ skill, index, visible, dark }) {
  return (
    <div
      className={`rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/30 ${
        dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white"
      } ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${index * 50}ms` : "0ms" }}
    >
      <div className="flex items-center gap-3">
        <SkillLogo logo={skill.logo} name={skill.name} />
        <span className={`text-sm font-semibold ${dark ? "text-[#d0d0d0]" : "text-[#333]"}`}>
          {skill.name}
        </span>
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const { dark } = useTheme();
  const [openId, setOpenId] = useState(null);
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const activeCategory = useMemo(
    () => TECH_CATEGORIES.find((category) => category.id === openId) || null,
    [openId]
  );

  useEffect(() => {
    if (!activeCategory) {
      setVisible(false);
      setContentHeight(0);
      return;
    }

    const element = contentRef.current;
    if (!element) return;

    setContentHeight(element.scrollHeight);
    const timer = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && activeCategory) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeCategory]);

  const handleToggle = (id) => {
    if (openId === id) {
      setVisible(false);
      setTimeout(() => {
        setOpenId(null);
      }, 220);
      return;
    }

    if (openId) {
      setVisible(false);
      setTimeout(() => {
        setOpenId(id);
      }, 220);
      return;
    }

    setOpenId(id);
  };

  return (
    <section
      id="stack"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag text="Tech Stack" />
        <h2 className={`mb-4 text-4xl font-black lg:text-5xl ${dark ? "text-white" : "text-[#111]"}`}>
          Tools I build with
        </h2>
        <p className={`mb-14 max-w-xl text-base ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
          Click a category to explore the technologies I use in production projects.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TECH_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              dark={dark}
              isOpen={openId === category.id}
              onClick={() => handleToggle(category.id)}
            />
          ))}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${openId ? "mt-6" : "mt-0"}`}
          style={{ maxHeight: openId ? `${contentHeight}px` : "0px", opacity: openId ? 1 : 0 }}
        >
          {activeCategory && (
            <div
              id={`skills-${activeCategory.id}`}
              ref={contentRef}
              className={`rounded-[2rem] border p-6 backdrop-blur-xl ${
                dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white"
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <SkillLogo logo={activeCategory.logo} name={activeCategory.name} />
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                  {activeCategory.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {activeCategory.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} visible={visible} dark={dark} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
