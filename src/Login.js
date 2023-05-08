import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const menu = () => {
    navigate("/menu");
  };
  return (
    <>
      <div className="logo">Logo</div>
      <div className="container">
        <p>Usuario</p>
        <input type="text" />
        <p>Contraseña</p>
        <input type="password" />
      </div>
      <div>
        <Link to="/crear-cuenta">Crear una nueva cuenta</Link>
      </div>
      <div>
        <button onClick={menu}>Entrar</button>
      </div>
    </>
  );
}

export default Login;
