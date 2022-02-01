import Calcifer from "@/components/atoms/ghibli/calcifer";
import Kodama from "@/components/atoms/ghibli/kodama";
import NoFace from "@/components/atoms/ghibli/noface";
import SootBall from "@/components/atoms/ghibli/sootball";
import YuBird from "@/components/atoms/ghibli/yubird";
import React from "react";

const CreditGhibli = () => {
  return (
    <>
      <p className="text-center text-3xl font-semibold">
        Credits{" "}
        <a href="https://freefrontend.com/css-ghibli-characters/">Ghibli</a>
      </p>
      <div className="ghibli crystal-card my-2 flex flex-col items-center justify-evenly md:flex-row">
        <div className="scale-50">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/MbXKWB">
              <Calcifer />
            </a>
          </div>
        </div>
        <div className="scale-50">
          <div className="cursor-pointer">
            <a href="https://codepen.io/AndreusCafe/pen/QWyvjXE">
              <Kodama />
            </a>
          </div>
        </div>
        <div className="scale-50">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/Vmxzpm">
              <NoFace />
            </a>
          </div>
        </div>
        <div className="scale-50">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/gLKmrg">
              <YuBird />
            </a>
          </div>
        </div>
        <div className="hidden scale-50">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/qqyZBZ">
              <SootBall />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditGhibli;
