import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="section-title">Contact</h2>
      <div className="contact-card">
        <div className="contact-grid">
          <div><strong>Name:</strong> Prakitesh Bakshi</div>
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:prakiteshbakshi28@gmail.com">prakiteshbakshi28@gmail.com</a>
          </div>
          <div>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/Prakitesh28" target="_blank" rel="noopener noreferrer">
              github.com/Prakitesh28
            </a>
          </div>
        </div>
        <a className="signal-btn" href="mailto:prakiteshbakshi28@gmail.com?subject=Project%20Signal">
          SEND SIGNAL
        </a>
      </div>
    </motion.section>
  );
}
