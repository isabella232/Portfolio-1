import { motion, Variants } from "framer-motion";
import React from "react";
type Props = {
  icon: CallableFunction;
  color?: string | null;
  right?: boolean;
};

const variants: Variants = {
  hover: {
    scale: 1.3,
    rotateZ: 360,
  },
};

const BigIcon = ({ icon, color, right = false }: Props) => {
  const rightClasses = "sm:order-none order-first sm:ml-10";
  const leftClass = "sm:mr-10";
  let iconNode = icon();
  return (
    <motion.div
      whileHover="hover"
      whileTap="hover"
      variants={variants}
      className={
        "sm:w-32 sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-indigo-200 dark:bg-gray-800 flex-shrink-0 " +
        (right ? rightClasses : leftClass)
      }
    >
      <div className={"text-5xl sm:text-7xl " + color}>{iconNode}</div>
    </motion.div>
  );
};

export default BigIcon;
