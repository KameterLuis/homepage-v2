import React from "react";
import Image from "next/image";
import Link from "next/link";

type projectProps = {
  imgSrc: string;
  title: string;
  url: string;
};

const Project = (props: projectProps) => {
  return (
    <div className="flex flex-col items-center">
      <Link
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[300px] h-[200px] md:w-[350px] md:h-[225px] xl:w-[460px] xl:h-[300px] hover:scale-105 duration-300 drop-shadow-lg"
      >
        <Image
          className="duration-300 object-contain"
          src={props.imgSrc}
          alt={props.title}
          fill
        />
      </Link>
    </div>
  );
};

export default Project;
