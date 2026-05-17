import { usePortfolioMode } from "../../context/PortfolioModeContext.jsx";

export function Footer() {
  const { isCyber } = usePortfolioMode();

  return (
    <footer className="relative z-20 border-t border-zinc-900/90 bg-[#090b10]/95">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 py-4 text-[0.55rem] uppercase tracking-[0.18em] text-zinc-500 sm:px-6 lg:px-10">
        <span>&copy; {new Date().getFullYear()} Architectural Build. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a className={`${isCyber ? "hover:text-[#2eff73]" : "hover:text-[#b8c5b9]"}`} href="https://github.com">
            GitHub
          </a>
          <a className={`${isCyber ? "hover:text-[#2eff73]" : "hover:text-[#b8c5b9]"}`} href="https://linkedin.com">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
