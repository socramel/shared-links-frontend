import { useEffect, useState } from "react";
import { getAllLinksService, getUserLinksService } from "../services/index";

const useLinks = (id) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);

        const data = id
          ? await getUserLinksService(id)
          : await getAllLinksService();

        setLinks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLinks();
  }, [id]);

  const addLink = (link) => {
    setLinks([link, ...links]);
  };

  const removeLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return { links, loading, error, addLink, removeLink };
};

export default useLinks;
