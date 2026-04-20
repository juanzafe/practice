import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemList from "./problems/item-list/ItemList";

function Home() {
  return (
    <div>
      <h1>Problems</h1>
      <ul>
        <li>
          <Link to="/item-list">Item List</Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item-list" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;