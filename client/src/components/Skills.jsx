import { motion } from "framer-motion";
import codeScreen from "../assets/code-screen.jpg";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Angular", "TypeScript", "Tailwind", "Motion"],
  },
  {
    title: "Backend",
    items: ["ASP.NET Core", "Web API", "Microservices", "Auth"],
  },
  {
    title: "Data",
    items: ["SQL Server", "PostgreSQL", "Redis", "Elastic"],
  },
  {
    title: "Platform",
    items: ["Azure", "AWS", "CI/CD", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center relative">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 className="section-title mt-4">What I use to ship products</h2>
          <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
            <path d="M2 9 H138" />
          </svg>
        </div>
        <svg className="section-svg" viewBox="0 0 140 44" aria-hidden="true">
          <path d="M10 10 H60 M80 10 H130 M10 30 H90 M110 30 H130" />
          <circle cx="10" cy="10" r="3" />
          <circle cx="130" cy="30" r="3" />
        </svg>
        <div className="media-frame media-glow">
          <img src={codeScreen} alt="Live coding environment" className="tilt-media" />
          <div className="media-caption">Live dashboards • Ops telemetry</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card hover-card"
          >
            <h3 className="text-lg font-semibold gradient-text">{s.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
              {s.items.map((item) => (
                <span key={item} className="soft-border rounded-full px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
