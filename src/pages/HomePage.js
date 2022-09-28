import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { LinkList } from "../components/LinkList";
import { NewLink } from "../components/NewLink";
import { AuthContext } from "../context/AuthContext";
import useLinks from "../hooks/useLinks";

export const HomePage = () => {
  const { links, loading, error, addLink, removeLink } = useLinks();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando links...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NewLink addLink={addLink} /> : null}

      <h1>Portada</h1>

      <LinkList links={links} removeLink={removeLink} />
    </section>
  );
};
