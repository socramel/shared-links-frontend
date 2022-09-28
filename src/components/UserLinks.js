import useLinks from "../hooks/useLinks";
import { ErrorMessage } from "./ErrorMessage";
import { LinkList } from "./LinkList";

export const UserLinks = ({ id }) => {
  const { links, loading, error, removeLink } = useLinks(id);

  if (loading) return <p>Cargando links...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <LinkList links={links} removeLink={removeLink} />;
};
