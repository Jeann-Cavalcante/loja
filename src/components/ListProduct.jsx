import { useEffect, useState } from "react";
import { SetCarrinho, getCarrinho } from "../utils/dbCarrinho";
import { BsTrashFill } from "react-icons/bs";
import { useCarrinho } from "../hooks/useCarrinho";

const ListProduct = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const { setCarrinho } = useCarrinho();

  async function removeItem(id) {
    const carrinho = await getCarrinho();
    const newData = carrinho.filter((item) => item.id !== id);
    SetCarrinho(newData);
    setData(newData);
  }
  console.log(data);

  useEffect(() => {
    async function getProdutos() {
      try {
        const carrinho = await getCarrinho();

        setData(carrinho);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    }
    getProdutos();
  }, []);

  useEffect(() => {
    async function getValor() {
      try {
        const carrinho = await getCarrinho();
        setCarrinho(carrinho.length);
        const total = carrinho.reduce((acc, item) => {
          return acc + item.priceTotal;
        }, 0);
        let real = total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        setTotal(real);
      } catch (error) {
        console.log(error);
      }
    }
    getValor();
  }, [data]);

  return (
    <div>
      <div className=" mb-10 bg-gray-300 dark:bg-gray-800 p-8 round">
        <h2 className="text-center text-2xl font-black">Valor Total</h2>
        <h3 className="text-center text-xl font-bold mt-4">{total}</h3>
      </div>

      {data.length === 0 && (
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold">Carrinho Vazio</h2>
        </div>
      )}
      <ul className="flex flex-col gap-y-4">
        {data?.map((item) => (
          <li
            className=" flex bg-gray-300 dark:bg-gray-800 p-1 round justify-between items-center"
            key={item.id}
          >
            <div className="flex">
              <img
                className="rounded-lg p-1 h-[80px]"
                width={"80px"}
                src={item.image}
                alt={item.title}
              />
              <div className=" pl-4 flex flex-col">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.preco}</p>
                <span>{item.qtd}</span>
                <span>{item.price}</span>
              </div>
            </div>

            <div className="pr-8">
              <BsTrashFill
                className="text-4xl cursor-pointer hover:text-red-600 duration-300"
                onClick={() => removeItem(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
