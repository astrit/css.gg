import Link from "@/link/link";
import Home from "&/home/home";

export default function Page(): JSX.Element {
  return (
    <Home>
      <h1>
        <span>{`CSS＊GG`}</span>
      </h1>
      <footer>
        <span>
          <Link href="https://lona.is">{`L O \\ Λ`}</Link>
        </span>
        <div>{`×`}</div>
        <span>
          <Link href="https://astrit.co">{`IIIIII`}</Link>
        </span>
      </footer>
      <code>npm i css.gg</code>
    </Home>
  );
}
