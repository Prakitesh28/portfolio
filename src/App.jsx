import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      const shift = window.scrollY * -0.22;
      document.documentElement.style.setProperty("--star-shift", `${shift}px`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="stars-layer" aria-hidden="true" />
      <Hero />

      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="section-title">About</h2>
        <div className="about-card">
          <p>
            I am Prakitesh Bakshi, a CSBS undergrad who enjoys solving hard engineering
            problems across AI and modern web backends. I build systems that combine
            reliable APIs, usable frontend experiences, and practical machine learning.
          </p>
        </div>
      </motion.section>

      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
