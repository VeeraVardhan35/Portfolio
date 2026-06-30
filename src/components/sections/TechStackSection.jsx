import { useEffect, useMemo, useRef, useState } from "react";
import SectionTag from "../common/SectionTag";
import { useTheme } from "../../context/ThemeContext";

const TECH_CATEGORIES = [
  {
    id: "frontend",
    name: "Frontend",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    skills: [
      { name: "React.js", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript (ES6+)", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/1572B6" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Vite", logo: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Zustand", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "React Router", logo: "https://cdn.simpleicons.org/reactrouter/CA4245" },
      { name: "Socket.IO Client", logo: "https://cdn.simpleicons.org/socketdotio/010101" },
      { name: "Monaco Editor", logo: "" },
      { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer/0055FF" },
      { name: "Shadcn/UI", logo: "https://cdn.simpleicons.org/shadcnui/FFFFFF" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    skills: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express.js", logo: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Django", logo: "https://cdn.simpleicons.org/django/092E20" },
      { name: "JWT Authentication", logo: "https://cdn.simpleicons.org/jsonwebtokens/F97316" },
      { name: "REST APIs", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "WebSockets", logo: "https://cdn.simpleicons.org/socketdotio/010101" },
      { name: "Socket.IO", logo: "https://cdn.simpleicons.org/socketdotio/010101" },
      { name: "Colyseus", logo: "" },
      { name: "gRPC", logo: "https://cdn.simpleicons.org/grpc/244C5A" },
      { name: "Protocol Buffers", logo: "" },
      { name: "OAuth", logo: "https://cdn.simpleicons.org/oauth/FFFFFF" },
      { name: "Multer", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Cloudinary API", logo: "https://cdn.simpleicons.org/cloudinary/3448C5" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    skills: [
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Mongoose", logo: "https://cdn.simpleicons.org/mongoose/880000" },
      { name: "Drizzle ORM", logo: "https://cdn.simpleicons.org/drizzle/C5F015" },
      { name: "Qdrant", logo: "" },
      { name: "Vector Databases", logo: "https://cdn.simpleicons.org/weaviate/00E88F" },
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
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "CMake", logo: "https://cdn.simpleicons.org/cmake/064F8C" },
      { name: "Render", logo: "" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
      { name: "Nginx", logo: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
  {
    id: "ai",
    name: "AI Integration",
    logo: "https://cdn.simpleicons.org/openai/10A37F",
    skills: [
      { name: "RAG", logo: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "Agentic AI", logo: "https://cdn.simpleicons.org/openai/10A37F" },
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "LangGraph", logo: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "Cohere Embeddings", logo: "https://cdn.simpleicons.org/cohere/000000" },
      { name: "OpenRouter API", logo: "https://cdn.simpleicons.org/openai/10A37F" },
      { name: "LLM Applications", logo: "https://cdn.simpleicons.org/openai/10A37F" },
      { name: "Prompt Engineering", logo: "https://cdn.simpleicons.org/openai/10A37F" },
      { name: "Embedding Models", logo: "https://cdn.simpleicons.org/weaviate/00E88F" },
      { name: "Vector Search", logo: "" },
      { name: "Semantic Search", logo: "https://cdn.simpleicons.org/weaviate/00E88F" },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    logo: "https://cdn.simpleicons.org/cplusplus/00599C",
    skills: [
      { name: "C", logo: "https://cdn.simpleicons.org/c/A8B9CC" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", logo: "https://cdn.simpleicons.org/java/007396" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "SQL", logo: "https://cdn.simpleicons.org/sqlite/003B57" },
    ],
  },
  {
    id: "corecs",
    name: "Core CS",
    logo: "https://cdn.simpleicons.org/codeforces/1F8ACB",
    skills: [
      { name: "Data Structures & Algorithms", logo: "https://cdn.simpleicons.org/codeforces/1F8ACB" },
      { name: "OOP", logo: "https://cdn.simpleicons.org/java/007396" },
      { name: "DBMS", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Operating Systems", logo: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Computer Networks", logo: "https://cdn.simpleicons.org/wireshark/167EC6" },
      { name: "Distributed Systems", logo: "https://cdn.simpleicons.org/apache/D22128" },
      { name: "System Design", logo: "https://cdn.simpleicons.org/gitbook/3963FF" },
      { name: "Cloud Computing", logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
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

        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
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
