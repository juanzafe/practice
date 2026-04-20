import { useState } from "react";

import "../../App.css";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  return (
    <>
      <nav className="h8k-navbar">
        <h2>Item List Manager</h2>
      </nav>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
