import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import NuevaEmpresa from "./NuevaEmpresa";
import Distribucion from "./Distribucion";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="nueva-empresa" element={<NuevaEmpresa />} />
        <Route path="editar-empresa" element={<Menu />} />
        <Route path="distribucion" element={<Distribucion />} />
      </Routes>
    </div>
  );
}

export default App;
