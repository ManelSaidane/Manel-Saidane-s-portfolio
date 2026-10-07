import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Next.js', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'NestJS', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'React Native'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'AI & Computer Vision',
    items: ['YOLOv8', 'PaddleOCR', 'Tesseract', 'LayoutLMv3'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'Git', 'GitHub Actions', 'GitLab'],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">03 — Technology</div>
            <h2 className="section-title">Tools I work with.</h2>
          </div>

          <p className="section-description">
            A constantly evolving technical toolkit built through academic,
            freelance and professional projects.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;