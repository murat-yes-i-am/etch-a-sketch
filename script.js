const CONTAINER = '.container';
const DEFAULT_GRID_SIDE = 16;

const containerElement = document.querySelector(CONTAINER);

const createGrid = (side, parentElement) => {
  const size = side ** 2;

  for (let i = 0; i < size; i++) {
    const element = document.createElement('div');
    element.classList.add('square');
    element.style.opacity = 1;
    parentElement.append(element);
  }
}

createGrid(DEFAULT_GRID_SIDE, containerElement);

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
