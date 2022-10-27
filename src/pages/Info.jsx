import { Box, Rating, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

import { Link, useParams } from "react-router-dom";
import { useProdutos } from "../hooks/useProdutos";

const Info = () => {
  const { id } = useParams();
  const urlInfo = `https://fakestoreapi.com/products/${id}`;
  const { info, loading } = useProdutos(urlInfo);
  const [qtd, setQtd] = useState(1);
  const [valor, setValor] = useState(null);

  useEffect(() => {
    function total() {
      let total = [];
      info.map((i) => {
        console.log(parseInt(i.preco));
      });
      setValor(total);
    }
    total();
  }, [qtd]);

  return (
    <div className="pt-[100px] flex justify-center items-center">
      {info?.map((item) => (
        <div key={item.id} className="md:flex max-w-[1200px] min-h-[89vh]">
          <div className="flex-1 min-h-full bg-white">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="bg-gray-300 dark:bg-gray-800 flex-1 p-2">
            <h1 className="font-bold text-xl mb-3">{item.title}</h1>
            <h3 className="bg-purple-500 inline p-1 rounded text-fuchsia-300">
              {item.category}
            </h3>
            <div className="mt-3">
              <Rating
                className="bg-gray-200 dark:bg-gray-700 p-[3px] rounded-md"
                size="small"
                value={item.rating.rate}
                readOnly
              />
            </div>

            <p>{item.description}</p>
            <div className="flex mt-5 flex-col items-center justify-around min-h-[40%]">
              <span className="font-bold">Valor total: {item.preco}</span>

              <div>
                <label
                  for="visitors"
                  class="block pl-2 mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Quatidade
                </label>
                <input
                  type="number"
                  id="visitors"
                  class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:border-2 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-purple-600"
                  placeholder=""
                  required
                  value={qtd}
                  onChange={(e) => setQtd(e.target.value)}
                />
              </div>

              <Link className="bg-purple-700 hover:bg-purple-600 flex justify-around w-[280px] items-center duration-300 py-3 rounded-lg px-2">
                <BsFillCartPlusFill className="fill-white text-2xl" />
                <span className=" text-white font-bold">
                  Adicionar no carrinho
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
