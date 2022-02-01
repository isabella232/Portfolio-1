import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SkillDetailsCard = ({ children }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      animate={"show"}
      className="crystal-card absolute z-40 mt-14 p-5">
      <h2 className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">
        Skill Details
      </h2>
      <nav className="-mb-1 flex flex-col items-start space-y-2 text-white">
        {children}
      </nav>
    </motion.div>
  );
};

export default SkillDetailsCard;
