"use client";

import { useState } from "react";
import Footer from "../components/Footer"; // Sørg for at denne sti passer!

const projects = [
  {
    title: "CleanSpace",
    desc: "Cleanspace is a modern cleaning SaaS platform – full website, branding, and dashboard design. Built for both joy and function.",
    img: "/imgs/project-cleanspace.jpg",
    video: "",
  },
  {
    title: "G&G Vitamins",
    desc: "A landing page and webshop for a UK vitamin brand. Fresh UI, e-commerce features, and micro animations.",
    img: "/imgs/project-gg.jpg",
    video: "",
  },
  {
    title: "Cozy Social Club",
    desc: "Pop-up dining for curious foodies. Full identity, website, and SoMe. Built with Next.js and love.",
    img: "/imgs/project-cozy.jpg",
    video: "",
  },
  {
    title: "Logos",
    desc: "Some words about different logos.",
    img: "/imgs/project-vildmad.jpg",
    video: "",
    gallery: [
      {
        img: "/imgs/logo1.png",
        title: "Logo 1",
        desc: "Dette er mit første logo. Det er sjovt og farverigt.",
      },
      {
        img: "/imgs/logo2.png",
        title: "Logo 2",
        desc: "Et klassisk sort/hvidt logo med stærk kontrast.",
      },
      {
        img: "/imgs/logo3.png",
        title: "Logo 3",
        desc: "Logo designet til en madvirksomhed.",
      },
      {
        img: "/imgs/logo4.png",
        title: "Logo 4",
        desc: "Logo med illustrationer til sociale medier.",
      },
      {
        img: "/imgs/logo5.png",
        title: "Logo 5",
        desc: "Mit mest minimalistiske logo.",
      },
    ],
  },
  {
    title: "Illustrations",
    desc: "Some words about different logos.",
    img: "/imgs/project-vildmad.jpg",
    video: "",
    gallery: [
      {
        img: "/imgs/logo1.png",
        title: "Illu 1",
        desc: "Dette er mit første logo. Det er sjovt og farverigt.",
      },
      {
        img: "/imgs/logo2.png",
        title: "Illu 2",
        desc: "Et klassisk sort/hvidt logo med stærk kontrast.",
      },
      {
        img: "/imgs/logo3.png",
        title: "Illu 3",
        desc: "Logo designet til en madvirksomhed.",
      },
      {
        img: "/imgs/logo4.png",
        title: "Illu 4",
        desc: "Logo med illustrationer til sociale medier.",
      },
      {
        img: "/imgs/logo5.png",
        title: "Illu 5",
        desc: "Mit mest minimalistiske logo.",
      },
    ],
  },
];

