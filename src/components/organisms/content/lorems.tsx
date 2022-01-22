import Loader from "@/components/atoms/shared/loader";
import Lorem from "@/components/molecules/me/lorem";
import ILorem from "@/models/lorem";
import { LoremsCol } from "@/services/firebase";
import { getDocs } from "firebase/firestore";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const Lorems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lorems, setLorems] = useState<ILorem[]>([]);

  useEffect(() => {
    getLorems().then((data) => {
      setLorems(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container px-5 mx-auto "
    >
      {isLoading && <Loader />}
      {!isLoading &&
        lorems
          .sort((a, b) => a.Id - b.Id)
          .map(({ Id, head, body, icon }) => {
            let descriptionText = body.split(". ");
            return (
              <motion.div
                variants={item}
                className="flex items-center lg:w-3/5 mx-auto p-10 mb-10 sm:flex-row flex-col bg-gray-900/75 rounded-lg"
              >
                <Lorem Id={Id} h2={head} p={descriptionText} icon={icon} />
              </motion.div>
            );
          })}
    </motion.div>
  );
};

const getLorems = async () => {
  const loremsSnapshot = await getDocs(LoremsCol);
  let lorems: ILorem[] = [];
  loremsSnapshot.docs.forEach((loremDoc) => {
    lorems.push(loremDoc.data());
  });
  return lorems;
};

export default Lorems;
