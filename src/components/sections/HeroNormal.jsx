import { motion } from "framer-motion";

export function HeroNormal({ content }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="panel px-5 py-8 sm:px-8"
      >
        <p className="text-[0.64rem] uppercase tracking-[0.22em] text-[#9fb4a0]">System.Init // 2026</p>
        <h1 className="headline mt-4 text-6xl leading-[0.85] text-zinc-100 sm:text-7xl lg:text-8xl">
          SOFTWARE
          <br />
          DEVELOPMENT
          <br />
          <span className="accent-text-normal">ENGINEER</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm text-zinc-300">{content.hero.body}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="panel relative overflow-hidden p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,_rgba(147,197,253,0.25),_transparent_38%),radial-gradient(circle_at_45%_60%,_rgba(34,197,94,0.18),_transparent_44%)]" />
        <div className="absolute inset-0 opacity-40 [background:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative h-full min-h-[290px] w-full border border-zinc-700/70 bg-zinc-950/60" />
      </motion.div>
    </section>
  );
}
