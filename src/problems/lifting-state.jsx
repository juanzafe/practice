import { useState } from 'react';

/**
 * EJERCICIO 2: Lifting State - Conversor de temperatura
 * 
 * Crea 3 componentes:
 * 
 * 1. CelsiusInput: un input que muestra y permite editar grados Celsius
 * 2. FahrenheitInput: un input que muestra y permite editar grados Fahrenheit
 * 3. TemperatureConverter (el componente padre): contiene ambos inputs
 * 
 * Comportamiento:
 * - Cuando escribes en Celsius, Fahrenheit se actualiza automáticamente (y viceversa)
 * - El estado debe vivir en el PADRE (lifting state up)
 * - Los hijos reciben el valor y una función onChange por props
 * - Fórmulas: °F = °C × 9/5 + 32  |  °C = (°F - 32) × 5/9
 * - Muestra un mensaje debajo: "El agua hierve" si la temperatura >= 100°C
 * 
 * Pistas:
 * - El padre guarda UN solo estado: la temperatura en Celsius
 * - Cada hijo recibe: value (número) y onChange (función)
 * - FahrenheitInput convierte de/a Celsius al mostrar/enviar
 */

function CelsiusInput({ value, onChange }) {
  return(
    <input 
    value={value}
    onChange={(e)=>onChange(Number(e.target.value))}
    placeholder="Celsius"
    />
  )
}

function FahrenheitInput({ value, onChange }) {
  return(
    <input
    value={value}
    onChange={(e)=>onChange(Number(e.target.value))}
    placeholder="Fahrenheit"
    />
  )
}

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  
  return(
    <div>
      <CelsiusInput value={celsius} onChange={setCelsius} /> 
      
      <FahrenheitInput value={(celsius * 9/5) + 32} onChange={(e)=>setCelsius((e-32) * 5/9)} />
      
      {celsius >= 100 && <p>El agua hierve</p>}
    </div>
  )
}
