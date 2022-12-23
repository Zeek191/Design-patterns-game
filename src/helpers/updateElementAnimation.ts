export function updateElementAnimation(
  Element: Element,
  text: string,
  interval?: number
) {
  let counter = 0;
  const splittedText = text.split("");

  const elementUpdateInterval = setInterval(() => {
    Element.innerHTML = Element.innerHTML + splittedText[counter];
    counter++;

    if (counter === splittedText.length) clearInterval(elementUpdateInterval);
  }, interval || 100);
}
