import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function AboutSection({ id = "about", title, body, mode }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className={baseCard(mode)}
    >
      <h2 className={sectionTitle(mode)}>{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-300">
        {body.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </motion.section>
  );
}

export function SkillsSection({ id = "skills", title, groups, mode }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: 0.05 }}
      className={baseCard(mode)}
    >
      <h2 className={sectionTitle(mode)}>{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label} className="space-y-2">
            <p className={groupLabel(mode)}>{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className={pillClass(mode)}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function ProjectsSection({ id = "projects", title, items, mode }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: 0.05 }}
      className={baseCard(mode)}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className={sectionTitle(mode)}>{title}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((project) => (
          <article
            key={project.name}
            className={`rounded-2xl border px-4 py-4 text-sm transition ${
              mode === "cyber"
                ? "border-cyber-border/80 bg-black/70 shadow-cyber-glow/40"
                : "border-slate-700/70 bg-slate-950/90 shadow-soft-xl"
            }`}
          >
            <h3
              className={`text-sm font-semibold ${
                mode === "cyber" ? "font-mono text-emerald-300" : "text-slate-50"
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`mt-1 text-xs ${
                mode === "cyber" ? "font-mono text-emerald-300/80" : "text-slate-300"
              }`}
            >
              {project.tagline}
            </p>
            <p className="mt-2 text-xs text-slate-400">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className={pillClass(mode)}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export function TimelineSection({ id, title, items, mode }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={baseCard(mode)}
    >
      <h2 className={sectionTitle(mode)}>{title}</h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-3 text-sm">
            <div className="mt-1 h-2 w-2 rounded-full bg-slate-500" />
            <div className="space-y-1">
              <p
                className={`text-xs font-semibold ${
                  mode === "cyber" ? "font-mono text-emerald-300" : "text-slate-100"
                }`}
              >
                {item.role || item.school}
              </p>
              <p className="text-xs text-slate-400">
                {item.company || item.place} · {item.period}
              </p>
              {item.details && (
                <p className="text-xs text-slate-400">
                  {item.details}
                </p>
              )}
              {item.bullets && (
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-slate-300">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function ListSection({ id, title, items, mode }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={baseCard(mode)}
    >
      <h2 className={sectionTitle(mode)}>{title}</h2>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-slate-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export function ContactSection({ id = "contact", mode }) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={baseCard(mode)}
    >
      <h2 className={sectionTitle(mode)}>Contact</h2>
      <p className="mb-4 text-sm text-slate-300">
        For opportunities, collaborations, or questions, feel free to reach out. I’ll respond as
        soon as I can.
      </p>
      <form className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-slate-400">Name</label>
          <input
            className={inputClass(mode)}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-400">Email</label>
          <input
            className={inputClass(mode)}
            placeholder="you@example.com"
            type="email"
          />
        </div>
        <div className="space-y-1 sm:col-span-2">
          <label className="text-xs text-slate-400">Message</label>
          <textarea
            rows={4}
            className={inputClass(mode) + " resize-none"}
            placeholder="Tell me a bit about what you have in mind..."
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium ${
              mode === "cyber"
                ? "bg-emerald-500/90 text-black shadow-cyber-glow hover:bg-emerald-400"
                : "bg-slate-100/90 text-slate-900 shadow-soft-xl hover:bg-white"
            }`}
          >
            Send message
          </button>
        </div>
      </form>
    </motion.section>
  );
}

function baseCard(mode) {
  return [
    "relative overflow-hidden border px-4 py-6 sm:rounded-3xl sm:px-8 sm:py-7 shadow-soft-xl",
    mode === "cyber"
      ? "border-cyber-border/80 bg-cyber-bg/95 cyber-grid"
      : "border-slate-800/70 bg-slate-950/90"
  ].join(" ");
}

function sectionTitle(mode) {
  return [
    "mb-4 text-sm font-semibold tracking-tight sm:text-base",
    mode === "cyber" ? "font-mono text-emerald-300" : "text-slate-100"
  ].join(" ");
}

function groupLabel(mode) {
  return [
    "text-[0.7rem] font-medium uppercase tracking-[0.2em]",
    mode === "cyber" ? "font-mono text-emerald-400/80" : "text-slate-400"
  ].join(" ");
}

function pillClass(mode) {
  return [
    "inline-flex items-center rounded-full border px-2.5 py-1 text-[0.7rem]",
    mode === "cyber"
      ? "border-emerald-500/70 bg-emerald-500/5 font-mono text-emerald-200"
      : "border-slate-600/70 bg-slate-900/80 text-slate-100"
  ].join(" ");
}

function inputClass(mode) {
  return [
    "w-full rounded-2xl border px-3 py-2 text-xs outline-none transition",
    mode === "cyber"
      ? "border-cyber-border/80 bg-black/80 text-emerald-100 placeholder:text-emerald-400/60 focus:border-emerald-400 focus:shadow-cyber-glow/60"
      : "border-slate-700/70 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:ring-1 focus:ring-slate-500"
  ].join(" ");
}

