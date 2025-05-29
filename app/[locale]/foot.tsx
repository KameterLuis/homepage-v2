"use client";

import Link from "next/link";
import { useTranslations } from "use-intl";

const Footer = () => {
  const t = useTranslations("Foot");

  return (
    <div className="text-black p-4">
      <Link className="mr-4" href="/imprint">
        {t("imprint")}
      </Link>
      <Link href="/privacy">{t("privacy")}</Link>
    </div>
  );
};

export default Footer;
