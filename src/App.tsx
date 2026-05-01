import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemList from "./problems/item-list/ItemList";
import TrainingPage from "./training/pages/TrainingPage";

function Home() {
  return (
    <div style={{ maxWidth: 600, margin: "3rem auto", padding: "0 1rem" }}>
      <h1>Practice</h1>
      <ul>
        <li>
          <Link to="/training">🏋️ Frontend Interview Training</Link>
        </li>
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
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/item-list" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;