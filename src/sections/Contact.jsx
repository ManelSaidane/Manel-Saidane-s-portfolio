import { Mail, Phone, ArrowUpRight } from "lucide-react";
import CVDownload from "../components/CVDownload";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">06 — Contact</span>

          <h2>
            Let's build something
            <br />
            <em>meaningful.</em>
          </h2>
        </div>

        <div className="contact-grid">

          <div className="contact-intro">
            <p>
              I'm open to new opportunities, collaborations,
              freelance projects, and interesting ideas in
              software engineering, full-stack development,
              and AI.
            </p>

            <p>
              If you have a project in mind or simply want to
              connect, feel free to reach out.
            </p>
          </div>

          <div className="contact-links">

            {/* EMAIL */}
            <a
              href="mailto:saidaneemanel@gmail.com"
              className="contact-link"
            >
              <span className="contact-icon">
                <Mail size={20} />
              </span>

              <span className="contact-link-content">
                <small>Email</small>
                <strong>
                  saidaneemanel@gmail.com
                </strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            {/* PHONE */}
            <a
              href="tel:+21699043314"
              className="contact-link"
            >
              <span className="contact-icon">
                <Phone size={20} />
              </span>

              <span className="contact-link-content">
                <small>Phone</small>
                <strong>
                  +216 99 043 314
                </strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/manel-saidane-07897b25b/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-icon contact-brand">
                in
              </span>

              <span className="contact-link-content">
                <small>LinkedIn</small>
                <strong>
                  Connect with me
                </strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/ManelSaidane"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-icon contact-brand">
                GH
              </span>

              <span className="contact-link-content">
                <small>GitHub</small>
                <strong>
                  ManelSaidane
                </strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            {/* CV DOWNLOAD */}
            <CVDownload />

          </div>
        </div>

        <div className="contact-bottom">
          <span>Sousse · Tunisia</span>
          <span>Available for opportunities</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;