import Link from "next/link";
import React from "react";

const IndexSkills = () => {
  return (
    <div className="text-lg text-white">
      <div className="liquid-btn inline-flex">
        <Link href="/skills">
          <a className="rounded-lg transition duration-300 focus:scale-90">
            <span className="relative z-10">Skills</span>
            <div className="wave bg-indigo-700"></div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default IndexSkills;
