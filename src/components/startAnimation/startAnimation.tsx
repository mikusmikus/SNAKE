import React from 'react';
import style from './startAnimation.module.css';

const StartAnimation = () => {
  return (
    <div className={style.animationWrapper}>
      <span className={style.animation}>
        <span style={{color: 'pink'}}>Let's</span>
        <span style={{color: 'red'}}>GO!!!</span>
      </span>
    </div>
  );
};

export default StartAnimation;
