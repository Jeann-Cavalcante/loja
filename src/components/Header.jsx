import { MdLocalGroceryStore, MdStoreMallDirectory } from "react-icons/md";
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";
import { Badge, IconButton, Tooltip } from "@mui/material";

const Header = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <header className="flex fixed w-full bg-gray-300 dark:bg-gray-800 dark:text-white py-[20px] px-1 justify-around items-center">
      <Link
        to="/"
        className="flex items-center text-lg font-bold cursor-pointer"
      >
        <MdStoreMallDirectory className="text-2xl dark:text-white text-gray-800" />
        <span className="dark:text-white text-gray-800">E-Loja</span>
      </Link>
      <div className="flex gap-x-3  items-center">
        <Tooltip title="Trocar tema">
          <IconButton className=" ">
            <>
              {theme === "dark" ? (
                <BsFillSunFill
                  className="text-[32px] dark:text-white text-gray-800 cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BsFillMoonStarsFill
                  className="text-2xl dark:text-white text-gray-800  cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </>
          </IconButton>
        </Tooltip>

        <Tooltip title="Favoritos">
          <IconButton className=" ">
            <Link to="/favoritos">
              <BsFillHeartFill className="text-[27px] mt-1 dark:text-white text-gray-800 cursor-pointer" />
            </Link>
          </IconButton>
        </Tooltip>

        <Tooltip title="Carrinho">
          <IconButton className=" ">
            <Link to="carrinho">
              <Badge badgeContent={0} showZero color="secondary">
                <MdLocalGroceryStore className="text-2xl dark:text-white mb-1 text-gray-800 cursor-pointer " />
              </Badge>
            </Link>
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
