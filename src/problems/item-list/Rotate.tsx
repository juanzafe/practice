export function maxRot(n: number): number {
  const digits = n.toString().split("");
  let max = n;

  for (let i = 0; i < digits.length - 1; i++) {
    // Mantenemos fijos los primeros i dígitos.
    // Rotamos a la izquierda el tramo digits[i..end]:
    // el dígito en posición i pasa al final del tramo.
    const first = digits[i];             // primer dígito del tramo
    digits.splice(i, 1);                 // lo quitamos
    digits.push(first);                  // lo añadimos al final

    const current = Number(digits.join(""));
    if (current > max) max = current;
  }

  return max;
}
