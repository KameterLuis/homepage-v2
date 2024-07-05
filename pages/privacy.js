import Head from "next/head";
import Privacy from "../components/Privacy";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <meta name="description" content="Imprint for Luiskameter.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex justify-center">
        <div className="w-full max-w-[1300px]">
          <Navbar />
          <NavbarMobile />
          <Privacy />
          <Footer />
        </div>
      </main>
    </div>
  );
}
