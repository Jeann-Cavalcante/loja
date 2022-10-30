import { useContext } from "react";

import { CarrinhoContext } from "../contexts/CarrinhoContext";

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }

  return context;
};
