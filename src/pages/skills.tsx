import Header from "@/components/atoms/shared/header";
import Badges from "@/components/organisms/content/badges";
import Skills from "@/components/organisms/content/skills";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { useState } from "react";

const page: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const SkillsPage = () => {
  const [activeBages, setActiveBadges] = useState("");

  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto"
    >
      <Head>
        <title>Skills</title>
      </Head>
      <Header text="Skills" />
      <Badges activeBages={activeBages} />
      <Skills setActiveBadges={setActiveBadges} />
    </motion.section>
  );
};

export default SkillsPage;
