import React from 'react';
import Image from 'next/image';

type BlogPost = {
  data: string;
  titulo: string;
  descricao: string;
  imagem: string;
};

const posts: BlogPost[] = [
  {
    data: 'Janeiro 04, 2022',
    titulo: '10 dicas pra conseguir a vaga desejada',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imagem: '/imgs/ImagemPC3.png' 
  },
  {
    data: 'Janeiro 04, 2022',
    titulo: 'Deixe seu código mais semântico com essas dicas',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imagem: '/imgs/ImagemPC4.png' 
  },
  {
    data: 'Janeiro 04, 2022',
    titulo: 'Use essas dicas nas suas aplicações mobile',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imagem: '/imgs/ImagemPC5.png' 
  }
];

const BlogPostList = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-8 ">
            <Image
              src={post.imagem}
              alt={post.titulo}
              width={500}
              height={300} 
              className="w-full h-90 object-cover rounded mb-4"
            />
            <p className="text-sm text-gray-500 mb-2">{post.data}</p>
            <h2 className="text-2xl font-bold mb-2 text-custom-dark-purple">{post.titulo}</h2>
            <p className='text-lg'>{post.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPostList;
