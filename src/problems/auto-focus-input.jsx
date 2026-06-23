/**
 * EJERCICIO 1: useRef - Auto Focus Input
 * 
 * Crea un componente con:
 * - Un input de texto que se enfoque automáticamente al montar el componente
 * - Un botón "Limpiar y enfocar" que borre el texto del input y lo vuelva a enfocar
 * - Un párrafo que muestre cuántas veces se ha hecho click en el botón (usa useState para esto)
 * 
 * Pistas:
 * - Usa useRef para guardar la referencia al input
 * - Usa useEffect para enfocar al montar
 * - El método para enfocar un input es .focus()
 * - El método para acceder al valor del ref es .current
 */
import {useRef, useEffect, useState} from 'react';


export default function AutoFocusInput() {
    const inputRef= useRef(null)
    const [counter, setCounter]= useState(0);
    useEffect(() => {
        console.log("useEffect se ejecutó!");
       inputRef.current.focus() }, [])


  return(
    <div>
      <input ref={inputRef}></input>
      <button onClick={() => {
        inputRef.current.value = "";
        inputRef.current.focus();
        setCounter(counter + 1);
    }}>

        limpiar y enfocar
      </button>
      <p>vecesclicadas={counter}</p>
    </div>
  )
}
