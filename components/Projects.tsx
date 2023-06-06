"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="projectContainer"
    >
      <h3 className="sectionHeading">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-gray-50/40">
        <ProjectCard
          src={"imaginAi.png"}
          title={"imaginAI"}
          href={"https://imaginai-vm2m.onrender.com/"}
          desc={
            "An AI image generation application inspired by DALL-E, utilizing the OpenAI API. The app was built using Vite and styled with Tailwind CSS. One of the prominent functionalities of the application is the incorporation of a community feature, where users can share their generated images and download them. This feature enables users to showcase their creations and interact with the community. Additionally, to facilitate image discovery. To enhance user experience, search functionality is added that enables users to explore images from the community using prompts or keywords."
          }
        />

        <ProjectCard
          src={"shopfront.png"}
          title={"Shopfront"}
          href={"https://shopfront.onrender.com/"}
          desc={
            "A robust e-commerce platform that encompasses all the necessary components, including a comprehensive shopping cart, a streamlined checkout system, a product review and rating system, seamless integration with PayPal, and a versatile admin functionality. For efficient state management,Redux Tool Kit is incorporated. To ensure visually appealing and responsive designs,utilized React Bootstrap is utilized. Additionally,implemented a personalized authentication system for user logins. To handle data storage and organization,database is designed and implemented using MongoDB and Mongoose.Backend server is developed using Express and Node.js"
          }
        />

        <ProjectCard
          src={"promptify.png"}
          title={"Promptify"}
          href={"https://promptify-ashfaqummerin.vercel.app/"}
          desc={
            "A full-stack Next.js application styled with Tailwind CSS, designed to facilitate prompt sharing among users. The application incorporates Google authentication, allowing users to sign in securely. Once logged in, users can create, update, and delete their own prompts. Additionally, users have the ability to browse other users' profiles and easily copy prompts to their clipboard for later use or inspiration"
          }
        />
      </div>

      {/* <div className="absolute w-full bg-[#F7AB0A]/10 h-[500px] top-[30%] left-0 -skew-y-12" /> */}
    </motion.div>
  );
}
