"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Nav = () => {
  const headerRef = useRef(null);

  const updateHeader = (e: any) => {
    if (!headerRef.current) return;
    if (!e) return;
    const header = headerRef.current as HTMLElement;
    const y = e.target.documentElement.scrollTop;
    if (y > 0) {
      header.style.backgroundColor = "rgba(0,0,0,1)";
      header.style.color = "rgba(255,255,255,1)";
    } else {
      header.style.backgroundColor = "rgba(255,255,255,0)";
      header.style.color = "rgba(0,0,0,1)";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", updateHeader);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="xl:px-0 text-black h-[100px] items-center justify-center px-10 flex z-50 sticky top-0 duration-300"
    >
      <div className="max-w-[1000px] w-full flex justify-between text-3xl">
        <Link
          href="/#about"
          className="z-50 font-black block hover:text-[#ea1313]"
        >
          <p>About</p>
        </Link>
        <Link
          href="/#work"
          className="z-50 font-black block hover:text-[#ea1313] sm:translate-x-[30px]"
        >
          <p>Work</p>
        </Link>
        <Link
          href="/#contact"
          className="z-50 font-black block hover:text-[#ea1313]"
        >
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
