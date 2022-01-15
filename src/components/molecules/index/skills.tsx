import Link from "next/link";
import React from "react";

const IndexSkills = () => {
  return (
    <div className="text-lg text-indigo-500">
      <p className="mb-4 font-bold tracking-widest uppercase">Skills</p>
      <div className="flex flex-col md:flex-row items-start justify-around mb-10">
        <ul className="flex flex-col">
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            C#
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Javascript
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            React
          </li>
        </ul>
        <ul className="flex flex-col">
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            HTML & CSS
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Others Skills
          </li>
        </ul>
      </div>
      <div className="liquid-btn inline-flex rounded-lg">
        <Link href="/skills">
          <a className="rounded-lg">
            <span className="relative z-10 text-white">Read More</span>
            <div className="wave bg-indigo-700"></div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default IndexSkills;
