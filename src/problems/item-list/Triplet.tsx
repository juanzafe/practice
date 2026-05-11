export function maxTriSum(nums: number[]): number  {
  const tri= [...new Set(nums)].sort((a,b)=>b-a).slice(0, 3)
  return tri.reduce((acc, val) => acc + val, 0);
}
