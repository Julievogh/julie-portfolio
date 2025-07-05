"use client";

import { useEffect, useRef, useState } from "react";
import VideoHero from "./components/VideoHero";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [lang, setLang] = useState("en");
  const [showArrow, setShowArrow] = useState(false);
  const contactRef = useRef(null);

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
      intro1: `Hi, I’m <strong>Julie</strong> — a <strong>curious frontend creative</strong> who builds smooth, memorable user experiences, mixing <strong>logic</strong> with a dash of <strong>whimsy</strong>. I obsess over the <strong>details</strong>, care deeply about <strong>people</strong>, and believe the web should feel a little more <strong>delightful</strong>.`,
      intro2: `<strong>Ready for a new challenge?</strong> If you’re searching for a <strong>frontend developer</strong>, <strong>UI/UX designer</strong>, or a creative <strong>marketing/customer wizard</strong>, I’d love to talk. <strong>Based in Copenhagen</strong> (sometimes Rome!), open to <strong>remote or hybrid</strong>, freelance or full-time. Let’s build something remarkable together.`,
      location: "Copenhagen / Rome",
      contact: "Frontend Designer",
      remote: "Remote or on-site",
      oneWoman: "One-woman show ✨",
      projects: "Projects",
      projectsIntro:
        "A mix of <strong>client work</strong>, <strong>personal passion</strong> and <strong>playful experiments</strong>. Creativity is a muscle — and I flex mine often.",
      skills: "My superpowers",
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
        "I work until it works.",
      ],
    },
    dk: {
      name: "Julie Vogh",
      sub: "(Udtales som Fogh på dansk)",
      intro1: `Hej, jeg er <strong>Julie</strong> — en <strong>nysgerrig frontend-udvikler</strong>, der bygger <strong>lækre</strong>, brugervenlige interfaces med både <strong>logik</strong> og <strong>leg</strong>. Jeg elsker <strong>detaljer</strong>, mennesker – og at gøre nettet lidt mere <strong>hyggeligt</strong>.`,
      intro2: `<strong>Klar til nye eventyr?</strong> Hvis du mangler en <strong>frontend-udvikler</strong>, <strong>UI/UX-designer</strong> eller en kreativ <strong>marketing/kundeservice-helt</strong>, så kontakt mig. <strong>Baseret i København</strong> (delvist Rom), åben for <strong>remote eller hybrid</strong>, freelance eller fast. Skal vi skabe noget fedt sammen?`,
      location: "København / Rom",
      contact: "Frontend-designer",
      remote: "Remote eller fysisk",
      oneWoman: "Én-kvinde-hær ✨",
      projects: "Projekter",
      projectsIntro:
        "En blanding af <strong>kundeprojekter</strong>, <strong>egne idéer</strong> og <strong>lege-eksperimenter</strong>. Kreativitet er en muskel – og jeg bruger den hver dag.",
      skills: "Mine superkræfter",
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
        "Giver aldrig op før det virker.",
      ],
    },
  };

  const t = texts[lang];

  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-pink-600 font-serif bg-[url('/imgs/paper-bg.png')] bg-repeat p-6 lg:p-12 scroll-smooth">
      {/* Pink <strong> kun på beskrivelser */}
      <style>
        {`
          .desc-strong strong {
            color: #db2777;
            font-weight: bold;
          }
        `}
      </style>

      {/* Sprogtoggle øverst til højre */}
      <div className="fixed mt-12 lg:mt-2 top-4 right-6 z-50 flex gap-2 items-center">
        <button
          className={`px-2 py-1 rounded font-bold cursor-pointer ${
            lang === "dk" ? "bg-pink-200" : "hover:bg-pink-100"
          }`}
          onClick={() => setLang("dk")}
        >
          🇩🇰
        </button>
        <button
          className={`px-2 py-1 rounded font-bold cursor-pointer ${
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
        onContactClick={() => {
          setShowArrow(true);
          setTimeout(() => setShowArrow(false), 2000);
        }}
        color="pink"
      />

      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-left leading-tight tracking-tight">
            {t.name}
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium text-pink-500 text-left mt-1 italic tracking-wide">
            {t.sub}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT COLUMN */}
          <section className="flex-1 max-w-3xl" id="me">
            <div className="p-0 flex flex-col gap-4">
              <div className="bg-gray-200 aspect-video w-full overflow-hidden rounded-2xl shadow-md">
                <VideoHero
                  videoSrc="/imgs/profile-video.mp4"
                  poster="/imgs/julie1.jpeg"
                  alt="Julie Vogh"
                />
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow text-base font-sans desc-strong">
                <p dangerouslySetInnerHTML={{ __html: t.intro1 }} />
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow text-base font-sans desc-strong">
                <p dangerouslySetInnerHTML={{ __html: t.intro2 }} />
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN */}
          <section
            className="flex-1 text-base pl-2 space-y-6 max-w-sm mt-0 lg:mt-0"
            id="projects"
          >
            <div>
              <h3 className="text-lg lg:text-2xl font-bold text-pink-900 mb-1">
                Julie Sølva Eschricht Vogh
              </h3>
              <p className="mb-0">{t.location}</p>
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
              <p className="mb-0">+45 23 84 80 88</p>
              <p className="mb-0">{t.contact}</p>
              <p className="mb-0">{t.remote}</p>
              <p className="italic text-pink-400">{t.oneWoman}</p>
            </div>

            <div>
              <h2 className="text-lg lg:text-2xl font-bold text-pink-800 mt-8 mb-1">
                {t.projects}
              </h2>
              <p
                className="desc-strong"
                dangerouslySetInnerHTML={{ __html: t.projectsIntro }}
              />
            </div>

            <div>
              <h2 className="text-lg lg:text-2xl font-bold text-pink-800 mt-8 mb-1">
                {t.skills}
              </h2>
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
