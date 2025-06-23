"use client";

import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";

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

  return (
    <main className="min-h-screen bg-white text-pink-600 font-serif bg-[url('/imgs/paper-bg.png')] bg-repeat p-6 lg:p-12 scroll-smooth">
      {/* Intro */}
      <div className="flex flex-col items-left mb-6">
        <h1 className="text-3xl font-bold">Julie Vogh</h1>
        <h2 className="text-2xl font-semibold text-pink-500">
          (Say it like Vogue)
        </h2>
      </div>

      {/* MOBILE HORIZONTAL NAV */}
      <nav className="flex lg:hidden justify-center gap-6 mb-6 text-sm tracking-widest text-pink-600 font-medium">
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

      <div className="flex flex-col lg:flex-row gap-8">
        {/* DESKTOP VERTICAL NAV ROTATED */}
        <aside className="hidden lg:block absolute left-4 top-1/2 transform -rotate-90 -translate-y-1/2 origin-top-left z-10">
          <nav className="flex gap-12 text-med tracking-widest text-pink-600 font-medium">
            {["extra", "projects", "me"].map((id) => (
              <a
                key={id}
                href={`/${id}`}
                className={`transition-all duration-300 hover:tracking-[0.2em] hover:scale-105 ${
                  activeSection === id
                    ? "text-pink-900 font-bold underline underline-offset-4"
                    : ""
                }`}
              >
                {id.toUpperCase()}
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT LEFT SIDE */}
        <section className="flex-1 max-w-3xl space-y-6" id="me">
          {/* Hero */}
          <div className="bg-gray-200 aspect-video w-full overflow-hidden rounded">
            <video
              src="/imgs/profile-video.mp4"
              poster="/imgs/julie1.jpeg"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Intro Text */}
          <div className="bg-white/70 p-4 rounded shadow text-sm">
            <p>
              Hi, I’m Julie – a curious frontend creative who builds smooth,
              user-friendly interfaces with equal parts logic and whimsy. I care
              about the details, the people, and making the web a little more
              delightful.
            </p>
          </div>

          <div className="bg-white/70 p-4 rounded shadow text-sm">
            <p>
              I am looking for my next challenge - if you need a
              <strong> frontend developer</strong> or a{" "}
              <strong>UI/UX designer</strong>, or general{" "}
              <strong>marketing/customer-person</strong>, I would love to hear
              from you . I am based in Copenhagen, and part-time in Rome. I am
              interested in remote or hybrid work, and I am open to both
              freelance and full-time opportunities.
            </p>
          </div>
        </section>

        {/* INFO + SKILLS RIGHT SIDE */}
        <section className="flex-1 text-sm space-y-4 max-w-sm" id="projects">
          <div>
            <p>
              <strong>Julie Sølva Eschricht Vogh</strong>
            </p>
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
              <li>HTML / CSS / JS</li>
              <li>React / Next.js</li>
              <li>WordPress / Elementor</li>
              <li>Adobe Illustrator</li>
              <li>AI is my personal assistant</li>
              <li>SoMe, SEO</li>
              <li>Marketing</li>
              <li>Customer support</li>
              <li>Content creation</li>
              <li>Empathy</li>
              <li>Curiosity</li>
              <li>Problem-solving</li>
              <li>Creativity</li>
              <li>Working until it works</li>
            </ul>
          </div>
        </section>
      </div>

      {/* CTA Footer */}
      <footer className="mt-16 text-center" id="extra">
        <a
          href="#"
          onClick={() => {
            window.location.href =
              "mailto:" +
              ["julesvogh", "gmail.com"].join("@") +
              "?subject=Interested%20in%20your%20work&body=Hi%20Julie,%0A%0AI%20am%20interested%20in%20something...";
          }}
          className="block"
        >
          <p className="text-lg font-medium hover:underline cursor-pointer">
            Hit me up
          </p>
          <p className="text-3xl">✌</p>
        </a>

        <ContactForm />
      </footer>
    </main>
  );
}

/*
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center p-6">
      
      <nav className="flex gap-6 mb-10">
        <a href="#me" className="nav-link">
          ME
        </a>
        <a href="/projects" className="nav-link text-orange-500">
          PROJECTS
        </a>
        <a href="#extra" className="nav-link text-green-600">
          EXTRA
        </a>
      </nav>

     
      <section
        id="me"
        className="w-full max-w-md bg-white/70 backdrop-blur p-6 rounded-lg shadow-lg"
      >
        <video
          src="/imgs/profile-video.mp4"
          poster="/imgs/julie1.jpeg"
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-pink-500 object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        <h1 className="text-3xl font-bold mb-1">Julie Sølva Eschricht Vogh</h1>
        <p className="text-sm mb-1">Copenhagen, Denmark</p>
        <a
          href="mailto:julesvogh@gmail.com"
          className="underline hover:text-pink-900"
        >
          julesvogh@gmail.com
        </a>
        <p className="italic mt-2">One-woman show ✨</p>
      </section>

     
      <section className="mt-10 text-left w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Here are my skills:</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>UI/UX Design (Figma, Adobe XD)</li>
          <li>Frontend dev (HTML, CSS, JavaScript)</li>
          <li>React / Next.js</li>
          <li>WordPress / Elementor</li>
          <li>SEO, social media & creativity</li>
        </ul>
      </section>

     
      <footer className="mt-16 mb-8">
        <p className="text-2xl hover:scale-110 transition cursor-pointer">
          ✌ Hit me up
        </p>
      </footer>
    </main>
  );
}

*/
