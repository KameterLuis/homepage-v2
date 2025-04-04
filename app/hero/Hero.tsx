import React from "react";
import Video from "./Video";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="bg-white w-screen h-screen fixed top-0 -z-10 left-0">
        <Video />
      </div>
      <div className="flex w-full h-screen -mt-[100px] justify-center items-center">
        <div className="w-full">
          <div className="relative w-full h-[120px] z-10">
            <Image src="/hero/header.png" alt="Header" fill />
          </div>
          <p className="text-black px-6 text-2xl font-bold">
            Web Design and
            <br />
            Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
