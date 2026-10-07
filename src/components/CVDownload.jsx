import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";

const cvOptions = [
  {
    language: "English",
    label: "English CV",
    description: "International & technical applications",
    file: "/cv/Manel_Saidane_English_Resume.pdf",
  },
  {
    language: "Français",
    label: "CV Français",
    description: "French-speaking opportunities",
    file: "/cv/Manel_Saidane_Français_Resume.pdf",
  },
  {
    language: "Europass",
    label: "Europass CV",
    description: "European applications & mobility",
    file: "/cv/Manel-Saidane-Europass-CV.pdf",
  },
];

function CVDownload({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`cv-dropdown ${
        variant === "hero" ? "cv-dropdown-hero" : ""
      }`}
    >
      <button
        type="button"
        className="cv-dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <Download size={17} />

        <span>Download CV</span>

        <motion.span
          className="cv-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cv-dropdown-menu"
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="cv-dropdown-header">
              <span>SELECT A VERSION</span>
              <small>
                Choose the CV that fits your application.
              </small>
            </div>

            <div className="cv-options">
              {cvOptions.map((cv, index) => (
                <motion.a
                  key={cv.language}
                  href={cv.file}
                  download
                  className="cv-option"
                  onClick={() => setIsOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                  }}
                >
                  <span className="cv-option-icon">
                    <FileText size={17} />
                  </span>

                  <span className="cv-option-content">
                    <strong>{cv.label}</strong>
                    <small>{cv.description}</small>
                  </span>

                  <ExternalLink
                    size={15}
                    className="cv-option-arrow"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CVDownload;