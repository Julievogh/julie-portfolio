"use client";
import "./globals.css";
import { useState, createContext, useContext } from "react";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased mt-10 lg:mt-0">{children}</body>
    </html>
  );
}
