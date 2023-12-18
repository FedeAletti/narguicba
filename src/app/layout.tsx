import type {Metadata} from "next";

import {Manrope} from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

export const metadata: Metadata = {
  title: "narguicba",
  description: "La tienda de narguilas más grande del país",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const myFont = localFont({
  src: "./assets/fonts/CouragesDemo-rgjjK.otf",
  variable: "--my-font",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${manrope.className} ${myFont.variable}`} lang="es">
      <body className="relative min-h-screen overflow-x-hidden">
        <header className=" inset-0 z-20 -mb-16">
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
