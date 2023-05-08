import React from "react";
import { useNavigate } from "react-router-dom";

const NuevaEmpresa = () => {
  const navigate = useNavigate();
  const menu = () => {
    navigate("/menu", { replace: false });
  };
  const distribucion = () => {
    navigate("/distribucion", { state: { isPlacing: true } });
  };
  return (
    <div>
      <div className="container">
        <div>
          RUT
          <input type="text" />
        </div>
        <div>
          Razón social
          <input type="text" />
        </div>
        <div>
          Nombre fantasía
          <input type="text" />
        </div>
        <div>
          Titular
          <input type="text" />
        </div>
        <div>
          Teléfono
          <input type="text" />
        </div>
        <div>
          Dirección
          <input type="text" />
        </div>
        <div>
          Seleccionar estado actual
          <select name="estado">
            <option value="reservado">Reservado</option>
            <option value="alquilado">Alquilado</option>
          </select>
        </div>
        <div>
          Rubro
          <input type="text" />
        </div>
        <button onClick={distribucion}>Crear</button>
        <button onClick={menu}>Volver</button>
      </div>
    </div>
  );
};

export default NuevaEmpresa;
