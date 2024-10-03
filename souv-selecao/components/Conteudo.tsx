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

// const LeftPart = () => {
//     return(
//         <div>
//             <div>
//                 <img src="" alt="" />
//                 <p>Janeiro 04, 2022</p>
//             </div>
//             <div>
//                 <h2>Começando no ReactJS em 2022</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere modi animi autem voluptatibus praesentium quis. Quisquam sapiente unde quidem corrupti inventore sint perspiciatis natus, cum voluptatem porro et accusantium.</p>
//             </div>
//         </div>
//     );
// }
// const RightPart = () => {
//     return(
//         <div>
//             <div>
//                 <p>Janeiro 04, 2022</p>
//                 <h2>Conheça as principais ténicas para conseguir uma vaga internacional em programação</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui, enim, alias nemo, nisi omnis dolores explicabo animi sequi neque in vero saepe dicta laboriosam impedit laborum dignissimos illo eveniet!</p>
//             </div>
//             <div>
//                 <p>Janeiro 04, 2022</p>
//                 <h2>Veja a evolução do Front-end na prática</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere modi animi autem voluptatibus praesentium quis. Quisquam sapiente unde quidem corrupti inventore sint perspiciatis natus, cum voluptatem porro et accusantium.</p>
//             </div>
//         </div>
//     );
// }




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
