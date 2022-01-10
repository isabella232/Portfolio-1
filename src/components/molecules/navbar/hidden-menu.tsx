import DarkModeButton from "@/components/atoms/darkmode";
import HiddenMenuLink from "@/components/atoms/hidden-menu-link";
import NavBarLinksData from "@/data/NavbarLinks";
import React from "react";

type Props = {
  setIsHiddenMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const HiddenMenu = ({ setIsHiddenMenuOpen, isDark, setIsDark }: Props) => {
  return (
    <div className="navbar-menu relative z-50">
      <div
        onClick={() => setIsHiddenMenuOpen(false)}
        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
      ></div>
      <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-blue-600 dark:bg-gray-800 border-r">
        <div className="flex items-center mb-8">
          <span className="mr-4 text-3xl font-bold leading-none text-white">
            Menu
          </span>
          <span className="mr-auto text-lg">
            <DarkModeButton isDark={isDark} setIsDark={setIsDark} />
          </span>
          <button onClick={() => setIsHiddenMenuOpen(false)}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            {NavBarLinksData.map((link) => {
              return (
                <HiddenMenuLink
                  href={link.href}
                  text={link.text}
                  onclick={() => setIsHiddenMenuOpen(false)}
                />
              );
            })}
          </ul>
        </div>
        <div className="mt-auto">
          <p className="my-4 text-center text-white">
            <span>Copyright © 2021</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default HiddenMenu;
