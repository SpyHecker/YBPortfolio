import { motion } from "framer-motion";

export function HeroCyber({ content }) {
  return (
    <section className="relative overflow-hidden border border-cyber-border/80 bg-cyber-bg px-4 py-10 shadow-soft-xl sm:rounded-3xl sm:px-10 sm:py-14 cyber-grid">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.14),_transparent_60%)] opacity-80" />
      <div className="relative grid gap-8 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-400">
            Cybersecurity Portfolio
          </p>
          <h1 className="font-mono text-3xl font-semibold tracking-tight text-emerald-300 sm:text-[2.1rem]">
            {content.hero.title}
          </h1>
          <p className="font-mono text-xs text-emerald-300/80 sm:text-sm">
            {content.hero.subtitle}
          </p>

          <TypingLine phrases={content.hero.typingPhrases} />

          <p className="max-w-xl text-sm text-slate-300">{content.hero.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-2"
        >
          <div className="relative overflow-hidden rounded-xl border border-cyber-border/90 bg-black/70 p-4 font-mono text-[0.7rem] text-emerald-300 shadow-cyber-glow">
            <div className="mb-2 flex items-center gap-2 text-xs text-emerald-400/90">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-cyber-glow" />
              <span>terminal@portfolio:~</span>
            </div>
            <div className="space-y-1">
              <p>&gt; whoami</p>
              <p className="pl-4 text-emerald-300/90">yash_bharambe</p>
              <p className="pt-1">&gt; focus</p>
              <p className="pl-4 text-emerald-300/90">
                web_app_security · grey_box_vapt · secure_dev
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypingLine({ phrases }) {
  return (
    <div className="relative mt-2 h-6 max-w-md overflow-hidden rounded-md border border-cyber-border/80 bg-black/70 px-3 py-1 font-mono text-[0.7rem] text-emerald-300">
      <div className="flex items-center gap-2">
        <span className="text-emerald-400">$</span>
        <span className="inline-flex items-center gap-1">
          <span className="animate-pulse text-emerald-400/80">▌</span>
          <span className="text-emerald-300/90">
            {phrases[0]}
          </span>
        </span>
      </div>
    </div>
  );
}

