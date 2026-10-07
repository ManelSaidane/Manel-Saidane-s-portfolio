import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CVDownload from "../components/CVDownload";
function Hero() {
  return (
    <section className="hero" id="home">
      {" "}
      <div className="hero-container">
        {" "}
        {/* LEFT CONTENT */}{" "}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {" "}
          <motion.p
            className="hero-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {" "}
            SOFTWARE ENGINEER{" "}
          </motion.p>{" "}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {" "}
            Manel <br /> Saidane<span>.</span>{" "}
          </motion.h1>{" "}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {" "}
            I design and build modern digital products, scalable applications
            and intelligent systems that turn complex ideas into meaningful
            experiences.{" "}
          </motion.p>{" "}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {" "}
            <a href="#projects" className="hero-button primary">
              {" "}
              View my work <ArrowUpRight size={16} strokeWidth={1.8} />{" "}
            </a>{" "}
            <CVDownload variant="hero" />{" "}
          </motion.div>{" "}
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            {" "}
            <span>FULL-STACK DEVELOPMENT</span>{" "}
            <span>AI & COMPUTER VISION</span> <span>WEB & MOBILE</span>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
        {/* RIGHT PHOTO */}{" "}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {" "}
          <div className="hero-photo-frame">
            {" "}
            <img
              src="/images/manel-saidane.jpeg"
              alt="Manel Saidane - Software Engineer"
              className="hero-photo"
            />{" "}
          </div>{" "}
          <div className="hero-photo-decoration" />{" "}
          <div className="hero-photo-caption">
            {" "}
            <span>Software Engineer</span> <span>Sousse · Tunisia</span>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
      {/* SCROLL INDICATOR */}{" "}
      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {" "}
        <span>Scroll to explore</span>{" "}
        <ArrowDown size={15} strokeWidth={1.5} />{" "}
      </motion.a>{" "}
    </section>
  );
}
export default Hero;
