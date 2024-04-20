import localFont from "next/font/local";

const Inter = localFont({
  src: [
    {
      path: "../../public/fonts/InterVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  display: "block",
  variable: "--slant-font-inter",
});
export const fontVariable = Inter.variable;
export default Inter;
