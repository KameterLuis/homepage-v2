import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
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
          <p className="text-[#ea1313] text-3xl font-black">ABOUT ME</p>
          <p className="text-black mt-4 font-bold">
            My name is Luis and I am a student at the technical university of
            munich. I have been building and designing websites for over 3 years
            now. I specialize in web development for businesses, brands or
            personal homepages. My experience ranges from SEO improvement to
            full stack high end websites. If you are just getting started or
            already have a concrete plan in mind, I am there to help you.
            Together we will be transforming your vision into a stunning,
            functional website that reflects your identity.
          </p>
          <Link
            className="text-black mt-4 hover:underline block duration-300"
            href="#contact"
          >
            Let's work together →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
