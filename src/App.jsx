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
    <div className="app-shell">
      <div className="noise-overlay" />
      <Navbar />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
        {isCyber ? <HeroCyber content={content} /> : <HeroNormal content={content} />}

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <AboutSection
              id="about"
              title={content.about.title}
              body={content.about.body}
              mode={mode}
            />
            <SkillsSection
              id="skills"
              title={content.skills.title}
              groups={content.skills.groups}
              mode={mode}
            />
          </div>
          <div className="space-y-6">
            <ProjectsSection
              id="projects"
              title={content.projects.title}
              items={content.projects.items}
              mode={mode}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)]">
          <div className="space-y-6">
            <TimelineSection
              id="experience"
              title={content.experience.title}
              items={content.experience.items}
              mode={mode}
            />
            {isCyber && content.tools ? (
              <ListSection
                id="tools"
                title={content.tools.title}
                items={content.tools.items}
                mode={mode}
              />
            ) : null}
          </div>
          <div className="space-y-6">
            <TimelineSection
              id="education"
              title={content.education?.title || "Education"}
              items={content.education?.items || []}
              mode={mode}
            />
            <ListSection
              id="certifications"
              title={content.certifications.title}
              items={content.certifications.items}
              mode={mode}
            />
          </div>
        </div>

        <ContactSection id="contact" mode={mode} />
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

