"use client";

import { useRef } from "react";
import Video from "./home/Video";
import Canvas from "./home/Canvas";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./home/MenuItem";
import Foot from "./foot";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen">
      <div className="relative w-full h-[200px] z-10">
        <Image src="/home/header.png" alt="Header" fill />
      </div>
      <div className="px-2 md:px-8 mt-8 z-10 flex flex-col gap-y-8">
        <div>
          <MenuItem text="About" href="/about" />
        </div>
        <div>
          <MenuItem text="Work" href="/work" />
        </div>
        <div>
          <MenuItem text="Contact" href="/contact" />
        </div>
      </div>
      <div className="fixed bottom-0 pl-6">
        <Foot />
      </div>
      <div className="bg-white -z-10 w-screen h-screen fixed top-0 left-0">
        <Video />
      </div>
      <div className="fixed -z-10 top-0 left-0 w-screen h-screen">
        <Canvas />
      </div>
    </div>
  );
}
