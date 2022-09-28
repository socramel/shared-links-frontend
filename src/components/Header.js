import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Auth } from "./Auth";

export const Header = () => {
  useContext(AuthContext)
  return (
    <header>
      <h1><Link to="/">Enlaces compartidos</Link></h1>

      <nav><Auth /></nav>
    </header>
  );
};
