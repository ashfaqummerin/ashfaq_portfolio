"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["<Design />", "<Build />", "<Deploy />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={"/profile icon.png"}
        alt="profile_pic"
        width={100}
        height={100}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 tracking-[15px] pb-2 font-bold">
          full stack web developer
        </h2>
        <h1 className="font-semibold px-40">
          <span className="text-gray-600 mr-3">{text}</span>
          <Cursor cursorColor="green" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
