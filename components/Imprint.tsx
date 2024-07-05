const Imprint = () => {
  return (
    <div className="px-10 mt-20 min-h-screen">
      <a href="/" className="text-xl border-black border-[1px] px-6 py-1">
        back
      </a>
      <p className="text-4xl mt-10">
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
        <a href="mailto:contact@luiskameter.com"> contact@luiskameter.com</a>
        <br />
      </p>
      <br />
      <p>
        Plattform der EU-Kommission zur Online-Streitbeilegung:
        <a
          target="_blank"
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
    </div>
  );
};

export default Imprint;
