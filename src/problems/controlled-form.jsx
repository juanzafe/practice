/**
 * EJERCICIO 4: Formulario controlado con validación
 * 
 * Crea un formulario de registro con:
 * - Input "Nombre" (mínimo 3 caracteres)
 * - Input "Email" (debe contener @)
 * - Input "Edad" (debe ser un número entre 18 y 99)
 * - Botón "Registrar" (deshabilitado si hay errores)
 * 
 * Comportamiento:
 * - Todos los inputs son controlados (su valor viene del estado)
 * - Debajo de cada input, muestra un mensaje de error en rojo si no es válido
 * - Los errores solo se muestran DESPUÉS de que el usuario haya tocado el campo (onBlur)
 * - Cuando el formulario es válido y se envía, muestra un alert con los datos
 * 
 * Pistas:
 * - Puedes usar un solo useState con un objeto para todos los campos
 * - Usa otro estado para rastrear qué campos han sido "tocados" (touched)
 * - El botón debe estar disabled={!formValido}
 * - Usa el evento onBlur para marcar un campo como "tocado"
 */

export default function RegistrationForm() {
  // Tu código aquí
}
