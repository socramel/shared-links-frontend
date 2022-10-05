import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Auth } from "./Auth";

export const Header = () => {
  useContext(AuthContext);
  return (
    <header>
      <img
        src="https://static.thenounproject.com/png/764682-200.png"
        alt="Logo página Shared Links"
        width="50"
        height="50"
      />
      <h1>
        <Link to="/">Enlaces compartidos</Link>
      </h1>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};
