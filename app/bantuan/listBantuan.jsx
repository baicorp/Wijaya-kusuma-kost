"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";

function List({ title, content }) {
  const child = useRef();
  const arrow = useRef();

  function handleClick() {
    const height = child.current.offsetHeight;
    if (height > 0) {
      child.current.style.height = "0";
      arrow.current.style.transform = "rotate(180deg)";
    } else {
      child.current.style.height = "auto";
      arrow.current.style.transform = "rotate(0deg)";
    }
  }

  return (
    <div className="flex flex-col py-4">
      <div
        onClick={handleClick}
        className="hover:cursor-pointer flex justify-between"
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <Image
          src="/up-arrow.svg"
          alt="arrow"
          className="w-4 h-auto rotate-180 transition duration-300"
          width={100}
          height={24}
          priority
          ref={arrow}
        />
      </div>
      <div ref={child} className="overflow-hidden h-0">
        <p className="mt-2">{content}</p>
      </div>
    </div>
  );
}

export default List;
