"use client";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar({ navLinks, activeSection = "", onContactClick, className = "", ...props }) {
  const pathname = usePathname();
  const router = useRouter();

  // Kald fra contact-link (nu ikke i brug, men beholdt udkommenteret til senere)
  /*
  const handleContactClick = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#contact");
    } else if (onContactClick) {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
      onContactClick();
    }
  };
  */

  return (
    <>
      {/* Mobile horizontal nav */}
      <nav
        className={`flex lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/80 justify-center gap-6 py-4  text-sm tracking-widest font-sans font-medium border-b border-pink-100 shadow-sm ${className}`}
        {...props}
      >
        {navLinks.map((nav) => {
          // Skip "extra" og "contact"
          if (nav.id === "extra" || nav.id === "contact") return null;

          const isActive = activeSection === nav.id;
          const navColor =
            nav.id === "projects" ? "text-orange-600" : nav.id === "me" ? "text-pink-600" : "text-pink-600"; // fallback
          const navActive =
            nav.id === "projects"
              ? "text-orange-800 underline underline-offset-4 font-bold"
              : nav.id === "me"
              ? "text-pink-800 underline underline-offset-4 font-bold"
              : "text-pink-800 underline underline-offset-4 font-bold";

          return (
            <a
              key={nav.id}
              href={nav.href}
              className={`transition-all duration-200 hover:tracking-[0.1em] hover:scale-105 px-1 cursor-pointer ${
                isActive ? navActive : navColor + " hover:underline"
              }`}
            >
              {nav.label}
            </a>
          );
        })}
      </nav>

      {/* Desktop vertical nav */}
      <aside
        className={`hidden lg:block absolute left-4 top-3/6 transform -rotate-90 -translate-y-1/2 origin-top-left z-20 ${className}`}
        {...props}
      >
        <nav className="flex gap-12 text-med tracking-widest font-medium">
          {[...navLinks].reverse().map((nav) => {
            // Skip "extra" og "contact"
            if (nav.id === "extra" || nav.id === "contact") return null;

            const isActive = activeSection === nav.id;
            const navColor =
              nav.id === "projects" ? "text-orange-600" : nav.id === "me" ? "text-pink-600" : "text-pink-600";
            const navActive =
              nav.id === "projects"
                ? "text-orange-800 underline underline-offset-4 font-bold"
                : nav.id === "me"
                ? "text-pink-800 underline underline-offset-4 font-bold"
                : "text-pink-800 underline underline-offset-4 font-bold";

            return (
              <a
                key={nav.id}
                href={nav.href}
                className={`transition-all duration-300 hover:tracking-[0.2em] hover:scale-105 font-sans cursor-pointer ${
                  isActive ? navActive : navColor + " hover:underline"
                }`}
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
