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
      return "-45%";
    case "low":
      return "-35%";
    case "lowest":
      return "-25%";
  }
};

const Liquid = ({ power }: Props) => {
  const liquid: Variants = {
    initial: {
      rotate: 0,
    },
    fillWave: {
      translateY: setPower(power),
      rotate: 360,
      transition: {
        ease: "easeOut",
        duration: 3,
      },
    },
    rotateWave5: {
      translateY: setPower(power),
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "linear",
      },
    },
    rotateWave10: {
      translateY: setPower(power),
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      },
    },
  };
  const [waveF, cycleWaveF] = useCycle("fillWave", "rotateWave5");
  const [waveB, cycleWaveB] = useCycle("fillWave", "rotateWave10");
  const handleAnimationComplete = () => {
    if (waveF === "fillWave" && waveB === "fillWave") {
      cycleWaveF();
      cycleWaveB();
    }
  };
  return (
    <div className="liquid">
      <motion.div
        onAnimationComplete={handleAnimationComplete}
        variants={liquid}
        initial={"initial"}
        animate={waveF}
        className="waveF"
      ></motion.div>
      <motion.div
        onAnimationComplete={handleAnimationComplete}
        variants={liquid}
        initial={"initial"}
        animate={waveB}
        className="waveB"
      ></motion.div>
    </div>
  );
};

export default Liquid;
