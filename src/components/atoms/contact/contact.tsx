import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  icon: React.ReactNode;
  href: string;
  text: string;
};

const item: Variants = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0, transition: { ease: "easeInOut" } },
};

const Contact = ({ icon, href, text }: Props) => {
  return (
    <motion.a
      variants={item}
      className="flex flex-col items-center m-2 sm:m-0 text-gray-900 dark:text-indigo-600"
      href={href}
    >
      <span className="text-lg font-bold">{text}</span>
      {icon}
    </motion.a>
  );
};

export default Contact;
