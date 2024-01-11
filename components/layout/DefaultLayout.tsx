"use client";
import { Fragment, ReactNode } from "react";
import Button from "../core/Button";
import { useRouter } from "next/navigation";
import useNavigation from "@/lib/store/sectionNavigationStore";
import { GiWaterDrop } from "react-icons/gi";
import { useShallow } from "zustand/react/shallow";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { section, sections } = useNavigation(
    useShallow((state) => ({
      section: state.sectionId,
      sections: state.sections,
    }))
  );
  return (
    <Fragment>
      <main className="container mx-auto ">{children}</main>;
      <div className="fixed bottom-5 animate-bounce w-full flex justify-center">
        <Button
          onClick={() => {
            useNavigation.setState({ sectionId: section + 1 });
            router.push(`/#${sections[section + 1]}`);
          }}
          className="relative px-5 py-3 w-fit bg-[#043382] text-sm sm:text-base text-white rounded-full"
        >
          <p className="z-50">{sections[section + 1]}</p>
          <div className="text-[#043382] rotate-180 absolute top-7 left-1/2 z-0">
            <GiWaterDrop size={32} />
          </div>
        </Button>
      </div>
    </Fragment>
  );
}
