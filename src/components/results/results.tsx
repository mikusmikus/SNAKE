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
        <h5 className={style.heading}>Results</h5>
        <table className={style.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>score</th>
              <th>speed level</th>
              <th>grid size</th>
            </tr>
          </thead>
          <tbody>
            {results.map(({id, name, score, speedLevel, gridSize}, index) => (
              <tr key={id} className={style.resultList}>
                <td>{index + 1}</td>
                <td>{name.substring(0, 12)}</td>
                <td>{score}</td>
                <td>{speedLevel}</td>
                <td>{gridSize}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className={style.button} onClick={cancelResults}>
          BACK TO GAME
        </button>
        <button type="button" className={style.button2} onClick={cancelResults}>
          X
        </button>
      </div>
    </div>
  );
};

export default Results;
