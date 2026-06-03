import {useState} from 'react';

function TodoList (){

    const [tareas, setTareas]= useState([]);
    const [inputValue, setInputValue]= useState ("");

    function AddTodo(){
        const tarea={id:Date.now(), text:inputValue, done:false};
        setTareas([...tareas,tarea]);
        setInputValue("");
    }


return 
     <div>
      <input 
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={AddTarea}>Añadir</button>
      
      <ul>
        {tareas.map(t => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
}