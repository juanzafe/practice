export function seven(m: number): number[] {
  let steps = 0;

  while (m > 99) {
    const y = m % 10;              // último dígito
    const x = Math.floor(m / 10); // número sin el último dígito
    m = x - 2 * y;                // fórmula del enunciado
    steps++;
  }

  return [m, steps];
}
