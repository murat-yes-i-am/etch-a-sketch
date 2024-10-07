const ROOT = ':root';
const CONTAINER = '.container';
const CHANGE_GRID_BUTTON = '.button.change-grid';
const DEFAULT_GRID_SIDE = 16;
const DEFAULT_SQUARE_COLOR = 'rgb(243, 243, 179)';

const root = document.querySelector(ROOT);
const changeGridButton = document.querySelector(CHANGE_GRID_BUTTON);
let containerElement = document.querySelector(CONTAINER);

const getRandomNumber = (min = 0, max = 255) => Math.floor(min + Math.random() * (max - min + 1));

const getRandomColor = () => {
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();

  return `rgb(${red}, ${green}, ${blue})`;
}

const changeColor = (e) => {
  const {target} = e;

  if (e.metaKey && !e.shiftKey) {
    target.style.backgroundColor = getRandomColor();
  }

  if (e.metaKey && e.shiftKey) {
    target.style.backgroundColor = DEFAULT_SQUARE_COLOR;
  }

  if (e.ctrlKey && !e.shiftKey) {
    target.style.opacity = target.style.opacity - 0.1;
  }

  if (e.ctrlKey && e.shiftKey) {
    target.style.opacity = +target.style.opacity + 0.1;
  }
}

const createGrid = (side, parentElement) => {
  const size = side ** 2;

  root.style.setProperty('--square-side', `calc(100% / ${side})`);

  for (let i = 0; i < size; i++) {
    const element = document.createElement('div');
    element.classList.add('square');
    element.style.opacity = 1;
    parentElement.append(element);
  }

  parentElement.addEventListener('mouseover', changeColor);
}

const changeGrid = () => {
  const side = parseInt(prompt('Enter the number of squares per side'));

  if (isNaN(side) || side < 1 || side > 100) {
    const message = 'Invalid side is entered';

    console.error(message);
    alert(message)

    return;
  }
  
  containerElement.remove();

  containerElement = document.createElement('div');
  containerElement.classList.add('container');
  createGrid(side, containerElement);

  document.body.append(containerElement);
}

createGrid(DEFAULT_GRID_SIDE, containerElement);

changeGridButton.addEventListener('click', changeGrid);
