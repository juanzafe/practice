export function wordValue(arr: string[]): number[] {
    return arr.map((str, i) => {
    const valor = str
      .split("")
      .filter(char => char !== " ")
      .reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);

    return valor * (i + 1);
})
};
