import React from "react";
import Video from "../home/Video";
import Image from "next/image";
import MenuItem from "../home/MenuItem";
import Link from "next/link";
import { Special_Elite } from "next/font/google";

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
      <div className="px-2 md:px-8 flex z-50 justify-between text-3xl md:text-6xl sticky top-4">
        <Link
          href="/about"
          className="text-black z-50 font-black block hover:text-[#ea1313]"
        >
          <p>About</p>
        </Link>
        <Link
          href="/work"
          className="text-black z-50 font-black block hover:text-[#ea1313]"
        >
          <p>Work</p>
        </Link>
        <Link
          href="/contact"
          className="text-black z-50 font-black block hover:text-[#ea1313]"
        >
          <p>Contact</p>
        </Link>
      </div>
      <div
        className={
          specialElite.className +
          " flex flex-col items-center mt-12 md:mt-20 pb-24"
        }
      >
        <p className="text-black mb-4 text-2xl">Contact</p>
        <form action="mailto:contact@luiskameter.com" method="GET">
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
      </div>
    </div>
  );
};

export default page;
