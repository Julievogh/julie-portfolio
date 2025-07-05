"use client";

import { useEffect, useRef, useState } from "react";
import VideoHero from "./components/VideoHero";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useLang } from "./layout"; // Importer sprogkontextet

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [lang, setLang] = useState("en");
  const [showArrow, setShowArrow] = useState(false);
  const contactRef = useRef(null);

  // Funktion, der viser pilen
  function handleContactClick() {
    setShowArrow(true);
    setTimeout(() => setShowArrow(false), 2000);
  }

  // Scroll tracking for active nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        { id: "me", offset: document.getElementById("me")?.offsetTop || 0 },
        {
          id: "projects",
          offset: document.getElementById("projects")?.offsetTop || 0,
        },
        {
          id: "extra",
          offset: document.getElementById("extra")?.offsetTop || 0,
        },
      ];
      const current = sections
        .reverse()
        .find((section) => scrollY + 100 >= section.offset);
      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Observer: Vis pilen når kontaktsektionen er synlig
  useEffect(() => {
    if (!contactRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowArrow(true);
          setTimeout(() => setShowArrow(false), 2000);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
        setShowArrow(true);
        setTimeout(() => setShowArrow(false), 2000);
      }, 200);
    }
  }, []);

  const navLinks = [
    {
      id: "projects",
      label: lang === "dk" ? "PROJEKTER" : "PROJECTS",
      href: "/projects",
    },
    { id: "me", label: lang === "dk" ? "MIG" : "ME", href: "/" },
    { id: "extra", label: lang === "dk" ? "EXTRA" : "EXTRA", href: "/#extra" },
    {
      id: "contact",
      label: lang === "dk" ? "KONTAKT" : "CONTACT",
      href: "/#contact",
    },
  ];

  // Tekster til DK/EN
  const texts = {
    en: {
      name: "Julie Vogh",
      sub: "(Say it like Vogue)",
      intro1: `Hi, I’m Julie – a curious frontend creative who builds smooth, user-friendly interfaces with equal parts logic and whimsy. I care about the details, the people, and making the web a little more delightful.`,
      intro2: `I am looking for my next challenge - if you need a frontend developer or a UI/UX designer, or general marketing/customer-person, I would love to hear from you. I am based in Copenhagen, and part-time in Rome. I am interested in remote or hybrid work, and I am open to both freelance and full-time opportunities.`,
      location: "Copenhagen / Rome",
      contact: "Frontend Designer",
      remote: "Remote or on-site",
      oneWoman: "One-woman show ✨",
      projects: "Projects",
      projectsIntro:
        "A mix of client work, personal ideas and fun explorations. I believe creativity is a muscle – and I love flexing it.",
      skills: "Here are my skills",
      skillsList: [
        "Figma",
        "HTML / CSS / Tailwind / JS",
        "React / Next.js",
        "WordPress / Elementor",
        "Adobe Illustrator",
        "AI is my personal assistant",
        "SoMe, SEO",
        "Marketing",
        "Customer support",
        "Content creation",
        "Empathy & Curiosity",
        "Problem-solving with Creativity",
        "Working until it works",
      ],
    },
    dk: {
      name: "Julie Vogh",
      sub: "(Udtales som Fogh på dansk)",
      intro1: `Hej, jeg er Julie – en nysgerrig frontend-udvikler, der bygger lækre, brugervenlige interfaces med lige dele logik og leg. Jeg elsker detaljen, mennesket og at gøre nettet lidt mere hyggeligt.`,
      intro2: `Jeg søger nye udfordringer – har du brug for en frontend-udvikler, UI/UX-designer eller marketing/kundeservice-person, vil jeg meget gerne høre fra dig. Jeg er baseret i København og delvist i Rom. Jeg er interesseret i remote eller hybrid-arbejde, både freelance og fast.`,
      location: "København / Rom",
      contact: "Frontend-designer",
      remote: "Remote eller fysisk",
      oneWoman: "Én-kvinde-hær ✨",
      projects: "Projekter",
      projectsIntro:
        "En blanding af kundeprojekter, egne idéer og legende eksperimenter. Kreativitet er en muskel – og jeg elsker at bruge den.",
      skills: "Mine kompetencer",
      skillsList: [
        "Figma",
        "HTML / CSS / Tailwind / JS",
        "React / Next.js",
        "WordPress / Elementor",
        "Adobe Illustrator",
        "AI er min personlige assistent",
        "SoMe, SEO",
        "Marketing",
        "Kundesupport",
        "Content creation",
        "Empati & nysgerrighed",
        "Kreativ problemløsning",
        "Giver ikke op før det virker",
      ],
    },
  };

  const t = texts[lang];
  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-pink-600 font-serif bg-[url('/imgs/paper-bg.png')] bg-repeat p-6 lg:p-12 scroll-smooth">
      {/* Sprogtoggle øverst til højre */}
      <div className="fixed mt-12 lg:mt-2 top-4 right-6 z-50 flex gap-2 items-center">
        <button
          className={`px-2 py-1 rounded font-bold ${
            lang === "dk" ? "bg-pink-200" : "hover:bg-pink-100"
          }`}
          onClick={() => setLang("dk")}
        >
          🇩🇰
        </button>
        <button
          className={`px-2 py-1 rounded font-bold ${
            lang === "en" ? "bg-pink-200" : "hover:bg-pink-100"
          }`}
          onClick={() => setLang("en")}
        >
          🇬🇧
        </button>
      </div>

      {/* NavBar */}
      <NavBar
        navLinks={navLinks}
        activeSection={activeSection}
        onContactClick={handleContactClick}
        color="pink"
      />

      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-left">{t.name}</h1>
          <h2 className="text-2xl font-semibold text-pink-500 text-left">
            {t.sub}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT COLUMN */}
          <section className="flex-1 max-w-3xl" id="me">
            <div className="p-0 flex flex-col gap-4">
              <div className="bg-gray-200 aspect-video w-full overflow-hidden rounded-lg">
                <VideoHero
                  videoSrc="/imgs/profile-video.mp4"
                  poster="/imgs/julie1.jpeg"
                  alt="Julie Vogh"
                />
              </div>
              <div className="bg-white/70 p-4 rounded shadow text-sm font-sans">
                <p>{t.intro1}</p>
              </div>
              <div className="bg-white/70 p-4 rounded shadow text-sm font-sans">
                <p>{t.intro2}</p>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN */}
          <section
            className="flex-1 text-sm pl-2 space-y-4 max-w-sm mt-0 lg:mt-0"
            id="projects"
          >
            <div>
              <h3>
                <strong>Julie Sølva Eschricht Vogh</strong>
              </h3>
              <p>{t.location}</p>
              <p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const email = ["julesvogh", "gmail", "com"]
                      .join("@")
                      .replace("gmail@", "gmail.");
                    window.location.href = `mailto:${email}?subject=Interested in your work&body=Hi Julie,%0A%0AI am interested in something...`;
                  }}
                  className="underline hover:text-pink-800"
                >
                  <span className="font-medium">
                    julesvogh [at] gmail [dot] com
                  </span>
                </a>
              </p>
              <p>+45 23 84 80 88</p>
              <p>{t.contact}</p>
              <p>{t.remote}</p>
              <p className="italic">{t.oneWoman}</p>
            </div>

            <div>
              <h2 className="font-semibold mt-6">{t.projects}</h2>
              <p>{t.projectsIntro}</p>
            </div>

            <div>
              <h2 className="font-semibold mt-6">{t.skills}</h2>
              <ul className="list-disc pl-5 space-y-1">
                {t.skillsList.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Footer med ref (for observer) */}
      <div ref={contactRef}>
        <Footer id="contact" showArrow={showArrow} />
      </div>
    </main>
  );
}
