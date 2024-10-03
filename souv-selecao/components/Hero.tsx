import React from 'react';

const Hero = () => {
  return (
    <section className="bg-purple-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat aenean sit vitae, sed tristique placerat hac.
        </p>
        <a href="#" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">
          Veja mais →
        </a>
      </div>
    </section>
  );
};

export default Hero;
