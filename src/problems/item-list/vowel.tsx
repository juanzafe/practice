export class Solution {
  static getCount(str: string): number {
    return str
      .split("")
      .filter(char => "aeiou".includes(char))
      .length;
  }
}