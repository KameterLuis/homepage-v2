import React from "react";
import Video from "@/app/[locale]/hero/Video";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div>
      <div className="bg-white w-screen h-screen fixed top-0 -z-10 left-0">
        <Video />
      </div>
      <div className="flex w-full h-screen -mt-[100px] justify-center items-center">
        <div className="w-full px-6 sm:px-0">
          <div className="relative w-full h-[120px] z-10">
            <Image src="/hero/header.png" loading="eager" alt="Header" fill />
          </div>
          <p className="text-black px-2 sm:px-6 text-2xl font-bold">
            Web Design {t("and")}
            <br />
            {t("dev")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
