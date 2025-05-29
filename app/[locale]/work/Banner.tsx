import { useTranslations } from "next-intl";
import React from "react";

const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <div className="flex">
      <div className="flex gap-x-2 text-[#ea1313] text-4xl font-black banner mr-2">
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
      </div>
      <div className="flex gap-x-2 text-[#ea1313] text-4xl font-black banner">
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
        <p>{t("text")}</p>
      </div>
    </div>
  );
};

export default Banner;
