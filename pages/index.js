import Head from "next/head";
import Hero from "../components/Hero";

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
        <Hero />
      </main>
    </div>
  );
}
