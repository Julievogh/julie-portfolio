"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Define farver pr. sektion
const sectionColors = {
  me: {
    base: "text-pink-600",
    active: "text-pink-800 underline underline-offset-4 font-bold",
    hover: "hover:text-pink-800",
  },
  projects: {
    base: "text-orange-600",
    active: "text-orange-800 underline underline-offset-4 font-bold",
    hover: "hover:text-orange-800",
  },
  extra: {
    base: "text-green-600",
    active: "text-green-800 underline underline-offset-4 font-bold",
    hover: "hover:text-green-800",
  },
  // Tilføj flere hvis du har flere sektioner
};

export default function NavBar({ navLinks, className = "" }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Find aktivt link ud fra URL path
    if (pathname.startsWith("/projects")) setActiveSection("projects");
    else if (pathname === "/" || pathname.startsWith("/#me"))
      setActiveSection("me");
    else if (pathname.includes("extra")) setActiveSection("extra");
    // Tilføj evt. flere regler hvis du har flere sider
  }, [pathname]);

  // Find den aktuelle farve-stil
  const sectionColor = sectionColors[activeSection] || sectionColors["me"];

  return (
    <>
      {/* Mobile horizontal nav */}
      <nav
        className={`flex lg:hidden justify-center gap-6 mb-6 text-sm tracking-widest font-sans font-medium ${sectionColor.base} ${className}`}
      >
        {navLinks.map((nav) => {
          const isActive = activeSection === nav.id;
          const navColor = sectionColors[nav.id] || sectionColors["me"];
          return (
            <a
              key={nav.id}
              href={nav.href}
              className={`transition-transform duration-300 hover:scale-105 cursor-pointer
                ${
                  isActive
                    ? navColor.active
                    : navColor.base + " " + navColor.hover
                }
              `}
            >
              {nav.label}
            </a>
          );
        })}
      </nav>
      {/* Desktop vertical nav */}
      <aside
        className={`hidden lg:block absolute left-4 top-1/2 transform -rotate-90 -translate-y-1/2 origin-top-left z-20 ${className}`}
      >
        <nav className="flex gap-12 text-med tracking-widest font-medium">
          {navLinks.map((nav) => {
            const isActive = activeSection === nav.id;
            const navColor = sectionColors[nav.id] || sectionColors["me"];
            return (
              <a
                key={nav.id}
                href={nav.href}
                className={`transition-all duration-300 hover:tracking-[0.2em] hover:scale-105 font-sans cursor-pointer
                  ${
                    isActive
                      ? navColor.active
                      : navColor.base + " " + navColor.hover
                  }
                `}
              >
                {nav.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
