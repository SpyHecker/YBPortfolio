import { motion } from "framer-motion";

export function HeroNormal({ content }) {
  return (
    <section className="relative overflow-hidden border border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900/80 px-4 py-10 shadow-soft-xl sm:rounded-3xl sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.12),_transparent_60%)] opacity-80" />
      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl space-y-5"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Normal Portfolio
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {content.hero.title}
          </h1>
          <p className="text-sm font-medium text-slate-300 sm:text-base">
            {content.hero.subtitle}
          </p>
          <p className="text-sm text-slate-400 sm:text-[0.95rem]">{content.hero.body}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="rounded-full bg-slate-100/5 px-4 py-2 text-xs font-medium text-slate-100 shadow-soft-xl ring-1 ring-slate-500/60 hover:bg-slate-100/10">
              {content.hero.primaryCta}
            </button>
            <button className="rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900">
              {content.hero.secondaryCta}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 flex min-w-[240px] flex-1 justify-end sm:mt-0"
        >
          <div className="relative h-44 w-full max-w-xs rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-soft-xl">
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-400">
              Snapshot
            </p>
            <dl className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Focus</dt>
                <dd className="text-slate-100">Full‑stack, Security, ML / DS</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Stack</dt>
                <dd className="text-slate-100">MERN · SQL · Linux</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Internship</dt>
                <dd className="text-slate-100">Cybersecurity (Grey‑Box VAPT)</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

