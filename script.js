const CONTAINER = '.container';
const GRID_SIZE = 16 * 16;

const containerElement = document.querySelector(CONTAINER);

for (let i = 0; i < GRID_SIZE; i++) {
  const squareDiv = document.createElement('div');
  squareDiv.classList.add('square');
  containerElement.append(squareDiv);
}
