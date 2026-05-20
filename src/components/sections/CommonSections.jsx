import { motion } from "framer-motion";
import { useState } from "react";

const sectionAnimation = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export function AboutSection({ id = "about", content, mode }) {
  const accent = mode === "cyber" ? "#2eff73" : "#9fb4a0";
  const projectCount = content.projects.items.length;

  return (
    <motion.section
      id={id}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="grid gap-4 lg:grid-cols-[2.2fr_1fr_1fr]"
    >
      <article className="panel p-6">
        <h2 className="headline text-4xl uppercase text-zinc-100">Philosophy</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">{content.about.body[0]}</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">{content.about.body[1]}</p>

        <div className="mt-7 flex gap-8">
          <div>
            <p className="headline text-5xl uppercase" style={{ color: accent }}>05+</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Years Path</p>
          </div>
          <div>
            <p className="headline text-5xl uppercase" style={{ color: accent }}>{String(projectCount).padStart(2, "0")}</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">Projects Deployed</p>
          </div>
        </div>
      </article>

      <article className="panel flex flex-col items-center justify-center p-6 text-center">
        <div className="text-2xl">?</div>
        <p className="mt-3 headline text-2xl uppercase text-zinc-100">3D Core</p>
        <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-zinc-500">Next / APIs / Database</p>
      </article>

      <article
        className={`flex flex-col justify-end p-6 ${mode === "cyber" ? "neon-cyber bg-[#2eff73] text-black" : "neon-normal bg-[#9fb4a0] text-black"}`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.12em]">Security First</p>
        <p className="headline mt-1 text-3xl uppercase leading-none">Mentality</p>
      </article>
    </motion.section>
  );
}

