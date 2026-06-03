import React, { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  const handlePlus = () => setCount((s) => s + 1);
  const handleLess = () => setCount((s) => s - 1);

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      {count}
      <button onClick={handleLess}>-</button>
    </div>
  );
}