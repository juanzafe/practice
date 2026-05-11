export function openOrSenior(data: number[][]): string[] {
    return data.map(par => (par[0] >= 55 && par[1] > 7) ? "Senior" : "Open");
}