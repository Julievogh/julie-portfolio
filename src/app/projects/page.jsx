"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "CleanSpace",
    desc: "Projects – Here is a long description",
    img: "/imgs/project-cleanspace.jpg",
  },
  {
    title: "G&G Vitamins",
    desc: "Projects – Here is a long description",
    img: "/imgs/project-gg.jpg",
  },
  {
    title: "Cozy Social Club",
    desc: "Projects – Here is a long description",
    img: "/imgs/project-cozy.jpg",
  },
  {
    title: "vildmad.dk",
    desc: "Projects – Here is a long description",
    img: "/imgs/project-vildmad.jpg",
  },
];

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <main className="min-h-screen bg-white text-orange-600 font-sans bg-[url('/imgs/paper-bg.png')] bg-repeat p-6 lg:p-12 scroll-smooth">
      {/* HEADER */}
      <div className="flex flex-col items-left mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <h2 className="text-xl italic text-orange-500">
          (Serious and for fun)
        </h2>
      </div>

      {/* MOBILE NAV */}
      <nav className="flex lg:hidden justify-center gap-6 mb-6 text-sm tracking-widest text-orange-600 font-medium">
        {["extra", "projects", "me"].map((id) => (
          <a
            key={id}
            href={`/#${id}`}
            className={`transition-transform duration-300 hover:scale-105 ${
              activeSection === id
                ? "text-orange-800 font-bold underline underline-offset-4"
                : ""
            }`}
          >
            {id.toUpperCase()}
          </a>
        ))}
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* ROTATED LEFT NAV (DESKTOP ONLY) */}
        <aside className="hidden lg:block absolute left-4 top-1/2 transform -rotate-90 -translate-y-1/2 origin-top-left z-10">
          <nav className="flex gap-12 text-med tracking-widest text-orange-600 font-medium">
            {["extra", "projects", "me"].map((id) => (
              <a
                key={id}
                href={`/#${id}`}
                className={`transition-all duration-300 hover:tracking-[0.2em] hover:scale-105 ${
                  activeSection === id
                    ? "text-orange-800 font-bold underline underline-offset-4"
                    : ""
                }`}
              >
                {id.toUpperCase()}
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN COLUMN: PROJECTS */}
        <section className="flex-1 max-w-3xl space-y-16 mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="text-center" id="projects">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="bg-gray-200 aspect-video w-full rounded shadow mb-2" />
              <p className="text-sm">{project.desc}</p>
              <a href="#" className="text-sm mt-1 inline-block hover:underline">
                Læs mere &gt;
              </a>
            </div>
          ))}
        </section>
      </div>

      {/* CTA */}
      <footer className="mt-16 text-center" id="extra">
        <p className="text-lg font-medium text-orange-700">Hit me up</p>
        <p className="text-3xl">✌</p>
      </footer>
    </main>
  );
}
