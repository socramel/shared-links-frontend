import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { deleteLinkService, voteLinkService } from "../services";

export const Linka = ({ link, removeLink, voteLink }) => {
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

  const handleVote = async () => {
    try {
      await voteLinkService({ id: link.id, token });
      voteLink(link.id);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <p>{link.url}</p>
      <p>{link.title}</p>
      <p>{link.description}</p>

      <p>Votes: {link.votes}</p>

      {user && user.id !== link.user_id ? (
        <button onClick={handleVote}>Votar</button>
      ) : null}

      <p>
        <Link to={`/links/${link.id}`}>Link</Link> creado por{" "}
        <Link to={`/user/${link.user_id}`}>{link.name}</Link> el{" "}
        {new Date(link.created_at).toLocaleString()}
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
        </section>
      ) : null}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </article>
  );
};
