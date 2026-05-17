import { usePortfolioMode } from "../../context/PortfolioModeContext.jsx";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Connect" }
];

export function Navbar() {
  const { isCyber, toggleMode } = usePortfolioMode();

  const jump = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="relative z-20 border-b border-zinc-900/90 bg-[#07090d]/96">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <div className="headline text-xl uppercase text-zinc-100">Architect</div>

        <nav className="hidden items-center gap-6 text-[0.62rem] uppercase tracking-[0.2em] text-zinc-400 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => jump(link.id)}
              className={`transition ${isCyber ? "hover:text-[#2eff73]" : "hover:text-[#b8c5b9]"}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={toggleMode}
          className={`rounded-sm border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.17em] transition ${
            isCyber
              ? "border-[#2eff73] bg-[#2eff73] text-black neon-cyber"
              : "border-[#96a696] bg-[#96a696] text-black neon-normal"
          }`}
        >
          {isCyber ? "Security Mode" : "Normal Mode"}
        </button>
      </div>
    </header>
  );
}
