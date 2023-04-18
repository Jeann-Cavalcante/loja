export const getCarrinho = async () => {
  const carrinho = JSON.parse(localStorage.getItem("@carrinho"));
  return carrinho;
};

export const SetCarrinho = async (carrinho) => {
  localStorage.setItem("@carrinho", JSON.stringify(carrinho));

  return carrinho;
};