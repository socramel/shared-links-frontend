import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserLinks } from "../components/UserLinks";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  console.log(user);

  if (loading) return <p>Cargando link...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Página de {user.name}</h1>
      <p>User id: {user.id}</p>
      <p>Registrado el: {new Date(user.created_at).toLocaleString()}</p>

      <UserLinks id={user.id} />
    </section>
  );
};
