import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import pattern from "@/public/bg-tablet-pattern.svg";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage",
  description: "Frontend Mentor | Manage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ${isModalOpen ? "h-screen overflow-hidden" : ""} */

  return (
    <html lang="en">
      <body className={`relative `} id="page">
        <div className="absolute top-[-41px] tablet:top-[-56px] w-full h-full -z-10 overflow-hidden">
          <Image
            src={pattern}
            alt="pattern1"
            className="w-[460px] 1024:w-[740px] max-w-none h-auto absolute top-[-120px] 1024:top-[-100px] left-1/2 translate-x-[-130px] 1024:translate-x-[70px]"
          />
          <Image
            src={pattern}
            alt="pattern2"
            className="w-[320px] 1024:w-[740px] max-w-none h-auto absolute top-[518px] 1024:top-[1120px] left-1/2 translate-x-[54px] 1024:translate-x-[-1160px]"
          />
        </div>

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
