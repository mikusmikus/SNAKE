import React, {useState, useEffect} from 'react';
import * as _ from 'lodash';
import './App.css';
import 'flexboxgrid';
import {drawGrid, Grid, CellColor, Cell, Direction} from './drawGrid';

const GRID_SIZE = 22;
let grid: Grid[][];

const fillOneCell = (cell: Cell, color: CellColor) => {
  grid[cell.y][cell.x].cell = color;
};

const possibleKeypress: Direction[] = ['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'];

let head: Cell;
let food: Cell;
const tail: Cell[] = [];

// type AllColorCells = {
//   head: Cell;
//   food: Cell;
//   tail: Cell[];
// };

// const allColorCells:AllColorCells = {
//   head: {x: 2, y: 0},
//   food: {x: _.random(GRID_SIZE - 1), y: _.random(GRID_SIZE - 1)},
//   tail: [ {x: 0, y: 0},  {x: 1, y: 0}],
// };

const directions: Direction[] = ['ArrowRight'];
let keyPress = '';
let score = 0;

const App = () => {
  const [moveTime, setMoveTime] = useState(210);
  const [refreshGrid, setRefreshGrid] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [gameOptions, setGameOptions] = useState({start: false, gameOver: false});

  useEffect(() => {
    document.body.addEventListener('keydown', (e) => {
      console.log(directions);
      keyPressHandler(e.key);
    });
  }, []);

  useEffect(() => {
    if (!gameOptions.start) {
      return;
    }
    positionCheck();
    moveTail();
    moveHead(keyPress);
    const interval = setInterval(() => {
      setRefreshGrid(!refreshGrid);
    }, moveTime);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval);
  }, [refreshGrid]);

  // const findNextKeypress = () => {
  //   if (directions.length > 1) {
  //     // eslint-disable-next-line prefer-destructuring
  //     keyPress = directions[0];
  //     directions.splice(0, 1);
  //     return;
  //   }
  //   // eslint-disable-next-line prefer-destructuring
  //   keyPress = directions[0];
  // };
  const startGame = () => {
    setGameOptions({...gameOptions, start: true});
    grid = drawGrid(GRID_SIZE);
    keyPress = 'ArrowRight';
    head = {x: 2, y: 0};
    tail.splice(0, tail.length);
    tail.push({x: 0, y: 0});
    tail.push({x: 1, y: 0});
    food = {x: _.random(GRID_SIZE - 1), y: _.random(GRID_SIZE - 1)};
    fillOneCell(head, 'snake');
    tail.forEach((t) => fillOneCell(t, 'tail'));
    fillOneCell(food, 'food');
    setRefreshGrid(!refreshGrid);
  };

  const keyPressHandler = (pressedKey: string) => {
    possibleKeypress.forEach((allowedDirection) => {
      if (pressedKey === allowedDirection) {
        if (pressedKey === 'ArrowLeft' && keyPress === 'ArrowRight') {
          return;
        }
        if (pressedKey === 'ArrowRight' && keyPress === 'ArrowLeft') {
          return;
        }
        if (pressedKey === 'ArrowDown' && keyPress === 'ArrowUp') {
          return;
        }
        if (pressedKey === 'ArrowUp' && keyPress === 'ArrowDown') {
          return;
        }
        // directions.push(pressedKey);
        keyPress = pressedKey;
      }
    });
  };

  const positionCheck = () => {
    tail.forEach((t) => {
      if (t.x === head.x && t.y === head.y) {
        setGameOptions({start: false, gameOver: true});
      }
    });
  };


  const moveHead = (dir: string) => {
    switch (dir) {
      case 'ArrowRight':
        if (head.x === GRID_SIZE - 1) {
          head = {x: 0, y: head.y};
        } else {
          head = {x: head.x + 1, y: head.y};
        }
        fillOneCell({x: head.x, y: head.y}, 'snake');
        break;

      case 'ArrowDown':
        if (head.y === GRID_SIZE - 1) {
          head = {x: head.x, y: 0};
        } else {
          head = {x: head.x, y: head.y + 1};
        }
        fillOneCell({x: head.x, y: head.y}, 'snake');
        break;
      case 'ArrowLeft':
        if (head.x === 0) {
          head = {x: GRID_SIZE - 1, y: head.y};
        } else {
          head = {x: head.x - 1, y: head.y};
        }
        fillOneCell({x: head.x, y: head.y}, 'snake');
        break;
      case 'ArrowUp':
        if (head.y === 0) {
          head = {x: head.x, y: GRID_SIZE - 1};
        } else {
          head = {x: head.x, y: head.y - 1};
        }
        fillOneCell({x: head.x, y: head.y}, 'snake');
        break;
    }
  };

  const moveTail = () => {
    tail.push({x: head.x, y: head.y});
    fillOneCell(tail[0], 'empty');
    addNewFruit();
    tail.forEach((t) => fillOneCell(t, 'tail'));
  };

  const addNewFruit = () => {
    if (head.x === food.x && head.y === food.y) {
      if (score % 5 === 0) {
        if (moveTime > 20) {
          setMoveTime(moveTime - 10);
        }
      }
      score += 1;
      food = {x: _.random(GRID_SIZE - 1), y: _.random(GRID_SIZE - 1)};
      fillOneCell(food, 'food');
      showAnimation();
    } else {
      tail.shift();
    }
    tail.forEach((t) => {
      if (t.x === food.x && t.y === food.y) {
        food = {x: _.random(GRID_SIZE - 1), y: _.random(GRID_SIZE - 1)};
        fillOneCell(food, 'food');
      }
    });
  };

  const showAnimation = () => {
    if (score === 0 || score % 5) {
      return;
    }
    setAnimation(true);
    console.log('animation  On'); 
    setTimeout(() => {
      console.log('timeout');
      setAnimation(false);
    }, 4000);
  };

  return (
    <div>
      <div className="container center-xs">
        <h1 className="heading">
          {' '}
          {score > 0 && (
            <span className="score">
              {score}
              {score === 1 ? ' point' : ' points'}
            </span>
          )}
        </h1>
        <div className="row center-xs game-wrapper">
          <div className="col-xs-12">
            <div className="game">
              {!gameOptions.start ? (
                <button type="button" className="button" onClick={() => startGame()}>
                  {' '}
                  start
                </button>
              ) : (
                <>
                  {animation && (
                    <div className="animation">
                      <h1>LEVEL UP</h1>
                      <h1>SPEED +10</h1>
                    </div>
                  )}
                  {grid &&
                    grid.map((element) =>
                      element.map((el) => (
                        <span
                          className={el.cell}
                          key={el.id}
                          style={{width: `${800 / GRID_SIZE}px`, height: `${800 / GRID_SIZE}px`}}
                        >
                          {/* {el.id} */}
                        </span>
                      ))
                    )}
                </>
              )}
              {gameOptions.gameOver && (
                <button
                  type="button"
                  className="button button--gameOver"
                  onClick={() => {
                    setGameOptions({start: false, gameOver: false});
                    score = 0;
                  }}
                >
                  {' '}
                  <span className="score"> Congratz, you got {score} points! </span>
                  Play Again!
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
