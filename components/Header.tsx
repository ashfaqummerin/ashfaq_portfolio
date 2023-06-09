"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [mounted, setMounded] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounded(true);
  }, []);
  if (!mounted) return null;
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/ashfaqummerin"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition duration-200 ease-in-out"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/ashfaq-ummer-7a9523148/"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition duration-200 ease-in-out"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-300"
      >
        {currentTheme === "dark" ? (
          <button onClick={() => setTheme("light")}>Day</button>
        ) : (
          <button onClick={() => setTheme("dark")}>Night</button>
        )}
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        {/* <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p> */}
      </motion.div>
    </header>
  );
}
