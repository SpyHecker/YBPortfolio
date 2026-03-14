import { motion } from "framer-motion";
import { usePortfolioMode, MODES } from "../../context/PortfolioModeContext.jsx";

export function Navbar() {
  const { mode, isCyber, toggleMode } = usePortfolioMode();

  const handleNavClick = (targetId) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-xl bg-gradient-to-tr from-emerald-500 via-sky-500 to-indigo-500 shadow-soft-xl">
            <div className="absolute inset-[3px] rounded-[0.65rem] bg-slate-950" />
            <span className="relative flex h-full w-full items-center justify-center text-xs font-semibold tracking-[0.18em] text-slate-100">
              YB
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-slate-50">
              {isCyber ? "Cybersecurity" : "Software & IT"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden gap-3 text-xs font-medium text-slate-400 sm:flex">
            <button
              className="hover:text-slate-100"
              type="button"
              onClick={() => handleNavClick("about")}
            >
              About
            </button>
            <button
              className="hover:text-slate-100"
              type="button"
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </button>
            <button
              className="hover:text-slate-100"
              type="button"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </button>
            <button
              className="hover:text-slate-100"
              type="button"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </nav>

          <ModeToggle mode={mode} isCyber={isCyber} onToggle={toggleMode} />
        </div>
      </div>
    </header>
  );
}

function ModeToggle({ mode, isCyber, onToggle }) {
  const label = isCyber ? "Cybersecurity" : "Normal";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-1 py-1 text-xs font-medium text-slate-300 shadow-soft-xl"
      aria-label="Toggle portfolio mode"
    >
      <div className="relative flex w-32 items-center justify-between">
        <motion.div
          className="absolute inset-y-0 w-1/2 rounded-full bg-slate-800"
          initial={false}
          animate={{ x: isCyber ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        />
        <span className="relative z-10 flex-1 text-center">
          {mode === MODES.NORMAL ? "Normal" : "Normal"}
        </span>
        <span className="relative z-10 flex-1 text-center">
          {mode === MODES.CYBER ? "Cyber" : "Cyber"}
        </span>
      </div>
      <span className="hidden text-[0.7rem] text-slate-400 sm:inline">
        {label} mode
      </span>
    </button>
  );
}

