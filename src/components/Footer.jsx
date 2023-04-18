import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdStoreMallDirectory } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4  w-full mt-[80px] bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="flex flex-col gap-y-5 sm:flex-row items-center sm:justify-between">
        <Link
          to="/"
          className="flex items-center text-lg font-bold cursor-pointer"
        >
          <MdStoreMallDirectory className="md:text-3xl text-5xl text-gray-500 dark:text-gray-400" />
          <span className="text-gray-500  dark:text-gray-400 -ml-[8px] italic text-5xl md:text-3xl">
            Loja
          </span>
        </Link>
        <ul className="flex gap-x-8 flex-wrap text-gray-500  dark:text-gray-400">
          <li>
            <a href="#" className="md:text-3xl text-5xl ">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="#" className=" md:text-3xl text-5xl  ">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="#" className=" md:text-3xl text-5xl">
              <BsWhatsapp />
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://github.com/Jeann-Cavalcante" className="hover:underline">
          Jeancavalcante
        </a>
        .
      </span>
    </footer>
  );
};

export default Footer;
