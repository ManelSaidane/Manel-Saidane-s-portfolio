
import { ArrowUpRight, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <strong>MANEL SAIDANE<span>.</span></strong>

            <p>
              Software Engineer building digital products,
              scalable applications and intelligent systems.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="footer-column">
            <span className="footer-label">Explore</span>

            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* CONNECT */}
          <div className="footer-column">
            <span className="footer-label">Connect</span>

            <a
              href="https://www.linkedin.com/in/manel-saidane-07897b25b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://github.com/ManelSaidane"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a href="mailto:saidaneemanel@gmail.com">
              Email
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* LOCATION */}
          <div className="footer-column footer-location">
            <span className="footer-label">Based in</span>

            <span>Sousse · Tunisia</span>
            <span>Available for opportunities</span>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © {currentYear} Manel Saidane. All rights reserved.
          </span>

          <span className="footer-stack">
            Full-Stack · AI · Software Engineering
          </span>

          <a
            href="#home"
            className="footer-back-top"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;