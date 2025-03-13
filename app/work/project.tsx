import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  weight: "400",
  variable: "--font-special-elite",
  subsets: ["latin"],
});

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
        className="relative w-[310px] h-[200px] md:w-[350px] md:h-[225px] xl:w-[500px] xl:h-[300px] hover:scale-105 duration-300"
      >
        <Image
          className="duration-300 object-contain"
          src={props.imgSrc}
          alt={props.title}
          fill
        />
      </Link>
      <div className="flex justify-between mt-2">
        <p
          className={
            specialElite.className + " text-black text-center md:text-xl px-4"
          }
        >
          {props.title}
        </p>
        <p
          className={
            specialElite.className +
            " text-black text-center md:text-xl px-4 hover:underline"
          }
        >
          <Link target="_blank" rel="noopener noreferrer" href={props.url}>
            Visit website
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Project;
