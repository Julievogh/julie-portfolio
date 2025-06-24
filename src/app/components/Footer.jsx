"use client";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
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
        <p className="text-3xl">🖌️</p>
      </a>
      <ContactForm />
    </footer>
  );
}
