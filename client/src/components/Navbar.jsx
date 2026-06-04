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
      <div className="w-full border-b border-[rgba(56,189,248,0.28)] bg-[rgba(6,10,18,0.94)] backdrop-blur-xl shadow-[0_10px_34px_rgba(0,0,0,0.34)]">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="/"
            onClick={(event) => handleRoute(event, "/")}
            className="text-base sm:text-lg font-semibold tracking-wide whitespace-nowrap"
          >
            Shlok Shah<span className="gradient-text">.</span>
          </a>
          <div className="hidden flex-1 items-center justify-center gap-5 text-sm text-muted xl:flex">
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
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="xl:hidden rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-primary transition magnetic"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
            <a
              href="/resume.pdf"
              download="Shlok_Shah_Resume.pdf"
              className="btn-accent text-xs uppercase tracking-[0.2em] magnetic"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div
          id="mobile-nav"
          className={`xl:hidden border-t border-[rgba(56,189,248,0.18)] bg-[rgba(6,10,18,0.98)] px-4 py-4 ${open ? "block" : "hidden"}`}
        >
          <div className="grid grid-cols-2 gap-3 text-sm text-muted sm:grid-cols-3">
            {links.map((link) => {
              const active = currentPath === link.route;
              return (
                <a
                  key={link.route}
                  href={link.route}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full border px-4 py-3 text-center transition hover:text-primary ${
                    active ? "border-accent text-primary" : "border-[rgba(148,163,184,0.28)]"
                  }`}
                  onClick={(event) => handleRoute(event, link.route)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

