"use client";

import { useLocale } from "next-intl";
import clsx from "clsx";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname(); // e.g.  /de/blog/post-1
  const locale = useLocale(); // 'de'  or  'en'

  return (
    <div className="fixed bottom-0 right-0 z-50 bg-">
      {["de", "en"].map((lng) => (
        <Link
          key={lng}
          href={pathname} /* keep current page */
          locale={lng} /* but change language */
          className={clsx(
            "px-2 py-1 rounded transition",
            lng === locale
              ? "bg-[#ea1313] text-white"
              : "bg-white text-[#ea1313] hover:bg-gray-200"
          )}
          aria-label={
            lng === "de"
              ? "Sprache auf Deutsch umstellen"
              : "Switch language to English"
          }
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
