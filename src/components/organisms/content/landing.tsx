import Hero from "@/components/molecules/index/hero";
import KeyPoint from "@/components/molecules/index/key-point";
import IndexSkills from "@/components/molecules/index/skills";
import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col sm:text-center">
      <Hero />
      <KeyPoint />
      <IndexSkills />
    </div>
  );
};

export default Landing;
