import { useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PartidosP from "./views/PartidosP";
import CreatePartido from "./views/CreatePartido";
import EditPartido from "./views/EditPartido";
import Candidatos from "./views/Candidatos";
import CreateCandidato from "./views/CreateCandidato";
import EditCandidato from "./views/EditCandidato";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PartidosP />} />
        <Route path="/candidatos" element={<Candidatos />} />
        <Route path="/createPartido" element={<CreatePartido />} />
        <Route path="/createCandidato" element={<CreateCandidato />} />
        <Route path="/editPartido/:id" element={<EditPartido />} />
        <Route path="/editCandidato/:id" element={<EditCandidato />} />
      </Routes>
    </div>
  );
}

export default App;
