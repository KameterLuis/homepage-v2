"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

type menuProps = {
  text: string;
  href: string;
};

const MenuItem = (props: menuProps) => {
  const textRef = useRef(null);
  useEffect(() => {
    if (!textRef.current) return;
    const text = textRef.current as HTMLElement;
    if (!text.textContent) return;
    //text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
  });
  return (
    <Link
      className="text-black z-50 font-black text-4xl md:text-8xl hover:text-[#ea1313]"
      ref={textRef}
      href={props.href}
    >
      {props.text}
    </Link>
  );
};

export default MenuItem;
