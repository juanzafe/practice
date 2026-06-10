import {useState} from 'react';



export function Register(){
    
    const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errores, setErrores] = useState({ nombre: "", email: "", password: "" });

    function validar(e: React.FormEvent) {
        e.preventDefault();
        const nuevosErrores = { nombre: "", email: "", password: "" };

        if (!nombre.trim()) {
            nuevosErrores.nombre = "El nombre es obligatorio";
        } else if (nombre.length < 3) {
            nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            nuevosErrores.email = "El email es obligatorio";
        } else if (!emailRegex.test(email)) {
            nuevosErrores.email = "El email no es válido";
        }

        if (!password.trim()) {
            nuevosErrores.password = "La contraseña es obligatoria";
        } else if (password.length < 6) {
            nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres";
        }

        setErrores(nuevosErrores);

        if (!nuevosErrores.nombre && !nuevosErrores.email && !nuevosErrores.password) {
            alert("¡Registro exitoso!");
            setNombre("");
            setEmail("");
            setPassword("");
        }
    }
    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={validar}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    {errores.nombre && <p style={{color: "red"}}>{errores.nombre}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errores.email && <p style={{color: "red"}}>{errores.email}</p>}
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errores.password && <p style={{color: "red"}}>{errores.password}</p>}
                </div>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}