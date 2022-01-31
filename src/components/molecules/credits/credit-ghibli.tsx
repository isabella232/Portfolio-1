import Calcifer from "@/components/atoms/ghibli/calcifer";
import Kodama from "@/components/atoms/ghibli/kodama";
import NoFace from "@/components/atoms/ghibli/noface";
import SootBall from "@/components/atoms/ghibli/sootball";
import YuBird from "@/components/atoms/ghibli/yubird";
import React from "react";

const CreditGhibli = () => {
  return (
    <>
      <p className="text-3xl text-center font-semibold">
        Credits{" "}
        <a href="https://freefrontend.com/css-ghibli-characters/">Ghibli</a>
      </p>
      <div className="ghibli my-2 flex flex-col md:flex-row items-center justify-evenly crystal-card">
        <div className="scale-50 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/MbXKWB">
              <Calcifer />
            </a>
          </div>
        </div>
        <div className="scale-50 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/AndreusCafe/pen/QWyvjXE">
              <Kodama />
            </a>
          </div>
        </div>
        <div className="scale-50 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/Vmxzpm">
              <NoFace />
            </a>
          </div>
        </div>
        <div className="scale-50 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/qqyZBZ">
              <SootBall />
            </a>
          </div>
        </div>
        <div className="scale-50 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/gLKmrg">
              <YuBird />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditGhibli;
