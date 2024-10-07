const CONTAINER = '.container';
const GRID_SIZE = 16 * 16;

const containerElement = document.querySelector(CONTAINER);

for (let i = 0; i < GRID_SIZE; i++) {
  const squareDiv = document.createElement('div');
  squareDiv.classList.add('square');
  squareDiv.style.opacity = 1;
  containerElement.append(squareDiv);
}

const getRandomNumber = (min = 0, max = 255) => Math.floor(min + Math.random() * (max - min + 1));

const getRandomColor = () => {
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();

  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * 
 * @param {Event} e 
 */
const changeColor = (e) => {
  const {target} = e;

  // target.style.backgroundColor = getRandomColor();

  target.style.opacity = target.style.opacity - 0.1;
}

containerElement.addEventListener('mouseover', changeColor);
