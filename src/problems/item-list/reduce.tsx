/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {

let acumulador;
let startIndex;

if (arguments.length >= 2) {
  acumulador = initialValue;
  startIndex = 0;
} else {
  acumulador = this[0]
  startIndex = 1
}

for (let i = startIndex; i < this.length; i++) {
  acumulador = callbackFn(acumulador, this[i], i, this)
}
  return acumulador
};