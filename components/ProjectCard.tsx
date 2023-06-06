import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  src: string;
  title: string;
  desc: string;
  href: string;
};

export default function ProjectCard({ src, title, desc, href }: Props) {
  return (
    <div
      className="w-screen max-sm:flex-shrink-0 snap-center items-center justify-center space-y-2 p-10 md:p-5 h-screen"
      style={{ paddingTop: "50px" }}
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={src}
        className="w-[300px] h-[300px] mx-auto"
        style={{
          transformOrigin: "center",
        }}
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
        <h4 className="text-xl font-semibold text-center underline underline-offset-4 hoverText font-saira">
          <Link href={href}>{title}</Link>
        </h4>
        <p className="text-xs text-center md:text-left font-saira">{desc}</p>
      </div>
    </div>
  );
}
