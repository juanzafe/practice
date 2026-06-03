import { useState } from "react";

type Task = { id: number; text: string; done: boolean };

function ToDoList(){
  const [tareas, setTareas]=useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro]=useState("todas")



  function AddTarea(){
    const tarea={ id: Date.now(), text: inputValue, done: false };
    setTareas([...tareas,tarea]);
    setInputValue("")
  }
  const tareasAMostrar = tareas.filter(t => {
  if (filtro === "todas") return true;
  if (filtro === "pendientes") return !t.done; 
  if (filtro === "finalizadas") return t.done;
});
  function toggleDone(id:number){
    setTareas(tareas.map(t=>
      t.id===id? {...t, done: !t.done}: t
    ))
  }
  function deleteTask(id:number){
    setTareas(tareas.filter(t=>
      t.id!==id
    ))
  }
  

  return (
    <div>
      <input 
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={AddTarea}>Añadir</button>
      
      <ul>
        {tareasAMostrar.map(t => (
          <li 
            key={t.id}
            onClick={()=>toggleDone(t.id)}
            onDoubleClick={()=>deleteTask(t.id)}
            style={{textDecoration: t.done ?"line-through":"none"}}>{t.text}
        </li>
        ))}
      </ul>
      <button onClick={() => setFiltro("todas")}>Todas</button>
      <button onClick={()=> setFiltro("pendientes")}>mostrar solo pendientes</button>
      <button onClick={()=> setFiltro("finalizadas")}>mostrar finalizadas</button>
    </div>
)


}


export default function App() {
    return (
        <div>
            <ToDoList />
        </div>
    )
}
