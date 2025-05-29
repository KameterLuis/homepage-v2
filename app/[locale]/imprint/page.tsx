import React from "react";
import Nav from "@/app/[locale]/nav";
import Footer from "@/app/[locale]/foot";

const page = () => {
  return (
    <div className="w-full h-full bg-white">
      <Nav />
      <div className="flex justify-center w-screen h-full">
        <div className="max-w-[1000px] w-full">
          <div className="flex flex-col items-center mt-12 md:mt-20 pb-24">
            <div className="text-black text-center md:mt-10 md:text-xl max-w-[500px] px-4">
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
                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle weder verpflichtet noch
                bereit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
