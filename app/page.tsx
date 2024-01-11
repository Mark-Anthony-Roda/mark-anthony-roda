import AboutMe from "@/components/sections/AboutMe";
import HeroBanner from "@/components/sections/HeroBanner";
import Image from "next/image";
import { Fragment } from "react";
export default function Home() {
  return (
    <Fragment>
      <HeroBanner />

      <AboutMe />
    </Fragment>
  );
}
