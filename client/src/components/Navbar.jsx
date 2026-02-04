import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("theme-alt");
  };
  const toggleGlass = () => {
    document.documentElement.classList.toggle("glass-strong");
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-0 right-0 z-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="hud-panel rounded-2xl px-6 py-3 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            Shlok Shah<span className="gradient-text">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-primary transition">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-primary transition magnetic"
            >
              Alt Skin
            </button>
            <button
              onClick={toggleGlass}
              className="rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-primary transition magnetic"
            >
              Blur
            </button>
            <a
              href="/src/assets/resume.pdf"
              download="Shlok_Shah_Resume.pdf"
              className="btn-accent text-xs uppercase tracking-[0.2em] magnetic"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
