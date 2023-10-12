const board = document.querySelector('.board');
let gridSize = 100;
const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid);

addSquares();

function addSquares() {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('startColor');
        square.addEventListener('mouseover', () => {
            square.classList.add('newColor');
        })
        board.appendChild(square);
    }
}

function resetGrid() {
    for (let i = 0; i < gridSize; i++) {
        board.firstChild.remove();
    }
    addSquares();
}
