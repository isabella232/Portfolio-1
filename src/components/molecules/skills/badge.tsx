import Liquid from "@/components/atoms/skills/liquid";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import tippy from "tippy.js";

type Props = {
  Id?: string;
  icon: React.ReactNode;
  color: string;
  power: "full" | "almost" | "half" | "low" | "lowest";
};
const variants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Badge = ({ Id, icon, color, power }: Props) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  useEffect(() => {
    tippy("#" + Id, {
      content: Id?.replace("b_", "").replace("_", " "),
    });
  }, []);
  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setIsBeingHovered(true)}
      onMouseLeave={() => setIsBeingHovered(power === "full" ? true : false)}
      exit={"exit"}
      className="mx-2 flex flex-col items-center"
      id={Id}>
      <article className={"badge " + color}>
        <div className="badgeRounded">{icon}</div>
        {!isBeingHovered && <Liquid power={power} />}
      </article>
      <span className="font-semibold text-indigo-500">
        LVL :{" "}
        <span className="text-gray-900 dark:text-white">
          {power.toUpperCase()}
        </span>{" "}
      </span>
    </motion.div>
  );
};

export default Badge;
