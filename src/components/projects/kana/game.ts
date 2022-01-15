import * as wanakana from "wanakana";
import Kana from "./kanas";

const btnArray = ["btnA", "btnB", "btnC", "btnD"];
var previousKana = "";

export default function Load() {
  setEventsListener();
  //* With rndValueArray() create an with 4 randoms kana
  var answerKanaArray = generateAnswersKana(Kana.Full);
  //* Set the kana on the page
  console.table(answerKanaArray);
  let t = document.getElementById("Kana");
  if (t) {
    t.textContent = HiraganaKatakana(answerKanaArray[0]);
  }
  //* Clone array to splice it
  let btnAnswer = [...btnArray];
  //* Index for
  var indexAnswer = 0;
  //* While cloned array isn't empty, loop
  while (btnAnswer.length !== 0) {
    //* With rndValueArray() get a rnd btn
    const rndElement = rndValueArray(btnAnswer);
    let element = document.getElementById(rndElement);
    if (element) {
      //* Remove answer class to avoid duplicate
      element.classList.remove("lose");
      element.classList.remove("win");
      //* Set the btn with a kana
      element.textContent = answerKanaArray[indexAnswer];
      //* Add answer class to first in array
      if (indexAnswer === 0) {
        element.classList.add("win");
      } else {
        element.classList.add("lose");
      }
      //* Increment array
      indexAnswer++;
      //* Remove a btn from the list(array)
      btnAnswer.splice(btnAnswer.indexOf(rndElement), 1);
    }
  }
}

function HiraganaKatakana(answer: string) {
  //* Create random number 0 or 1
  let r = Math.floor(Math.random() * 2);
  //* Mode HiragaKatakana
  // if (config.get("Hiragana") && config.get("Katakana")) {
  if (true) {
    if (r === 0) {
      return wanakana.toHiragana(answer);
    } else {
      return wanakana.toKatakana(answer);
    }
    //* Mode Hiragana only
  }
  // else if (config.get("Hiragana")) {
  //   return wanakana.toHiragana(answer);
  //   //* Mode Kanatakana only
  // } else if (config.get("Katakana")) {
  //   return wanakana.toKatakana(answer);
  // } else {
  //   return wanakana.toKatakana(answer);
  // }
}

function generateAnswersKana(KanaArray: string[]): string[] {
  let answerKanaArray = [
    rndValueArray(KanaArray),
    rndValueArray(KanaArray),
    rndValueArray(KanaArray),
    rndValueArray(KanaArray),
  ];
  let unique = [...new Set(answerKanaArray)];
  //* If answers are not unique OR Answer is the same as the previou
  if (unique.length !== 4 || previousKana === answerKanaArray[0]) {
    //* RE - generateAnswersKana
    return generateAnswersKana(KanaArray);
  }
  previousKana = answerKanaArray[0];
  return unique;
}

function rndValueArray(array: string[]) {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}

function setEventsListener() {
  let btnA = document.getElementById("btnA"),
    btnB = document.getElementById("btnB"),
    btnC = document.getElementById("btnC"),
    btnD = document.getElementById("btnD"),
    btnSettings = document.getElementById("btnSettings"),
    modal = document.getElementById("settings");
  if (btnA && btnB && btnC && btnD && btnSettings) {
    btnSettings.addEventListener("click", () => {
      if (modal) {
        modal.style.display = "block";
      }
    });

    // mousetrap.bind("up", () => btnA.click());
    // mousetrap.bind("down", () => btnB.click());
    // mousetrap.bind("left", () => btnC.click());
    // mousetrap.bind("right", () => btnD.click());
    window.addEventListener("click", (event) => {
      if (modal && event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}
