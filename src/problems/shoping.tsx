import { useState } from "react";

const productos = [
  { id: 1, nombre: "Camiseta", precio: 19.99 },
  { id: 2, nombre: "Pantalón", precio: 49.99 },
  { id: 3, nombre: "Zapatillas", precio: 89.99 },
  { id: 4, nombre: "Gorra", precio: 14.99 },
];

export function Shopping() {
  const [carrito, setCarrito] = useState<typeof productos>([]);

  function handleAddItem(producto: typeof productos[0]) {
    setCarrito([...carrito, producto]);
  }

 function handleRemoveItem(id: number) {
  const index = carrito.findIndex(p => p.id === id);
  if (index > -1) {
    setCarrito(carrito.filter((_, i) => i !== index));
  }
}


  return (
  <div>
    <h1>Tienda</h1>
      {productos.map(p => (
  <div key={p.id}>
    <h3>{p.nombre}</h3>
    <p>${p.precio}</p>
    <button onClick={() => handleAddItem(p)}>Agregar al carrito</button>
  </div>
))}
    <h2>Carrito</h2>
     {carrito.map((p, index) => (
  <li key={index}>
    {p.nombre} - ${p.precio}
    <button onClick={() => handleRemoveItem(p.id)}>Eliminar</button>
  </li>
))}
    
    <p>Total: ${carrito.reduce((sum, p) => sum + p.precio, 0).toFixed(2)}</p>
  </div>
)
}