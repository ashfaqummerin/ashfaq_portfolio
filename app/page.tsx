"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="homePage scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-50/40">
      <Header />

      <section id="hero" className="w-full snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <a href="#hero">
        <footer className="sticky w-full bottom-5">
          <div className="flex items-center justify-center">
            <ChevronDoubleUpIcon className="h-7 w-7 hover:scale-125 cursor-pointer" />
          </div>
        </footer>
      </a>
    </div>
  );
}
