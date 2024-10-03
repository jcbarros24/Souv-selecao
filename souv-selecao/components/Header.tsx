import React from 'react';

const Header = () => {
  return (
    <header className="bg-custom-dark-purple text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src="/imgs/logo.svg" alt="logo the blog" />

        <nav className="flex-1 mx-10">
          <ul className="flex justify-center space-x-7">
            <li><a href="#" className="hover:text-gray-300 ">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
            <li><a href="#" className="hover:text-gray-300">Categorias</a></li>
            <li><a href="#" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>

        <div>
        <input
            type="text"
            placeholder="Buscar"
            className="px-4 py-2 bg-gray-900 text-white focus:outline-none"
          />
          <button className="bg-custom-light-purple text-white px-4 py-2 focus:outline-none">
            🔍
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
