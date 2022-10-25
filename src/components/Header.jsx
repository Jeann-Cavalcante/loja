import { MdLocalGroceryStore, MdStoreMallDirectory } from "react-icons/md";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";

const Header = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <header className="flex bg-gray-300 dark:bg-gray-800 dark:text-white py-[20px] px-1 justify-around">
      <Link
        to="/"
        className="flex items-center text-lg font-bold cursor-pointer"
      >
        <MdStoreMallDirectory className="text-2xl" />
        <span>E-Loja</span>
      </Link>
      <div className="flex gap-x-5">
        {theme === "dark" ? (
          <BsFillSunFill
            className="text-2xl cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonStarsFill
            className="text-2xl cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )}
        <MdLocalGroceryStore className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
