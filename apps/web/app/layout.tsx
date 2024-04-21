import React, { Suspense } from "react";
import type { Metadata } from "next";
import Favicon from "@/fav/fav";
import Footer from "@/footer/footer";
import Header from "@/header/header";
import Preloader from "@/preloader/preloader";
import { Analytics } from "@vercel/analytics/react";
import Article from "&/article/article";
import Main from "&/main/main";
import Fonts from "$/fonts/fonts";
import { Provider } from "$/provider/provider";

import "#/global/global.css";
import Pattern from "@/pattern/pattern";
import Link from "@/link/link";
import Bar from "@/bar/bar";

export const metadata: Metadata = {
  metadataBase: new URL("https://slant.so"),
  title: {
    default: "CSS＊GG",
    template: "%s · CSS＊GG",
  },
  description: "",
  openGraph: {
    title: "CSS＊GG",
    description: "",
    url: "https://css.gg",
    siteName: "CSS.GG",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://css.gg/og?title=CSS.GG`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense fallback={<Preloader />}>
          <Provider
            attribute="theme"
            defaultTheme="dark"
            enableColorScheme={false}
            enableSystem={true}
          >
            <Favicon />
            <Fonts>
              <Main>
                <Header />
                <Bar />
                <Article>{children}</Article>
                <Footer />
              </Main>
            </Fonts>
            <Pattern />
          </Provider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
