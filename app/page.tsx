import HeroBanner from "@/components/_partials/HeroBanner";
import Image from "next/image";
export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-12 sm:px-18 md:px-24 lg:px-32 py-4">
      <HeroBanner />
    </section>
  );
}
