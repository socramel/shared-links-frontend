import { Linka } from "./Link";

export const LinkList = ({ links, removeLink }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Linka link={link} removeLink={removeLink} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links...</p>
  );
};
