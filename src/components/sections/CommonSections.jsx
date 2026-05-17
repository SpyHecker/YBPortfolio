import { motion } from "framer-motion";

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
  const accentButton = mode === "cyber" ? "bg-[#2eff73]" : "bg-[#9fb4a0]";

  return (
    <motion.section
      id={id}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="panel flex flex-col items-center px-6 py-16 text-center"
    >
      <h2 className="headline text-7xl uppercase leading-[0.82] text-zinc-100 sm:text-8xl">
        Connect
        <br />
        Us
      </h2>
      <p className="mt-3 text-sm text-zinc-400">{content.hero.subtitle}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button className={`${accentButton} px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-black`}>
          Send Transmission
        </button>
        <button className="border border-zinc-700 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-200">
          Download CV.pdf
        </button>
      </div>
    </motion.section>
  );
}

