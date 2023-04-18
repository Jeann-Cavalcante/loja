import ListProduct from "../components/ListProduct";

const Carrinho = () => {
  return (
    <div className="pt-[100px] flex flex-col p-4 w-full max-w-[960px] mx-auto">
      <h1 className="text-center text-2xl font-black mb-10">Carinho</h1>

      <ListProduct />
    </div>
  );
};

export default Carrinho;
