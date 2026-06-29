/**
 * EJERCICIO 5: Lista de tareas con filtro
 * 
 * Crea un componente TodoList con:
 * - Un input + botón para añadir tareas
 * - Cada tarea se puede marcar como completada (checkbox) o eliminar (botón ✕)
 * - 3 botones de filtro: "Todas", "Pendientes", "Completadas"
 * - Un contador: "3 tareas pendientes"
 * 
 * Estructura del estado de cada tarea:
 *   { id: 1, text: "Comprar leche", completed: false }
 * 
 * Pistas:
 * - Usa Date.now() para generar IDs únicos
 * - Para filtrar, guarda el filtro activo en un estado separado
 * - Usa .filter() para mostrar solo las tareas que correspondan al filtro
 * - Para marcar como completada, usa .map() para crear un nuevo array
 * - Para eliminar, usa .filter() para crear un nuevo array sin esa tarea
 * - No mutes el estado directamente, crea siempre arrays nuevos
 */

import {useState} from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");

  const addTask = (text) => {
    setTasks([...tasks, {id: Date.now(), text, completed: false}])
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  };

  const handleAddTask = () => {
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'completed') return t.completed;
    return !t.completed;
  });

  const pendingCount = tasks.filter(t => !t.completed).length;

  return (
    <div>
    <input 
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && text.trim() !== '') {
            handleAddTask()
          }
        }}
      />
      <button onClick={handleAddTask}>Agregar</button>
      <button onClick={() => setFilter('all')}>Todas</button>
      <button onClick={() => setFilter('completed')}>Completadas</button>
      <button onClick={() => setFilter('pending')}>Pendientes</button>
      <p>{pendingCount} tareas pendientes</p>
      <ul>
        {filteredTasks.map(t => (
          <li key={t.id}>
            <input 
              type="checkbox" 
              checked={t.completed} 
              onChange={() => toggleTask(t.id)} 
            />
            {t.text}
            <button onClick={() => removeTask(t.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );  
}
