import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div id="contact" className="w-full bg-white my-32">
      <div className="flex flex-col items-center">
        <div className="flex">
          <p className="text-black mb-4 text-3xl font-black">Send me a</p>
          <p className="text-[#ea1313] mb-4 text-3xl font-black ml-3">
            message
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
              placeholder="Subject"
              type="text"
              name="subject"
            />
          </div>
          <div>
            <textarea
              className="text-black duration-200 mt-4 ease-in h-[200px] focus:h-[200px] placeholder-shown:h-[45px] resize-none flex p-2 w-full placeholder:text-black outline-none bg-transparent border-b border-black"
              placeholder="Message"
              name="body"
            ></textarea>
          </div>
          <div>
            <input
              className="block text-white mt-4 bg-[rgba(0,0,0,0.7)] px-6 py-2 hover:bg-black duration-300"
              type="submit"
              value="Send"
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
