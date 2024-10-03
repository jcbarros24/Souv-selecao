import React from 'react';

const Hero = () => {
  return (
    <section className="bg-custom-dark-purple text-white py-20">
      <div className='px-6 container flex flex-row w-full mx-auto gap-16'>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-7 text-custom-light-purple">
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
          </h1>
          <p className="text-lg mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat aenean sit vitae, sed tristique placerat hac.
          </p>
          <div className="flex items-center">
            <a href="#" className="text-custom-light-purple py-3 rounded transition">
              Veja mais
            </a>
            <img src="imgs/arrow-right.svg" alt="arrow" className="ml-1 w-5 h-5" />
          </div>
        </div>

        <div>
          <img src="/imgs/ImagemPC2.png" alt="img-hero" className='h-full w-full' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
