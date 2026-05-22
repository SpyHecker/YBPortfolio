import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ── Animated scan line via inline style ── */
const scanLineStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  height: "1px",
  background: "linear-gradient(90deg, transparent, #9fb4a0, transparent)",
  animation: "normalScan 4s ease-in-out infinite",
  opacity: 0.45,
  zIndex: 2,
};

/* ── Typed code lines ── */
const codeLines = [
  { prefix: "~/dev", cmd: "npm create vite@latest portfolio", type: "cmd" },
  { prefix: "✓", cmd: "Scaffolding project in ./portfolio", type: "dim" },
  { prefix: "~/dev", cmd: "cd portfolio && npm install", type: "cmd" },
  { prefix: "✓", cmd: "added 214 packages in 8.3s", type: "dim" },
  { prefix: "~/dev", cmd: "git init && git add -A", type: "cmd" },
  { prefix: "✓", cmd: "Initialized empty Git repository", type: "dim" },
  { prefix: "~/dev", cmd: "npm run dev -- --host", type: "cmd" },
  { prefix: "✓", cmd: "VITE v6.4  ready in 420ms", type: "dim" },
  { prefix: "→", cmd: "Local:  http://localhost:5173/", type: "link" },
];

/* ── Tech stack chips ── */
const stackChips = [
  { label: "React", status: "active" },
  { label: "Node", status: "active" },
  { label: "Vite", status: "active" },
  { label: "MongoDB", status: "warn" },
];

export function HeroNormal({ content }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 700);
      return () => clearTimeout(timer);
    }
    const reset = setTimeout(() => setVisibleLines(0), 4500);
    return () => clearTimeout(reset);
  }, [visibleLines]);

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

      {/* ── Right panel: IDE / Code Editor Visual ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="panel relative overflow-hidden p-0"
      >
        {/* Radial glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,_rgba(147,197,253,0.25),_transparent_38%),radial-gradient(circle_at_45%_60%,_rgba(34,197,94,0.18),_transparent_44%)]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-25 [background:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        {/* Scanning line */}
        <div style={scanLineStyle} />

        <div className="relative flex h-full min-h-[340px] flex-col border border-zinc-700/50 bg-zinc-950/80">
          {/* ── Title bar ── */}
          <div className="flex items-center gap-2 border-b border-zinc-700/40 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2ac940]" />
            <span className="ml-3 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-zinc-500">
              yb@dev:~/portfolio
            </span>
            <span className="ml-auto font-mono text-[0.5rem] text-[#9fb4a0]/50">
              ● DEV
            </span>
          </div>

          {/* ── Terminal body ── */}
          <div className="flex-1 overflow-hidden px-4 py-3 font-mono text-[0.68rem] leading-[1.7]">
            {codeLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={`${i}-${visibleLines > codeLines.length ? "r" : ""}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={line.type !== "cmd" ? "text-zinc-500" : ""}
              >
                <span
                  className={
                    line.type === "cmd"
                      ? "text-[#9fb4a0]"
                      : line.type === "link"
                      ? "text-zinc-600"
                      : "text-zinc-600"
                  }
                >
                  {line.prefix}
                </span>
                {line.type === "cmd" && <span className="text-zinc-500">$ </span>}
                {line.type !== "cmd" && <span className="text-zinc-600"> </span>}
                <span
                  className={
                    line.type === "cmd"
                      ? "text-zinc-300"
                      : line.type === "link"
                      ? "text-[#60a5fa]"
                      : "text-zinc-500"
                  }
                >
                  {line.cmd}
                </span>
              </motion.div>
            ))}
            {/* Blinking cursor */}
            {visibleLines <= codeLines.length && (
              <span
                className="inline-block h-3.5 w-1.5 bg-[#9fb4a0]"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            )}
          </div>

          {/* ── Status bar ── */}
          <div className="flex items-center gap-3 border-t border-zinc-700/30 px-4 py-2">
            {stackChips.map((chip) => (
              <div key={chip.label} className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    chip.status === "active" ? "bg-[#9fb4a0]" : "bg-[#febc2e]"
                  }`}
                  style={{
                    animation:
                      chip.status === "active"
                        ? "pulse-dot 2s ease-in-out infinite"
                        : "none",
                  }}
                />
                <span className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-zinc-500">
                  {chip.label}
                </span>
              </div>
            ))}
            <span className="ml-auto font-mono text-[0.5rem] text-zinc-600">
              {visibleLines}/{codeLines.length} steps
            </span>
          </div>
        </div>
      </motion.div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes normalScan {
          0%, 100% { top: 0%; }
          50% { top: 96%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}

