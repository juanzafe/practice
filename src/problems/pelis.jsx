import {useState} from 'react';

export function BuscaPeli (){
    const [inputValue, setInputValue]= useState("")

    const peliculasFiltradas = peliculas.filter(p => 
  p.titulo.toLowerCase().includes(inputValue.toLowerCase())
);
 

    return (
    <div>
        <h1>que pelicula buscas?</h1>
        <input 
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}/>
        {peliculasFiltradas.length===0 && <p>no hay peliculas</p>}
        <ul>
  {peliculasFiltradas.map(p => (
    <li key={p.id}>{p.titulo} ({p.año})</li>
  ))}
</ul>
    </div>
    )
}


const peliculas = [
  { id: 1, titulo: "El Padrino", año: 1972 },
  { id: 2, titulo: "Pulp Fiction", año: 1994 },
  { id: 3, titulo: "El Señor de los Anillos", año: 2001 },
  { id: 4, titulo: "Interstellar", año: 2014 },
  { id: 5, titulo: "Matrix", año: 1999 },
  { id: 6, titulo: "Forrest Gump", año: 1994 },
  { id: 7, titulo: "El Club de la Lucha", año: 1999 },
  { id: 8, titulo: "Inception", año: 2010 },
];


