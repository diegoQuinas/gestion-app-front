import React from "react";

const Editing = (props) => {
  function handleClick(e) {
    props.onClick(e);
  }

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
          <input type="text" value={props.jaula?.owner} />
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
        <button onClick={handleClick}>Guardar</button>
      </div>
    </div>
  );
};

export default Editing;
