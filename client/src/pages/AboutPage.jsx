import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import serverComponents from "../assets/server-components.jpg";
import codeScreen from "../assets/code-screen.jpg";

const profileHighlights = [
  "Senior Software Developer",
  ".NET Full Stack Developer",
  "Government + enterprise delivery",
  "Cloud, APIs, and secure systems",
];

const coreStrengths = [
  "Full-stack development",
  "REST API integration",
  "Database optimization",
  "Cloud deployment",
  "Application security",
  "Performance tuning",
];

const resumeCorrections = [
  {
    title: 'Senior Software Developer | .NET Full Stack Developer',
    note: "Use this wording instead of “Senior Software Developer | .NET & Full Stack”.",
  },
  {
    title: "Cybersecurity",
    note: 'Prefer this spelling over “Cyber Security”.',
  },
  {
    title: "AWS, Azure, Docker, CI/CD, DevOps Practices",
    note: "This reads cleaner than “Cloud & DevOps AWS, Azure, CI/CD pipelines”.",
  },
  {
    title: "Add measurable achievements",
    note: "If possible, include impact numbers like users served, time reduced, or efficiency gained.",
  },
];

export default function AboutPage({ onNavigate }) {
  return (
    <main id="main-content" className="about-page">
      <section className="editorial-section section-alt px-6 about-hero-section">
        <div className="max-w-6xl mx-auto about-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-copy-panel"
          >
            <p className="section-kicker about-kicker">Professional About Me</p>
            <h1 className="about-title mt-4">
              About Me
              <span className="about-title-accent">Senior Software Developer</span>
            </h1>
            <p className="about-intro">
              I am a Senior Software Developer with over 4 years of experience in designing,
              developing, and deploying scalable web applications for government and enterprise
              clients. My expertise spans across .NET Core, ASP.NET MVC, React.js, Node.js, SQL
              Server, MySQL, AWS, and Azure cloud platforms.
            </p>
            <p className="about-intro">
              I have successfully contributed to multiple large-scale e-Governance projects in
              collaboration with NEGD, NIC, Delhi Police, Tea Board of India, TRLM, and other
              government organizations.
            </p>
            <p className="about-intro">
              I specialize in full-stack development, REST API integration, database optimization,
              cloud deployment, application security, and performance enhancement. Throughout my
              career, I have been involved in the complete software development lifecycle, from
              requirement gathering and system design to deployment, maintenance, and support.
            </p>
            <p className="about-intro">
              My passion lies in building secure, user-friendly, and high-performance digital
              solutions that create real-world impact. I continuously strive to improve my
              technical expertise while delivering innovative and reliable software products that
              meet business objectives and user expectations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate?.("/projects");
                }}
                className="btn-accent magnetic"
              >
                View Projects
              </a>
              <a
                href="/contact"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate?.("/contact");
                }}
                className="px-6 py-3 rounded-full border border-soft text-muted hover:text-primary transition magnetic"
              >
                Contact Me
              </a>
            </div>

            <div className="about-chip-row mt-8">
              {profileHighlights.map((item) => (
                <span key={item} className="about-chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="about-image-stack"
          >
            <div className="about-image-panel media-frame media-glow">
              <img
                src={profile}
                alt="Shlok Shah"
                className="about-image"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="about-image-overlay">
                <span className="about-image-kicker">Built for impact</span>
                <span className="about-image-label">Secure • Scalable • Reliable</span>
              </div>
            </div>

            <div className="about-quick-grid">
              <div className="glass-card about-quick-card">
                <p className="section-kicker">Short Version</p>
                <h2 className="about-section-title mt-3">Website / LinkedIn</h2>
                <p className="about-card-copy mt-4">
                  Senior Software Developer | .NET Full Stack Developer
                </p>
                <p className="about-card-copy mt-3">
                  Experienced Software Developer with 4+ years of expertise in .NET Core, ASP.NET
                  MVC, React.js, Node.js, SQL Server, AWS, and Azure. Delivered multiple government
                  and enterprise digital transformation projects, specializing in scalable web
                  applications, API integrations, cloud deployments, cybersecurity compliance, and
                  database optimization.
                </p>
                <p className="about-card-copy mt-3">
                  Passionate about building secure, high-performance, and user-centric software
                  solutions.
                </p>
              </div>

              <div className="glass-card about-quick-card">
                <p className="section-kicker">Core Strengths</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {coreStrengths.map((item) => (
                    <span key={item} className="about-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="editorial-section px-6">
        <div className="max-w-6xl mx-auto about-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <p className="section-kicker">Experience summary</p>
            <h2 className="about-section-title mt-4">
              Designing and delivering real-world digital systems
            </h2>
            <div className="mt-6 space-y-4">
              <p className="about-card-copy">
                I specialize in full-stack development, REST API integration, database
                optimization, cloud deployment, application security, and performance
                enhancement.
              </p>
              <p className="about-card-copy">
                Throughout my career, I have been involved in the complete software development
                lifecycle, from requirement gathering and system design to deployment,
                maintenance, and support.
              </p>
              <p className="about-card-copy">
                My passion lies in building secure, user-friendly, and high-performance digital
                solutions that create real-world impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="media-frame media-glow"
          >
            <img
              src={serverComponents}
              alt="Server components and infrastructure"
              className="about-inline-image"
              loading="lazy"
              decoding="async"
            />
            <div className="media-caption">Government and enterprise-grade delivery focus</div>
          </motion.div>
        </div>
      </section>

      {/* <section className="editorial-section section-alt px-6">
        <div className="max-w-6xl mx-auto about-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="media-frame media-glow"
          >
            <img
              src={codeScreen}
              alt="Code screen"
              className="about-inline-image"
              loading="lazy"
              decoding="async"
            />
            <div className="media-caption">Balanced backend discipline with polished user experience</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card"
          >
            <p className="section-kicker">Resume improvements</p>
            <h2 className="about-section-title mt-4">Small wording changes that strengthen your profile</h2>
            <div className="mt-6 space-y-4">
              {resumeCorrections.map((item) => (
                <div key={item.title} className="about-correction-item">
                  <h3 className="about-correction-title">{item.title}</h3>
                  <p className="about-card-copy mt-2">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 soft-border rounded-2xl p-4 bg-surface">
              <p className="about-card-copy">
                If you can add real metrics, this section will become much stronger for senior
                .NET, full-stack, technical lead, and solution engineer roles.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate?.("/contact");
                }}
                className="btn-accent magnetic"
              >
                Let’s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </main>
  );
}
