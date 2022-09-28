import { useEffect, useState } from "react";
import { getSingleLinkService } from "../services";

const useLink = (id) => {
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);

        const data = await getSingleLinkService(id);

        setLink(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  }, [id]);
  return { link, loading, error };
};

export default useLink;