export default function ProjectsPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  const navLinks = [
    { id: "extra", label: "EXTRA", href: "/#extra" },
    { id: "projects", label: "PROJECTS", href: "/projects" },
    { id: "me", label: "ME", href: "/#me" },
  ];

  const activeProject = projects[activeIdx];
  const gallery = activeProject.gallery || [];

  // Reset subgallery når projekt skiftes
  const handleProjectClick = (idx) => {
    setActiveIdx(idx);
    setActiveGalleryIdx(0);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-orange-600 font-sans bg-[url('/imgs/paper-bg.png')] bg-repeat p-6 lg:p-12 scroll-smooth">
      {/* Headline/intro */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-left">Projects</h1>
          <h2 className="text-2xl font-semibold text-orange-500 text-left italic">
            (Serious and for fun)
          </h2>
        </div>
      </div>

      {/* --- MOBILE NAV --- */}
      <nav className="flex lg:hidden justify-center gap-6 mb-6 text-sm tracking-widest text-orange-600 font-medium">
        {navLinks.map((nav) => (
          <a
            key={nav.id}
            href={nav.href}
            className={`transition-transform duration-300 hover:scale-105 ${
              nav.id === "projects"
                ? "text-orange-800 font-bold underline underline-offset-4"
                : ""
            }`}
          >
            {nav.label}
          </a>
        ))}
      </nav>

      <div className="w-full max-w-6xl mx-auto lg:hidden">
        {projects.map((project, i) => {
          // Special case for gallery
          if (project.gallery) {
            // Gem aktivt index for logo-gallery pr. projekt
            const [mobileGalleryIdx, setMobileGalleryIdx] = useState(0);

            return (
              <div key={project.title} className="mb-10 last:mb-0">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="bg-gray-200 aspect-video w-full rounded-lg shadow overflow-hidden mb-2 flex items-center justify-center">
                  <img
                    src={project.gallery[mobileGalleryIdx].img}
                    alt={project.gallery[mobileGalleryIdx].title}
                    className="max-h-52 object-contain bg-white mx-auto"
                  />
                </div>
                {/* PIL-KNAPPER */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <button
                    aria-label="Forrige logo"
                    disabled={mobileGalleryIdx === 0}
                    onClick={() => setMobileGalleryIdx(mobileGalleryIdx - 1)}
                    className="p-2 rounded-full bg-orange-100 text-orange-600 disabled:opacity-30"
                  >
                    ‹
                  </button>
                  <div className="flex gap-1">
                    {project.gallery.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full inline-block ${
                          idx === mobileGalleryIdx
                            ? "bg-orange-500"
                            : "bg-orange-200"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    aria-label="Næste logo"
                    disabled={mobileGalleryIdx === project.gallery.length - 1}
                    onClick={() => setMobileGalleryIdx(mobileGalleryIdx + 1)}
                    className="p-2 rounded-full bg-orange-100 text-orange-600 disabled:opacity-30"
                  >
                    ›
                  </button>
                </div>
                <p className="text-base text-center font-semibold mb-1">
                  {project.gallery[mobileGalleryIdx].title}
                </p>
                <p className="text-base text-center">
                  {project.gallery[mobileGalleryIdx].desc}
                </p>
              </div>
            );
          }
          // ALLE ANDRE PROJEKTER
          return (
            <div key={project.title} className="mb-10 last:mb-0">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="bg-gray-200 aspect-video w-full rounded-lg shadow overflow-hidden mb-2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-base">{project.desc}</p>
            </div>
          );
        })}
      </div>

      {/* --- Vertical Nav (desktop) --- */}
      <aside className="hidden lg:block absolute left-4 top-1/2 transform -rotate-90 -translate-y-1/2 origin-top-left z-20">
        <nav className="flex gap-12 text-med tracking-widest text-orange-600 font-medium">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={nav.href}
              className={`transition-all duration-300 hover:tracking-[0.2em] hover:scale-105 ${
                nav.id === "projects"
                  ? "text-orange-800 font-bold underline underline-offset-4"
                  : ""
              }`}
            >
              {nav.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* --- DESKTOP: split hero & interactive --- */}
      <div className="hidden lg:flex w-full max-w-6xl mx-auto relative">
        <div className="flex flex-1 bg-white/90 rounded-2xl shadow-2xl min-h-[70vh] h-[70vh] w-full mx-auto overflow-hidden relative z-10">
          {/* Left: Main image/video or gallery */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-8 min-w-[340px]">
            {gallery.length > 0 ? (
              <>
                <img
                  src={gallery[activeGalleryIdx].img}
                  alt={gallery[activeGalleryIdx].title}
                  className="rounded-xl shadow w-full h-[38vh] object-contain bg-white"
                />
                <div className="flex gap-2 mt-4 justify-center">
                  {gallery.map((item, idx) => (
                    <button
                      key={item.title}
                      onClick={() => setActiveGalleryIdx(idx)}
                      className={`w-10 h-10 rounded-full border-2 transition ${
                        idx === activeGalleryIdx
                          ? "border-orange-500 ring-2 ring-orange-200"
                          : "border-gray-300 opacity-70"
                      }`}
                      title={item.title}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-4 bg-white/80 p-4 rounded shadow w-full text-center">
                  <p className="font-bold text-lg mb-2">
                    {gallery[activeGalleryIdx].title}
                  </p>
                  <p className="text-base mb-2">
                    {gallery[activeGalleryIdx].desc}
                  </p>
                  <a
                    href="#"
                    className="text-orange-600 hover:underline text-sm"
                  >
                    Læs mere &gt;
                  </a>
                </div>
              </>
            ) : activeProject.video ? (
              <video
                src={activeProject.video}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl shadow w-full h-[38vh] object-cover"
                poster={activeProject.img}
              />
            ) : (
              <>
                <img
                  src={activeProject.img}
                  alt={activeProject.title}
                  className="rounded-xl shadow w-full h-[38vh] object-cover"
                />
                <div className="mt-4 bg-white/80 p-4 rounded shadow w-full text-center">
                  <p className="font-bold text-lg mb-2">
                    {activeProject.title}
                  </p>
                  <p className="text-base mb-2">{activeProject.desc}</p>
                  <a
                    href="#"
                    className="text-orange-600 hover:underline text-sm"
                  >
                    Læs mere &gt;
                  </a>
                </div>
              </>
            )}
          </div>
          {/* Right: Project selectors */}
          <div className="flex-1 flex flex-col p-8 gap-2 justify-center max-w-lg">
            <h2 className="text-2xl font-bold mb-8 text-orange-800">
              Projects
            </h2>
            <div className="flex flex-col gap-2 mb-8">
              {projects.map((project, idx) => (
                <button
                  key={project.title}
                  onClick={() => handleProjectClick(idx)}
                  className={`text-left px-3 py-2 rounded transition-all font-semibold
                    ${
                      idx === activeIdx
                        ? "bg-orange-100 text-orange-900 shadow font-bold underline underline-offset-4"
                        : "hover:bg-orange-50 hover:text-orange-800"
                    }
                  `}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- CTA Footer --- */}
      <Footer />
    </main>
  );
}
