import { motion } from "framer-motion";

export function HeroCyber({ content }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="panel px-5 py-8 sm:px-8"
      >
        <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[#2eff73]">Threat.Scope // Active</p>
        <h1 className="headline mt-4 text-6xl leading-[0.85] text-zinc-100 sm:text-7xl lg:text-8xl">
          CYBER
          <br />
          SECURITY
          <br />
          <span className="accent-text-cyber">ENGINEER</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm text-zinc-300">{content.hero.body}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="panel relative overflow-hidden p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,_rgba(46,255,115,0.28),_transparent_40%),radial-gradient(circle_at_30%_70%,_rgba(22,201,255,0.2),_transparent_42%)]" />
        <div className="absolute inset-0 opacity-45 [background:linear-gradient(rgba(46,255,115,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(46,255,115,0.11)_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="relative h-full min-h-[290px] w-full border border-[#2eff73]/35 bg-black/65 neon-cyber" />
      </motion.div>
    </section>
  );
}
