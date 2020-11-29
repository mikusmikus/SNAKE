import React, {useState, FC} from 'react';
import style from './gameOver.module.css';

type Props = {
  score: number;
  resultName:string;
  handleResults: () => void;
  endGameHandler: () => void;
  inputNameHandler:(e: React.ChangeEvent<HTMLInputElement>) => void;
};

const GameOver: FC<Props> = ({score, endGameHandler, handleResults, resultName, inputNameHandler}) => {
  return (
    <div className={style.gameOver}>
      <span className={style.score}> Congratz, you got {score} points! </span>
      <label htmlFor="inputName" className={style.label}>
        <p>enter your name to save result!</p>
        <div className={style.inputWrapper}>
          <input
            id="inputValue"
            type="text"
            value={resultName}
            onChange={inputNameHandler}
          />
          <button onClick={() => handleResults()} type="button">
            save
          </button>
        </div>
      </label>
      <button type="button" className={style.button} onClick={endGameHandler}>
        {' '}
        Play Again!
      </button>
    </div>
  );
};

export default GameOver;
