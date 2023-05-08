import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const nuevaEmpresa = () => {
    navigate("/nueva-empresa", { replace: false });
  };
  const distribucion = () => {
    navigate("/distribucion", { replace: true, state: { isPlacing: false } });
  };
  const modificarUsuario = () => {
    navigate("/modificar-usuario", { replace: true });
  };
  const cerrarSesion = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <button onClick={nuevaEmpresa}>Nueva empresa</button>
      <button onClick={distribucion}>Consultar distribución</button>
      <button onClick={modificarUsuario}>Modificar usuario</button>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
};

export default Menu;