export function ProjectsSection({ id = "projects", content, mode }) {
  const accentClass = mode === "cyber" ? "text-[#2eff73]" : "text-[#9fb4a0]";

  return (
    <motion.section
      id={id}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="flex items-end justify-between">
        <h2 className="headline text-6xl uppercase leading-[0.85] text-zinc-100 sm:text-7xl">Selected Works</h2>
        <p className={`text-[0.62rem] uppercase tracking-[0.22em] ${accentClass}`}>Project Index</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {content.projects.items.map((project, index) => (
          <article key={project.name} className="panel group relative min-h-[260px] overflow-hidden p-6">
            {/* Background image */}
            {project.image && (
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/50" />
            {/* Accent gradient layer */}
            <div
              className={`absolute inset-0 opacity-60 ${
                mode === "cyber"
                  ? "bg-[radial-gradient(circle_at_35%_25%,_rgba(46,255,115,0.25),_transparent_50%),radial-gradient(circle_at_70%_70%,_rgba(22,201,255,0.2),_transparent_52%)]"
                  : "bg-[radial-gradient(circle_at_35%_25%,_rgba(96,165,250,0.25),_transparent_50%),radial-gradient(circle_at_70%_70%,_rgba(52,211,153,0.2),_transparent_52%)]"
              }`}
            />
            <div className="relative flex h-full flex-col justify-between">
              <p className={`text-[0.6rem] uppercase tracking-[0.2em] ${accentClass}`}>
                {String(index + 1).padStart(2, "0")} // {project.tech[0] || "stack"}
              </p>
              <div>
                <h3 className="headline text-5xl uppercase leading-[0.9] text-zinc-100">{project.name}</h3>
                <p className="mt-2 max-w-md text-sm text-zinc-300">{project.tagline}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export function TimelineSection({ id = "experience", content, mode }) {
  const accentClass = mode === "cyber" ? "text-[#2eff73]" : "text-[#9fb4a0]";
  const items = [...content.experience.items, ...(content.education?.items || [])];

  return (
    <motion.section
      id={id}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr]"
    >
      <div>
        <h2 className="headline text-6xl uppercase leading-[0.85] text-zinc-100 sm:text-7xl">Professional Trajectory</h2>
      </div>

      <div className="space-y-8">
        {items.map((item, idx) => (
          <article key={idx} className="border-t border-zinc-800 pt-5">
            <div className="flex items-center justify-between gap-4">
              <p className={`text-[0.6rem] uppercase tracking-[0.2em] ${accentClass}`}>
                {item.period || "timeline"}
              </p>
              <p className="text-[0.58rem] uppercase tracking-[0.18em] text-zinc-500">{item.place || item.company || "Global"}</p>
            </div>
            <h3 className="headline mt-2 text-4xl uppercase leading-[0.9] text-zinc-100">
              {item.role || item.school}
            </h3>
            {item.details ? <p className="mt-2 max-w-3xl text-sm text-zinc-300">{item.details}</p> : null}
            {item.bullets ? (
              <p className="mt-2 max-w-3xl text-sm text-zinc-300">{item.bullets[0]}</p>
            ) : null}
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export function SkillsSection({ id = "skills", content, mode }) {
  const groups = content.skills.groups;
  const colA = groups[0]?.items || [];
  const colB = groups[1]?.items || [];
  const colC = groups[2]?.items || groups[groups.length - 1]?.items || [];
  const titleA = groups[0]?.label || "Front-End";
  const titleB = groups[1]?.label || "Back-End";
  const titleC = groups[2]?.label || "Security";

  const accentClass = mode === "cyber" ? "text-[#2eff73]" : "text-[#9fb4a0]";

  return (
    <motion.section
      id={id}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="panel grid gap-5 p-6 md:grid-cols-3"
    >
      <SkillColumn title={titleA} items={colA} accentClass={accentClass} />
      <SkillColumn title={titleB} items={colB} accentClass={accentClass} />
      <SkillColumn title={titleC} items={colC} accentClass={accentClass} />
    </motion.section>
  );
}

function SkillColumn({ title, items, accentClass }) {
  return (
    <div>
      <p className={`text-[0.62rem] uppercase tracking-[0.2em] ${accentClass}`}>{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-zinc-300">• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ListSection({ id = "tools", content, mode }) {
  if (!content.tools) return null;

  const accentClass = mode === "cyber" ? "text-[#2eff73]" : "text-[#9fb4a0]";

  return (
    <motion.section
      id={id}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="panel p-6"
    >
      <h3 className="headline text-3xl uppercase text-zinc-100">{content.tools.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {content.tools.items.map((item) => (
          <span key={item} className={`border border-zinc-700 px-3 py-1 text-xs uppercase tracking-[0.12em] ${accentClass}`}>
            {item}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

export function ContactSection({ id = "contact", content, mode }) {
  const isCyber = mode === "cyber";
  const accent = isCyber ? "#2eff73" : "#9fb4a0";
  const accentButton = isCyber ? "bg-[#2eff73]" : "bg-[#9fb4a0]";
  const accentBorder = isCyber ? "border-[#2eff73]/30 focus:border-[#2eff73]/70" : "border-zinc-600 focus:border-[#9fb4a0]/70";
  const accentRing = isCyber ? "focus:ring-[#2eff73]/20" : "focus:ring-[#9fb4a0]/20";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY",
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try the email link below.");
    }
  };

  const inputBase = `w-full bg-zinc-950/70 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-all duration-200 ring-1 ring-transparent ${accentBorder} ${accentRing} focus:ring-2 border`;

  return (
    <motion.section
      id={id}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="panel px-6 py-16"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* ── Left: heading + info ── */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="headline text-7xl uppercase leading-[0.82] text-zinc-100 sm:text-8xl">
            Get In
            <br />
            Touch
          </h2>
          <p className="mt-4 text-sm text-zinc-400">{content.hero.subtitle}</p>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:yashbharambe@example.com"
              className="flex items-center gap-2 text-sm transition-colors hover:text-zinc-100"
              style={{ color: accent }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              yashbharambe@example.com
            </a>
            <a
              href="https://github.com/YashBharambe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yashbharambe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* ── Right: contact form ── */}
        <form onSubmit={handleSubmit} className="w-full max-w-md flex-1 space-y-4">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={inputBase}
              disabled={status === "sending"}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
              className={inputBase}
              disabled={status === "sending"}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or say hello..."
              value={formData.message}
              onChange={handleChange}
              className={`${inputBase} resize-none`}
              disabled={status === "sending"}
            />
          </div>

          {/* Status feedback */}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-red-400"
            >
              ✕ {errorMsg}
            </motion.p>
          )}

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs"
              style={{ color: accent }}
            >
              ✓ Message sent successfully! I&apos;ll get back to you soon.
            </motion.p>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className={`${accentButton} flex items-center gap-2 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-black transition-opacity disabled:opacity-60`}
            >
              {status === "sending" ? (
                <>
                  <svg className="h-3.5 w-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <a
              href="/Yash_Bharambe_CV.pdf"
              download
              className="flex items-center gap-2 border border-zinc-700 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition-colors hover:border-zinc-500"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download CV
            </a>
          </div>
        </form>
      </div>
    </motion.section>
  );
}


