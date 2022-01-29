import { motion } from "framer-motion";
import React from "react";

type Props = {
  text: string;
};
const Header = ({ text }: Props) => {
  return (
    <motion.h1 className="md:text-5xl text-4xl font-semibold dark:text-white text-gray-900  mt-10">
      {text}
    </motion.h1>
  );
};

export default Header;
