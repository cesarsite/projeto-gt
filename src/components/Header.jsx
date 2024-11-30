import { FaSearch } from 'react-icons/fa';
import Logo from './Logo';
import miniCartIcon from "../assets/mini-cart.svg";

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between bg-white p-4">
        <div className="logo mb-2 pl-8">
          <Logo />
        </div>
        <div className="flex items-center mx-4 flex-1">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="p-2 border border-gray-300 bg-white/50 rounded-md outline-none w-full text-base text-gray-800"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Pesquisar produtos..."}
          />
          <button className="bg-transparent border-none cursor-pointer ml-2">
            <FaSearch className="text-gray-500 text-xl" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/register"
            className = "cadastro">
            Cadastre-se
        </a>
        <a href='/login'
        className='botao-entrar'>
          Entrar
        </a>
          <div className="relative pr-8">
          <img src={miniCartIcon} alt="" />
          </div>
        </div>
      </div>

      <nav className="navigation">
  <ul className="flex list-none p-0 mt-2 space-x-5 pl-7">
    <li className="space-x-8 pl-5">
      <a href="/" className="no-underline text-black font-sans">
        Home
      </a>
    </li>
    <li className="mr-5">
      <a href="/products" className="no-underline text-black font-sans">
        Produtos
      </a>
    </li>
    <li className="mr-5">
      <a href="/categories" className="no-underline text-black font-sans">
        Categorias
      </a>
    </li>
    <li className="mr-5">
      <a href="/orders" className="no-underline text-black font-sans">
        Meus Pedidos
      </a>
    </li>
  </ul>
</nav>

    </header>
  );
};

export default Header;
