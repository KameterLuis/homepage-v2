import React from "react";
import Video from "../home/Video";
import Image from "next/image";
import MenuItem from "../home/MenuItem";
import Link from "next/link";
import { Special_Elite } from "next/font/google";
import Foot from "../foot";
import Nav from "../nav";

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
      <div
        className={
          specialElite.className +
          " flex flex-col items-center mt-12 md:mt-20 pb-24"
        }
      >
        <p className="text-black mb-4 text-2xl">Contact</p>
        <form
          className="w-[280px]"
          action="mailto:contact@luiskameter.com"
          method="GET"
        >
          <div>
            <input
              className="flex p-2 text-black w-full placeholder:text-black outline-none bg-transparent border border-black"
              placeholder="Subject"
              type="text"
              name="subject"
            />
          </div>
          <div>
            <textarea
              className="text-black duration-200 mt-4 ease-in h-[200px] focus:h-[200px] placeholder-shown:h-[45px] resize-none flex p-2 w-full placeholder:text-black outline-none bg-transparent border border-black"
              placeholder="Message"
              name="body"
            ></textarea>
          </div>
          <div>
            <input
              className="block text-white mt-4 bg-[rgba(0,0,0,0.7)] px-6 py-2 hover:bg-black duration-300"
              type="submit"
              value="Send"
            />
          </div>
        </form>
        <Link
          href="mailto:contact@luiskameter.com"
          className="text-black mt-4 hover:underline"
        >
          E-Mail: contact@luiskameter.com
        </Link>
      </div>
      <div className="fixed bottom-0">
        <Foot />
      </div>
    </div>
  );
};

export default page;
