import React, {useState, useEffect} from 'react';
import * as _ from 'lodash';
import './App.css';
import 'flexboxgrid';
import {drawGrid, Grid, CellColor, Cell} from './drawGrid';

const GRID_SIZE = 22;
let grid: Grid[][];

const fillOneCell = (cell: Cell, color: CellColor) => {
  grid[cell.y][cell.x].cell = color;
};

let head: Cell;
let food: Cell;
let keyPress = '';
const tail: Cell[] = [];

// fillOneCell(head, 'snake');
// tail.forEach((t) => fillOneCell(t, 'tail'));
// fillOneCell(food, 'food');

const App = () => {
  // const [head, setHead] = useState<Cell>({x: 2, y: 0});
  // const [food, setFood] = useState<Cell>({x: _.random(9), y: _.random(9)});
  // const [tail, setTail] = useState<Cell[]>([
  //   {x: 0, y: 0},
  //   {x: 1, y: 0},
  // ]);
  const [refreshGrid, setRefreshGrid] = useState(true);
  const [gameOptions, setGameOptions] = useState({start: false, gameOver: false});
  // const [keyPress, setKeyPress] = useState('');
  // const [direction, setDirection] = useState<Direction>('ArrowRight');

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

  useEffect(() => {
    document.body.addEventListener('keydown', (e) => {
      keyPress = e.key;
    });
  }, []);

  useEffect(() => {
    if (!gameOptions.start) {
      return;
    }
    positionCheck();
    addNewFruit();
    moveTail();
    moveHead(keyPress);

    const interval = setInterval(() => {
      setRefreshGrid(!refreshGrid);
    }, 150);
    addNewFruit();
    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval);
  }, [refreshGrid]);

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
    if (head.x === food.x && head.y === food.y) {
      food = {x: _.random(GRID_SIZE - 1), y: _.random(GRID_SIZE - 1)};
      fillOneCell(food, 'food');
    } else {
      tail.shift();
    }
    tail.forEach((t) => fillOneCell(t, 'tail'));
  };

  const addNewFruit = () => {
    if (!food) {
      food = {x: _.random(GRID_SIZE - 1), y: _.random(GRID_SIZE - 1)};
      fillOneCell(food, 'food');
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading"> snake snake snake snake snake snake </h1>
        <div className="row center-xs game-wrapper">
          <div className="col-xs-12">
            <div className="game">
              {gameOptions.gameOver && (
                <button
                  type="button"
                  className="button button--gameOver"
                  onClick={() => {
                    setGameOptions({start: false, gameOver: false});
                  }}
                >
                  {' '}
                  game over!
                </button>
              )}
              {!gameOptions.start ? (
                <button type="button" className="button" onClick={() => startGame()}>
                  {' '}
                  start
                </button>
              ) : (
                <>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
