import React, {FC} from 'react';
import style from './results.module.css';
import type {Result} from '../../App';

type Props = {
  results: Result[];
  cancelResults: () => void;
  activeResults: boolean;
};

const Results: FC<Props> = ({cancelResults, activeResults, results}) => {
  return (
    <div className={`${style.ResultsWrapper} ${activeResults && style.active}`}>
      <div className={style.results}>
        {results.map(({id, name, score, speedLevel, gridSize}) => (
          <div key={id} className={style.resultList}>
            <h1>{name} / {score} / {speedLevel} /{gridSize}</h1>
          </div>
        ))}
        <button type="button" className={style.button} onClick={cancelResults}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Results;
