"use client";

import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const projects = [
  {
    title: { dk: "CleanSpace", en: "CleanSpace" },
    desc: {
      dk: "Komplet SaaS-platform og dashboard til rengøringsbranchen. UI/UX-design, branding og responsivt website udviklet fra bunden – fokus på moderne look og brugervenlighed.",
      en: "Complete SaaS platform and dashboard for the cleaning industry. UI/UX design, branding, and responsive website developed from scratch – focus on modern look and user-friendliness.",
    },
    img: "/imgs/cleanspace.png",
    tools: ["Elementor Pro", "WordPress", "Figma", "Branding"],
    link: "https://cleanspace.dk",
    linkLabel: "Website",
  },
  {
    title: { dk: "Vildmad", en: "Vildmad" },
    desc: {
      dk: "Landingpage og branding for Vild Mad for Børn – et digitalt univers, der inspirerer børn til at udforske naturen gennem leg, illustration og storytelling.",
      en: "Landing page and branding for Vild Mad for Børn – a digital universe that inspires children to explore nature through play, illustration, and storytelling.",
    },
    img: "/imgs/vildmad.png",
    tools: ["Illustrator", "HTML/CSS", "Research", "Figma"],
    link: "https://www.figma.com/file/demo-vildmad",
    linkLabel: "Figma",
  },
  {
    title: { dk: "Hvidovre I/F", en: "Hvidovre I/F" },
    desc: {
      dk: "Website for dansk fodboldklub. Frisk design, klubidentitet, nyhedsmodul og integration med kampkalender. Fokus på mobilvenlighed og lokal forankring.",
      en: "Website for Danish football club. Fresh design, club identity, news module, and match calendar integration. Focus on mobile-friendliness and local engagement.",
    },
    img: "/imgs/hvidovre-if.png",
    tools: ["WordPress", "Elementor", "UI/UX", "Support"],
    link: "https://hvidovreif.dk",
    linkLabel: "Website",
  },
  {
    title: { dk: "Cozy Social Club", en: "Cozy Social Club" },
    desc: {
      dk: "Koncept, branding og hjemmeside til pop-up dining oplevelse i København. Udviklet i Next.js med særlig vægt på fællesskab, hygge og madoplevelser.",
      en: "Concept, branding, and website for a pop-up dining experience in Copenhagen. Built in Next.js with focus on community, coziness, and food experiences.",
    },
    img: "/imgs/cozysocialclub.png",
    tools: ["Next.js", "Sanity CMS", "Figma", "Branding", "Trello"],
    link: "https://cozysocialclub.dk",
    linkLabel: "Website",
  },
  {
    title: { dk: "Copenhagen Light Festival", en: "Copenhagen Light Festival" },
    desc: {
      dk: "Visuelt website og branding til lysfestival – præsentation af events, billeder og interaktive kort. Designet til at skabe stemning og engagement.",
      en: "Visual website and branding for a light festival – presentation of events, images, and interactive maps. Designed to create atmosphere and engagement.",
    },
    img: "/imgs/cphlightfest.png",
    tools: ["Figma", "Adobe XD", "Branding", "UI/UX"],
    link: "https://www.figma.com/file/lightfest",
    linkLabel: "Figma",
  },
  {
    title: { dk: "Leisner & Søn", en: "Leisner & Søn" },
    desc: {
      dk: "Digital profil og branding for håndværkervirksomhed. Udvikling af enkel, troværdig hjemmeside og grafisk identitet til både B2B og private kunder.",
      en: "Digital profile and branding for a craftsman company. Simple, trustworthy website and graphic identity for both B2B and private customers.",
    },
    img: "/imgs/leisner.png",
    tools: ["WordPress", "Figma", "UI/UX", "Support"],
    link: "https://leisnerogsoen.dk",
    linkLabel: "Website",
  },
  {
    title: { dk: "Bridge", en: "Bridge" },
    desc: {
      dk: "Konceptuel website og grafisk identitet til internationalt NGO-projekt. Fokus på brobygning mellem kulturer, formidling og visuel storytelling.",
      en: "Conceptual website and graphic identity for an international NGO project. Focus on building bridges between cultures, communication, and visual storytelling.",
    },
    img: "/imgs/bridge-1.png",
    tools: ["Figma", "Branding", "UI/UX", "Webflow"],
    link: "https://www.figma.com/file/bridge",
    linkLabel: "Figma",
  },
  {
    title: { dk: "Sofus & Solveig", en: "Sofus & Solveig" },
    desc: {
      dk: "E-commerce og branding for børnetøjsbutik. Udvikling af webshop, farverig identitet, produktfotos og storytelling målrettet børnefamilier.",
      en: "E-commerce and branding for a children's clothing store. Development of webshop, colorful identity, product photos, and storytelling for families.",
    },
    img: "/imgs/sofussolveig.png",
    tools: ["WooCommerce", "WordPress", "Figma", "Produktfoto"],
    link: "https://sofussolveig.dk",
    linkLabel: "Website",
  },
  {
    title: { dk: "Dansk Erhvervs Beklædning", en: "Dansk Erhvervs Beklædning" },
    desc: {
      dk: "Branding og hjemmeside for B2B-virksomhed indenfor arbejdstøj. Klar, professionel profil, produktside og kontaktflow optimeret til erhvervskunder.",
      en: "Branding and website for a B2B workwear company. Clear, professional profile, product page, and contact flow optimized for business customers.",
    },
    img: "/imgs/deb1.png",
    tools: ["WordPress", "Elementor", "Figma", "UI/UX"],
    link: "https://deb.dk",
    linkLabel: "Website",
  },
  {
    title: { dk: "Foo Festival", en: "Foo Festival" },
    desc: {
      dk: "Visuelt koncept og website til musik- og madfestival – design, program, billetsalg og SoMe. Fokus på levende farver, illustration og brugerrejse.",
      en: "Visual concept and website for music & food festival – design, program, ticket sales, and SoMe. Focus on lively colors, illustration, and user journey.",
    },
    img: "/imgs/foofestival.png",
    tools: ["Next.js", "Figma", "Simple DB", "Branding", "Illustration"],
    link: "https://www.figma.com/file/foofestival",
    linkLabel: "Figma",
  },
  {
    title: { dk: "Illustrations", en: "Illustrations" },
    desc: {
      dk: "Mine SVG-illustrationer.",
      en: "My SVG illustrations.",
    },
    img: "/imgs/project-vildmad.jpg",
    gallery: [
      {
        img: "/imgs/illustrations/vildmad_maskotter_done.png",
        title: { dk: "Vildmad Maskotter", en: "Vildmad Mascots" },
        desc: {
          dk: "Maskotter fra Vild Mad for Børn – for at gøre naturen levende og sjov for børn.",
          en: "Mascots from Vild Mad for Børn – making nature lively and fun for kids.",
        },
      },
      {
        img: "/imgs/illustrations/Earth.png",
        title: { dk: "Earth", en: "Earth" },
        desc: {
          dk: "Jordklode, designet til et bæredygtighedstema.",
          en: "Earth illustration for a sustainability theme.",
        },
      },
      {
        img: "/imgs/illustrations/lifeguard.png",
        title: { dk: "Lifeguard", en: "Lifeguard" },
        desc: {
          dk: "Livredder fra 'Bikini Shark'-universet.",
          en: "Lifeguard from the 'Bikini Shark' universe.",
        },
      },
      {
        img: "/imgs/illustrations/maager.png",
        title: { dk: "Maager", en: "Seagulls" },
        desc: {
          dk: "Måger, selvfølgelig til stranden.",
          en: "Seagulls, of course, for the beach.",
        },
      },
      {
        img: "/imgs/illustrations/parasol.png",
        title: { dk: "Parasol", en: "Parasol" },
        desc: {
          dk: "Parasol fra strandscenen i 'Bikini Shark'.",
          en: "Parasol from the beach scene in 'Bikini Shark'.",
        },
      },
      {
        img: "/imgs/illustrations/flowerrr.png",
        title: { dk: "Flowerrr", en: "Flowerrr" },
        desc: {
          dk: "En blomst med attitude – natur møder grafik.",
          en: "A flower with attitude – nature meets graphics.",
        },
      },
      {
        img: "/imgs/illustrations/Froggy.png",
        title: { dk: "Froggy", en: "Froggy" },
        desc: {
          dk: "En frø fra Vild Mad, til det sjove hjørne.",
          en: "A frog from Vild Mad, for the fun corner.",
        },
      },
      {
        img: "/imgs/illustrations/sostjerne.png",
        title: { dk: "Søstjerne", en: "Starfish" },
        desc: {
          dk: "Søstjerne – del af stranden i spillet.",
          en: "Starfish – part of the beach in the game.",
        },
      },
      {
        img: "/imgs/illustrations/swimmer1.png",
        title: { dk: "Swimmer 1", en: "Swimmer 1" },
        desc: {
          dk: "Svømmer fra Bikini Shark.",
          en: "Swimmer from Bikini Shark.",
        },
      },
      {
        img: "/imgs/illustrations/swimmer2.png",
        title: { dk: "Swimmer 2", en: "Swimmer 2" },
        desc: {
          dk: "Endnu en strandgæst fra Bikini Shark.",
          en: "Another beachgoer from Bikini Shark.",
        },
      },
      {
        img: "/imgs/illustrations/swimmer3.png",
        title: { dk: "Swimmer 3", en: "Swimmer 3" },
        desc: {
          dk: "Tredje version af svømmeren.",
          en: "Third version of the swimmer.",
        },
      },
      {
        img: "/imgs/illustrations/threesharks.png",
        title: { dk: "Three Sharks", en: "Three Sharks" },
        desc: {
          dk: "Trio af hajer – designet til sjov effekt.",
          en: "Trio of sharks – designed for fun effect.",
        },
      },
      {
        img: "/imgs/illustrations/gameover.png",
        title: { dk: "Gameover", en: "Gameover" },
        desc: {
          dk: "Game Over skærm til 'Bikini Shark'-spillet.",
          en: "Game Over screen for the 'Bikini Shark' game.",
        },
      },
      {
        img: "/imgs/illustrations/gren.png",
        title: { dk: "Gren", en: "Branch" },
        desc: {
          dk: "En gren, illustreret til Vild Mad for børn.",
          en: "A branch, illustrated for Vild Mad for Børn.",
        },
      },
      {
        img: "/imgs/illustrations/strandting.png",
        title: { dk: "Strandting", en: "Beach Things" },
        desc: {
          dk: "Strandrekvisitter, fra 'Bikini Shark'.",
          en: "Beach props from 'Bikini Shark'.",
        },
      },
      {
        img: "/imgs/illustrations/sharkidea.png",
        title: { dk: "Shark Idea", en: "Shark Idea" },
        desc: {
          dk: "Shark med en idé – hovedfigur i Bikini Shark.",
          en: "Shark with an idea – main character in Bikini Shark.",
        },
      },
      {
        img: "/imgs/illustrations/artboard.png",
        title: { dk: "Pug", en: "Pug" },
        desc: {
          dk: "Illustreret version af min hund til min første portfolio hjemmeside.",
          en: "Illustrated version of my dog for my first portfolio website.",
        },
      },
      {
        img: "/imgs/illustrations/bird_gren.png",
        title: { dk: "Bird Gren", en: "Bird Branch" },
        desc: {
          dk: "Fugl på gren, lavet til Vild Mad – natur og eventyr.",
          en: "Bird on branch, made for Vild Mad – nature and adventure.",
        },
      },
      {
        img: "/imgs/illustrations/bird.png",
        title: { dk: "Bird", en: "Bird" },
        desc: {
          dk: "En glad fugl til Vild Mad for Børn.",
          en: "A happy bird for Vild Mad for Børn.",
        },
      },
      {
        img: "/imgs/illustrations/bold.png",
        title: { dk: "Bold", en: "Ball" },
        desc: {
          dk: "Bold fra strandspillet 'Bikini Shark'.",
          en: "Ball from the beach game 'Bikini Shark'.",
        },
      },
      {
        img: "/imgs/illustrations/boldparasol.png",
        title: { dk: "Bold Parasol", en: "Ball Parasol" },
        desc: {
          dk: "Parasol med bold – begge brugt i Bikini Shark.",
          en: "Parasol with ball – both used in Bikini Shark.",
        },
      },
      {
        img: "/imgs/illustrations/Brick.png",
        title: { dk: "Brick", en: "Brick" },
        desc: {
          dk: "En robust mursten fra strandmiljøet i 'Bikini Shark'.",
          en: "A sturdy brick from the beach environment in 'Bikini Shark'.",
        },
      },
      {
        img: "/imgs/illustrations/lys.png",
        title: { dk: "Lys", en: "Light" },
        desc: {
          dk: "Lyspære, brugt som ikon til gode idéer.",
          en: "Lightbulb, used as an icon for good ideas.",
        },
      },
      {
        img: "/imgs/illustrations/phone.png",
        title: { dk: "Phone", en: "Phone" },
        desc: {
          dk: "Mobil-ikon fra Vild Mad for Børn.",
          en: "Mobile icon from Vild Mad for Børn.",
        },
      },
      {
        img: "/imgs/illustrations/Plant.png",
        title: { dk: "Plant", en: "Plant" },
        desc: {
          dk: "En grøn plante, designet til naturtema.",
          en: "A green plant, designed for nature theme.",
        },
      },
      {
        img: "/imgs/illustrations/redningsvest.png",
        title: { dk: "Redningsvest", en: "Life Jacket" },
        desc: {
          dk: "Redningsvest til sikker strandleg.",
          en: "Life jacket for safe beach play.",
        },
      },
      {
        img: "/imgs/illustrations/froggy2.png",
        title: { dk: "Froggy2", en: "Froggy2" },
        desc: {
          dk: "Endnu en frø – alle elsker frøer.",
          en: "Another frog – everyone loves frogs.",
        },
      },
      {
        img: "/imgs/illustrations/scene1.png",
        title: { dk: "Scene 1", en: "Scene 1" },
        desc: {
          dk: "Første scene fra 'Bikini Shark' gameplay.",
          en: "First scene from 'Bikini Shark' gameplay.",
        },
      },
      {
        img: "/imgs/illustrations/scene2.png",
        title: { dk: "Scene 2", en: "Scene 2" },
        desc: {
          dk: "Anden scene fra 'Bikini Shark'.",
          en: "Second scene from 'Bikini Shark'.",
        },
      },
      {
        img: "/imgs/illustrations/seagull1.png",
        title: { dk: "Seagull 1", en: "Seagull 1" },
        desc: {
          dk: "Måge – endnu mere strandstemning.",
          en: "Seagull – even more beach vibes.",
        },
      },
      {
        img: "/imgs/illustrations/seagull2.png",
        title: { dk: "Seagull 2", en: "Seagull 2" },
        desc: {
          dk: "En ny variant af den strandede måge.",
          en: "A new variant of the stranded seagull.",
        },
      },
      {
        img: "/imgs/illustrations/phone2.png",
        title: { dk: "Phone2", en: "Phone2" },
        desc: {
          dk: "En illustration brugt i Vild Mad – for at vise mobilvenlighed.",
          en: "An illustration used in Vild Mad – to show mobile-friendliness.",
        },
      },
      {
        img: "/imgs/illustrations/question.png",
        title: { dk: "Question", en: "Question" },
        desc: {
          dk: "Quizikon brugt i min spilprototype 'Bikini Shark'.",
          en: "Quiz icon used in my game prototype 'Bikini Shark'.",
        },
      },
      {
        img: "/imgs/illustrations/sharkk.png",
        title: { dk: "Sharkk", en: "Sharkk" },
        desc: {
          dk: "Shark in action fra Bikini Shark-spillet.",
          en: "Shark in action from the Bikini Shark game.",
        },
      },
      {
        img: "/imgs/illustrations/skilt.png",
        title: { dk: "Skilt", en: "Sign" },
        desc: {
          dk: "Skilt til brugerinformation i 'Bikini Shark'.",
          en: "Sign for user information in 'Bikini Shark'.",
        },
      },
      {
        img: "/imgs/illustrations/tryagainbtn.png",
        title: { dk: "Try Again Btn", en: "Try Again Btn" },
        desc: {
          dk: "Prøv igen-knap fra Bikini Shark.",
          en: "Try again button from Bikini Shark.",
        },
      },
    ],
  },
];

