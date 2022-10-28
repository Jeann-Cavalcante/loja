import axios from "axios";
import { useEffect, useState } from "react";

export const useProdutos = (url, urlInfo) => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProdutos() {
      try {
        const api = await axios.get(url);

        setData(api.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getProdutos();
  }, [url]);

  useEffect(() => {
    async function getInfo() {
      console.log(url);
      try {
        const api = await axios.get(url);

        let dados = [];
        let apiData = [api.data];
        apiData.map((item) => {
          const valor = item.price * 10;
          const real = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          dados.push({
            ...item,
            preco: real,
          });
          setInfo(dados);
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getInfo();
  }, [urlInfo]);

  return { data, loading, info };
};
