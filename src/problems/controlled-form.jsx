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

import {useState} from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    age: false
  });
  const errors = {
    name: formData.name.trim().length < 3 ? 'El nombre debe tener al menos 3 caracteres.' : '',
    email: !formData.email.includes('@') ? 'El email debe contener un @.' : '',
    age: (formData.age === '' || isNaN(formData.age) || Number(formData.age) < 18 || Number(formData.age) > 99)
      ? 'La edad debe ser un número entre 18 y 99.'
      : ''
  };
  const isFormValid = !errors.name && !errors.email && !errors.age;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(a => ({
      ...a,
      [name]: value
    }));
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(a => ({
      ...a,
      [name]: true
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert(`¡Registro exitoso!\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nEdad: ${formData.age}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nombre"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {touched.name && errors.name && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {touched.email && errors.email && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="age" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Edad</label>
        <input
          id="age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Edad"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {touched.age && errors.age && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.age}</p>}
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        style={{
          padding: '10px',
          backgroundColor: isFormValid ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          fontWeight: 'bold'
        }}
      >
        Registrar
      </button>
    </form>
  );
}
