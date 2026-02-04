import { motion } from "framer-motion";
import abstractBlue from "../assets/abstract-blue.jpg";

const projects = [
  {
    title: "BondsAdda Financial Platform",
    desc: "A secure financial platform for managing bond portfolios.",
    tech: "React, .NET Core, SQL Server",
  },
  {
    title: "Delhi Police PCC Portal",
    desc: "Government portal for police clearance certificate workflows.",
    tech: "React, ASP.NET MVC, MySQL",
  },
  {
    title: "Hospital Management System",
    desc: "System for patient records, scheduling, and billing.",
    tech: "Angular, Web API, SQL Server",
  },
  {
    title: "Employee Management System",
    desc: "HR system for onboarding, payroll, and performance tracking.",
    tech: ".NET Core, React, SQL Server",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center relative">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title mt-4">Selected case studies and builds</h2>
          <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
            <path d="M2 9 H138" />
          </svg>
        </div>
        <svg className="section-svg" viewBox="0 0 140 44" aria-hidden="true">
          <path d="M10 10 H90 M110 10 H130 M10 30 H60 M90 30 H130" />
          <circle cx="10" cy="30" r="3" />
          <circle cx="130" cy="10" r="3" />
        </svg>
        <div className="media-frame media-glow">
          <img src={abstractBlue} alt="Network visualization" className="tilt-media" />
          <div className="media-caption">Production workloads • Enterprise scale</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card hover-card"
          >
            <div className="project-preview" />
            <h3 className="text-lg font-semibold mt-4">{p.title}</h3>
            <p className="text-muted mt-2">{p.desc}</p>
            <p className="text-accent text-sm mt-3">{p.tech}</p>
            <div className="project-details text-sm text-muted mt-3">
              Built with scalable APIs, role-based access, and performance tuning.
            </div>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded-full btn-accent text-sm hover:scale-105 transition magnetic">
                GitHub
              </button>
              <button className="px-4 py-2 rounded-full border border-soft text-muted text-sm hover:text-[color:var(--accent)] transition magnetic">
                Live Demo
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
