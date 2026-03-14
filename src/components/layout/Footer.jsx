export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} Yash Bharambe. Crafted with React, Tailwind CSS, and Framer
          Motion.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com" className="hover:text-slate-200">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-slate-200">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

