import React, { MouseEvent } from "react";
import { GiJapan } from "react-icons/gi";
import Load from "./game";
// import {
//   ContextMenuTrigger,
//   ContextMenu,
//   ContextMenuItem,
// } from "rctx-contextmenu";

const Settings = () => {
  const isHChecked = true;
  const isKChecked = true;
  return (
    <div id="settings" className="modal">
      <div className="modal-content">
        <label className="opacity-label" htmlFor="opacity">
          Opacity :{" "}
        </label>
        <div id="opacity" className="opacity">
          <Button Id="25" />
          <Button Id="50" />
          <Button Id="75" />
          <Button Id="100" />
        </div>
        <div className="mode">
          <label htmlFor="hiragana-switcher">Hiragana (ひらがな) : </label>
          <Checkbox Id="hiragana-switcher" checked={isHChecked} />
          <label htmlFor="katakana-switcher">Katakana (カタカナ) : </label>
          <Checkbox Id="katakana-switcher" checked={isKChecked} />
        </div>
      </div>
    </div>
  );
};

export interface CheckboxProps {
  Id: string;
  checked: boolean;
}
const Checkbox = ({ Id, checked }: CheckboxProps) => {
  return (
    <div className="switch_box">
      <div className="input_wrapper">
        <input
          disabled
          type="checkbox"
          className="switch_4"
          id={Id}
          defaultChecked={true}
          checked={checked}
        />
        <svg
          className="is_checked"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 426.67 426.67"
        >
          <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
        </svg>
        <svg
          className="is_unchecked"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 212.982 212.982"
        >
          <path
            d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export interface ButtonProps {
  Id: string;
  hotkey?: string;
}
const Button = ({ Id, hotkey }: ButtonProps) => {
  var button = <div></div>;
  switch (hotkey) {
    case "up":
      button = (
        <div className="flat-button answer text-center">
          <div
            id={Id}
            className="up"
            onClick={(event: MouseEvent) => {
              updateScore(event);
            }}
          ></div>
        </div>
      );
      break;
    case "down":
      button = (
        <div className="flat-button answer text-center">
          <div
            id={Id}
            className="down"
            onClick={(event: MouseEvent) => {
              updateScore(event);
            }}
          ></div>
        </div>
      );
      break;
    case "right":
      button = (
        <div className="flat-button answer text-center">
          <div
            id={Id}
            className="right"
            onClick={(event: MouseEvent) => {
              updateScore(event);
            }}
          ></div>
        </div>
      );
      break;
    case "left":
      button = (
        <div className="flat-button answer text-center">
          <div
            id={Id}
            className="left"
            onClick={(event: MouseEvent) => {
              updateScore(event);
            }}
          ></div>
        </div>
      );
      break;
    default:
      button = (
        <div id={Id} className="flat-button text-center">
          {Id + "%"}
        </div>
      );
      break;
  }
  return button;
};

// const ContextMenuTest = () => {
//   return (
//     <ContextMenu
//       Id="context-menu"
//       appendTo=".main"
//       animation="pop"
//       hideOnLeave={false}
//       preventHideOnScroll={true}
//       preventHideOnResize={true}
//       className="context-menu"
//     >
//       <ContextMenuItem onClick={showModal}>
//         {SVG.settings}
//         Settings
//       </ContextMenuItem>
//       <ContextMenuItem>
//         {SVG.quit}
//         Quit
//       </ContextMenuItem>
//       {/* <Submenu>
//           <ContextMenuItem>Menu Item 4</ContextMenuItem>
//         </Submenu> */}
//     </ContextMenu>
//   );
// };

const TitleBar = () => {
  return (
    <div id="title-bar" className="title-bar">
      {/* Logo */}
      <div className="text-xl text-center p-1 text-indigo-600">
        <GiJapan />
      </div>
      {/* Title */}
      <span className="title">Kana Trainer</span>
      {/* Window Controls Buttons */}
      <div className="window-controls">
        {/* Minimize */}
        <button className="window-control window-minimize">
          <svg aria-hidden="true" version="1.1" width="10" height="10">
            <path d="M 0,5 10,5 10,6 0,6 Z"></path>
          </svg>
        </button>
        <button className="window-control window-close" disabled={true}>
          <svg aria-hidden="true" version="1.1" width="10" height="10">
            <path d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Kana = () => {
  return (
    <div className="kana_trainer">
      <TitleBar />
      <div className="main relative">
        {/* <ContextMenuTrigger Id="context-menu"> */}
        <div>
          <i id="btnSettings" className="material-icons">
            settings
          </i>
        </div>
        <h1 className="text-center" id="Kana"></h1>
        <div className="answers">
          <div className="flex">
            <Button Id="btnA" hotkey="up" />
            <Button Id="btnB" hotkey="down" />
          </div>
          <div className="flex">
            <Button Id="btnC" hotkey="left" />
            <Button Id="btnD" hotkey="right" />
          </div>
        </div>
        {/* </ContextMenuTrigger> */}
        <Settings />
      </div>
      {/* <ContextMenuTest /> */}
    </div>
  );
};
export default Kana;

var score = 0;
var totalQuestions = 0;
var validQuestions = 0;
const updateScore = (event: any) => {
  let kana = document.querySelector("#Kana");
  if (event && kana) {
    totalQuestions++;
    if (event.target.classList[2] === "win") {
      validQuestions++;
      kana.classList.add("win");
    } else {
      kana.classList.add("lose");
      event.target.classList.add("show");
    }
    document.querySelector(".flat-button.win")?.classList.add("show");
    score = Math.round((validQuestions / totalQuestions) * 100);
  }
  setTimeout(() => {
    let t = document.querySelector(".title");
    if (t && kana) {
      t.textContent = `Kana Trainer | Score : ${validQuestions}/${totalQuestions} | ${score}%`;
      kana.classList.remove("win");
      kana.classList.remove("lose");
      event.target.classList.remove("show");
      document.querySelector(".flat-button.win")?.classList.remove("show");
    }
    Load();
  }, 300);
};
