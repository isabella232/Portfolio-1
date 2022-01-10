import { motion, useCycle, Variants } from "framer-motion";
import React from "react";
type Props = {
  power: string;
};
const setPower = (power: string) => {
  switch (power) {
    case "full":
      return "-80%";
    case "almost":
      return "-60%";
    case "half":
      return "-40%";
    case "low":
      return "-30%";
    case "lowest":
      return "-20%";
  }
};

const Liquid = ({ power }: Props) => {
  const liquid: Variants = {
    initial: {
      rotate: 0,
    },
    fill: {
      translateY: setPower(power),
      rotate: [0, 45, 90, 180, 270, 360],
      transition: {
        delay: Math.random(),
        duration: 3,
        ease: "linear",
      },
    },
    rotate: {
      translateY: setPower(power),
      rotate: [0, 45, 90, 180, 270, 360],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  };
  const [animation, cycleAnimation] = useCycle("fill", "rotate");
  const handleAnimationComplete = () => {
    if (animation !== "rotate") {
      cycleAnimation();
    }
  };
  return (
    <motion.div
      variants={liquid}
      onAnimationComplete={handleAnimationComplete}
      initial={"initial"}
      animate={animation}
      className="liquid"
    ></motion.div>
  );
};

export default Liquid;
