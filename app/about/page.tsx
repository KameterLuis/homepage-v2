import React from "react";
import Video from "../home/Video";
import Image from "next/image";
import Link from "next/link";
import { Special_Elite } from "next/font/google";
import Nav from "../nav";

const specialElite = Special_Elite({
  weight: "400",
  variable: "--font-special-elite",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white">
      <Video />
      <div className="relative w-full h-[200px]">
        <Link href="/">
          <Image src="/home/header.png" alt="Header" fill />
        </Link>
      </div>
      <Nav />
      <div className="flex flex-col items-center mt-12 md:mt-20 pb-24">
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <Image src="/about/picture.jpg" alt="Luis Kameter" fill />
        </div>
        <p
          className={
            specialElite.className +
            " text-black text-center mt-10 md:mt-10 md:text-xl max-w-[500px] px-4"
          }
        >
          01 / Introduction
          <br />
          <br />
          Hello :)
          <br />
          <br />
          My name is Luis and I am a student at the technical university of
          munich. I have been building and designing websites for over 3 years
          now.
          <br />
          <br />
          02 / What I do
          <br />
          <br />I specialize in web development for businesses, brands or
          personal homepages.
        </p>
      </div>
    </div>
  );
};

export default page;
