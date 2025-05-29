import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Contact");

  return (
    <div id="contact" className="w-full bg-white my-32">
      <div className="flex flex-col items-center">
        <div className="sm:flex text-center">
          <p className="text-black mb-4 text-3xl font-black">{t("header-1")}</p>
          <p className="text-[#ea1313] mb-4 text-3xl font-black sm:ml-3">
            {t("header-2")}
          </p>
        </div>
        <form
          className="w-full md:w-[500px] mt-10 px-4 md:px-0"
          action="mailto:contact@luiskameter.com"
          method="GET"
        >
          <div>
            <input
              className="flex p-2 text-black w-full placeholder:text-black outline-none bg-transparent border-b border-black"
              placeholder={t("subject")}
              type="text"
              name="subject"
            />
          </div>
          <div>
            <textarea
              className="text-black duration-200 mt-4 ease-in h-[200px] focus:h-[200px] placeholder-shown:h-[45px] resize-none flex p-2 w-full placeholder:text-black outline-none bg-transparent border-b border-black"
              placeholder={t("message")}
              name="body"
            ></textarea>
          </div>
          <div>
            <input
              className="block text-white mt-4 bg-[rgba(0,0,0,0.7)] px-6 py-2 hover:bg-black duration-300"
              type="submit"
              value={t("send")}
            />
          </div>
        </form>
        <div className="w-full flex justify-center">
          <Link
            href="mailto:contact@luiskameter.com"
            className="text-black mt-4 hover:underline text-left w-full md:w-[500px] px-4 md:px-0"
          >
            E-Mail: contact@luiskameter.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
