import { Box, Rating, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useCarrinho } from "../hooks/useCarrinho";
import { useProdutos } from "../hooks/useProdutos";
import { SetCarrinho, getCarrinho } from "../utils/dbCarrinho";

const Info = () => {
  const { id } = useParams();
  const urlInfo = `https://fakestoreapi.com/products/${id}`;
  const { info, loading } = useProdutos(urlInfo);
  const [qtd, setQtd] = useState(1);
  const [valor, setValor] = useState(0);

  const { carrinho, setCarrinho } = useCarrinho();
  const navigate = useNavigate();

  async function Carrinho(e) {
    e.preventDefault();
    const GetCarrinho = await getCarrinho();
    console.log(GetCarrinho);
    let arrayCarrinho = [];
    arrayCarrinho.push({
      id: info[0].id,
      title: info[0].title,
      image: info[0].image,
      price: valor,
      qtd: qtd,
      priceTotal: info[0].price * 10 * qtd,
    });
    
   const data =  GetCarrinho?.filter((item) => item.id === info[0].id) || [];

    if (data[0]) {
      return alert("Produto já está no carrinho");
    }


    if (GetCarrinho) {
      SetCarrinho([...GetCarrinho, ...arrayCarrinho]);
      setCarrinho(arrayCarrinho.length);      
    } else {
      SetCarrinho(arrayCarrinho);
      setCarrinho(arrayCarrinho.length);
    }
    console.log(arrayCarrinho);
    navigate("/carrinho");
  }

  useEffect(() => {
    async function total() {
      if (qtd < 1) {
        setQtd(1);
      }
      console.log(info);
      let valorReais = info[0].price;
      let valorNumber = valorReais * 10 * qtd;
      let real = valorNumber.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      setValor(real);
    }
    total();
  }, [info, qtd]);

  return (
    <div className="pt-[100px] pb-5 flex justify-center items-center">
      {info?.map((item) => (
        <div
          key={item.id}
          className="md:flex max-w-[1200px] h-full min-h-[89vh]"
        >
          <div className="md:flex-1 min-h-full bg-white flex justify-center sm:rounded-l-lg items-center">
            <img className="px-5 py-3" src={item.image} alt={item.title} />
          </div>

          <div className="bg-gray-300 dark:bg-gray-800 sm:rounded-r-lg md:flex-1 min-h-full p-2">
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
            <div className="flex mt-5 flex-col items-center justify-around gap-y-8">
              <span className="font-bold">Valor total: {valor}</span>

              <div className="disabled">
                <label
                  for="visitors"
                  className="block pl-2 mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Quatidade
                </label>

                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border disabled outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:border-2 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-purple-600"
                  placeholder=""
                  required
                  value={qtd}
                  onChange={(e) => setQtd(e.target.value)}
                />
              </div>

              <button
                onClick={Carrinho}
                className="bg-purple-700 hover:bg-purple-600 flex justify-around w-[280px] items-center duration-300 py-3 rounded-lg px-2"
              >
                <BsFillCartPlusFill className="fill-white text-2xl" />
                <span className=" text-white font-bold">
                  Adicionar no carrinho
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
