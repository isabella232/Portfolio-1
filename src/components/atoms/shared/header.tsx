import { motion } from "framer-motion";
import React from "react";

type Props = {
  text: string;
};
const Header = ({ text }: Props) => {
  return (
    <motion.h1 className="mt-10 text-4xl font-semibold text-gray-900 dark:text-white  md:text-5xl">
      {text}
    </motion.h1>
  );
};

export default Header;
