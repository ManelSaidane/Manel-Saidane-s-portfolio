
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "E-COMMERCE · FULL-STACK",
    title: "The M Touch",
    description:
      "A modern e-commerce platform for a Tunisian lifestyle brand, combining product management, shopping experience, order tracking and a secure administration system.",
    technologies: [
      "React",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "RLS",
      "Vercel",
    ],
    link: "https://themtouch.vercel.app/",
  },

  {
    number: "02",
    category: "AI · DOCUMENT PROCESSING",
    title: "DocuSmart",
    description:
      "An intelligent document automation platform designed to process financial documents and extract structured information using computer vision and OCR.",
    technologies: [
      "Angular",
      "Spring Boot",
      "MongoDB",
      "YOLOv8",
      "PaddleOCR",
      "LayoutLMv3",
    ],
  },

  {
    number: "03",
    category: "EDTECH · FULL-STACK",
    title: "Doctrina Space",
    description:
      "A multilingual e-learning platform designed to manage courses, users, categories and educational content through a modern administration system.",
    technologies: [
      "Next.js",
      "Node.js",
      "MySQL",
      "i18n",
      "Figma",
    ],
    link: "https://www.doctrinaspace.tn/fr",
  },

  {
    number: "04",
    category: "MOBILE · COMMUNITY",
    title: "WeeFarm",
    description:
      "A cross-platform agricultural community application enabling farmers to share knowledge, report diseases, sell regional products and interact with their community.",
    technologies: [
      "Flutter",
      "REST API",
      "Bearer Auth",
      "SharedPreferences",
    ],
  },

  {
    number: "05",
    category: "E-COMMERCE · AI",
    title: "CraftHub",
    description:
      "A marketplace connecting artisans with customers while enabling product sales, creative workshop reservations and subscription-based selling.",
    technologies: [
      "React",
      "Node.js",
      "AI",
      "E-commerce",
    ],
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">

        <div className="section-header">
          <div>
            <div className="section-label">
              05 — Selected work
            </div>

            <h2 className="section-title">
              Projects that shaped my engineering journey.
            </h2>
          </div>

          <p className="section-description">
            A selection of products and systems developed across
            e-commerce, AI, education, mobile and enterprise software.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
              }}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight size={22} />
                </a>
              ) : (
                <span
                  className="project-link"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={22} />
                </span>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;

