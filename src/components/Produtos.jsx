import { Rating } from "@mui/material";
import { useState, useEffect } from "react";
import { useProdutos } from "../hooks/useProdutos";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const Produtos = () => {
  const [getUrl, setGetUrl] = useState("https://fakestoreapi.com/products");
  const { data, loading } = useProdutos(getUrl);
  const [produtos, setProdutos] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  console.log(getUrl);

  useEffect(() => {
    function formatarApi() {
      let dados = [];
      data.map((item) => {
        const valor = item.price * 10;
        const real = valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        dados.push({
          ...item,
          preco: real,
        });
        setProdutos(dados);
      });
    }

    formatarApi();
  }, [data]);

  function eletronicos() {
    setGetUrl("https://fakestoreapi.com/products/category/electronics");
  }

  function jewelery() {
    setGetUrl("https://fakestoreapi.com/products/category/jewelery");
  }

  function todos() {
    setGetUrl("https://fakestoreapi.com/products");
  }

  return (
    <div className="">
      {loading && <p>Carregando...</p>}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-16 justify-center">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="w-full flex flex-col items-center justify-center"
        >
          <h2 className="w-full text-center font-bold text-xl mb-5">
            Categorias
          </h2>

          <TabList>
            <Tab onClick={todos}>Todos</Tab>
            <Tab onClick={eletronicos}>Eletronicos</Tab>
            <Tab onClick={jewelery}>Joias</Tab>
          </TabList>

          <TabPanel></TabPanel>
        </Tabs>
        {produtos.map((produto) => (
          <Link
            to={`/info/${produto.id}`}
            key={produto.id}
            className="group cursor-pointer flex flex-col items-center w-[315px] rounded-md p-2 bg-gray-300 dark:bg-gray-800"
          >
            <div className=" min-h-[300px] w-[300px] overflow-hidden flex items-center justify-center rounded-md bg-white group-hover:opacity-90 ">
              <img
                src={produto.image}
                alt={produto.title}
                className="  w-[60%] max-h-full duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-1 h-[100%] w-full flex flex-col justify-between">
              <h3 className="text-xs ">{produto.title}</h3>

              <p className="text-sm font-medium ">{produto.preco}</p>
              <Rating
                className="bg-gray-200 dark:bg-gray-700 p-[3px] rounded-md"
                size="small"
                value={produto.rating.rate}
                readOnly
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
