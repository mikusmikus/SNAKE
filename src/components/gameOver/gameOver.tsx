import React, {FC, useRef, useEffect} from 'react';
import style from './gameOver.module.css';

type Props = {
  score: number;
  resultName: string;
  handleResults: () => void;
  endGameHandler: () => void;
  inputNameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const GameOver: FC<Props> = ({
  score,
  endGameHandler,
  handleResults,
  resultName,
  inputNameHandler,
}) => {
  const inputEl = useRef(null);

  useEffect(() => {
    // @ts-ignore
    inputEl.current.focus();
  }, []);
  return (
    <div className={style.gameOver}>
      <h1 className={style.heading}> Congratz, you got {score} points! </h1>
      <label htmlFor="inputName">
        <p className={style.label}>enter your name to save result!</p>
        <div className={style.inputWrapper}>
          <input
            ref={inputEl}
            className={style.input}
            id="inputValue"
            type="text"
            value={resultName}
            onChange={inputNameHandler}
          />
          <button onClick={() => handleResults()} type="button" className={style.saveButton}>
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
