import { motion } from 'framer-motion';

const education = [
  {
    date: '09/2022 — 06/2025',
    degree: 'Engineering Degree in Computer Science',
    school: 'École Privée d’Ingénierie — EPI',
    detail: 'Specialization: Technology',
  },
  {
    date: '09/2020 — 06/2022',
    degree: 'Preparatory Studies for Engineering',
    school: 'Institut Préparatoire aux Études d’Ingénieurs — Monastir',
    detail: 'Engineering preparatory studies',
  },
  {
    date: '2016 — 2020',
    degree: 'Scientific Baccalaureate',
    school: 'Lycée Secondaire Sayeda',
    detail: 'Scientific studies',
  },
];

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">07 — Education</div>
            <h2 className="section-title">The foundation behind the work.</h2>
          </div>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <motion.article
              className="education-item"
              key={item.degree}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="education-date">{item.date}</span>

              <div>
                <h3>{item.degree}</h3>
                <strong>{item.school}</strong>
                <p>{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;