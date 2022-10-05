import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Linka } from "../components/Link";
import { AuthContext } from "../context/AuthContext";
import useLink from "../hooks/useLink";

export const LinkPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const { link, loading, error, voteLink } = useLink(id);

  if (loading) return <p>Cargando link...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Link posteado por {link.name}</h1>
      <Linka link={link} voteLink={voteLink} />
    </section>
  );
};
