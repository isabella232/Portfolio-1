import Calcifer from "@/components/atoms/ghibli/calcifer";
import Kodama from "@/components/atoms/ghibli/kodama";
import NoFace from "@/components/atoms/ghibli/noface";
import SootBall from "@/components/atoms/ghibli/sootball";
import YuBird from "@/components/atoms/ghibli/yubird";
import Header from "@/components/atoms/shared/header";
import SVG from "@/components/atoms/shared/svg";
import Thanks from "@/components/atoms/shared/thanks";
import SmallSkillBadge from "@/components/atoms/skills/small-skill-badge";
import Card from "@/components/molecules/howto/card";
import Lorem from "@/components/molecules/me/lorem";
import Skill from "@/components/molecules/skills/skill";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { ImArrowDownLeft2, ImArrowDownRight2 } from "react-icons/im";
import { RiArticleLine } from "react-icons/ri";
import { SiFirebase, SiNextdotjs, SiReact } from "react-icons/si";
import tippy from "tippy.js";

const page: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const item: Variants = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const HowToPage = () => {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto text-white"
    >
      <Head>
        <title>Credits</title>
      </Head>
      <Header text="Credits" />
      <div className="m-8 p-8 border-gray-700 bg-gray-900/75 border hover:scale-105 duration-300 rounded-xl">
        <div className="flex flex-col items-center sm:flex-row text-8xl justify-evenly m-5 text-center">
          <div
            className="text-cyan-600 p-2"
            data-tippy-content="npx create-react-app my-app"
          >
            <a href="https://reactjs.org">
              <SiReact />
            </a>
            <p className="text-sm font-bold text-white mt-2">React</p>
          </div>
          <div
            className="text-black p-2"
            data-tippy-content="npx create-next-app nextjs-app"
          >
            <a href="https://nextjs.org">
              <SiNextdotjs />
            </a>
            <p className="text-sm font-bold text-white mt-2">Next</p>
          </div>
          <div className="text-yellow-400 p-2">
            <a href="https://firebase.google.com">
              <SiFirebase />
            </a>
            <p className="text-sm font-bold text-white mt-2">Firebase</p>
          </div>
        </div>
        <motion.span variants={item} className="text-white text-2xl">
          Made with{" "}
          <span className="inline-block text-xl">
            <FaHeart />
          </span>{" "}
          from France.
        </motion.span>
      </div>
      <p className="text-3xl text-center font-semibold">
        Credits <a href="https://tailwindcss.com">Tailwind</a>
      </p>
      <p className="text-center">
        <ImArrowDownRight2 className="h-7 w-7 inline-block" />
        <a
          className="text-xl font-semibold text-white hover:text-indigo-500
          "
          href="https://codepen.io/laijoann/pen/yLeKmVK"
        >
          <span> ( Codepen.io ) </span>
        </a>
        <ImArrowDownLeft2 className="h-7 w-7 inline-block" />
      </p>
      <div className="m-2">
        <motion.div
          variants={container}
          initial={"hidden"}
          animate={"show"}
          className="deck"
        >
          <Card
            Id={1}
            header={
              <Thanks
                source={{
                  href: "https://tailblocks.cc/",
                  text: "Tailblocks.cc",
                }}
                link={{ href: "/me", text: "Me" }}
              />
            }
          >
            <div className="flex items-center mx-auto sm:flex-row flex-col">
              <Lorem
                Id={0}
                h2="The Catalyzer"
                p={[
                  "Blue bottle rucifix vinyl post-ironic four dollar toast vegan taxidermy.",
                  "Gastropub indxgo juice poutine.",
                ]}
                icon={"scissors"}
              />
            </div>
          </Card>
          <Card
            Id={2}
            header={
              <Thanks
                source={{
                  href: "https://tailblocks.cc/",
                  text: "Tailblocks.cc",
                }}
                link={{ href: "/skills", text: "Skills" }}
              />
            }
          >
            <Skill Id="1" text="Authentic Cliche Forage" isHowTo={true}>
              <SmallSkillBadge text="First Link" />
              <SmallSkillBadge text="Second Link" />
            </Skill>
          </Card>
          <Card
            Id={3}
            header={
              <Thanks
                source={{
                  href: "https://tailblocks.cc/",
                  text: "Tailblocks.cc",
                }}
              />
            }
          >
            <footer className="text-gray-400 dark:bg-gray-800">
              <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                  © 2020 Tailblocks —
                  <a
                    href="https://twitter.com/knyttneve"
                    className="text-gray-500 ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @knyttneve
                  </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="text-gray-400">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-400">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </footer>
          </Card>
        </motion.div>
      </div>
      <div className="m-2">
        <div className="deck">
          <Card
            Id={1}
            header={
              <Thanks
                source={{
                  href: "https://tailwindcomponents.com/component/navbar-hamburger-menu",
                  text: "Tailwindcomponents.com",
                }}
              />
            }
          >
            <div className="p-2 relative group w-full">
              <nav className="relative p-4 flex justify-between items-center bg-white">
                <a className="text-3xl font-bold leading-none">{SVG.leaf}</a>
                <div className="">
                  <button className="navbar-burger flex items-center text-blue-600 p-3">
                    <svg
                      className="block h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Mobile menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </Card>
          <Card
            Id={2}
            header={
              <Thanks
                source={{
                  href: "https://kitwind.io/products/kometa/components/headers",
                  text: "Kitwind.io",
                }}
                link={{ href: "/", text: "Home" }}
              />
            }
          >
            <div className="max-w-xl ">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <a href="/" className="mb-6 sm:mx-auto">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                    <svg
                      className="w-10 h-10 text-teal-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </div>
                </a>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-teal-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7"></circle>
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                          width="52"
                          height="24"
                        ></rect>
                      </svg>
                      <span className="relative">The</span>
                    </span>
                    quick, brown fox jumps over a lazy dog
                  </h2>
                  <p className="text-base text-indigo-100 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque rem aperiam, eaque ipsa
                    quae.
                  </p>
                </div>
                <div>
                  <a className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-300 rounded shadow-md hover:text-deep-purple-900 bg-teal-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </Card>
          <Card
            Id={3}
            header={
              <Thanks
                source={{
                  href: "https://www.tailwind-kit.com/components/blog",
                  text: "Tailwind-kit.com",
                }}
                link={{ href: "/blogs", text: "Blogs" }}
              />
            }
          >
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <RiArticleLine className="text-9xl mx-auto" />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-indigo-500 text-md font-medium">Article</p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Supercharged !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supercar is here, 543 cv and 140 000$. This is best
                  racing GT about 7 years on...
                </p>
                <div className="flex flex-wrap justify-starts items-center mt-4">
                  <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Car
                  </div>
                  <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #Money
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <p className="text-3xl text-center font-semibold">
        Credits{" "}
        <a href="https://freefrontend.com/css-ghibli-characters/">Ghibli</a>
      </p>
      <div className="ghibli my-2 bg-gray-900/75 border border-gray-700 rounded flex flex-col md:flex-row items-center justify-evenly">
        <div className="scale-50 hover:scale-75 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/MbXKWB">
              <Calcifer />
            </a>
          </div>
        </div>
        <div className="scale-50 hover:scale-75 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/AndreusCafe/pen/QWyvjXE">
              <Kodama />
            </a>
          </div>
        </div>
        <div className="scale-50 hover:scale-75 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/Vmxzpm">
              <NoFace />
            </a>
          </div>
        </div>
        <div className="scale-50 hover:scale-75 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/qqyZBZ">
              <SootBall />
            </a>
          </div>
        </div>
        <div className="scale-50 hover:scale-75 transition duration-300">
          <div className="cursor-pointer">
            <a href="https://codepen.io/chilliconcode/pen/gLKmrg">
              <YuBird />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowToPage;
