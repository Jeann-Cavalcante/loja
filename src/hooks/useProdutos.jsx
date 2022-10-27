import axios from "axios";
import { useEffect, useState } from "react";

export const useProdutos = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProdutos() {
      try {
        const api = await axios.get(url);

        setData(api.data);
        console.log(api.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getProdutos();
  }, [url]);

  return { data, loading };
};
