import { Navbar } from "@Components/navbar/navbar";
import { classNames } from "@Utils/classnames";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Montacristo.com",
  description: "A portfolio website for Louis aka Montacristo/Equable",
};

const urbanist = localFont({
  src: "./fonts/urbanist.ttf",
  display: "swap",
  variable: "--urbanist",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={classNames({
        [urbanist.variable]: true,
      })}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
