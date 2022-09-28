import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { deleteLinkService } from "../services";

export const Linka = ({ link, removeLink }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteLink = async (id) => {
    try {
      await deleteLinkService({ id, token });
      if (removeLink) {
        removeLink(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <p>{link.url}</p>
      <p>{link.title}</p>
      <p>{link.description}</p>

      <p>
        Link creado por <Link to={`/user/${link.user_id}`}>{link.name}</Link> el{" "}
        <Link to={`/links/${link.id}`}>
          {new Date(link.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === link.user_id ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("¿Está seguro de borrarlo?"))
                deleteLink(link.id);
            }}
          >
            Eliminar link
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
