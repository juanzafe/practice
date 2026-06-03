import {useEffect, useState} from 'react';

function Crono(){

    const [tiempo, setTiempo]= useState (0);
    const [corriendo, setCorriendo]= useState(false);

     useEffect(() => {
    if (!corriendo) return;

    const intervalo = setInterval(() => {
      setTiempo(t => t + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [corriendo]);

   


    


    return
    <div>
           <h1> {tiempo} segundos </h1>
    <button onClick={()=>setCorriendo(true)}>start</button>
    <button onClick={()=>setCorriendo(false)}>stop</button>
    <button onClick={()=>{setCorriendo(false);setTiempo(0)}}>reset</button>
    </div>
}