document.addEventListener("keydown", event => {
  let coords = [];
  for (let index = 0; index < figureType.length; index++) {
    coords[index] = [figureType[index].getAttribute('x'), figureType[index].getAttribute('y')];  
  }

  switch (event.keyCode) {
    case DOWN:
      move();
      break;
    case LEFT:
      moveLeftRight(-1, coords);;
      break;
    case RIGHT:
      moveLeftRight(1, coords);
      break;   
    case UP:

      borderFlag = true;

      let movedFigure = [];
      for (let index = 0; index < coords.length; index++) {
        movedFigure[index] = document.querySelector(`[x = "${+coords[index][0] + figuresRotation[figureIndex][rotation-1][index][0]}"][y = "${+coords[index][1] + figuresRotation[figureIndex][rotation-1][index][1]}"]`);
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

          if (rotation < 4) {
            rotation++;
          } else {
            rotation = 1;
          }
      }
      break;    
    case PAUSE:
      pauseFlag = pause(pauseFlag);
      break;
    default:
      break;
  }
});


