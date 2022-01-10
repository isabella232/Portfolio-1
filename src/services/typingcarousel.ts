const carouselText: string[] = [
  "I'm a Developer",
  "I'm a Programmer",
  "I'm just a guy who knows how to code things",
];

export default function typingCarousel(
  element: HTMLHeadingElement | undefined
): void {
  if (element) carousel(carouselText, element);
}

async function typeSentence(
  sentence: string,
  eleRef: HTMLHeadingElement,
  delay = 100
) {
  let letters = sentence.split("");
  letters.unshift("‎");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    if (process.browser) {
      eleRef.insertAdjacentHTML("beforeend", letters[i]);
    }
    i++;
  }
  return;
}

async function deleteSentence(eleRef: HTMLHeadingElement) {
  const sentence = eleRef.innerHTML;
  const letters = sentence.split("");
  while (letters.length !== 1) {
    await waitForMs(100);
    letters.pop();
    eleRef.innerHTML = letters.join("");
  }
}

async function carousel(carouselList: string[], eleRef: HTMLHeadingElement) {
  var i = 0,
    numberOfLoop = 0;
  if (process.browser) {
    while (true) {
      //updateFontColor(eleRef, carouselList[i].color);
      await typeSentence(carouselList[i], eleRef);
      await waitForMs(2000);

      //Limit number of loop / Break this while(true) /  Should be done before deleteSentence
      numberOfLoop++;
      if (numberOfLoop >= 3) {
        break;
      }

      await deleteSentence(eleRef);
      await waitForMs(500);
      i++;
      if (i >= carouselList.length) {
        i = 0;
      }
    }
  }
}

function updateFontColor(eleRef: HTMLHeadingElement, color: string) {
  if (process.browser) {
    eleRef.style.color = color;
  }
}

function waitForMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
