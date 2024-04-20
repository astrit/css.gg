"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icon from "@/icon/icon";

import "@/toggle/toggle.css";

export function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const Light = () => <Icon name="light" height="10" />;
  const Dark = () => <Icon name="dark" height="10" />;

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "\\" &&
        isHTMLElement(event.target) &&
        (event.target as HTMLElement).tagName !== "INPUT" &&
        (event.target as HTMLElement).tagName !== "TEXTAREA"
      ) {
        setTheme(theme === "light" ? "dark" : "light");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setTheme, theme]);

  function isHTMLElement(target: EventTarget | null): target is HTMLElement {
    return target instanceof HTMLElement;
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="toggle">
        <Light />
      </button>
    );
  }
  return (
    <button
      className="toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? <Light /> : <Dark />}
    </button>
  );
}
