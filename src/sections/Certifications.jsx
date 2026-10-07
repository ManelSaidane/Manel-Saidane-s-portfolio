import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: 'Fundamentals of Deep Learning',
    category: 'Artificial Intelligence',
  },
  {
    title: 'AI Applications for Predictive Maintenance',
    category: 'Artificial Intelligence',
  },
  {
    title: 'NLP Applications Based on Transformers',
    category: 'Natural Language Processing',
  },
];

function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">08 — Certifications</div>
            <h2 className="section-title">Continuous learning.</h2>
          </div>

          <p className="section-description">
            Keeping my knowledge current in artificial intelligence and
            emerging technologies.
          </p>
        </div>

        <div className="certifications-grid">
          {certificates.map((certificate, index) => (
            <motion.article
              className="certificate-card"
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Award size={25} strokeWidth={1.4} />

              <span>{certificate.category}</span>

              <h3>{certificate.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;