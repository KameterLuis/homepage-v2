import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luis Kameter</title>
        <meta
          name="description"
          content="Web developer, graphic designer, student."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </div>
  );
}
