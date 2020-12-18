/*
 * @Date: 2020-12-17 19:42:22
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-17 20:36:47
 * @Description:
 */
export const minPathSumEy = grid => {
  if (!grid.length) return 0;

  const resGrid = Array.from(Array(grid.length), () =>
    Array(grid[0].length).fill(0)
  );

  for (let i = 0; i < resGrid.length; i++) {
    for (let j = 0; j < resGrid[0].length; j++) {
      const top = resGrid[!i ? 0 : i - 1][j];
      const left = resGrid[i][!j ? 0 : j - 1];

      resGrid[i][j] = !i
        ? left + grid[i][j]
        : !j
        ? top + grid[i][j]
        : Math.min(grid[i][j] + top, grid[i][j] + left);
    }
  }

  return resGrid[resGrid.length - 1][resGrid[0].length - 1];
};
