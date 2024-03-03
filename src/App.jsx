import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPages from "./pages/LoginPages.jsx"
import ArtikelHome from "./pages/Artikels/Artikel.jsx"
import ArtikelA from "./pages/Artikels/ArtikelVokal/ArtikelA.jsx"
import ArtikelI from "./pages/Artikels/ArtikelVokal/ArtikelI.jsx"
import ArtikelU from "./pages/Artikels/ArtikelVokal/ArtikelU.jsx"
import ArtikelEU from "./pages/Artikels/ArtikelVokal/ArtikelEU.jsx"
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<LoginPages />}></Route>
            <Route exact path="/artikel" element={<ArtikelHome />}></Route>
            <Route exact path="/artikel/a" element={<ArtikelA  />}></Route>
            <Route exact path="/artikel/i" element={<ArtikelI  />}></Route>
            <Route exact path="/artikel/u" element={<ArtikelU  />}></Route>
            <Route exact path="/artikel/eu" element={<ArtikelEU  />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
