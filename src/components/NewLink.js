import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendLinkService } from "../services";

export const NewLink = ({ addLink }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
      const url = data.get("url");
      const title = data.get("title");
      const description = data.get("description");

      const link = await sendLinkService({
        data: { url, title, description },
        token,
      });

      addLink(link);

      // e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
  return (
    <form onSubmit={handleForm}>
      <h1>Postea un nuevo link</h1>
      <fieldset>
        <label htmlFor="url">URL</label>
        <input type="text" id="url" name="url" required />
      </fieldset>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" required />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripción</label>
        <input type="text" id="description" name="description" required />
      </fieldset>
      <button>Enviar link</button>
      {sending ? <p>Enviando link</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
