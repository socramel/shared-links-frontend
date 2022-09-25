import { Enlace } from "./Enlace";

export const LinkList = ({ links }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Enlace link={link} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links...</p>
  );
};
