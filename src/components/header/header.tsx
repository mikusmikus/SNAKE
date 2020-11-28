import React, {FC} from 'react';
import style from './header.module.css';

type Props = {
  isGameStarted: boolean;
  headerScore: number;
  showGameOptions: () => void;
  stopGame: () => void;
};

const Header: FC<Props> = ({headerScore, showGameOptions, isGameStarted, stopGame}) => {
  return (
    <div className={style.buttonWrapper}>
      <div className={style.header}>
        <img
          src="https://www.iconarchive.com/download/i24292/martin-berube/animal/snake.ico"
          alt="image1"
          className={style.image}
        />
        {isGameStarted ? (
          <h1 className={style.heading}>
            {' '}
            {headerScore > 0 && (
              <span className={style.score}>
                {headerScore}
                {headerScore === 1 ? ' point' : ' points'}
              </span>
            )}
          </h1>
        ) : (
          <h1 className={style.heading}> THIS IS SNAKE GAME !</h1>
        )}

        <div className={style.buttonWrapper}>
          {isGameStarted ? (
            <>
              <button type="button" onClick={stopGame} className={style.button}>
                end game
              </button>
            </>
          ) : (
            <>
              {/* <button type="button">results</button> */}
              <button type="button" onClick={showGameOptions} className={style.button}>
                options
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
