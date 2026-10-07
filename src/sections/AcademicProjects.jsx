import { motion } from 'framer-motion';

const academicProjects = [
  {
    title: 'Travel Agency',
    stack: 'HTML · CSS · JavaScript',
    description:
      'Web travel booking application with dynamic search and interactive maps.',
  },
  {
    title: 'Recruitment Platform',
    stack: 'ASP.NET Core · SQL Server',
    description:
      'Recruitment platform for managing job offers, candidates and applications.',
  },
  {
    title: 'Job Offers Microservice',
    stack: 'Spring Boot · JWT',
    description:
      'Microservice for job offers, applications, notifications and candidate-recruiter relationships.',
  },
  {
    title: 'Championship Manager',
    stack: 'Flutter',
    description:
      'Mobile application for managing players, clubs, matches, statistics and results.',
  },
  {
    title: 'Software Testing Project',
    stack: 'Testing · QA',
    description:
      'Software quality project covering unit, integration and performance testing.',
  },
];

function AcademicProjects() {
  return (
    <section className="section academic-section" id="academic-projects">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">06 — Academic work</div>
            <h2 className="section-title">Beyond professional projects.</h2>
          </div>
        </div>

        <div className="academic-grid">
          {academicProjects.map((project, index) => (
            <motion.article
              className="academic-card"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <span>{project.stack}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicProjects;