import LeftLorem from "@/components/molecules/me/left-lorem";
import RightLorem from "@/components/molecules/me/right-lorem";
import { motion, Variants } from "framer-motion";
import React, { useEffect } from "react";
import tippy from "tippy.js";
export interface Props {
  icon: CallableFunction;
  color?: string;
  h2: string;
  p: string[] | string;
  children?: React.ReactNode;
  id?: number;
}

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const Lorem = ({ id, h2, p, color, icon, children }: Props) => {
  let isEven = false;
  if (id) {
    isEven = id % 2 === 0;
  }
  if (typeof p === "string") {
    children = <p className="leading-relaxed dark:text-gray-400">{p}</p>;
  } else {
    children = p.map((p, index) => {
      return (
        <p
          id={"lorem-" + id + "-" + index}
          key={index}
          className="leading-relaxed dark:text-gray-400"
        >
          {p}
        </p>
      );
    });
  }
  useEffect(() => {
    if (id === 1) {
      tippy("#lorem-1-1", {
        content: "South Park S20.E01",
        placement: "left",
      });
    }
  }, []);
  return (
    <motion.div
      variants={item}
      className={
        "flex items-center lg:w-3/5 mx-auto pb-10 mb-10  sm:flex-row flex-col " +
        (id !== 6 ? "border-b border-gray-800" : "")
      }
    >
      {isEven ? (
        <RightLorem h2={h2} children={children} icon={icon} color={color} />
      ) : (
        <LeftLorem h2={h2} children={children} icon={icon} color={color} />
      )}
    </motion.div>
  );
};

export default Lorem;
