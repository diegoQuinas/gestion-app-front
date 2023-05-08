import React, { useState } from "react";
import Jaula from "./Jaula";
import "./Distribucion.css";
import Editing from "./Editing";
import { useLocation, useNavigate } from "react-router-dom";

const Distribucion = () => {
  const isPlacing = useLocation().state.isPlacing;
  const [editing, setEditing] = useState(null);
  const [info, setInfo] = useState("Pasar el mouse para ver info");
  const enVeinteDias = new Date();
  enVeinteDias.setTime(enVeinteDias.getTime() + 1000 * 3600 * 24 * 40);
  const maniana = new Date();
  maniana.setTime(maniana.getTime() + 1000 * 3600 * 24);
  const ayer = new Date();
  ayer.setTime(ayer.getTime() - 1000 * 3600 * 24);
  const navigate = useNavigate();

  const handleMouseHover = (numero) => {
    const jaula = data.find((elem) => elem.number === +numero);
    setInfo(
      `La jaula número ${numero} es de ${jaula.owner} se encuentra ${jaula.state} y su fecha de vencimiento es ${jaula.dateOfPayment} `
    );
  };

  const handleVolver = (e) => {
    navigate("/menu");
  };
  const handleClick = (numero) => {
    const jaula = data.find((elem) => elem.number === +numero);
    setEditing(jaula);
  };
  const handleSave = (e) => {
    setEditing(null);
  };

  const data = [
    { number: 1, state: "free", owner: null, dateOfPayment: enVeinteDias },
    {
      number: 2,
      state: "reserved",
      owner: "Pepito",
      dateOfPayment: enVeinteDias,
    },
    {
      number: 3,
      state: "occupated",
      owner: "Juanma",
      dateOfPayment: enVeinteDias,
    },
    { number: 4, state: "occupated", owner: "Ignacio", dateOfPayment: maniana },
    { number: 5, state: "occupated", owner: "Peretti", dateOfPayment: ayer },
  ];

  return (
    <div className="distribucion ">
      {isPlacing === true ? (
        <h1>Elige la jaula donde ubicar la nueva empresa</h1>
      ) : null}
      {data.map((jaula) => {
        return (
          <Jaula
            key={jaula.number}
            numero={jaula.number}
            estado={jaula.state}
            fechaDeVencimiento={jaula.dateOfPayment}
            isPlacing={isPlacing}
            onMouseOver={handleMouseHover}
            onClick={handleClick}
          />
        );
      })}
      <div>{info}</div>
      {editing !== null ? (
        <Editing jaula={editing} onClick={handleSave} />
      ) : null}
      <button onClick={handleVolver}>Volver</button>
    </div>
  );
};

export default Distribucion;
