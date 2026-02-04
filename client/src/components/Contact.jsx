import { useState } from "react";
import { motion } from "framer-motion";
import dataCenter from "../assets/data-center.jpg";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <section id="contact" className="editorial-section px-6 section-alt">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start relative">
        <div className="glass-card hover-card">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-4">Let’s build something reliable</h2>
          <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
            <path d="M2 9 H138" />
          </svg>
          <p className="text-muted mt-4">
            Open to full-stack roles, contract work, and product collaborations.
            I respond fast and love solving real problems.
          </p>
          <svg className="section-svg" viewBox="0 0 140 44" aria-hidden="true">
            <path d="M10 10 H70 M90 10 H130 M10 30 H50 M80 30 H130" />
            <circle cx="10" cy="30" r="3" />
            <circle cx="130" cy="10" r="3" />
          </svg>
          <div className="mt-6 media-frame media-glow">
            <img src={dataCenter} alt="Cloud infrastructure" className="tilt-media" />
            <div className="media-caption">Always-on systems • Collaborative delivery</div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-muted">
            <div className="soft-border rounded-2xl px-4 py-3">
              Email: guptanamish11@gmail.com
            </div>
            <div className="soft-border rounded-2xl px-4 py-3">Location: India</div>
            <div className="soft-border rounded-2xl px-4 py-3">Availability: Open</div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:guptanamish11@gmail.com"
              className="rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted magnetic"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/917651856149"
              target="_blank"
              rel="noreferrer"
              className="btn-accent text-xs uppercase tracking-[0.2em] magnetic"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit}
          className="glass-card flex flex-col gap-4"
        >
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
          <input type="hidden" name="subject" value="New message from portfolio" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="bg-surface border border-soft rounded-lg px-4 py-3 text-primary"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="bg-surface border border-soft rounded-lg px-4 py-3 text-primary"
          />
          <textarea
            rows="5"
            placeholder="Message"
            name="message"
            required
            className="bg-surface border border-soft rounded-lg px-4 py-3 text-primary"
          />
          <button className="btn-accent hover:scale-105 transition magnetic">
            Send Message
          </button>

          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-secondary"
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
