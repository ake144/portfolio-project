'use client'


import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BlogPost = () => {
  const router = useRouter();
  const post = {
    title: "The Essence of Minimalism",
    author: "Zen Master",
    date: "June 1, 2024",
    content: `
      Minimalism is a way of life that embraces simplicity, intentionality, and a focus on what truly matters. 
      It is a journey of letting go of the excess and embracing the essential, freeing ourselves from the burden 
      of material possessions and allowing us to live with greater clarity and purpose.
  
      At its core, minimalism is about intentionally curating our lives to include only the things that bring us true value and joy. 
      It is a conscious decision to eliminate the clutter, both physical and mental, that weighs us down and distracts us from what truly matters. 
      By embracing minimalism, we create space for clarity, focus, and mindfulness in our daily lives.
  
      One of the key principles of minimalism is the idea of "less is more." By owning fewer possessions, we free ourselves from the burden of maintaining, 
      organizing, and storing excess. This liberation allows us to redirect our time, energy, and resources towards experiences, relationships, 
      and pursuits that truly enrich our lives.
  
      Minimalism is not about deprivation or asceticism; rather, it is about intentional living. It encourages us to be mindful of our consumption, 
      to choose quality over quantity, and to focus on the things that bring us joy and fulfillment. 
      By simplifying our lives, we can reduce stress, increase our sense of contentment, and find greater purpose and meaning.
  
      In essence, minimalism is a journey towards living more with less. It is about letting go of the unnecessary to make room for what truly matters. 
      By embracing minimalism, we can create a life that is more intentional, more meaningful, and more fulfilling.
    `,
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy",
  }

  const relatedPosts = [
    { title: "The Art of Decluttering", date: "May 15, 2024" },
    { title: "Embracing Essentialism", date: "April 20, 2024" },
    { title: "Minimalist Travel", date: "March 1, 2024" },
    { title: "The Minimalist Mindset", date: "February 15, 2024" },
  ];

  return (
    <div className=" mx-auto lg:ml-[70px] lg:mt-[50px] mt-10  p-6">
       <Link href='/'>
        <div className='mb-2 p-3'>
          Back
        </div>
        </Link> 
      <div className="flex flex-col mx-10 md:flex-row">
        <div className="md:w-1/2 w-full ">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">By {post.author} • {post.date}</p>
          <Image src={post.imageUrl} alt="Blog Post Image" height={400} width={300} className="w-full h-[500px] mb-6" />
          
          <p className="mb-6 text-md">{post.content}</p>
          
        </div>
        <div className="w-1/2 flex flex-col mr-7 justify-end items-end" >
          <div className="mb-6  border rounded-lg md:p-20 p-4">
            <h2 className="text-xl font-semibold border rounded-lg p-3 mb-4">Related Posts</h2>
            {relatedPosts.map((relatedPost, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg">{relatedPost.title}</h3>
                <p className="text-gray-600">{relatedPost.date}</p>
              </div>
            ))}
          </div>
          <div  className='border md:p-20 p-4 rounded-lg p-3'>
            <h2 className="text-xl font-semibold border rounded-lg p-2 mb-4">Popular Categories</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-blue-500">Decluttering</a></li>
              <li className="mb-2"><a href="#" className="text-blue-500">Mindfulness</a></li>
              <li className="mb-2"><a href="#" className="text-blue-500">Minimalist Living</a></li>
              <li className="mb-2"><a href="#" className="text-blue-500">Sustainable Living</a></li>
            </ul>
          </div>
        </div>
    
      </div>
      <div className='bottom-0 flex  mt-20 items-center justify-center'>
        <div className="mb-6  border rounded-lg md:p-10 p-3">
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button className="w-full p-2 bg-blue-500 text-white rounded">Subscribe</button>
          </div>
        </div>
    </div>
  );
};

export default BlogPost;