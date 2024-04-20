"use client";

import React from "react";
import Progress from "@/progress/progress";
import { Toggle } from "@/toggle/toggle";

import "@/footer/footer.css";

function Split() {
  return <span className="split">·</span>;
}

function Left({ children }: { children?: React.ReactNode }) {
  return <div className="sides left">{children}</div>;
}

function Right({ children }: { children?: React.ReactNode }) {
  const elements = [<Progress />];
  return (
    <div className="sides right">
      {elements.map((element, index) => (
        <React.Fragment key={index}>
          {element}
          {index < elements.length - 1 && <Split />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="main-footer">
      <Left>
        <Toggle />
      </Left>
      <Right />
    </footer>
  );
}
