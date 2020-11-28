export type CellColor = 'empty' | 'snake' | 'food' | 'tail';
export type Direction = 'ArrowUp' | 'ArrowRight' | 'ArrowLeft' | 'ArrowDown';
export type Cell = {x: number; y: number};
export type Grid = {id: number; cell: CellColor};

export const drawGrid = (size: number): Grid[][] => {
  let gridArr: Grid[] = [];
  const gridArr2d: Grid[][] = [];
  let id = 1;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      gridArr.push({id, cell: 'empty'});
      id += 1;
    }
    gridArr2d.push(gridArr);
    gridArr = [];
  }
  return gridArr2d;
};

export const fillOneCellOnGrid = (cell: Cell, color: CellColor, grid: Grid[][]) => {
  const copyGrid = [...grid];
  copyGrid[cell.y][cell.x].cell = color;
  return copyGrid;
};


