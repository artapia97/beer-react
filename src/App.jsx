import "./styles/App.css";
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Beer from "./Pages/Beer";
import Contacto from "./Pages/Contacto";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/beer/:id" element={<Beer />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default App;
