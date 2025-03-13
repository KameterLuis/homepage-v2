import React from "react";

const Video = () => {
  return (
    <video
      autoPlay
      muted
      loop
      preload="none"
      className="fixed w-full h-full pointer-events-none left-0 top-0 object-cover opacity-30"
    >
      <source src="/home/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
