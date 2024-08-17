'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogPost = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
          'X-api-key': apiKey,
        };

        console.log('id:', id);

        const res = await fetch(`https://nextjs-cms1.vercel.app/api/posts/${id}`, {
          method: 'GET',
          headers,
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch post: ${res.statusText}`);
        }
console.log('res:', res);
        const data = await res.json();
        setPost(data); // Assuming the API returns posts under `data`
        console.log('Fetched post:', data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostById();
  }, [id]);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  console.log('post:', post);
  if (!post) {
    return <p>Post not found.</p>;
  }

  const relatedPosts = [
    { title: "The Art of Decluttering", date: "May 15, 2024" },
    { title: "Embracing Essentialism", date: "April 20, 2024" },
    { title: "Minimalist Travel", date: "March 1, 2024" },
    { title: "The Minimalist Mindset", date: "February 15, 2024" },
  ];

  return (
    <div className="mx-auto lg:ml-[70px] lg:mt-[50px] mt-10 p-6">
      <Link href='/'>
        <div className='mb-2 p-3'>
          Back
        </div>
      </Link>
      <div className="flex flex-col mx-10 md:flex-row">
        <div className="md:w-1/2 w-full">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">By {post.author} • {new Date(post.created_at).toLocaleDateString()}</p>
          {post.image && (
            <Image src={post.image} alt="Blog Post Image" height={400} width={300} className="w-full h-[500px] mb-6" />
          )}
             <pre  className='overflow-x-auto mb-6 text-md whitespace-pre-wrap '> {post.content} </pre> 
          {/* <p className="">{</p> */}
        </div>
        <div className="w-1/2 flex flex-col mr-7 justify-end items-end">
          <div className="mb-6 border rounded-lg md:p-20 p-4">
            <h2 className="text-xl font-semibold border rounded-lg p-3 mb-4">Related Posts</h2>
            {relatedPosts.map((relatedPost, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg">{relatedPost.title}</h3>
                <p className="text-gray-600">{relatedPost.date}</p>
              </div>
            ))}
          </div>
          <div className='border md:p-20 p-4 rounded-lg p-3'>
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
      <div className='bottom-0 flex mt-20 items-center justify-center'>
        <div className="mb-6 border rounded-lg md:p-10 p-3">
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
