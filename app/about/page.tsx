import React from "react";
import Video from "../home/Video";
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
        <div className="relative flex flex-col items-center">
          <p className="text-4xl md:text-6xl sm:spreadAnim text-center absolute text-black w-[300px] md:w-[600px] h-[275px] md:h-[400px] translate-y-[20px] md:translate-y-[30px]">
            "Design is not just what it looks and feels like. Design is how it
            works."
          </p>
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] hover:opacity-70 duration-500 ease-in-out">
            <Image
              className="imgAnim"
              src="/about/picture-2.jpg"
              alt="Luis Kameter"
              fill
            />
          </div>
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
          personal homepages. My experience ranges from SEO improvement to full
          stack high end websites.
          <br />
          <br />
          03 / Let's get started
          <br />
          <br />
          If you are just getting started or already have a concrete plan in
          mind, I am there to help you. Together we will be transforming your
          vision into a stunning, functional website that reflects your
          identity.
        </p>
        <Link
          className="text-white my-12 md:my-24 p-2 scale-125 md:scale-200 bg-black hover:bg-[#ea1313] duration-300"
          href="/contact"
        >
          Shoot me a message
        </Link>
      </div>
      <Foot />
    </div>
  );
};

export default page;
