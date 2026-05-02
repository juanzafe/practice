export function squareRoot(radicand: number): number {
  for (let i = 1; i <= radicand / 2; i++) {
    if (i * i === radicand) {
      return i;
    }
  }

  return radicand === 1 ? 1 : 0;
}