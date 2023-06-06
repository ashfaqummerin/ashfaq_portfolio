"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["<Design />", "<Build />", "<Deploy />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="heroContainer space-y-8">
      <BackgroundCircles />

      <h2 className="uppercase text-4xl text-gray-300 tracking-[15px] pb-2 font-bold font-saira">
        Ashfaq Ummer
      </h2>

      <div className="z-20">
        <h2 className="text-sm uppercase  tracking-[15px] pb-2 font-semibold emboss font-saira">
          FULL STACK WEB DEVELOPER
        </h2>
        <h1 className="font-semibold px-40">
          <span className="text-gray-600 mr-3 tracking-[8px] font-saira">{text}</span>
          <Cursor cursorColor="green" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton font-saira">About</button>
          </a>

          <a href="#projects">
            <button className="heroButton">Project</button>
          </a>

          <a href="#contact">
            <button className="heroButton">Contact</button>
          </a>

          {/* <Link href="/projects">
            <button className="heroButton">Project</button>
          </Link> */}

          {/* <Link href="/contact">
            <button className="heroButton">Contact</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
