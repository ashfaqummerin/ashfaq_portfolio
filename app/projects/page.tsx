import Projects from "@/components/Projects";

type Props = {};

export default function Project({}: Props) {
  return (
    <div className="snap-center homePage scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-50/40 ">
      <Projects />
    </div>
  );
}
