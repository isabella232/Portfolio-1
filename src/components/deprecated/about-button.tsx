import { Link } from "@/components/atoms/link-on-click";
import SVG from "@/components/atoms/svg";
import React, { useState } from "react";
import { VscFileCode } from "react-icons/vsc";

type Props = {
  route: string;
  href: string;
  text: string;
};
const AboutButton = ({ route, href, text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const setClose = () => {
    setIsOpen(false);
  };
  const setOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="relative inline-block text-gray-500">
      <button className="relative z-10 p-2 font-bold hover:bg-white border border-transparent rounded-md dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none flex items-center">
        {SVG.arrowDown} About
      </button>

      <div className={!isOpen ? "hidden" : undefined}>
        <ul className="absolute rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-base text-gray-700 font-bold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300 mt-4">
          <Link
            href="/me"
            classname="py-1 px-2 flex items-center cursor-pointer dark:hover:bg-gray-600/30"
          >
            <span className="mr-2 font-semibold">Me</span>
            <VscFileCode />
          </Link>

          <Link
            href={href}
            classname="py-1 px-2 flex items-center cursor-pointer dark:hover:bg-gray-600/30"
          >
            <span className="mr-2 font-semibold">Site</span>
            <VscFileCode />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AboutButton;
