export function makeValley(arr: number[]): number[] {
  const sorted = [...arr].sort((a, b) => a - b);
  const n = arr.length;
  const result = new Array(n);

  let left = Math.floor(n / 2) - 1;
  let right = Math.floor(n / 2);
for (let i = 0; i < n; i++) {
  const goLeft = n % 2 === 0
    ? i % 2 !== 0              
    : i % 2 === 0 && i > 0;   
  if (goLeft) {
    result[left--] = sorted[i];
  } else {
    result[right++] = sorted[i];
  }
}
  

  return result;
}
