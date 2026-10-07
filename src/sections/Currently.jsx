import { motion } from 'framer-motion';

function Currently() {
  return (
    <section className="currently-section">
      <div className="container">
        <motion.div
          className="currently-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">09 — Currently</div>

          <h2>Building, learning, evolving.</h2>

          <p>
            I am continuously exploring new technologies, strengthening my
            expertise in artificial intelligence and developing digital
            products that combine strong engineering with meaningful user
            experiences.
          </p>

          <div className="currently-status">
            <span />
            Open to new opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Currently;