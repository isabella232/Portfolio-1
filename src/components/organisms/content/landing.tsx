import Hero from "@/components/molecules/index/hero";
import KeyPoint from "@/components/molecules/index/key-point";
import IndexSkills from "@/components/molecules/index/skills";
import React from "react";
import { FaDesktop } from "react-icons/fa";
import { VscDeviceMobile } from "react-icons/vsc";

const Landing = () => {
  return (
    <div className="flex flex-col text-center p-2 sm:p-0">
      <Hero />

      <div className="flex flex-col space-y-4 md:flex-row justify-evenly md:space-x-8 md:space-y-0 items-center mb-8 text-white">
        <KeyPoint
          icon={<FaDesktop className="w-7 h-7" />}
          title={"Desktop App"}
          text={"t"}
        />
        <KeyPoint
          icon={<VscDeviceMobile className="w-7 h-7" />}
          title={"Web App"}
          text={"t"}
        />
      </div>

      <IndexSkills />
    </div>
  );
};

export default Landing;
