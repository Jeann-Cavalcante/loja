import { MdLocalGroceryStore, MdStoreMallDirectory } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-gray-300 py-[20px] px-1 justify-around">
      <Link
        to="/"
        className="flex items-center text-lg font-bold cursor-pointer"
      >
        <MdStoreMallDirectory className="text-2xl" />
        <span>E-Loja</span>
      </Link>
      <div>
        <MdLocalGroceryStore className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
