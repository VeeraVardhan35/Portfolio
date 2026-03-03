import { useState } from "react";
import { SOCIAL_LINKS } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import OrangeBtn from "../common/OrangeBtn";
import SectionTag from "../common/SectionTag";

export default function ContactSection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const socialLinks = [
    { label: "GitHub", href: SOCIAL_LINKS.github },
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
    { label: "Codeforces", href: SOCIAL_LINKS.codeforces },
    { label: "LeetCode", href: SOCIAL_LINKS.leetcode },
    { label: "AtCoder", href: SOCIAL_LINKS.atcoder },
  ];

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_3co83ch";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_i7tnsrf";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "95-hTd_wpK9AEevoy";
    const toEmail = import.meta.env.VITE_CONTACT_EMAIL;

    if (!serviceId || !templateId || !publicKey || !toEmail) {
      setError("Email service is not fully configured yet. Add VITE_CONTACT_EMAIL in .env.");
      return;
    }

    try {
      setSending(true);
      setError("");

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_name: "Veeravardhan",
            to_email: toEmail,
            toEmail: toEmail,
            email: toEmail,
            recipient: toEmail,
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            message: form.message,
            submitted_at: new Date().toLocaleString(),
          },
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(`EmailJS ${response.status}: ${details || "Unknown error"}`);
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4500);
    } catch (submitError) {
      const message =
        submitError instanceof Error ? submitError.message : "Unable to send right now. Please try again.";
      setError(message);
    } finally {
      setSending(false);
    }
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
            {error ? (
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm font-semibold text-red-500">
                {error}
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
              <div className="flex flex-wrap gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm font-semibold transition-colors duration-200 hover:text-orange-500 ${
                      dark ? "text-[#b3b3b3]" : "text-[#777]"
                    }`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
              <OrangeBtn onClick={submit}>{sending ? "Sending..." : "Send Message ->"}</OrangeBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
