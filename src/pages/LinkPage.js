import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Linka } from "../components/Link";
import useLink from "../hooks/useLink";

export const LinkPage = () => {
  const { id } = useParams();

  const { link, loading, error } = useLink(id);

  if (loading) return <p>Cargando link...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Link posteado por {link.name}</h1>
      <Linka link={link} />
    </section>
  );
};
