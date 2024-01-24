import useTheme from "@/lib/store/themeStore";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { useShallow } from "zustand/react/shallow";

export default function Socials() {
  const { theme, classTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      classTheme: state.class,
    }))
  );

  return (
    <section
      id="socials"
      className="w-full flex flex-col gap-6 justify-center items-center"
    >
      <h2
        className={`text-xl md:text-4xl font-bold tracking-[3px] uppercase`}
        style={{ color: classTheme[theme].textColor }}
      >
        Contact{" "}
        <span
          className={`tracking-[3px] font-bold`}
          style={{ color: classTheme[theme].textHightlight }}
        >
          me
        </span>
      </h2>

      <div className="flex gap-4">
        <div className="flex gap-2 text-red-500 items-center">
          <BiLogoGmail size={20} />
          <p
            className="text-xs"
            style={{ color: classTheme[theme]?.textColor }}
          >
            rodamarkanthony90@gmail.com
          </p>
        </div>

        <div className="flex gap-2 text-green-500 items-center">
          <FaPhoneAlt size={20} />
          <p
            className="text-xs"
            style={{ color: classTheme[theme]?.textColor }}
          >
            +639558543435
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Link
          href={"https://www.facebook.com/MarkSuperDuperGwapo/"}
          className="text-[#1877F2]"
        >
          <FaFacebook size={32} />
        </Link>

        <Link
          href={
            "https://www.linkedin.com/in/mark-anthony-roda-0427921b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          className="text-[#0077B5]"
        >
          <FaLinkedin size={32} />
        </Link>
      </div>
    </section>
  );
}
