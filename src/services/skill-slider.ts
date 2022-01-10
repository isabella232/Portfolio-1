//TODO : Only push items strictly below not all items below
export const getElementsBelow = (element: Element, query: string) => {
  const doms = document.querySelectorAll(query);

  let domsToArray = Array.from(doms);
  domsToArray.splice(domsToArray.indexOf(element), 1);

  const elementsBelow: Element[] = [];
  for (let index = 0; index < domsToArray.length; index++) {
    const current = domsToArray[index];
    const positionC = current.getBoundingClientRect();
    const positionE = element.getBoundingClientRect();
    if (positionC.x === positionE.x && positionC.y > positionE.y) {
      elementsBelow.push(current);
    }
  }

  return elementsBelow;
};
export const hideElementsBelow = (elements: Element[]) => {
  elements.forEach((e) => {
    e.classList.add("down");
    e.classList.remove("up");
  });
};
export const showElementsBelow = (elements: Element[]) => {
  elements.forEach((e) => {
    e.classList.add("up");
    e.classList.remove("down");
  });
};
