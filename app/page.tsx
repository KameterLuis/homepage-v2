"use client";

import { useRef } from "react";
import Video from "./home/Video";
import Canvas from "./home/Canvas";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./home/MenuItem";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-white">
      <Video />
      <Canvas />
      <div className="relative w-full h-[200px]">
        <Image src="/home/header.png" alt="Header" fill />
      </div>
      <div className="px-2 md:px-8 flex flex-col gap-y-4 mt-8">
        <MenuItem text="About" href="/about" />
        <MenuItem text="Work" href="/work" />
        <MenuItem text="Contact" href="/contact" />
      </div>
    </div>
  );
}
