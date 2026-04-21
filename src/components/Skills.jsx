import { motion } from "framer-motion";

const skills = [
  "Python",
  "Java",
  "C",
  "React",
  "FastAPI",
  "Django",
  "Keras",
  "PostgreSQL",
  "Git"
];

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="skills-card">
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
