"use client"; //pela necessidade da interação com o botão. tem que ser usado no lado do cliente

import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // criando o useState como falso e o transformando em verdadeiro caso seja clicado na tela

  return (
    <header className="bg-custom-dark-purple text-white">

      <div className="container mx-auto flex justify-between items-center pt-6 px-6">
        <Image
          src="/imgs/logo.svg"
          alt="logo the blog"
          width={150}
          height={50}
        />

        {/* Usando o SVG para pequenas telas, criando um header mais complexo porém responsivo.  */}
        <button
          className="lg:hidden focus:outline-none" //escondido para telas lg (maiores)
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Navegação Criada pelo primeiro Header, antes de ser responsivo */}
        <nav className={`lg:flex flex-grow items-center justify-center space-x-7 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row justify-center lg:space-x-7 space-y-4 lg:space-y-0">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
            <li><a href="#" className="hover:text-gray-300">Categorias</a></li>
            <li><a href="#" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>

        {/* Input também do primeiro Header criado, quando se utilizam telas maiores */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar"
            className="px-4 py-2 bg-gray-900 text-white focus:outline-none"
          />
          <button className="bg-custom-light-purple text-white px-4 py-2 focus:outline-none">
            🔍
          </button>
        </div>

        {/* Input de busca para telas pequenas */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-2 flex flex-col w-full">
            <input
              type="text"
              placeholder="Buscar"
              className="px-4 py-2 bg-gray-900 text-white focus:outline-none w-full"
            />
            <button className="bg-custom-light-purple text-white px-4 py-2 focus:outline-none w-full">
              🔍
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
