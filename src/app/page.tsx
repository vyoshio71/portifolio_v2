import Image from "next/image";

import AboutCard from "@/components/aboutCard";
import Footer from "@/components/footer";
import Header from "@/components/header";

import profile_v1 from "../../public/profile.png";
import ProjectCard from "../components/projectCard";
import ExperienceCard from "@/components/experienceCard";

export default function Home() {
  return (
    <div className="bg-slate-900 group/spotlight relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px at 0px 671px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <AboutCard />

            <ExperienceCard />

            <ProjectCard />

            <Footer />
          </main>
          <div>
            <a href="https://my-portifolio-vyt.vercel.app/" target="_blank">
              <button
                className="hover:text-teal-300 fixed bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:translate-y-2 focus-visible:text-teal-300"
                type="button"
              >
                <Image alt="profile" width={50} height={50} src={profile_v1} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
