import { motion } from "framer-motion";
import neonLines from "../assets/neon-lines.jpg";

const experiences = [
  {
    role: "Dot Net Developer",
    company: "Dimension Groups",
    time: "2025-Present",
    points: [
      "Maintained and optimized company websites",
      "Integrated BSE & Shriram Finance APIs",
      "Improved UI responsiveness and security",
    ],
  },
  {
    role: "Dot Net Developer",
    company: "NEGD (NIC)",
    time: "2024-2025",
    points: [
      "Built React frontend using Material UI",
      "Backend with .NET MVC and MySQL",
      "API documentation with Swagger",
    ],
  },
  {
    role: "Dot Net Developer",
    company: "IREDA",
    time: "2023-2024",
    points: [
      "Built scalable databases",
      "Developed REST APIs",
      "Deployed using AWS and CI/CD pipelines",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center relative">
        <div>
          <p className="section-kicker">Experience</p>
          <h2 className="section-title mt-4">Roles that shaped my craft</h2>
          <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
            <path d="M2 9 H138" />
          </svg>
        </div>
        <svg className="section-svg" viewBox="0 0 140 44" aria-hidden="true">
          <path d="M10 10 H70 M90 10 H130 M10 30 H50 M80 30 H130" />
          <circle cx="10" cy="10" r="3" />
          <circle cx="130" cy="30" r="3" />
        </svg>
        <div className="media-frame media-glow">
          <img src={neonLines} alt="Systems engineering" className="tilt-media" />
          <div className="media-caption">Reliability engineering • High availability</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto timeline space-y-5">
        {experiences.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card hover-card relative"
          >
            <div className="absolute -left-5 top-8 timeline-dot" />
            <div className="flex justify-between items-center flex-wrap">
              <h3 className="text-lg font-semibold">{e.company}</h3>
              <span className="text-muted text-sm">{e.time}</span>
            </div>
            <p className="text-accent mt-1">{e.role}</p>
            <ul className="list-disc list-inside text-muted mt-3 space-y-1">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
