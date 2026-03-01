import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import OrangeBtn from "../common/OrangeBtn";
import SectionTag from "../common/SectionTag";

export default function ContactSection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();
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
      ? "bg-[#1a1a1a] border-white/10 text-white placeholder-[#555] focus:border-orange-500/60"
      : "bg-[#f5f5f5] border-black/10 text-[#0f0f0f] placeholder-[#aaa] focus:border-orange-500/50 focus:bg-white"
  }`;

  return (
    <section
      id="contact"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          <SectionTag text="Contact" />
          <h2
            className={`mb-3 text-4xl font-black transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
          >
            Let's build something
          </h2>
          <p className={`mb-12 text-base ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
            Open to full-time roles, internships, and exciting collaborations.
          </p>

          <div
            className={`rounded-3xl border p-8 transition-colors duration-300 lg:p-12 ${
              dark ? "border-white/6 bg-[#1a1a1a]" : "border-black/6 bg-white"
            }`}
          >
            {sent ? (
              <div className="mb-6 rounded-xl border border-orange-500/30 bg-orange-500/10 px-5 py-4 text-sm font-semibold text-orange-500">
                Message received. I will get back to you soon.
              </div>
            ) : null}

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                      dark ? "text-[#b3b3b3]" : "text-[#777]"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    className={fieldClass}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label
                    className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                      dark ? "text-[#b3b3b3]" : "text-[#777]"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    className={fieldClass}
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                    dark ? "text-[#b3b3b3]" : "text-[#777]"
                  }`}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder="Tell me about the role or project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-5">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className={`text-sm font-semibold transition-colors duration-200 hover:text-orange-500 ${
                      dark ? "text-[#b3b3b3]" : "text-[#777]"
                    }`}
                  >
                    {social}
                  </a>
                ))}
              </div>
              <OrangeBtn onClick={submit}>Send Message &rarr;</OrangeBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
