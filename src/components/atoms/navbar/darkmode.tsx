import { motion } from "framer-motion";
import React from "react";

type Props = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkModeButton = ({ isDark, setIsDark }: Props) => {
  const handClick = () => {
    if (localStorage.theme === "light" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    }
  };
  return (
    <motion.div
      className="toggleWrapper"
      animate={{ scale: 0.6 }}
      transition={{ duration: 0 }}>
      <input
        type="checkbox"
        className="dn"
        id="dn"
        checked={isDark}
        onChange={handClick}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </motion.div>
  );
};

export default DarkModeButton;
