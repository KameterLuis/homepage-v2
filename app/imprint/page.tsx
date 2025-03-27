import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Special_Elite } from "next/font/google";
import Nav from "../nav";
import Foot from "../foot";

const specialElite = Special_Elite({
  weight: "400",
  variable: "--font-special-elite",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white">
      <div className="fixed w-screen h-screen left-0 top-0 opacity-5 pointer-events-none">
        <Image
          src="/background.jpg"
          alt="background doodle"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-[200px]">
        <Link href="/">
          <Image src="/home/header.png" alt="Header" fill />
        </Link>
      </div>
      <Nav />
      <div className="flex flex-col items-center mt-12 md:mt-20 pb-24">
        <p
          className={
            specialElite.className +
            " text-black text-center md:mt-10 md:text-xl max-w-[500px] px-4"
          }
        >
          <p className="text-4xl">
            <strong>Impressum</strong>
            <br />
            <br />
          </p>
          <p>
            Luis Kameter <br />
            Schrenckstraße 24
            <br />
            85635 Höhenkirchen <br />
          </p>
          <br />
          <br />
          <p>
            <strong>Kontakt:</strong> <br />
            Telefon: +49 176 429 431 48
            <br />
            E-Mail:
            <a
              className="hover:underline"
              href="mailto:contact@luiskameter.com"
            >
              {" "}
              contact@luiskameter.com
            </a>
            <br />
          </p>
          <br />
          <p>
            Plattform der EU-Kommission zur Online-Streitbeilegung:
            <a
              target="_blank"
              className="hover:underline"
              href="https://ec.europa.eu/odr"
              rel="noopener noreferrer"
            >
              {" "}
              https://ec.europa.eu/odr
            </a>
          </p>
          <br />
          <p>
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
          </p>
        </p>
      </div>
      <Foot />
    </div>
  );
};

export default page;
