import Video from "../home/Video";
import Image from "next/image";
import Link from "next/link";
import Project from "./project";
import Nav from "../nav";
import Foot from "../foot";

const page = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white">
      <div className="fixed w-screen h-screen left-0 top-0 opacity-5 pointer-events-none">
        <Image
          src="/background-2.jpg"
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
      <div className="flex flex-col gap-y-10 md:gap-y-20 items-center mt-12 md:mt-32 pb-24">
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-10 xl:gap-x-20">
          <Project
            title="Kanzlei Geisler"
            imgSrc="/work/geisler.png"
            url="https://kanzlei-geisler.vercel.app/"
          />
          <Project
            title="Eduquality"
            imgSrc="/work/eduquality.png"
            url="https://eduquality.de/"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-10 xl:gap-x-20">
          <Project
            title="TUM Blockchain Conference"
            imgSrc="/work/conference.jpg"
            url="https://conference.tum-blockchain.com/"
          />
          <Project
            title="LEAM"
            imgSrc="/work/leam.jpg"
            url="https://leam.tech/"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-10 xl:gap-x-20">
          <Project
            title="Wlokno"
            imgSrc="/work/wlokno.png"
            url="https://wlokno.com/"
          />
          <Project
            title="Eva Kameter"
            imgSrc="/work/friseur.jpg"
            url="https://friseurevakameter.de/"
          />
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default page;
