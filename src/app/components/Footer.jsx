"use client";
import ContactForm from "./ContactForm";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer({ showArrow }) {
  // Array med delays
  const arrowData = [
    { delay: 0, top: "4%" },
    { delay: 0.18, top: "26%" },
    { delay: 0.36, top: "48%" },
  ];

  return (
    <footer className="mt-16 flex flex-col items-center" id="contact">
      <a
        href="#"
        onClick={() => {
          window.location.href =
            "mailto:" +
            ["julesvogh", "gmail.com"].join("@") +
            "?subject=Interested%20in%20your%20work&body=Hi%20Julie,%0A%0AI%20am%20interested%20in%20something...";
        }}
        className="block mb-6 text-center"
      >
        <p className="text-lg font-medium hover:underline cursor-pointer">
          <strong> Hit me up</strong>
        </p>
        <span className="text-pink-600"> ✨</span>
      </a>

      {/* Pilene peger ind mod kontaktform */}
      <div className="relative flex w-full max-w-lg mx-auto">
        <AnimatePresence>
          {showArrow &&
            arrowData.map((arrow, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -48, scale: 1.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -48, scale: 0.7 }}
                transition={{
                  duration: 1.5,
                  delay: arrow.delay,
                  type: "spring",
                  bounce: 0.6,
                }}
                className="absolute -left-24 z-10"
                style={{ top: arrow.top }}
              >
                <svg width="60" height="70" viewBox="0 0 110 80">
                  <line
                    x1="10"
                    y1="40"
                    x2="85"
                    y2="40"
                    stroke="#e6007a"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <polygon points="98,40 80,28 80,52" fill="#e6007a" />
                </svg>
              </motion.div>
            ))}
        </AnimatePresence>
        {/* Kontaktform */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
