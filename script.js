const CONTAINER = '.container';
const GRID_SIZE = 16 * 16;

const containerElement = document.querySelector(CONTAINER);

for (let i = 0; i < GRID_SIZE; i++) {
  const squareDiv = document.createElement('div');
  squareDiv.classList.add('square');
  squareDiv.style.opacity = 1;
  containerElement.append(squareDiv);
}

/**
 * 
 * @param {Event} e 
 */
const changeColor = (e) => {
  const {target} = e;

  target.style.opacity = target.style.opacity - 0.1;
}

containerElement.addEventListener('mouseover', changeColor);
