import Calcifer from "@/atoms/ghibli/calcifer";
import Kodama from "@/atoms/ghibli/kodama";
import NoFace from "@/atoms/ghibli/noface";
import Robot from "@/atoms/ghibli/robot";
import SootBall from "@/atoms/ghibli/sootball";
import YuBird from "@/atoms/ghibli/yubird";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const GhibliTachi = [
  <Calcifer />,
  <Kodama />,
  <NoFace />,
  <SootBall />,
  <YuBird />,
  <Robot />,
];
const positions = ["self-center", "self-start", "self-end"];

const Ghibli = () => {
  const router = useRouter();
  const [ghibli, setGhibli] = useState<React.ReactNode>();
  const [isRobot, setIsRobot] = useState<boolean>(false);
  let listOfGhiblis: React.ReactNode[] = [];
  const generateList = () => {
    for (let i = 0; i < 6; i++) {
      listOfGhiblis.push(
        <div key={i} className={positions[i >= 3 ? i - 3 : i]}>
          {ghibli}
        </div>
      );
    }
  };
  generateList();
  const getRandomGhibli = () => {
    let rnd = Math.floor(Math.random() * GhibliTachi.length);
    rnd === GhibliTachi.length - 1 ? setIsRobot(true) : setIsRobot(false);
    return GhibliTachi[rnd];
  };
  useEffect(() => {
    setGhibli((prev) => {
      let nextGhibli = getRandomGhibli();
      while (prev === nextGhibli) {
        nextGhibli = getRandomGhibli();
      }
      return nextGhibli;
    });
  }, [router.asPath]);
  return (
    <>
      {ghibli && (
        <div
          className={
            (isRobot ? "robot " : "top-40 h-3/5 w-screen ") +
            "ghibli fixed hidden items-center justify-center space-x-48 sm:flex"
          }>
          {listOfGhiblis}
        </div>
      )}
    </>
  );
};

export default Ghibli;
