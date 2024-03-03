import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPages from "./pages/LoginPages.jsx"
import ArtikelHome from "./pages/Artikels/Artikel.jsx"
import ArtikelA from "./pages/Artikels/ArtikelVokal/ArtikelA.jsx"
import ArtikelE from "./pages/Artikels/ArtikelVokal/ArtikelE.jsx"
import ArtikelP from "./pages/Artikels/ArtikelVokal/ArtikelP.jsx"


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
            <Route exact path="/artikel/e" element={<ArtikelE  />}></Route>
            <Route exact path="/artikel/p" element={<ArtikelP  />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
