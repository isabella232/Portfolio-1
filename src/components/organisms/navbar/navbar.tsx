import DarkModeButton from "@/components/atoms/navbar/darkmode";
import { Link } from "@/components/atoms/shared/link-on-click";
import HiddenMenu from "@/molecules/navbar/hidden-menu";
import NavBarListLinks from "@/molecules/navbar/navbar-list-links";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isHiddenMenuOpen, setIsHiddenMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="flex-shrink-0 z-30 text-white">
      {/* Menu*/}
      <nav className="px-4 flex justify-between bg-white dark:bg-gray-900">
        <Link classname="text-3xl font-bold leading-none md:hidden" href="/">
          {" "}
        </Link>
        <div className="hidden md:flex md:mx-auto items-center">
          <NavBarListLinks />
        </div>
        <div className="hidden md:flex">
          <DarkModeButton isDark={isDark} setIsDark={setIsDark} />
        </div>
        {/* Mobile Menu Button*/}
        <div className="md:hidden">
          <button
            onClick={() => setIsHiddenMenuOpen(true)}
            className="flex items-center text-gray-900 dark:text-white p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Hidden Menu*/}
      <AnimatePresence>
        {isHiddenMenuOpen && (
          <div>
            <HiddenMenu
              setIsHiddenMenuOpen={setIsHiddenMenuOpen}
              isDark={isDark}
              setIsDark={setIsDark}
            />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
