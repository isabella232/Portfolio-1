import Header from "@/components/atoms/header";
import Badge from "@/components/molecules/skills/badge";
import Loader from "@/components/molecules/skills/loader";
import ISkills from "@/models/skills";
import SmallSkillBadge from "@/molecules/skills/small-skill-badge";
import Skill from "@/organisms/content/skill";
import { SkillsCol } from "@/services/firebase";
import { getDocs } from "firebase/firestore";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useState } from "react";
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
  SiMicrosoftsqlserver,
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

const badgeVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};
const variants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
const sortFunction = (a: ISkills, b: ISkills) => {
  return a.Id - b.Id;
};

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [activeSkill, setActiveSkill] = useState("");
  useEffect(() => {
    readSkills().then((data) => {
      setSkills(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <motion.section
      variants={variants}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto dark:text-gray-600 dark:bg-gray-900"
    >
      <Head>
        <title>Skills</title>
      </Head>
      <Header text="Skills" />
      <div className="h-40 max-h-max">
        {activeSkill === "Dotnet" && (
          <motion.div
            variants={badgeVariants}
            initial={"hidden"}
            animate={"show"}
            className="flex justify-center scale-50 md:scale-75 lg:scale-100"
          >
            <Badge
              icon={<SiDotnet className="text-5xl" />}
              color="violet"
              power={"full"}
              id={"b_Dotnet"}
            />
            <Badge
              icon={<SiCsharp className="text-5xl" />}
              color="violet_d"
              power={"full"}
              id={"b_CSharp"}
            />
            <Badge
              icon={<SiRider className="text-5xl" />}
              color="rider"
              power={"half"}
              id={"b_Rider"}
            />
            <Badge
              icon={<SiBlazor className="text-5xl" />}
              color="violet_d"
              power={"almost"}
              id={"b_Blazor"}
            />
            <Badge
              icon={<SiMongodb className="text-5xl" />}
              color="green"
              power={"half"}
              id={"b_Mongo"}
            />
            <Badge
              icon={<FaDocker className="text-5xl" />}
              color="sky"
              power={"low"}
              id={"b_Docker"}
            />
          </motion.div>
        )}
        {activeSkill === "JS" && (
          <motion.div
            variants={badgeVariants}
            initial={"hidden"}
            animate={"show"}
            className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
          >
            <Badge
              icon={<SiJavascript className="text-5xl" />}
              color="yellow"
              power={"full"}
            />
            <Badge
              icon={<SiTypescript className="text-5xl" />}
              color="blue"
              power={"half"}
            />
            <Badge
              icon={<FaNode className="text-5xl" />}
              color="nodejs"
              power={"almost"}
            />
            <Badge
              icon={<SiElectron className="text-5xl" />}
              color="electron"
              power={"almost"}
            />
            <Badge
              icon={<SiJquery className="text-5xl" />}
              color="blue"
              power={"half"}
            />
          </motion.div>
        )}
        {activeSkill === "React" && (
          <motion.div
            variants={badgeVariants}
            initial={"hidden"}
            animate={"show"}
            className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
          >
            <Badge
              icon={<SiReact className="text-5xl" />}
              color="cyan"
              power={"almost"}
            />
            <Badge
              icon={<SiNextdotjs className="text-5xl" />}
              color="black"
              power={"low"}
            />
            <Badge
              icon={<SiFramer className="text-5xl" />}
              color="framer"
              power={"low"}
            />
          </motion.div>
        )}
        {activeSkill === "HTML" && (
          <motion.div
            variants={badgeVariants}
            initial={"hidden"}
            animate={"show"}
            className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
          >
            <Badge
              icon={<SiHtml5 className="text-5xl" />}
              color="orange"
              power={"full"}
            />
            <Badge
              icon={<SiCss3 className="text-5xl" />}
              color="orange"
              power={"lowest"}
            />
            <Badge
              icon={<SiTailwindcss className="text-5xl" />}
              color="cyan"
              power={"full"}
            />
            <Badge
              icon={<SiBootstrap className="text-5xl" />}
              color="violet"
              power={"almost"}
            />
            <Badge
              icon={<FaSass className="text-5xl" />}
              color="pink"
              power={"almost"}
            />
          </motion.div>
        )}
        {activeSkill === "Read" && (
          <motion.div
            variants={badgeVariants}
            initial={"hidden"}
            animate={"show"}
            className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
          >
            <Badge
              icon={<SiPython className="text-5xl" />}
              color="python"
              power={"almost"}
            />
            <Badge
              icon={<SiMicrosoftsqlserver className="text-5xl" />}
              color="red"
              power={"half"}
            />
            <Badge
              icon={<SiGo className="text-5xl" />}
              color="cyan"
              power={"low"}
            />
            <Badge
              icon={<SiCplusplus className="text-5xl" />}
              color="blue"
              power={"lowest"}
            />
            <Badge
              icon={<SiPhp className="text-5xl" />}
              color="php"
              power={"low"}
            />
          </motion.div>
        )}
        {activeSkill === "Other" && (
          <motion.div
            variants={badgeVariants}
            initial={"hidden"}
            animate={"show"}
            className="flex justify-center items-center scale-50 md:scale-75 lg:scale-100"
          >
            <Badge
              icon={<SiNeovim className="text-5xl" />}
              color="neovim"
              power={"low"}
            />
            <Badge
              icon={<SiGithub className="text-5xl" />}
              color="black"
              power={"half"}
            />
            <Badge
              icon={<IoTerminal className="text-5xl" />}
              color="black"
              power={"half"}
            />
            <Badge
              icon={<SiManjaro className="text-5xl" />}
              color="green"
              power={"half"}
            />
          </motion.div>
        )}
      </div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex flex-col sm:flex-row flex-wrap justify-center">
          {skills
            .sort((a, b) => sortFunction(a, b))
            .map((skill) => {
              return (
                <Skill
                  setActiveSkill={setActiveSkill}
                  key={skill.Id}
                  id={skill.element_Id}
                  text={skill.text}
                >
                  {skill.details.map((detail, index) => {
                    return <SmallSkillBadge key={index} text={detail} />;
                  })}
                </Skill>
              );
            })}
        </div>
      )}
    </motion.section>
  );
};

const readSkills = async () => {
  const skillsSnapshot = await getDocs(SkillsCol);
  let skills: ISkills[] = [];
  skillsSnapshot.docs.forEach((skillDoc) => {
    skills.push(skillDoc.data());
  });
  return skills;
};

// const createSkills = async () => {
//   try {
//     SkillsData.map(async (data, index) => {
//       await addDoc(SkillsCol, data);
//       console.log("Added : " + index);
//     });
//   } catch (err) {}
// };

export default Skills;
