import Image from "next/image";
import About from "~/components/About";
import Education from "~/components/Education";
import Experience from "~/components/Experience";
import Skills from "~/components/Skills";
import Socials from "~/components/Socials";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col text-white p-8 md:p-16 lg:p-24 max-w-4xl mx-auto">
      <div className="mt-10 md:mt-0 mb-10 flex flex-row items-center gap-5 border border-zinc-800 p-4 ">
        <div>
          <div className="overflow-hidden flex items-center justify-center">
            <Image
              
              src="/image.png"
              alt="Profile Image"
              width={60}
              height={60}
              className="object-cover w-full h-full "
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Sunay</h1>
          <p className="text-2xl text-gray-400">Kulkarni</p>
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
