import React, {useState, useEffect} from 'react';
import * as _ from 'lodash';
import './App.css';
import 'flexboxgrid';
import {v4 as uuidv4} from 'uuid';
import {drawGrid, Grid, Cell, Direction, fillOneCellOnGrid} from './drawGrid';
import Intro from './components/intro/intro';
import Header from './components/header/header';
import Options, {possibleGridSize, possibleSpeedLevel} from './components/options/options';
import StartAnimation from './components/startAnimation/startAnimation';
import Results from './components/results/results';
import GameOver from './components/gameOver/gameOver';

let grid: Grid[][];
const possibleKeyPress: Direction[] = ['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'];

export type Result = {
  id: string;
  name: string;
  score: number;
  speedLevel: string;
  gridSize: string;
};

let head: Cell;
let food: Cell;
const tail: Cell[] = [];
const directions: Direction[] = ['ArrowRight'];
let score = 0;
let time = 0;

const App = () => {
  const [gridSize, setGridSize] = useState(possibleGridSize[1].size);
  const [moveTime, setMoveTime] = useState(possibleSpeedLevel[2].time);
  const [resultName, setResultName] = useState('');
  const [results, setResults] = useState<Result[]>([]);

  const [refreshGrid, setRefreshGrid] = useState(true);
  const [gameOptions, setGameOptions] = useState({
    start: false,
    gameOver: false,
    levelUpAnimation: false,
    introAnimation: false,
    options: false,
    results: false,
    startAnimation: false,
  });

  useEffect(() => {
    const storageSnakeResults = localStorage.getItem('snakeResults');
    storageSnakeResults && setResults(JSON.parse(storageSnakeResults));
    document.body.addEventListener('keydown', (e) => {
      keyPressHandler(e.key);
    });
  }, []);

  useEffect(() => {
    if (!gameOptions.start) {
      return;
    }
    findNextKeypress();
    positionCheck();
    moveTail();
    moveHead(directions[0]);
    const interval = setInterval(() => {
      setRefreshGrid(!refreshGrid);
    }, time);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval);
  }, [refreshGrid]);

  const startGame = () => {
    setGameOptions({...gameOptions, startAnimation: true, start: true});
    grid = drawGrid(gridSize);
    time = moveTime;
    setTimeout(() => {
      setGameOptions({...gameOptions, startAnimation: false, start: true});
      head = {x: 2, y: 0};
      tail.splice(0, tail.length);
      tail.push({x: 0, y: 0});
      tail.push({x: 1, y: 0});
      food = {x: _.random(gridSize - 1), y: _.random(gridSize - 1)};
      fillOneCellOnGrid(head, 'snake', grid);
      tail.forEach((t) => fillOneCellOnGrid(t, 'tail', grid));
      fillOneCellOnGrid(food, 'food', grid);
      directions.push('ArrowRight');
      setRefreshGrid(!refreshGrid);
    }, 3000);
  };

  const findNextKeypress = () => {
    if (directions.length > 1) {
      directions.splice(0, 1);
    }
  };

  const keyPressHandler = (pressedKey: string) => {
    possibleKeyPress.forEach((allowedDirection) => {
      if (pressedKey === allowedDirection) {
        if (pressedKey === 'ArrowLeft' && directions[0] === 'ArrowRight') {
          return;
        }
        if (pressedKey === 'ArrowRight' && directions[0] === 'ArrowLeft') {
          return;
        }
        if (pressedKey === 'ArrowDown' && directions[0] === 'ArrowUp') {
          return;
        }
        if (pressedKey === 'ArrowUp' && directions[0] === 'ArrowDown') {
          return;
        }
        directions.push(pressedKey);
      }
    });
  };

  const positionCheck = () => {
    tail.forEach((t) => {
      if (t.x === head.x && t.y === head.y) {
        setGameOptions({...gameOptions, start: false, gameOver: true});
      }
    });
  };

  const moveHead = (dir: string) => {
    switch (dir) {
      case 'ArrowRight':
        if (head.x === gridSize - 1) {
          head = {x: 0, y: head.y};
        } else {
          head = {x: head.x + 1, y: head.y};
        }

        fillOneCellOnGrid({x: head.x, y: head.y}, 'snake', grid);
        break;

      case 'ArrowDown':
        if (head.y === gridSize - 1) {
          head = {x: head.x, y: 0};
        } else {
          head = {x: head.x, y: head.y + 1};
        }

        fillOneCellOnGrid({x: head.x, y: head.y}, 'snake', grid);
        break;
      case 'ArrowLeft':
        if (head.x === 0) {
          head = {x: gridSize - 1, y: head.y};
        } else {
          head = {x: head.x - 1, y: head.y};
        }
        fillOneCellOnGrid({x: head.x, y: head.y}, 'snake', grid);
        break;
      case 'ArrowUp':
        if (head.y === 0) {
          head = {x: head.x, y: gridSize - 1};
        } else {
          head = {x: head.x, y: head.y - 1};
        }
        fillOneCellOnGrid({x: head.x, y: head.y}, 'snake', grid);
        break;
    }
  };

  const moveTail = () => {
    tail.push({x: head.x, y: head.y});
    fillOneCellOnGrid(tail[0], 'empty', grid);
    addNewFruit();
    tail.forEach((t) => fillOneCellOnGrid(t, 'tail', grid));
  };

  const addNewFruit = () => {
    if (head.x === food.x && head.y === food.y) {
      if (score % 10 === 0) {
        if (time > 50) {
          time -= 5;
        }
      }
      score += 1;
      food = {x: _.random(gridSize - 1), y: _.random(gridSize - 1)};
      fillOneCellOnGrid(food, 'food', grid);
    } else {
      tail.shift();
    }
    tail.forEach((t) => {
      if (t.x === food.x && t.y === food.y) {
        food = {x: _.random(gridSize - 1), y: _.random(gridSize - 1)};
        fillOneCellOnGrid(food, 'food', grid);
      }
    });
  };

  // const showAnimation = () => {
  //   if (score === 0 || score % 10) {
  //     return;
  //   }
  //   setGameOptions({...gameOptions, levelUpAnimation: true});
  //   // console.log('animation  On');
  //   setTimeout(() => {
  //     // console.log('timeout');
  //     setGameOptions({...gameOptions, levelUpAnimation: false});
  //   }, 4000);
  // };

  const handleOptions = (
    event: React.FormEvent<HTMLFormElement>,
    selectedGrid: number,
    selectedSpeed: number
  ) => {
    event.preventDefault();
    setGridSize(selectedGrid);
    setMoveTime(selectedSpeed);
    // moveTime = selectedSpeed;
    setGameOptions({...gameOptions, options: false});
  };

  const endGameHandler = () => {
    setGameOptions({...gameOptions, start: false, gameOver: false});
    score = 0;
    directions.splice(0, directions.length);
  };

  const handleResults = () => {
    const copyResults: Result[] = [...results];
    const speedLVL = possibleSpeedLevel.find((speed) => speed.time === moveTime);
    const selectedGridSize = possibleGridSize.find((gridGrid) => gridGrid.size === gridSize);
    const resultObj: Result = {
      id: uuidv4(),
      name: resultName,
      score,
      // @ts-ignore
      speedLevel: speedLVL.name,
      // @ts-ignore
      gridSize: selectedGridSize.name,
    };
    if (!resultName) {
      alert('enter your name to save result');
    }
    copyResults.push(resultObj);
    const sortedResults = copyResults.sort((a, b) => {
      return b.score - a.score;
    });
    localStorage.setItem('snakeResults', JSON.stringify(sortedResults));
    setResults(sortedResults);
    setResultName('');
    setGameOptions({...gameOptions, gameOver: false, start: false});
    score = 0;
    directions.splice(0, directions.length);
  };

  return (
    <div>
      <div className="container center-xs">
        <Header
          stopGame={() => endGameHandler()}
          headerScore={score}
          isGameStarted={gameOptions.start}
          showGameOptions={() => setGameOptions({...gameOptions, options: true})}
          showGameResults={() => setGameOptions({...gameOptions, results: true})}
        />
        <div className="row">
          <div className="col-xs-12">
            <div className="game">
              <Options
                activeOptions={gameOptions.options}
                gameMoveTime={moveTime}
                gameGridSize={gridSize}
                handleOptions={handleOptions}
                cancelOption={() => setGameOptions({...gameOptions, options: false})}
              />
              <Results
                activeResults={gameOptions.results}
                cancelResults={() => setGameOptions({...gameOptions, results: false})}
                results={results}
              />

              {!gameOptions.start ? (
                <Intro startGame={() => startGame()} />
              ) : (
                <>
                  {gameOptions.levelUpAnimation && (
                    <div className="animation">
                      <h1>LEVEL UP</h1>
                      <h1>SPEED +10</h1>
                    </div>
                  )}
                  {gameOptions.startAnimation && <StartAnimation />}
                  <div className="grid-wrapper">
                    {grid &&
                      grid.map((element) =>
                        element.map((el) => (
                          <span
                            className={el.cell}
                            key={el.id}
                            style={{width: `${800 / gridSize}px`, height: `${800 / gridSize}px`}}
                          />
                        ))
                      )}
                  </div>
                </>
              )}
              {gameOptions.gameOver && (
                <GameOver
                  endGameHandler={() => endGameHandler()}
                  score={score}
                  resultName={resultName}
                  inputNameHandler={(e) => setResultName(e.target.value)}
                  handleResults={handleResults}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