// --------- KOMPONENT START ----------
export default function ProjectsPage() {
  const [lang, setLang] = useState("en");
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [lastManualClick, setLastManualClick] = useState(Date.now());
  const [mobileGalleryIndexes, setMobileGalleryIndexes] = useState({});
  const imageContainerRef = useRef(null);

  // Mobile galleri navigation pr. projekt
  const handleMobileGalleryIdx = (projIdx, dir, galleryLength) => {
    setMobileGalleryIndexes((prev) => {
      const currIdx = prev[projIdx] || 0;
      let newIdx = currIdx + dir;
      if (newIdx < 0) newIdx = 0;
      if (newIdx > galleryLength - 1) newIdx = galleryLength - 1;
      return { ...prev, [projIdx]: newIdx };
    });
  };

  // Desktop galleri auto-slide for "Logos" og "Illustrations"
  useEffect(() => {
    const project = projects[activeIdx];
    const gallery = project.gallery || [];
    if (gallery.length < 2) return;
    const now = Date.now();
    const timeSinceClick = now - lastManualClick;
    const waitTime = timeSinceClick < 3000 ? 5000 : 2500;
    const timer = setTimeout(() => {
      setActiveGalleryIdx((idx) => (idx + 1) % gallery.length);
    }, waitTime);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [activeIdx, activeGalleryIdx, lastManualClick]);

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

  const safeIdx = Math.max(0, Math.min(activeIdx, projects.length - 1));
  const activeProject = projects[safeIdx];
  const gallery = activeProject.gallery || [];

  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-orange-600 font-sans bg-[url('/imgs/paper-bg.png')] bg-repeat p-6 lg:p-12 scroll-smooth">
      {/* Sprogtoggle */}
      <div className="fixed mt-12 lg:mt-2 top-4 right-6 z-50 flex gap-2 items-center ">
        <button
          className={`px-2 py-1 rounded font-bold cursor-pointer ${
            lang === "dk" ? "bg-orange-200" : "hover:bg-orange-100"
          }`}
          onClick={() => setLang("dk")}
        >
          🇩🇰
        </button>
        <button
          className={`px-2 py-1 rounded font-bold cursor-pointer ${
            lang === "en" ? "bg-orange-200" : "hover:bg-orange-100"
          }`}
          onClick={() => setLang("en")}
        >
          🇬🇧
        </button>
      </div>

      <NavBar navLinks={navLinks} activeSection="projects" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-left">
            {lang === "dk" ? "Projekter" : "Projects"}
          </h1>
          <h2 className="text-2xl font-semibold text-orange-500 text-left italic">
            {lang === "dk" ? "(Seriøse og for sjov)" : "(Serious and for fun)"}
          </h2>
        </div>
      </div>

      {/* ---------- MOBILE ---------- */}
      <div className="w-full max-w-6xl mx-auto lg:hidden">
        {projects.map((project, i) => {
          // GALLERI projekter (Logos & Illustrations)
          if (project.gallery) {
            const mobileIdx = mobileGalleryIndexes[i] || 0;
            const galleryArr = project.gallery;
            return (
              <div key={project.title.dk} className="mb-10 last:mb-0">
                <h3 className="text-xl font-bold mb-2">
                  {project.title[lang]}
                </h3>
                <div
                  className={
                    "rounded-xl shadow w-full h-[38vh] bg-white flex items-center justify-center mb-2 " +
                    (project.title.dk === "Logos"
                      ? "overflow-hidden"
                      : "overflow-auto")
                  }
                >
                  <img
                    src={galleryArr[mobileIdx].img}
                    alt={galleryArr[mobileIdx].title[lang]}
                    className="object-contain max-h-[38vh] max-w-[80vw]"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <button
                    aria-label="Forrige"
                    disabled={mobileIdx === 0}
                    onClick={() =>
                      handleMobileGalleryIdx(i, -1, galleryArr.length)
                    }
                    className="p-2 rounded-full bg-orange-100 text-orange-600 disabled:opacity-30 cursor-pointer"
                  >
                    ‹
                  </button>
                  <div className="flex gap-1">
                    {galleryArr.map((_, idx) => (
                      <span
                        key={`${project.title.dk}-${idx}`}
                        className={`w-2 h-2 rounded-full inline-block ${
                          idx === mobileIdx ? "bg-orange-500" : "bg-orange-200"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    aria-label="Næste"
                    disabled={mobileIdx === galleryArr.length - 1}
                    onClick={() =>
                      handleMobileGalleryIdx(i, 1, galleryArr.length)
                    }
                    className="p-2 rounded-full bg-orange-100 text-orange-600 disabled:opacity-30 cursor-pointer"
                  >
                    ›
                  </button>
                </div>
                <p className="text-base mb-2">{project.desc[lang]}</p>
                {project.tools && (
                  <div className="flex flex-wrap gap-2 mt-6 justify-start">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-orange-100 rounded-full text-xs text-orange-800 font-semibold border border-orange-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-base text-center">
                  {galleryArr[mobileIdx].title[lang]}:{" "}
                  {galleryArr[mobileIdx].desc[lang]}
                </p>
                {/* --- Projekt-link (mobile) --- */}
                {project.link && (
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-1 text-sm
                        text-orange-600 border border-orange-300 rounded-lg px-3 py-1
                        hover:bg-orange-500 hover:text-white transition
                        focus:outline-none focus-visible:outline-2 focus-visible:outline-orange-300
                        underline underline-offset-2 decoration-dotted
                        shadow-sm
                      "
                      style={{ maxWidth: "max-content" }}
                    >
                      <span role="img" aria-label="link">
                        🔗
                      </span>
                      {project.linkLabel ||
                        (lang === "dk" ? "Se projekt" : "See project")}
                    </a>
                  </div>
                )}
              </div>
            );
          }
          // Projekter uden galleri:
          return (
            <div key={project.title.dk} className="mb-10 last:mb-0">
              <h3 className="text-xl font-bold mb-2">{project.title[lang]}</h3>
              <div className="rounded-xl shadow w-full h-[38vh] bg-white overflow-auto flex items-start justify-center">
                <img
                  src={project.img}
                  alt={project.title[lang]}
                  className="object-contain w-full h-auto"
                  style={{ display: "block" }}
                />
              </div>
              <p className="text-base mb-2">{project.desc[lang]}</p>
              {project.tools && (
                <div className="flex flex-wrap gap-2 mt-6 justify-start">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-orange-100 rounded-full text-xs text-orange-800 font-semibold border border-orange-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
              {/* --- Projekt-link (mobile) --- */}
              {project.link && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1 text-sm
                      text-orange-600 border border-orange-300 rounded-lg px-3 py-1
                      hover:bg-orange-500 hover:text-white transition
                      focus:outline-none focus-visible:outline-2 focus-visible:outline-orange-300
                      underline underline-offset-2 decoration-dotted
                      shadow-sm
                    "
                    style={{ maxWidth: "max-content" }}
                  >
                    <span role="img" aria-label="link">
                      🔗
                    </span>
                    {project.linkLabel ||
                      (lang === "dk" ? "Se projekt" : "See project")}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden lg:flex w-full max-w-6xl mx-auto relative">
        <div className="flex flex-1 bg-white/90 rounded-2xl shadow-2xl min-h-[70vh] h-[70vh] w-full mx-auto overflow-hidden relative z-10">
          {/* Left: Gallery/image/video */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-8 min-w-[340px]">
            {gallery.length > 0 ? (
              <>
                <div
                  ref={imageContainerRef}
                  className="rounded-xl shadow w-full h-[38vh] bg-white overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={gallery[activeGalleryIdx].img}
                    alt={gallery[activeGalleryIdx].title[lang]}
                    className="object-contain max-h-[38vh] max-w-full"
                  />
                </div>
                <div
                  className="flex gap-2 mt-6 justify-left overflow-x-auto pb-2"
                  style={{ maxWidth: "100%" }}
                >
                  {gallery.map((item, idx) => (
                    <button
                      key={`${activeProject.title.dk}-${idx}`}
                      onClick={() => {
                        setActiveGalleryIdx(idx);
                        setLastManualClick(Date.now());
                      }}
                      className={`w-10 h-10 rounded-full border-2 transition shrink-0 cursor-pointer
                        ${
                          idx === activeGalleryIdx
                            ? "border-orange-500 ring-2 ring-orange-200"
                            : "border-gray-300 opacity-70"
                        }`}
                      title={item.title[lang]}
                    >
                      <img
                        src={item.img}
                        alt={item.title[lang]}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-4 bg-white/80 p-4 rounded shadow w-full text-center">
                  <p className="font-bold text-lg mb-2">
                    {gallery[activeGalleryIdx].title[lang]}
                  </p>
                  <p className="text-base mb-2">
                    {gallery[activeGalleryIdx].desc[lang]}
                  </p>
                  {/* --- Projekt-link (desktop) --- */}
                  {activeProject.link && (
                    <div className="flex justify-center mt-4">
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        inline-flex items-center gap-1 text-sm
        text-orange-600 bg-orange-50 border border-orange-200
        rounded-full px-3 py-1
        hover:bg-orange-100 hover:text-orange-700 transition
        focus:outline-none focus-visible:outline-2 focus-visible:outline-orange-300
        shadow-sm font-medium
      "
                        style={{ maxWidth: "max-content" }}
                      >
                        <span role="img" aria-label="link">
                          🔗
                        </span>
                        {activeProject.linkLabel ||
                          (lang === "dk" ? "Se projekt" : "See project")}
                      </a>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div
                  ref={imageContainerRef}
                  className="bg-gray-200 w-full h-[300px] rounded-lg shadow overflow-y-auto flex justify-center items-start mb-2"
                >
                  <img
                    src={activeProject.img}
                    alt={activeProject.title[lang]}
                    className="w-full h-auto min-h-full"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="mt-4 bg-white/80 p-4 rounded shadow w-full text-center">
                  <p className="font-bold text-lg mb-2">
                    {activeProject.title[lang]}
                  </p>
                  <p className="text-base mb-2">{activeProject.desc[lang]}</p>
                  {activeProject.tools && (
                    <div className="flex flex-wrap gap-2 mt-6 justify-center">
                      {activeProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-orange-100 rounded-full text-xs text-orange-800 font-semibold border border-orange-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* --- Projekt-link (desktop, uden galleri) --- */}
                  {activeProject.link && (
                    <div className="mt-4 flex justify-center">
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-1 text-sm
                          text-orange-600 border border-orange-300 rounded-lg px-3 py-1
                          hover:bg-orange-500 hover:text-white transition
                          focus:outline-none focus-visible:outline-2 focus-visible:outline-orange-300
                          underline underline-offset-2 decoration-dotted
                          shadow-sm
                        "
                        style={{ maxWidth: "max-content" }}
                      >
                        <span role="img" aria-label="link">
                          🔗
                        </span>
                        {activeProject.linkLabel ||
                          (lang === "dk" ? "Se projekt" : "See project")}
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          {/* Right: Project selectors */}
          <div className="flex-1 flex flex-col p-6 gap-2 justify-center max-w-lg">
            <h2 className="text-2xl font-bold mb-8 text-orange-800">
              {lang === "dk" ? "Projekter" : "Projects"}
            </h2>
            <div className="flex flex-col gap-1 mb-8 max-h-[400px] overflow-y-auto pr-2">
              {projects.map((project, idx) => (
                <button
                  key={project.title.dk}
                  onClick={() => {
                    setActiveIdx(idx);
                    setActiveGalleryIdx(0);
                    setLastManualClick(Date.now());
                    setTimeout(() => {
                      imageContainerRef.current?.scrollTo(0, 0);
                    }, 0);
                  }}
                  className={`text-left px-3 py-2 rounded transition-all font-semibold cursor-pointer
                    ${
                      idx === safeIdx
                        ? ["Logos", "Illustrations"].includes(project.title.dk)
                          ? "bg-orange-200 text-orange-900 shadow font-bold underline underline-offset-4"
                          : "bg-orange-100 text-orange-900 shadow font-bold underline underline-offset-4"
                        : ["Logos", "Illustrations"].includes(project.title.dk)
                        ? "hover:bg-orange-50 text-orange-900"
                        : "hover:bg-orange-50 hover:text-orange-800"
                    }
                  `}
                >
                  {project.title[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
