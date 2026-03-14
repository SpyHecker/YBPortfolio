# Yash Bharambe · Dual-Mode Portfolio

Modern, dark-only personal portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**, featuring two distinct views in a single app:

- **Normal Portfolio** – software engineer / IT student profile (full‑stack, MERN, ML/DS)
- **Cybersecurity Portfolio** – terminal‑inspired cybersecurity profile (VAPT, AppSec)

Use the premium toggle in the navbar to switch between modes with smooth animated transitions.

## Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS 3** (dark mode only)
- **Framer Motion** (animations)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Features

- **Two portfolio modes**
  - Normal mode: full‑stack / IT profile with sections for About, Skills, Projects, Experience, Education, Certifications, Contact.
  - Cybersecurity mode: terminal‑style UI with Security Skills, Security Projects, VAPT Experience, Tools & Platforms, Certifications, Contact.
- **Single layout, dual styling**
  - Shared responsive grid/section layout.
  - Distinct theming:
    - Normal: gradient cards, neutral accents, modern dashboard feel.
    - Cyber: terminal panes, monospace highlights, green/cyan accents, subtle grid overlay.
- **Smooth UX**
  - Framer Motion entrance animations.
  - Animated mode toggle in the navbar.
  - Smooth scroll navigation from header buttons.

## Project Structure

```text
src/
  App.jsx                     # Main layout and section composition
  main.jsx                    # React root
  index.css                   # Tailwind base + global styles
  context/
    PortfolioModeContext.jsx  # Normal/Cyber mode state and toggle
  content/
    normal.js                 # Data for Normal portfolio
    cyber.js                  # Data for Cybersecurity portfolio
  components/
    layout/
      Navbar.jsx              # Top bar + mode toggle + nav buttons
      Footer.jsx              # Footer links
    sections/
      HeroNormal.jsx          # Normal portfolio hero
      HeroCyber.jsx           # Cyber portfolio hero
      CommonSections.jsx      # Reusable About/Skills/Projects/etc. sections
```

## Customizing Content

- Edit **`src/content/normal.js`** to change:
  - Name, role, intro.
  - Normal‑mode skills, projects, experience, education, certifications.
- Edit **`src/content/cyber.js`** to change:
  - Cyber role, intro, typing phrases.
  - Security skills, security projects, VAPT experience, tools, certifications.

## Production Build

```bash
npm run build
```

The production-ready assets will be output to `dist/`, ready to deploy to any static host (Vercel, Netlify, etc.).

