export function isArmstrongNumber(number: bigint): boolean {  
  const splitedNumber: Array<string> = String(number).split('');
  const power = splitedNumber.length;  
  const armstrong: bigint = splitedNumber.reduce((sum, n) => BigInt(n) ** BigInt(power) + BigInt(sum), BigInt(0));
  return number == armstrong;
}