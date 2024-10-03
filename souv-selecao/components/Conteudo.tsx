import React from 'react';

type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
};

const posts: BlogPost[] = [
  {
    date: 'Janeiro 04, 2022',
    title: 'Conheça as principais técnicas para conseguir uma vaga internacional em programação',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    date: 'Janeiro 04, 2022',
    title: 'Veja a evolução do Front-end na prática',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  // Adicione mais posts aqui
];

const BlogPostList = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-lg">
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPostList;
