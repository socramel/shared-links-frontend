import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <p>
      Conectado como usuario: <Link to={`/user/${user.id}`}>{user.email}</Link>
      <button onClick={() => logout()}>LogOut</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to={"/register"}>Regístrate</Link>
      </li>
      <li>
        <Link to={"/login"}>LogIn</Link>
      </li>
    </ul>
  );
};
