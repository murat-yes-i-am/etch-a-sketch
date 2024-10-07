const CONTAINER = '.container';
const CHANGE_GRID_BUTTON = '.button.change-grid';
const DEFAULT_GRID_SIDE = 16;

const changeGridButton = document.querySelector(CHANGE_GRID_BUTTON);
let containerElement = document.querySelector(CONTAINER);

const createGrid = (side, parentElement) => {
  const size = side ** 2;

  for (let i = 0; i < size; i++) {
    const element = document.createElement('div');
    element.classList.add('square');
    element.style.opacity = 1;
    parentElement.append(element);
  }
}

const changeGrid = () => {
  const side = parseInt(prompt('Enter the number of squares per side'));

  if (isNaN(side) || side < 1) {
    const message = 'Invalid side is entered';

    console.error(message);
    alert(message)

    return;
  }
  
  containerElement.remove();

  containerElement = document.createElement('div');
  containerElement.classList.add('container');
  createGrid(side, containerElement);

  document.body.prepend(containerElement);
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
changeGridButton.addEventListener('click', changeGrid);
