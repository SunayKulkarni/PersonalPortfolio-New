import Image from "next/image";
import About from "~/components/About";
import Education from "~/components/Education";
import Experience from "~/components/Experience";
import Skills from "~/components/Skills";
import Socials from "~/components/Socials";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col text-white p-8 md:p-16 lg:p-24 max-w-4xl mx-auto">
      <div className="mt-10 md:mt-0 mb-10 flex flex-row items-center gap-6 
                border border-zinc-800 p-6 rounded-xl">
  <div className="overflow-hidden flex items-center justify-center">
    <Image
      src="/image.png"
      alt="Profile Image"
      width={96}
      height={96}
      className="object-cover rounded-full"
    />
  </div>

  <div className="leading-tight">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
      Sunay
    </h1>
    <p className="text-3xl md:text-4xl text-gray-400">
      Kulkarni
    </p>
  </div>
</div>


      <About />
      <Skills />
      <Experience />
      <Education />
      <Socials />
    </main>
  );
}
