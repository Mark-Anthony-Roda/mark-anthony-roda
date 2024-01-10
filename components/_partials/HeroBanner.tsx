"use client";

import Image from "next/image";
import Button from "../core/Button";
import profilePicture from "@/public/images/profile/profile.webp";
import { TypeAnimation } from "react-type-animation";
import { IoMdDownload } from "react-icons/io";
import { GiWaterDrop } from "react-icons/gi";

export default function HeroBanner() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen px-12 sm:px-18 md:px-24 lg:px-32 py-4">
      <div className="text-white w-full">
        <div className=" flex flex-col-reverse lg:flex-row justify-between gap-4">
          <div className="flex flex-col gap-8 place-self-center text-center lg:text-left w-full">
            <h1 className="flex flex-col gap-8 text-3xl md:text-6xl font-black tracking-[4px]">
              <p>{`Hello, I'm `}</p>
              <TypeAnimation
                sequence={["Mark Anthony", 2000, "Fullstack developer", 2000]}
                wrapper="span"
                speed={50}
                className="text-[#043382]"
                repeat={Infinity}
                preRenderFirstString={true}
              />
            </h1>

            <Button>
              <p>Download Resume</p>
              <IoMdDownload />
            </Button>
          </div>
          <div className="place-self-center">
            <div className="relative rounded-full bg-[#043382] w-[250px] h-[250px] lg:w-[410px] lg:h-[410px]">
              <div className="w-[97%] h-[97%] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image
                  src={profilePicture}
                  className="rounded-full "
                  placeholder="blur"
                  alt="Mark's image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 animate-bounce">
        <Button className="relative px-5 py-3 w-fit bg-[#043382] text-sm sm:text-base text-white rounded-full">
          <p className="z-50">About me</p>
          <div className="text-[#043382] rotate-180 absolute top-7 left-1/2 z-0">
            <GiWaterDrop size={32} />
          </div>
        </Button>
      </div>
    </section>
  );
}
