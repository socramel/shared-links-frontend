export const Enlace = ({ enlace }) => {
  return (
    <article>
      <p>{enlace.url}</p>
      <p>{enlace.title}</p>
      <p>{enlace.description}</p>
      <p>Link creado por {enlace.email} en {" "} <Enlace to={`/link/${enlace.id}`}>{new Date(enlace.created_at).toLocaleString()}</Enlace></p>
    </article>
  );
};
