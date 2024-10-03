const ComecandoPart = () => {
    return (
      <section className="px-6 py-10">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Coluna da imagem e primeiro artigo */}
          <div className="lg:w-1/2">
            <div className="">
              <img
                src="/imgs/ImagemPC1.png"
                alt="imagem-pc-comecando"
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="mt-2">
                Janeiro 04, 2022
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-4xl font-bold mb-3 text-custom-dark-purple">
                Começando no ReactJS em 2022
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere modi animi autem voluptatibus praesentium quis. Quisquam sapiente unde quidem corrupti inventore sint perspiciatis natus, cum voluptatem porro et accusantium.
              </p>
            </div>
          </div>
          
          {/* Coluna dos outros artigos */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-6">
              <p className="text-sm mb-2">Janeiro 04, 2022</p>
              <h2 className="text-4xl font-bold text-custom-dark-purple mb-2">
                Conheça as principais técnicas para conseguir uma vaga internacional em programação
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui, enim, alias nemo, nisi omnis dolores explicabo animi sequi neque in vero saepe dicta laboriosam impedit laborum dignissimos illo eveniet!
              </p>
            </div>
  
            <div className="mt-4">
              <p className="text-sm mb-2">Janeiro 04, 2022</p>
              <h2 className="text-4xl font-bold text-custom-dark-purple mb-2">
                Veja a evolução do Front-end na prática
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere modi animi autem voluptatibus praesentium quis. Quisquam sapiente unde quidem corrupti inventore sint perspiciatis natus, cum voluptatem porro et accusantium.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default ComecandoPart;
  