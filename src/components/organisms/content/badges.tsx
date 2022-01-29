import Badge from "@/components/molecules/skills/badge";
import { motion, Variants } from "framer-motion";
import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaDocker, FaNode, FaSass } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import {
  SiBlazor,
  SiBootstrap,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiElectron,
  SiFramer,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiManjaro,
  SiMongodb,
  SiNeovim,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiRider,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
type Props = {
  activeBages: string;
};

const badgesContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};
const Badges = ({ activeBages }: Props) => {
  return (
    <div className="h-40 max-h-max my-8">
      {activeBages === "Dotnet" && (
        <motion.div
          variants={badgesContainer}
          initial={"hidden"}
          animate={"show"}
          className="flex justify-center scale-75 xl:scale-100"
        >
          <Badge
            icon={<SiDotnet className="text-5xl" />}
            color="violet"
            power={"full"}
            Id={"b_Dotnet"}
          />
          <Badge
            icon={<SiCsharp className="text-5xl" />}
            color="violet_d"
            power={"full"}
            Id={"b_C_Sharp"}
          />
          <Badge
            icon={<SiRider className="text-5xl" />}
            color="rider"
            power={"half"}
            Id={"b_Rider"}
          />

          <Badge
            icon={<SiBlazor className="text-5xl" />}
            color="violet_d"
            power={"almost"}
            Id={"b_Blazor"}
          />
          <Badge
            icon={<SiMongodb className="text-5xl" />}
            color="green"
            power={"half"}
            Id={"b_Mongo"}
          />
          <Badge
            icon={<FaDocker className="text-5xl" />}
            color="sky"
            power={"low"}
            Id={"b_Docker"}
          />
        </motion.div>
      )}
      {activeBages === "JS" && (
        <motion.div
          variants={badgesContainer}
          initial={"hidden"}
          animate={"show"}
          className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
        >
          <Badge
            icon={<SiJavascript className="text-5xl" />}
            color="yellow"
            power={"full"}
            Id={"b_JavaScript"}
          />
          <Badge
            icon={<SiTypescript className="text-5xl" />}
            color="blue"
            power={"half"}
            Id={"b_TypeScript"}
          />
          <Badge
            icon={<FaNode className="text-5xl" />}
            color="nodejs"
            power={"almost"}
            Id={"b_Node_JS"}
          />
          <Badge
            icon={<SiElectron className="text-5xl" />}
            color="electron"
            power={"almost"}
            Id={"b_Electron_JS"}
          />
          <Badge
            icon={<SiJquery className="text-5xl" />}
            color="blue"
            power={"half"}
            Id={"b_JQuery"}
          />
        </motion.div>
      )}
      {activeBages === "React" && (
        <motion.div
          variants={badgesContainer}
          initial={"hidden"}
          animate={"show"}
          className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
        >
          <Badge
            icon={<SiReact className="text-5xl" />}
            color="cyan"
            power={"almost"}
            Id={"b_React_JS"}
          />
          <Badge
            icon={<SiNextdotjs className="text-5xl" />}
            color="black"
            power={"half"}
            Id={"b_Next_JS"}
          />
          <Badge
            icon={<SiFramer className="text-5xl" />}
            color="framer"
            power={"half"}
            Id={"b_Framer_Motion"}
          />
        </motion.div>
      )}
      {activeBages === "HTML" && (
        <motion.div
          variants={badgesContainer}
          initial={"hidden"}
          animate={"show"}
          className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
        >
          <Badge
            icon={<SiHtml5 className="text-5xl" />}
            color="orange"
            power={"full"}
            Id={"b_HTML"}
          />
          <Badge
            icon={<SiCss3 className="text-5xl" />}
            color="blue"
            power={"lowest"}
            Id={"b_CSS"}
          />
          <Badge
            icon={<SiTailwindcss className="text-5xl" />}
            color="cyan"
            power={"full"}
            Id={"b_Tailwind"}
          />
          <Badge
            icon={<SiBootstrap className="text-5xl" />}
            color="violet"
            power={"almost"}
            Id={"b_Bootsrap"}
          />
          <Badge
            icon={<FaSass className="text-5xl" />}
            color="pink"
            power={"almost"}
            Id={"b_Scss"}
          />
        </motion.div>
      )}
      {activeBages === "Read" && (
        <motion.div
          variants={badgesContainer}
          initial={"hidden"}
          animate={"show"}
          className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
        >
          <Badge
            icon={<SiPython className="text-5xl" />}
            color="python"
            power={"almost"}
            Id={"b_Python"}
          />
          <Badge
            icon={<AiOutlineConsoleSql className="text-5xl" />}
            color="red"
            power={"half"}
            Id={"b_SQL"}
          />
          <Badge
            icon={<SiGo className="text-5xl" />}
            color="cyan"
            power={"low"}
            Id={"b_GoLang"}
          />
          <Badge
            icon={<SiCplusplus className="text-5xl" />}
            color="blue"
            power={"lowest"}
            Id={"b_Cpp"}
          />
          <Badge
            icon={<SiPhp className="text-5xl" />}
            color="php"
            power={"low"}
            Id={"b_PHP"}
          />
        </motion.div>
      )}
      {activeBages === "Other" && (
        <motion.div
          variants={badgesContainer}
          initial={"hidden"}
          animate={"show"}
          className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
        >
          <Badge
            icon={<SiNeovim className="text-5xl" />}
            color="neovim"
            power={"half"}
            Id={"b_NeoVim"}
          />
          <Badge
            icon={<SiGithub className="text-5xl" />}
            color="black"
            power={"almost"}
            Id={"b_GitHub"}
          />
          <Badge
            icon={<IoTerminal className="text-5xl" />}
            color="black"
            power={"half"}
            Id={"b_Fish_Shell"}
          />
          <Badge
            icon={<SiManjaro className="text-5xl" />}
            color="green"
            power={"half"}
            Id={"b_Manjaro"}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Badges;
