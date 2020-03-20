function makeNewFigure () {
    rotation = 1;
    figureIndex = Math.round(Math.random()*(figures.length-1));

    figureType = [ document.querySelector(`[x = "${xInitial}"][y = "${yInitial}"]`) ];
    for (let i = 0; i < 3; i++) {
        figureType[i+1] = document.querySelector(`[x = "${xInitial + figures[figureIndex][i][0]}"][y = "${yInitial + figures[figureIndex][i][1]}"]`);
    }

    for (let i = 0; i < figureType.length; i++) {
        figureType[i].classList.add('falling');
        figureType[i].classList.add(colorsArr[figureIndex]);
    }   
}

function removeClassColor (square) {
    let color = 0;
    if (square.classList.contains('T')) {
        square.classList.remove('T');
        color = 'T';
    } else if (square.classList.contains('I')) {
        square.classList.remove('I');
        color = 'I';
    } else if (square.classList.contains('O')) {
        square.classList.remove('O');
        color = 'O';
    } else if (square.classList.contains('L')) {
        square.classList.remove('L');
        color = 'L';
    }
    return color;
}

function destroyRow() {  
    for (let i = 1; i < 13; i++) {
        let count = 0;
        for (let k = 1; k < 9; k++) {
            if (document.querySelector(`[x = "${k}"][y = "${i}"]`).classList.contains('static')) {
                count++;
                if (count == 8) {
                    for (let m = 1; m < 9; m++) {
                        document.querySelector(`[x = "${m}"][y = "${i}"]`).classList.remove('static');
                        removeClassColor(document.querySelector(`[x = "${m}"][y = "${i}"]`));
                    }

                    let set = document.querySelectorAll('.static');
                    let newSet = [];

                    let colorSet = [];

                    // let newSetIndex = 0;
                    for (let s = 0; s < set.length; s++) {
                        let setCoordinates = [set[s].getAttribute('x'), set[s].getAttribute('y')];
                        // let colNewSet;
                        if (setCoordinates[1] > i) {
                            set[s].classList.remove('static');
                            col4 = removeClassColor(set[s]);
                            colorSet.push(col4);
                            newSet.push(document.querySelector(`[x = "${setCoordinates[0]}"][y = "${setCoordinates[1]-1}"]`));
                        }
                    }

                    for (let a = 0; a < newSet.length; a++) {
                        newSet[a].classList.add('static');
                        newSet[a].classList.add(colorSet[a]);
                    }
                    i--;
                }
            }
        }
    }
}

function gameOver() {
    for (let n=1; n < 9; n++) {
        if (document.querySelector(`[x = "${n}"][y = "13"]`).classList.contains('static')){
            clearInterval(gameInterval);
            alert('Game Over!');
            break;
        }
    }
}

function move() {
    let moveFlag = true;

    var currentPosition = [];
    for (let i = 0; i < 4; i++) {
        currentPosition[i] = [figureType[i].getAttribute('x'), figureType[i].getAttribute('y')];
    }

    for (let i = 0; i <currentPosition.length; i++) {
        if (currentPosition[i][1] == 1 || document.querySelector(`[x = "${currentPosition[i][0]}"][y = "${currentPosition[i][1]-1}"]`).classList.contains('static')) {
            moveFlag = false;
            break;
        }
    }
    
    let color;
    if (moveFlag) {
        
        for (let i = 0; i <figureType.length; i++) {
            figureType[i].classList.remove('falling');
            color = removeClassColor(figureType[i]);
        }

        for (let i = 0; i < figureType.length; i++) {
            figureType[i] = document.querySelector(`[x = "${currentPosition[i][0]}"][y = "${currentPosition[i][1] - 1}"]`);
        }
  
        for (let i = 0; i <figureType.length; i++) {
            figureType[i].classList.add('falling');
            figureType[i].classList.add(color);
        }
    } else {
        for (let i = 0; i <figureType.length; i++) {
            figureType[i].classList.remove('falling');
            figureType[i].classList.add('static');
        }
       
        destroyRow();
        gameOver();
        makeNewFigure();
    }
}


function moveLeftRight(a, coords) {
    borderFlag = true;

    let movedFigure = [];
    for (let index = 0; index < coords.length; index++) {
      movedFigure[index] = document.querySelector(`[x = "${+coords[index][0] + a}"][y = "${coords[index][1]}"]`);
    }

    for (let i = 0; i < movedFigure.length; i++) {
        if (!movedFigure[i] || movedFigure[i].classList.contains('static') ||
        movedFigure[i].getAttribute('x') < 1 || movedFigure[i].getAttribute('x') > 8) {
            borderFlag = false;
        }
    }

    if (borderFlag == true) {
        let col;
        for (let i = 0; i <figureType.length; i++) {
            figureType[i].classList.remove('falling');
            col = removeClassColor(figureType[i]);
        }

        figureType = movedFigure;

        for(let i = 0; i < figureType.length; i++) {
            figureType[i].classList.add('falling');
            figureType[i].classList.add(col);
        }
    }
}

function pause(p) {
    if (p) {
        p = 0;
        clearInterval(gameInterval);
    } else {
        p = 1;  
        gameInterval = setInterval(() => {
            move();
        }, 400);
    }
    return p;
  }