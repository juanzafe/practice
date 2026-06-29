import { useState } from "react";

export default function App() {
  const [monto, setMonto] = useState("");
  const [tasa, setTasa] = useState("");
  const [años, setAños] = useState("");

  let mensual = 0;
  let total = 0;
  let interes = 0;

  // Hacemos el cálculo solo si los valores obligatorios son válidos
  if (monto > 0 && años > 0 && tasa >= 0) {
    const i = tasa / 12 / 100; // mensual decimal
    const n = años * 12; // mensualidad total

    if (i === 0) {
      mensual = monto / n;
    } else {
      const potencia = Math.pow(1 + i, n);
      mensual = (monto * i * potencia) / (potencia - 1);
    }
    total = mensual * n;
    interes = total - monto;
  }

  return (
    <div>
      <label>Monto del préstamo</label>
      <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
      
      <label>Tasa de interés</label>
      <input type="number" value={tasa} onChange={(e) => setTasa(e.target.value)} />
      
      <label>Años</label>
      <input type="number" value={años} onChange={(e) => setAños(e.target.value)} />

      <p>Pago mensual: {mensual.toFixed(2)}</p>
      <p>Monto total: {total.toFixed(2)}</p>
      <p>Total interés: {interes.toFixed(2)}</p>
    </div>
  );
}
