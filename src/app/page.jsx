"use client";

import { useEffect, useState } from "react";

import VideoHero from "./components/VideoHero";
import Footer from "./components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

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
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Keep this in sync with your site sections
  const navLinks = [
    { id: "extra", label: "EXTRA", href: "/#extra" },
    { id: "projects", label: "PROJECTS", href: "/projects" },
    { id: "me", label: "ME", href: "/#me" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-pink-600 font-serif bg-[url('/imgs/paper-bg.png')] bg-repeat p-6 lg:p-12 scroll-smooth">
      {/* MOBILE HORIZONTAL NAV */}
      <nav className="flex lg:hidden justify-center gap-6 mb-6 text-sm tracking-widest font-sans text-pink-600 font-medium">
        {["extra", "projects", "me"].map((id) => (
          <a
            key={id}
            href={`/${id}`}
            className={`transition-transform duration-300 hover:scale-105 ${
              activeSection === id
                ? "text-pink-900 font-bold underline underline-offset-4"
                : ""
            }`}
          >
            {id.toUpperCase()}
          </a>
        ))}
      </nav>
      {/* ==== SHARED MAIN CONTAINER ==== */}
      <div className="w-full max-w-6xl mx-auto">
        {/* HEADLINE */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-left">Julie Vogh</h1>
          <h2 className="text-2xl font-semibold text-pink-500 text-left">
            (Say it like Vogue)
          </h2>
        </div>

        {/* MAIN FLEX ROW (video/intro + info/skills) */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* DESKTOP VERTICAL NAV ROTATED (left sidebar) */}
          {/* --- Vertical Nav --- */}
          <aside className="hidden lg:block absolute left-4 top-1/2 transform -rotate-90 -translate-y-1/2 origin-top-left z-20">
            <nav className="flex gap-12 text-med tracking-widest text-pink-600 font-medium">
              {navLinks.map((nav) => (
                <a
                  key={nav.id}
                  href={nav.href}
                  className={`transition-all duration-300 hover:tracking-[0.2em] hover:scale-105 font-sans ${
                    nav.id === "projects"
                      ? "text-pink-900 font-bold underline underline-offset-4"
                      : ""
                  }`}
                >
                  {nav.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* LEFT COLUMN: Video + Intro */}
          <section className="flex-1 max-w-3xl" id="me">
            <div className="p-0 flex flex-col gap-4">
              {/* Video */}
              <div className="bg-gray-200 aspect-video w-full overflow-hidden rounded-lg">
                <VideoHero
                  videoSrc="/imgs/profile-video.mp4"
                  poster="/imgs/julie1.jpeg"
                  alt="Julie Vogh"
                />
              </div>
              {/* Intro Texts */}
              <div className="bg-white/70 p-4 rounded shadow text-sm font-sans">
                <p>
                  Hi, I’m Julie – a curious frontend creative who builds smooth,
                  user-friendly interfaces with equal parts logic and whimsy. I
                  care about the details, the people, and making the web a
                  little more delightful.
                </p>
              </div>
              <div className="bg-white/70 p-4 rounded shadow text-sm font-sans">
                <p>
                  I am looking for my next challenge - if you need a
                  <strong> frontend developer</strong> or a{" "}
                  <strong>UI/UX designer</strong>, or general{" "}
                  <strong>marketing/customer-person</strong>, I would love to
                  hear from you. I am based in Copenhagen, and part-time in
                  Rome. I am interested in remote or hybrid work, and I am open
                  to both freelance and full-time opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Info/Skills */}
          <section
            className="flex-1 text-sm pl-2 space-y-4 max-w-sm mt-0 lg:mt-0"
            id="projects"
          >
            <div>
              <h3>
                <strong>Julie Sølva Eschricht Vogh</strong>
              </h3>
              <p>Copenhagen / Rome</p>
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
              <p>Frontend Designer</p>

              <p>Remote or on-site</p>
              <p className="italic">One-woman show ✨</p>
            </div>

            <div>
              <h2 className="font-semibold mt-6">Projects</h2>
              <p>
                A mix of client work, personal ideas and fun explorations. I
                believe creativity is a muscle – and I love flexing it.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mt-6">Here are my skills</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Figma</li>
                <li>HTML / CSS / Tailwind / JS</li>
                <li>React / Next.js</li>
                <li>WordPress / Elementor</li>
                <li>Adobe Illustrator</li>
                <li>AI is my personal assistant</li>
                <li>SoMe, SEO</li>
                <li>Marketing</li>
                <li>Customer support</li>
                <li>Content creation</li>
                <li>Empathy & Curiosity</li>
                <li>Problem-solving with Creativity</li>
                <li>Working until it works</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/* CTA Footer */}
      <Footer />
    </main>
  );
}
