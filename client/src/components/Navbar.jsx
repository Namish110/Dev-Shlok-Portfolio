import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/skills", label: "Stack" },
  { route: "/experience", label: "Experience" },
  { route: "/projects", label: "Projects" },
  { route: "/faq", label: "FAQ" },
  { route: "/reviews", label: "Reviews" },
  { route: "/certificates", label: "Certificates" },
  { route: "/contact", label: "Contact" },
];

export default function Navbar({ currentPath = "/", onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleRoute = (event, route) => {
    event.preventDefault();
    setOpen(false);
    if (onNavigate) {
      onNavigate(route);
      return;
    }
    window.location.href = route;
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="w-full border-b border-[rgba(56,189,248,0.24)] bg-[rgba(6,10,18,0.92)] backdrop-blur-xl shadow-[0_10px_34px_rgba(0,0,0,0.34)]">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="/"
            onClick={(event) => handleRoute(event, "/")}
            className="text-base sm:text-lg font-semibold tracking-wide whitespace-nowrap"
          >
            Shlok Shah<span className="gradient-text">.</span>
          </a>
          <div className="hidden flex-1 items-center justify-center gap-6 text-sm text-muted xl:flex">
            {links.map((link) => {
              const active = currentPath === link.route;
              return (
                <a
                  key={link.route}
                  href={link.route}
                  aria-current={active ? "page" : undefined}
                  onClick={(event) => handleRoute(event, link.route)}
                  className={`transition hover:text-primary ${active ? "text-primary" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="xl:hidden inline-flex items-center justify-center rounded-full border border-soft bg-[rgba(10,14,24,0.72)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted transition hover:text-primary magnetic"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="mr-2 inline-flex h-4 w-4 flex-col justify-center gap-1">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
              {open ? "Close" : "Menu"}
            </button>
            <a
              href="/resume.pdf"
              download="Shlok_Shah_Resume.pdf"
              className="btn-accent text-xs uppercase tracking-[0.2em] magnetic whitespace-nowrap"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div
          id="mobile-nav"
          className={`xl:hidden overflow-hidden border-t border-[rgba(56,189,248,0.18)] bg-[rgba(6,10,18,0.98)] transition-all duration-300 ${
            open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6">
            {links.map((link) => {
              const active = currentPath === link.route;
              return (
                <a
                  key={link.route}
                  href={link.route}
                  aria-current={active ? "page" : undefined}
                  className={`mb-2 flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition hover:border-[rgba(56,189,248,0.45)] hover:text-primary ${
                    active
                      ? "border-accent bg-[rgba(56,189,248,0.08)] text-primary"
                      : "border-[rgba(148,163,184,0.18)] bg-[rgba(10,14,24,0.7)] text-muted"
                  }`}
                  onClick={(event) => handleRoute(event, link.route)}
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(148,163,184,0.7)]">Go</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

