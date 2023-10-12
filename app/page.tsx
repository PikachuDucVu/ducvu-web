import About from "@/components/about";
import Inprogress from "@/components/inprogress";
import Intro from "@/components/intro";
import Projects from "@/components/project";
import SectionDevider from "@/components/sectionDevider";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      {/* <Inprogress /> */}
    </main>
  );
}
