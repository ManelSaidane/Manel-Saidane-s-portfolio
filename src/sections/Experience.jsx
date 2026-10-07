import { motion } from 'framer-motion';

const experiences = [
  {
    date: '04/2026 — 09/2026',
    role: 'University Instructor in Computer Science',
    company: 'IMSET',
    location: 'Sousse, Tunisia',
    description:
      'Teaching Microsoft Access, Microsoft Word and Algorithmics. Preparing practical work, examinations and educational materials while supporting students throughout their practical activities.',
  },
  {
    date: '01/2026 — 06/2026',
    role: 'Full-Stack Developer · Freelance',
    company: 'The M Touch',
    location: 'Tunisia',
    description:
      'Designed and developed a modern e-commerce platform with React, Vite and Supabase, including product management, shopping cart, order tracking and a complete administration dashboard.',
  },
  {
    date: '12/2025 — 01/2026',
    role: 'Full-Stack Developer · Freelance',
    company: 'Doctrina Space',
    location: 'Tunisia',
    description:
      'Developed a multilingual e-learning platform for managing courses, users, categories and educational content using Next.js, Node.js and MySQL.',
  },
  {
    date: '11/2025 — 03/2026',
    role: 'Frontend Developer · Freelance',
    company: 'WeeFarm',
    location: 'Tunisia',
    description:
      'Developed a cross-platform agricultural community application with Flutter, REST APIs, secure authentication, social features, multilingual support and responsive interfaces.',
  },
  {
    date: '07/2025 — 09/2025',
    role: 'Full-Stack Developer · Freelance',
    company: 'CraftHub',
    location: 'Tunisia',
    description:
      'Developed an e-commerce and creative workshop platform for artisans, including subscriptions, product sales, workshop reservations and AI-powered features.',
  },
  {
    date: '02/2025 — 06/2025',
    role: 'Full-Stack Developer',
    company: 'GTI — DocuSmart',
    location: 'Tunisia',
    description:
      'Developed an intelligent document automation platform using Spring Boot microservices, Angular, MongoDB, YOLOv8, PaddleOCR and LayoutLMv3.',
  },
  {
    date: '06/2024 — 07/2024',
    role: 'Full-Stack Developer',
    company: 'Proxym',
    location: 'Tunisia',
    description:
      'Developed a full-stack reservation system using NestJS, React and React Native, with real-time management, invoicing and automated email notifications.',
  },
  {
    date: '02/2024 — 05/2024',
    role: 'Full-Stack Developer',
    company: 'Terraform Tunisia',
    location: 'Tunisia',
    description:
      'Worked on a web and mobile childcare management platform using React, Flutter and Spring Boot.',
  },
  {
    date: '06/2023 — 07/2024',
    role: 'Developer',
    company: 'Inside Digital Services',
    location: 'Tunisia',
    description:
      'Created an Odoo module for purchase order automation using Python and XML, helping streamline ERP workflows.',
  },
];

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">04 — Experience</div>
            <h2 className="section-title">Where I've built things.</h2>
          </div>

          <p className="section-description">
            From freelance products to professional environments, each
            experience has shaped my approach to software engineering.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={`${experience.company}-${experience.date}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
            >
              <div className="experience-date">
                {experience.date}
              </div>

              <div className="experience-content">
                <h3>{experience.role}</h3>

                <div className="experience-company">
                  {experience.company}
                  <span>·</span>
                  {experience.location}
                </div>

                <p>{experience.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;