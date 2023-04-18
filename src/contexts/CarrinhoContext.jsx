import { useState, createContext, useEffect } from "react";
import { getCarrinho } from "../utils/dbCarrinho";

export const CarrinhoContext = createContext();

export const CarrinhoContextProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState(0);

  useEffect(() => {
    async function tamanhoCarrinho () {
      const GetCarrinho = await getCarrinho();
      const tamanho = GetCarrinho?.length || 0;
      console.log(tamanho);
      setCarrinho(tamanho);
      
    }
    tamanhoCarrinho()
  }, [carrinho]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
