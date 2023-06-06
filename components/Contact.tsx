"use client";
import { motion } from "framer-motion";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="contactContainer">
      <h3 className="sectionHeading">Contact</h3>
      <div className="flex gap-10 flex-wrap justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col relative space-y-2"
        >
          <h1 className="text-9xl font-saira font-semibold">Hello</h1>
        </motion.div>

        <div className="relative flex flex-col justify-center text-center items-start  ">
          <div className="space-x-2">
            <p className="font-saira">
              On the internet:{" "}
              <a
                href="https://www.linkedin.com/in/ashfaq-ummer-7a9523148/"
                className="underline underline-offset-4"
              >
                Linkedin
              </a>
              /{" "}
              <a href="https://github.com/ashfaqummerin" className="underline underline-offset-4">
                {" "}
                Github
              </a>
            </p>
          </div>

          <div className="space-x-2">
            <p className="font-saira">
              Email:
              <a href="mailto:ashfaqaiu@gmail.com" className="underline underline-offset-4">
                {" "}
                ashfaqaiu@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
