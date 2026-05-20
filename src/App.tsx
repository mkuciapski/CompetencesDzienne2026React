import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Temp from "./views/TempView";
import Competences from "./views/CompetencesView";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Temp</Link> | <Link to="/competences">competences</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Temp />} />
        <Route path="/competences" element={<Competences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
