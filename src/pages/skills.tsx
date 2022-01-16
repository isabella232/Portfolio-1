import Header from "@/components/atoms/shared/header";
import Loader from "@/components/atoms/shared/loader";
import Badges from "@/components/organisms/content/badges";
import ISkills from "@/models/skill";
import SmallSkillBadge from "@/molecules/skills/small-skill-badge";
import Skill from "@/organisms/content/skill";
import { SkillsCol } from "@/services/firebase";
import { getDocs } from "firebase/firestore";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [activeBages, setActiveBadges] = useState("");
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
      className="container mx-auto"
    >
      <Head>
        <title>Skills</title>
      </Head>
      <Header text="Skills" />
      <div className="h-40 max-h-max my-8">
        <Badges activeBages={activeBages} />
      </div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex flex-col sm:flex-row flex-wrap justify-around">
          {skills
            .sort((a, b) => a.Id - b.Id)
            .map((skill) => {
              return (
                <Skill
                  setActiveSkill={setActiveBadges}
                  key={skill.Id}
                  Id={skill.element_Id}
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

export default SkillsPage;
