import { motion } from "framer-motion";

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <article className="project-card">
          <h3>Deepfake Detection</h3>
          <p>
            A CNN-based detection system with a responsive React frontend and FastAPI
            backend for fast inference workflows.
          </p>
          <span className="stack-pill">CNN</span>
          <span className="stack-pill">FastAPI</span>
          <span className="stack-pill">React</span>
        </article>

        <article className="project-card">
          <h3>Luv 2 Learn</h3>
          <p>
            SIH 2025 skill-matching app focused on connecting learners with
            personalized growth opportunities.
          </p>
          <span className="stack-pill">SIH 2025</span>
          <span className="stack-pill">Skill Matching</span>
          <span className="stack-pill">Full Stack</span>
        </article>
      </div>
    </motion.section>
  );
}
