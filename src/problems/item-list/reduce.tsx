declare global {
  interface Array<T> {
    myReduce<U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U;
  }
}

Array.prototype.myReduce = function <T, U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U {

let acumulador;
let startIndex;

if (this.length === 0 && arguments.length < 2) {
  throw new TypeError('no initial value provided and array is empty')
}

if (arguments.length >= 2) {
  acumulador = initialValue;
  startIndex = 0;
} else {
  acumulador = this[0]
  startIndex = 1
}

for (let i = startIndex; i < this.length; i++) {
        if (!(i in this)) continue;
    acumulador = callbackFn(acumulador, this[i], i, this)
}
  return acumulador
};