import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-custom-dark-purple text-white py-20">
      <div className='px-6 container mx-auto flex flex-col lg:flex-row w-full gap-16'>

        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl text-poppins md:text-4xl lg:text-5xl font-bold mb-7 text-custom-light-purple">
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
          </h1>
          <p className="text-base md:text-lg sm:text-sm mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui, enim, alias nemo, nisi omnis dolores explicabo animi sequi neque in vero saepe dicta laboriosam impedit laborum dignissimos illo eveniet!
          </p>
          <div className="flex items-center">
            <a href="#" className="text-custom-light-purple py-3 rounded transition">
              Veja mais
            </a>
            <Image
              src="/imgs/arrow-right.svg"
              alt="arrow"
              width={20} // Defina a largura da imagem
              height={20} // Defina a altura da imagem
              className="ml-1 w-5 h-5"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <Image
            src="/imgs/ImagemPC2.png"
            alt="img-hero"
            width={500} // Defina a largura
            height={300} // Defina a altura
            className="w-full h-auto object-cover"
          />        
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
