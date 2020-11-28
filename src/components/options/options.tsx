import React, {FC, useState} from 'react';
import style from './options.module.css';

const gridSize = [
  {name: 'small', size: 10},
  {name: 'medium', size: 15},
  {name: 'large', size: 22},
  {name: 'extra large', size: 30},
];

const speedLevel = [
  {name: 'slow', time: 350},
  {name: 'medium', time: 250},
  {name: 'fast', time: 180},
  {name: 'extra fast', time: 120},
];

type Props = {
  handleOptions: (event: React.FormEvent<HTMLFormElement>, a: number, b: number) => void;
  cancelOption: () => void;
  gameGridSize: number;
  gameMoveTime: number;
};

type SpeedLevel = {
  name: string;
  time: number;
};

type GridSize = {
  name: string;
  size: number;
};
const Options: FC<Props> = ({handleOptions, cancelOption, gameGridSize, gameMoveTime}) => {
  const [selectedSpeedLevel, setSelectedSpeedLevel] = useState(gameMoveTime);
  const [selectedGridSize, setSelectedGrizSize] = useState(gameGridSize);

  return (
    <div className={style.OptionsWrapper}>
      <form
        className={style.options}
        action="submit"
        onSubmit={(event) => handleOptions(event, selectedGridSize, selectedSpeedLevel)}
      >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="gridSize" className={style.label}>
          Select grid size
          <select
            className={style.dropDownList}
            id="gridSize"
            name="gridSize"
            value={selectedGridSize}
            onChange={(e) => setSelectedGrizSize(parseInt(e.target.value, 10))}
          >
            {gridSize.map((grid: GridSize) => (
              <option key={grid.name} value={grid.size}>
                {grid.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="gridSize" className={style.label}>
          Select game speed
          <select
            className={style.dropDownList}
            name="speedLevel"
            value={selectedSpeedLevel}
            onChange={(e) => setSelectedSpeedLevel(parseInt(e.target.value, 10))}
          >
            {speedLevel.map((level: SpeedLevel) => (
              <option key={level.name} value={level.time}>
                {level.name}
              </option>
            ))}
          </select>
        </label>
        <div className={style.buttonWrapper}>
          <button type="submit" className={style.button}>
            {' '}
            SAVE
          </button>
          <button type="button" className={style.button} onClick={cancelOption}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default Options;
