"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Nav = () => {
  const headerRef = useRef(null);

  const updateHeader = (e: any) => {
    if (!headerRef.current) return;
    const header = headerRef.current as HTMLElement;
    if (header.getBoundingClientRect().y <= 0) {
      header.style.backgroundColor = "rgba(255,255,255,1)";
    } else {
      header.style.backgroundColor = "rgba(255,255,255,0)";
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
      className="px-2 md:px-8 flex z-50 justify-between text-3xl md:text-6xl sticky top-0 py-4 duration-300"
    >
      <Link
        href="/about"
        className="text-black z-50 font-black block hover:text-[#ea1313]"
      >
        <p>About</p>
      </Link>
      <Link
        href="/work"
        className="text-black z-50 font-black block hover:text-[#ea1313]"
      >
        <p>Work</p>
      </Link>
      <Link
        href="/contact"
        className="text-black z-50 font-black block hover:text-[#ea1313]"
      >
        <p>Contact</p>
      </Link>
    </div>
  );
};

export default Nav;
