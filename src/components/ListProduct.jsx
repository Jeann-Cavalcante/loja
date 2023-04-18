import { useEffect, useState } from "react";
import { getCarrinho } from "../utils/dbCarrinho";

const ListProduct = () => {
  const [data, setData] = useState([]);

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
  return (
    <div>
      <div>
        <h2 className="text-center text-2xl font-black mb-10 bg-gray-800 p-8 round">
          Valor Total
        </h2>
      </div>

      <ul className="flex flex-col gap-y-4">
        {data?.map((item) => (
          <li className=" flex bg-gray-800 p-1 round" key={item.id}>
            <img
              className="rounded-lg p-1 h-[80px]"
              width={"80px"}
              src={item.image}
              alt={item.title}
            />
            <div className=" pl-4">
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.preco}</p>
              <span>{item.qtd}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
