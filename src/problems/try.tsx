import {useState, useEffect} from 'react'

type Usuario = { id: number; name: string; email: string };

export  function GetName(){
    const [datos, setDatos] = useState<Usuario[]>([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setDatos(data);
      setCargando(false);
    })
    .catch(() => {
      setError("Error al cargar");
      setCargando(false);
    });
}, []);

return (
    <div>
        <h1>Usuarios</h1>
        {cargando && <p>Cargando...</p>}
        {error && <p style={{color: "red"}}>{error}</p>}
        {datos && datos.map(usuario => (
            <div key={usuario.id}>
                <h3>{usuario.name}</h3>
                <p>Email: {usuario.email}</p>
            </div>
        ))}
    </div>
)


}