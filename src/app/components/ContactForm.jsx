import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/mrbkylqq", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      form.reset();
      setStatus("✨ Thanks! Your message was sent.");
    } else {
      setStatus("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-8">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full p-2 border border-pink-300 rounded bg-white text-pink-800 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full p-2 border border-pink-300 rounded bg-white text-pink-800 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        className="w-full p-2 border border-pink-300 rounded bg-white text-pink-800 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button
        type="submit"
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 cursor-pointer"
      >
        Send
      </button>
      {status && (
        <p className="text-sm mt-2 text-pink-600 font-medium">{status}</p>
      )}
    </form>
  );
}
