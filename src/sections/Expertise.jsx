import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  Database,
  Smartphone,
} from 'lucide-react';

const expertise = [
  {
    number: '01',
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications combining modern interfaces, robust APIs and scalable backend architectures.',
    technologies:
      'React · Angular · Next.js · Spring Boot · NestJS',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Intelligent solutions for document processing, OCR, computer vision and AI-powered applications.',
    technologies:
      'YOLOv8 · PaddleOCR · LayoutLMv3 · Tesseract · Python',
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Web & Mobile',
    description:
      'Responsive web platforms and cross-platform mobile applications designed around real user needs.',
    technologies:
      'React · Flutter · React Native',
  },
  {
    number: '04',
    icon: Database,
    title: 'Software Engineering',
    description:
      'Structured, maintainable and secure software systems designed for long-term scalability.',
    technologies:
      'Java · Python · TypeScript · SQL · Docker',
  },
];

function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">02 — Expertise</div>

            <h2 className="section-title">
              What I build.
            </h2>
          </div>

          <p className="section-description">
            Combining engineering, design and emerging technologies
            to create complete digital solutions.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="expertise-card"
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="expertise-top">
                  <span>{item.number}</span>

                  <Icon
                    size={25}
                    strokeWidth={1.5}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="expertise-tech">
                  {item.technologies}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Expertise;