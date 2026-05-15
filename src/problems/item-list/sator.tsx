export function isSatorSquare(grid: string[][]): boolean {
  const N = grid.length;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {

      if (grid[i][j] !== grid[j][i]) return false;

      if (grid[i][j] !== grid[N - 1 - i][N - 1 - j]) return false;
    }
  }

  return true;
}