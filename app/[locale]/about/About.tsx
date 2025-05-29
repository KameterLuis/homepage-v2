import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <div id="about" className="sm:flex md:p-10 xl:p-0 xl:py-8 w-full bg-white">
      <div className="relative w-full md:w-[50%] h-full p-8 xl:pl-0">
        <Image
          src="/about/luiskameter.jpg"
          alt="Luis Kameter"
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </div>
      <div className="md:w-[50%] w-full min-h-full p-8 xl:pr-0 flex justify-center items-center">
        <div className="w-full">
          <p className="text-[#ea1313] text-3xl font-black">{t("about")}</p>
          <p className="text-black mt-4 font-bold">{t("text")}</p>
          <Link
            className="text-black mt-4 hover:underline block duration-300"
            href="#contact"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
