import Loader from "@/components/atoms/shared/loader";
import SmallSkillBadge from "@/components/atoms/skills/small-skill-badge";
import Skill from "@/components/molecules/skills/skill";
import ISkills from "@/models/skill";
import { SkillsCol } from "@/services/firebase";
import { getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
type Props = {
  setActiveBadges: React.Dispatch<React.SetStateAction<string>>;
};
const Skills = ({ setActiveBadges }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState<ISkills[]>([]);
  useEffect(() => {
    readSkills().then((data) => {
      setSkills(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex flex-col flex-wrap justify-around sm:flex-row">
          {skills
            .sort((a, b) => a.Id - b.Id)
            .map((skill) => {
              return (
                <Skill
                  setActiveSkill={setActiveBadges}
                  key={skill.Id}
                  Id={skill.element_Id}
                  text={skill.text}>
                  {skill.details.map((detail, index) => {
                    return <SmallSkillBadge key={index} text={detail} />;
                  })}
                </Skill>
              );
            })}
        </div>
      )}
    </>
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

export default Skills;
