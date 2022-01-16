import SVG from "@/components/atoms/shared/svg";
import React from "react";

const ThemeSwitcher = () => {
  const height = "w-6";
  const width = "h-6";
  return (
    <div className="flex items-center">
      <button
        data-theme="indigo"
        className={height + " " + width + " rounded-full bg-red-500 m-1"}
      ></button>
      <button
        data-theme="yellow"
        className={height + " " + width + " rounded-full bg-orange-500 m-1"}
      >
        <span className="inline-flex justify-center items-center">
          {SVG.SmallCheck}
        </span>
      </button>
      <button
        data-theme="red"
        className={height + " " + width + " rounded-full bg-amber-500 m-1"}
      ></button>
      <button
        data-theme="purple"
        className={height + " " + width + " rounded-full bg-yellow-500 m-1"}
      ></button>
      <button
        data-theme="pink"
        className={height + " " + width + " rounded-full bg-lime-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-green-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-emerald-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-teal-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-cyan-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-sky-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-blue-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-indigo-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-violet-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-purple-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-fuchsia-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={height + " " + width + " rounded-full bg-pink-500 m-1"}
      ></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " rounded-full bg-rose-500 m-1 is-active"
        }
      ></button>
    </div>
  );
};

export default ThemeSwitcher;
