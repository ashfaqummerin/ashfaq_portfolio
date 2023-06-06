"use client";

import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className="aboutContainer"
    >
      <h3 className="sectionHeading">About</h3>
      <div className="flex flex-wrap">
        <div className="space-y-10 ">
          <p className="text-base font-saira">
            Welcome to my portfolio! I am a full stack web developer who transitioned from
            mechanical engineering. With a passion for technology and a creative problem-solving
            mindset, I thrive on translating complex concepts into user-friendly web experiences.
          </p>
        </div>
        <div className="space-y-2 px-auto mt-10">
          <h6 className="text-2xl uppercase tracking-[10px] font-semibold text-gray-500 font-saira">
            Skills
          </h6>
          <p className="text-base font-saira">
            JavaScript / React / Next / Redux / Node / Express / Rest Api / MongoDB / Git / Tailwind
            / HTML / CSS
          </p>
        </div>
      </div>
    </motion.div>
  );
}
