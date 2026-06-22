import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bondsaddaImg from "../assets/images/bondsadda.png";
import dppcccvrImg from "../assets/images/dppcccvr.png";
import employeemImg from "../assets/images/employeem.png";
import hospitalImg from "../assets/images/hospital.png";
import hotelImg from "../assets/images/hotel.png";
import tradelicenceImg from "../assets/images/tradelicence.png";

const projects = [
  {
    title: "BondsAdda Financial Platform",
    desc: "A secure financial platform for managing bond portfolios.",
    tech: "React, .NET Core, SQL Server",
    image: bondsaddaImg,
    liveUrl: "https://bondsadda.com",
  },
  {
    title: "Delhi Police PCC Portal",
    desc: "Government portal for police clearance certificate workflows.",
    tech: "React, ASP.NET MVC, MySQL",
    image: dppcccvrImg,
    liveUrl: "https://pcccvr.delhipolice.gov.in/",
  },
  {
    title: "Hospital Management System",
    desc: "System for patient records, scheduling, and billing.",
    tech: "Angular, Web API, SQL Server",
    image: hospitalImg,
    liveUrl: "https://csmc.in/login",
  },
  {
    title: "Employee Management System",
    desc: "HR system for onboarding, payroll, and performance tracking.",
    tech: ".NET Core, React, SQL Server",
    image: employeemImg,
  },
  {
    title: "Hotel Management System",
    desc: "Suite for reservations, housekeeping, and billing operations.",
    tech: "React, .NET Core, SQL Server",
    image: hotelImg,
  },
  {
    title: "Trade Licence Portal",
    desc: "Municipal portal for licence applications and approvals.",
    tech: "React, Node.js, PostgreSQL",
    image: tradelicenceImg,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredProject = projects[activeIndex];
  const nextPreviewProjects = projects.filter((_, index) => index !== activeIndex).slice(0, 3);
  const bottomProjects = projects.filter((_, index) => index !== activeIndex).slice(3);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="project-hero-grid">
          <div className="project-hero-copy">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title mt-3">Selected case studies and builds</h2>
            <p className="text-muted mt-2 project-intro">
              Production-grade systems focused on scalable APIs, secure architecture, and clean UX.
            </p>
          </div>
        </div>

        <div className="projects-cinema-layout">
          <div className="project-cinema-stack">
            <motion.article
              key={featuredProject.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-card project-cinema-main"
            >
              <div className="project-cinema-media">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="project-cinema-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-cinema-overlay">
                  <span className="project-cinema-label">Featured Project</span>
                  <h3 className="project-cinema-title">{featuredProject.title}</h3>
                  <p className="project-cinema-desc">{featuredProject.desc}</p>
                </div>
              </div>

              <div className="project-cinema-footer">
                <p className="text-accent text-sm">{featuredProject.tech}</p>
                <div className="project-cinema-actions">
                  <button className="project-mini-btn project-mini-btn-primary magnetic">GitHub</button>
                  {featuredProject.liveUrl ? (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-mini-btn project-mini-btn-secondary magnetic"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button className="project-mini-btn project-mini-btn-secondary magnetic" disabled>
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.article>

            <div className="project-cinema-strip">
              {bottomProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="glass-card project-strip-card"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-strip-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-strip-copy">
                    <p className="project-card-kicker">0{index + 5}</p>
                    <h3 className="project-strip-title">{project.title}</h3>
                    <p className="text-muted project-strip-desc">{project.desc}</p>
                    <div className="project-cinema-actions mt-4">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-mini-btn project-mini-btn-secondary magnetic"
                        >
                          Live Demo
                        </a>
                      ) : (
                        <button className="project-mini-btn project-mini-btn-secondary magnetic" disabled>
                          Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="project-cinema-rail">
            {nextPreviewProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`glass-card project-cinema-rail-card ${project.title === featuredProject.title ? "is-active" : ""}`}
              >
                <div className="project-cinema-thumb">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-cinema-thumb-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="project-cinema-rail-copy">
                  <p className="project-card-kicker">0{index + 2}</p>
                  <h3 className="project-cinema-rail-title">{project.title}</h3>
                  <p className="text-muted project-cinema-rail-desc">{project.desc}</p>
                  <p className="text-accent text-sm mt-2">{project.tech}</p>
                  <div className="project-cinema-actions mt-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-mini-btn project-mini-btn-secondary magnetic"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button className="project-mini-btn project-mini-btn-secondary magnetic" disabled>
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
