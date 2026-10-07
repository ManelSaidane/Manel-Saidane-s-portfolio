import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">01 — About me</div>
            <h2 className="section-title">
              Engineering ideas into digital experiences.
            </h2>
          </div>

          <p className="section-description">
            Software Engineer focused on building useful, scalable and
            intelligent digital products.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-lead">
              I am a Software Engineer specialized in full-stack development,
              web and mobile applications, and artificial intelligence.
            </p>

            <p>
              My work combines clean architecture, intuitive interfaces and
              reliable backend systems to transform ideas into useful digital
              products.
            </p>

            <p>
              I enjoy working on challenging problems, learning new
              technologies and building solutions that are both technically
              solid and meaningful to users.
            </p>
          </motion.div>

          <motion.div
            className="about-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="about-stat">
              <strong>Full-Stack</strong>
              <span>Development</span>
            </div>

            <div className="about-stat">
              <strong>AI</strong>
              <span>Intelligent Systems</span>
            </div>

            <div className="about-stat">
              <strong>Web + Mobile</strong>
              <span>Digital Products</span>
            </div>

            <a href="#experience" className="text-link">
              Explore my experience
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;