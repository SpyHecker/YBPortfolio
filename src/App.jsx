import { PortfolioModeProvider, usePortfolioMode } from "./context/PortfolioModeContext.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { normalContent } from "./content/normal.js";
import { cyberContent } from "./content/cyber.js";
import { HeroNormal } from "./components/sections/HeroNormal.jsx";
import { HeroCyber } from "./components/sections/HeroCyber.jsx";
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  TimelineSection,
  ListSection,
  ContactSection
} from "./components/sections/CommonSections.jsx";

function AppShell() {
  const { mode, isCyber } = usePortfolioMode();
  const content = isCyber ? cyberContent : normalContent;

  return (
    <div className={`app-shell ${isCyber ? "cyber-mode" : "normal-mode"}`}>
      <div className="grain-layer" />
      <Navbar />

      <main className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col gap-12 px-4 pb-12 pt-8 sm:px-6 lg:px-10">
        {isCyber ? <HeroCyber content={content} /> : <HeroNormal content={content} />}

        <AboutSection id="about" content={content} mode={mode} />

        <ProjectsSection id="projects" content={content} mode={mode} />

        <TimelineSection id="experience" content={content} mode={mode} />

        <SkillsSection id="skills" content={content} mode={mode} />

        {isCyber && content.tools ? <ListSection id="tools" content={content} mode={mode} /> : null}

        <ContactSection id="contact" content={content} mode={mode} />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioModeProvider>
      <AppShell />
    </PortfolioModeProvider>
  );
}
