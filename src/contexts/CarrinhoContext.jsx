import { useState, createContext, useEffect } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoContextProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState(
    localStorage.getItem("@carrinho") || []
  );

  useEffect(() => {}, [carrinho]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
