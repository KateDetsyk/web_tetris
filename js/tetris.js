let tetris = document.createElement('div');
tetris.classList.add('tetris');

//fill tetris with cell (make grid)
for (let i=1; i <= 140; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    tetris.appendChild(cell);
}

let playground = document.getElementsByClassName('playground')[0];
playground.appendChild(tetris);

//fill grid with values
let cell = document.getElementsByClassName('cell');
let index = 0;

for (let y = 16; y > 0; y--) {
    for (let x = 1; x < 9; x++) {
        cell[index].setAttribute('x', x);
        cell[index].setAttribute('y', y);
        index++;
    }
}

makeNewFigure();

gameInterval = setInterval(() => {
    move();
}, 400);
