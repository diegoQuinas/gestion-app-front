import React from "react";

const Jaula = (props) => {
  const handleNotFree = (date) => {
    const now = new Date();
    if (date < now) return "red";
    else if (date.getTime() - 1000 * 3600 * 26 < now) {
      return "orange animated flash";
    } else return "grey";
  };
  const handleHover = (e) => {
    props.onMouseOver(e.target.textContent);
  };
  const handleClick = (e) => {
    props.onClick(e.target.textContent);
  };
  const printClass = () => {
    const retorno =
      props.estado !== "free"
        ? props.estado === "reserved"
          ? "yellow"
          : handleNotFree(props.fechaDeVencimiento)
        : "green";
    return "jaula " + retorno;
  };
  const notFree = (estado) => estado !== "free";
  return (
    <div>
      <button
        className={printClass()}
        disabled={props.isPlacing && notFree(props.estado)}
        onMouseOver={handleHover}
        onClick={handleClick}
      >
        {props.numero}
      </button>
    </div>
  );
};

export default Jaula;
