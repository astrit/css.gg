import Link from "next/link";
import "@/bar/bar.css";

export default function Bar() {
  return (
    <div className="bar">
      <menu>
        <Link href="https://css.gg">Icons</Link>
        <Link href="https://glyf.app">Glyphs</Link>
      </menu>
    </div>
  );
}
