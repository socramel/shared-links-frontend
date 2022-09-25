import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <ul>
      <li>
        <Link to={"/login"}>login</Link>
      </li>
      <li>
        <Link to={"/register"}>regístrate</Link>
      </li>
    </ul>
  );
};
