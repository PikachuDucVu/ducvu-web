import Inprogress from "@/components/inprogress";
import Intro from "@/components/intro";
import SectionDevider from "@/components/sectionDevider";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <Inprogress />
    </main>
  );
}
