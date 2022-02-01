import SVG from "@/components/atoms/shared/svg";
import React from "react";

const ThemeSwitcher = () => {
  const height = "w-6";
  const width = "h-6";
  return (
    <div className="flex items-center">
      <button
        data-theme="indigo"
        className={
          height + " " + width + " m-1 rounded-full bg-red-500"
        }></button>
      <button
        data-theme="yellow"
        className={height + " " + width + " m-1 rounded-full bg-orange-500"}>
        <span className="inline-flex items-center justify-center">
          {SVG.SmallCheck}
        </span>
      </button>
      <button
        data-theme="red"
        className={
          height + " " + width + " m-1 rounded-full bg-amber-500"
        }></button>
      <button
        data-theme="purple"
        className={
          height + " " + width + " m-1 rounded-full bg-yellow-500"
        }></button>
      <button
        data-theme="pink"
        className={
          height + " " + width + " m-1 rounded-full bg-lime-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-green-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-emerald-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-teal-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-cyan-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-sky-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-blue-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-indigo-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-violet-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-purple-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-fuchsia-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " m-1 rounded-full bg-pink-500"
        }></button>
      <button
        data-theme="blue"
        className={
          height + " " + width + " is-active m-1 rounded-full bg-rose-500"
        }></button>
    </div>
  );
};

export default ThemeSwitcher;
