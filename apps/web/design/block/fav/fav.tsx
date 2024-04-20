"use client";

import { useTheme } from "next-themes";

export default function Favicon() {
  const { resolvedTheme } = useTheme();
  const fill = resolvedTheme === "dark" ? "rgba(255,255,255)" : "rgba(0,0,0)";
  const svgCode = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="6" stroke="${fill}" stroke-width="4" /></svg>`;
  const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svgCode)}`;

  return <link rel="icon" type="image/svg+xml" href={faviconUrl} />;
}
