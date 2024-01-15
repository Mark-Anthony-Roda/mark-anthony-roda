"use client";
import AboutMe from "@/components/sections/AboutMe";
import HeroBanner from "@/components/sections/HeroBanner";
import MyExperienceEducation from "@/components/sections/MyExperienceEducation";
import MySkills from "@/components/sections/MySkills";
import Socials from "@/components/sections/Socials";
export default function Home() {
  return (
    <div className="pb-[75px] md:pb-6 flex flex-col gap-6">
      <HeroBanner />

      <div className="flex flex-col gap-24">
        <AboutMe />

        <MySkills />

        <MyExperienceEducation />

        <Socials />
      </div>
    </div>
  );
}
