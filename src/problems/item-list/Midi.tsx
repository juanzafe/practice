// ─── DECODE ────────────────────────────────────────────────
// Convierte un array de bytes VLQ en un número entero.
//
// Cada byte aporta 7 bits de datos (los 7 bajos).
// El bit más alto (0x80) indica si hay más bytes.
//
// Ejemplo: [0x81, 0x00]
//   byte 0x81 → bits = 0000001, result = (0 << 7) | 1 = 1
//   byte 0x00 → bits = 0000000, result = (1 << 7) | 0 = 128  ← último byte
export function decode(data: number[]): number {
  let result = 0;

  for (const byte of data) {
    const bits = byte & 0x7F;        // extrae los 7 bits de datos
    result = (result << 7) | bits;   // desplaza 7 y añade los nuevos bits
    if ((byte & 0x80) === 0) {       // MSB = 0 → último byte
      return result;
    }
  }

  return result;
}

// ─── ENCODE ────────────────────────────────────────────────
// Convierte un entero en un array de bytes VLQ.
//
// Algoritmo:
//   1. Toma los 7 bits más bajos del número → primer grupo
//   2. Desplaza el número 7 bits a la derecha
//   3. Repite hasta que el número sea 0
//   4. El primer grupo generado es el byte FINAL (MSB = 0)
//      Los demás llevan MSB = 1 (indicador de continuación)
//   5. Los grupos se generaron al revés, hay que invertirlos
//
// Ejemplo: encode(128)
//   128 en binario: 10000000
//   grupo 1: 128 & 0x7F = 0000000, luego 128 >> 7 = 1
//   grupo 2:   1 & 0x7F = 0000001, luego   1 >> 7 = 0  → para
//   bytes (invertidos): [0000001 con MSB=1, 0000000 con MSB=0]
//                     = [0x81, 0x00]
export function encode(n: number): number[] {
  const bytes: number[] = [];

  // primer byte: los 7 bits más bajos, SIN bit de continuación
  bytes.push(n & 0x7F);
  n >>= 7; // desplaza 7 bits a la derecha

  // bytes siguientes: mientras queden bits
  while (n > 0) {
    bytes.push((n & 0x7F) | 0x80); // añade bit de continuación (MSB=1)
    n >>= 7;
  }

  // los generamos del último al primero, hay que invertir
  return bytes.reverse();
}
