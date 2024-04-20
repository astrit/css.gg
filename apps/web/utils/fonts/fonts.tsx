"use client";

import { useEffect, useState } from "react";
import {
  IBM_Plex_Mono,
  JetBrains_Mono,
  Silkscreen,
  Manrope,
} from "next/font/google";
import Inter from "$/fonts/Inter";

const silk = Silkscreen({
  subsets: ["latin"],
  display: "block",
  weight: "400",
  variable: "--slant-font-silk",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "block",
  weight: "400",
  variable: "--slant-font-jet",
});

const IBM = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "block",
  weight: "400",
  variable: "--slant-font-ibm-plex",
});

const man = Manrope({
  subsets: ["latin"],
  display: "block",
  variable: "--font-manrope",
});

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [stylesheetCreated, setStylesheetCreated] = useState(false);

  useEffect(() => {
    if ("adoptedStyleSheets" in document) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(`
        :root { 
            --slant-font-inter: ${Inter.style.fontFamily}; 
            --slant-font-silk: ${silk.style.fontFamily};
            --slant-font-jet: ${jetBrains.style.fontFamily};
            --slant-font-ibm: ${IBM.style.fontFamily};
            --font-manrope: ${man.style.fontFamily};
        }`);
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
      setStylesheetCreated(true);
    }
  }, []);

  if (!stylesheetCreated) {
    return null;
  }

  return children;
}
