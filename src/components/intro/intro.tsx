import React, {FC} from 'react';
import style from './intro.module.css';

type Props = {
  startGame: () => void;
};

const Intro: FC<Props> = ({startGame}) => {
  return (
    <button type="button" className={style.button} onClick={startGame}>
      {' '}
      start
      <div className={style.line}>
        {' '}
        {/* <span className={style.ayes}>:-)</span>{' '} */}
      </div>
      <span className={style.food}>
        <img
          className={style.pizza}
          src="https://image.similarpng.com/very-thumbnail/2020/06/Cartoon-funny-pizza-royalty-free-PNG.png"
          alt="pizza"
        />{' '}
      </span>
    </button>
  );
};

export default Intro;
