import { ErrorMessage } from "../components/ErrorMessage";
import { LinkList } from "../components/LinkList";
import useLinks from "../hooks/useLinks";

export const HomePage = () => {
  const { links, loading, error } = useLinks();

  if (loading) return <p>Cargando links...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Portada</h1>

      <LinkList links={links} />
    </section>
  );
};
