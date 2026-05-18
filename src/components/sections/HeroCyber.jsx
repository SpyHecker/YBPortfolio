import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ── Animated scan line via inline style ── */
const scanLineStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  height: "2px",
  background: "linear-gradient(90deg, transparent, #2eff73, transparent)",
  animation: "cyberScan 3.2s ease-in-out infinite",
  opacity: 0.6,
  zIndex: 2,
};

/* ── Typed terminal lines ── */
const terminalLines = [
  { prefix: "root@yb", cmd: "nmap -sV --top-ports 1000 target.io" },
  { prefix: "→", cmd: "PORT   STATE  SERVICE    VERSION", dim: true },
  { prefix: "→", cmd: "22/tcp open   ssh        OpenSSH 8.9", dim: true },
  { prefix: "→", cmd: "443/tcp open  https      nginx 1.24", dim: true },
  { prefix: "root@yb", cmd: "nikto -h https://target.io" },
  { prefix: "→", cmd: "OSVDB-3092: /admin/: directory found", dim: true },
  { prefix: "root@yb", cmd: "sqlmap -u target.io/?id=1 --batch" },
  { prefix: "→", cmd: "[INFO] target is vulnerable to SQLi", dim: true },
  { prefix: "root@yb", cmd: "burpsuite --scan --project vuln_audit" },
];

/* ── Status chips data ── */
const statusChips = [
  { label: "VAPT", status: "active" },
  { label: "WAF", status: "active" },
  { label: "IDS", status: "warn" },
  { label: "SIEM", status: "active" },
];

export function HeroCyber({ content }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 650);
      return () => clearTimeout(timer);
    }
    /* Loop: reset after a pause */
    const reset = setTimeout(() => setVisibleLines(0), 4000);
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

      {/* ── Right panel: Cyber Terminal Dashboard ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="panel relative overflow-hidden p-0"
      >
        {/* Radial glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,_rgba(46,255,115,0.28),_transparent_40%),radial-gradient(circle_at_30%_70%,_rgba(22,201,255,0.2),_transparent_42%)]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-30 [background:linear-gradient(rgba(46,255,115,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(46,255,115,0.11)_1px,transparent_1px)] [background-size:26px_26px]" />
        {/* Scanning line */}
        <div style={scanLineStyle} />

        <div className="relative flex h-full min-h-[340px] flex-col border border-[#2eff73]/25 bg-black/80">
          {/* ── Terminal title bar ── */}
          <div className="flex items-center gap-2 border-b border-[#2eff73]/20 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2eff73]" />
            <span className="ml-3 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-zinc-500">
              yb@kali:~/vuln-audit
            </span>
            <span className="ml-auto font-mono text-[0.5rem] text-[#2eff73]/50">
              ● LIVE
            </span>
          </div>

          {/* ── Terminal body ── */}
          <div className="flex-1 overflow-hidden px-4 py-3 font-mono text-[0.68rem] leading-[1.7]">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={`${i}-${visibleLines > terminalLines.length ? "r" : ""}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={line.dim ? "text-zinc-500" : ""}
              >
                <span className={line.dim ? "text-zinc-600" : "text-[#2eff73]"}>
                  {line.prefix}
                </span>
                {!line.dim && <span className="text-zinc-500">:</span>}
                {!line.dim && <span className="text-[#16c9ff]">~</span>}
                {!line.dim && <span className="text-zinc-500">$ </span>}
                {line.dim && <span className="text-zinc-600"> </span>}
                <span className={line.dim ? "text-zinc-500" : "text-zinc-300"}>
                  {line.cmd}
                </span>
              </motion.div>
            ))}
            {/* Blinking cursor */}
            {visibleLines <= terminalLines.length && (
              <span
                className="inline-block h-3.5 w-1.5 bg-[#2eff73]"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            )}
          </div>

          {/* ── Status bar ── */}
          <div className="flex items-center gap-3 border-t border-[#2eff73]/15 px-4 py-2">
            {statusChips.map((chip) => (
              <div key={chip.label} className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    chip.status === "active" ? "bg-[#2eff73]" : "bg-[#febc2e]"
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
              {visibleLines}/{terminalLines.length} tasks
            </span>
          </div>
        </div>
      </motion.div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes cyberScan {
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
