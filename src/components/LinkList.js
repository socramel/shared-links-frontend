import { Linka } from "./Link";

export const LinkList = ({ links, removeLink, voteLink }) => {
  return links ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Linka link={link} removeLink={removeLink} voteLink={voteLink} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links...</p>
  );
};
