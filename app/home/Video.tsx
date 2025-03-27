import React from "react";

const Video = () => {
  return (
    <video
      autoPlay
      muted
      loop
      preload="none"
      className="w-full h-full object-cover pointer-events-none opacity-30"
    >
      <source src="/home/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
