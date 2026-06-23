/**
 * EJERCICIO 3: Custom Hook - useToggle
 * 
 * Parte A: Crea un custom hook llamado useToggle
 * - Recibe un valor inicial booleano (por defecto false)
 * - Devuelve un array con: [valor, toggle, setTrue, setFalse]
 *   - valor: el estado actual (true/false)
 *   - toggle: función que cambia de true a false y viceversa
 *   - setTrue: función que pone el valor a true
 *   - setFalse: función que pone el valor a false
 * 
 * Parte B: Usa el hook en un componente ToggleDemo que tenga:
 * - Un botón "Toggle" que alterne el estado
 * - Un botón "Activar" que lo ponga a true
 * - Un botón "Desactivar" que lo ponga a false
 * - Un texto que muestre "Activo ✅" o "Inactivo ❌" según el estado
 * 
 * Pistas:
 * - Un custom hook es simplemente una función que empieza por "use"
 * - Dentro puedes usar useState y cualquier otro hook
 */

function useToggle(initialValue = false) {
  // Tu código aquí
}

export default function ToggleDemo() {
  // Tu código aquí - usa el hook useToggle
}
