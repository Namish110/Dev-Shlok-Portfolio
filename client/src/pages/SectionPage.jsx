import { motion } from "framer-motion";

export default function SectionPage({
  kicker,
  title,
  description,
  primaryActionLabel = "Back to Home",
  primaryActionHref = "/",
  secondaryActionLabel,
  secondaryActionHref,
  onNavigate,
  children,
}) {
  const go = (event, href) => {
    event.preventDefault();
    onNavigate?.(href);
  };

  return (
    <main id="main-content" className="route-page">
      <section className="editorial-section px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card route-hero-card"
          >
            <p className="section-kicker">{kicker}</p>
            <h1 className="section-title mt-4">{title}</h1>
            <p className="text-muted mt-4 leading-relaxed max-w-2xl">{description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={primaryActionHref}
                onClick={(event) => go(event, primaryActionHref)}
                className="btn-accent magnetic"
              >
                {primaryActionLabel}
              </a>
              {secondaryActionLabel ? (
                <a
                  href={secondaryActionHref}
                  onClick={(event) => go(event, secondaryActionHref)}
                  className="px-6 py-3 rounded-full border border-soft text-muted hover:text-primary transition magnetic"
                >
                  {secondaryActionLabel}
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      {children}
    </main>
  );
}
