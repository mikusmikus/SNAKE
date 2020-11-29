import React from 'react';
import style from './startAnimation.module.css';

const StartAnimation = () => {
  return (
    <div className={style.animationWrapper}>
      <span className={style.animation}>
        <span className={style.firstWord}>Let's</span>
        <span className={style.secondWord}>GO!!!</span>
      </span>
    </div>
  );
};

export default StartAnimation;
