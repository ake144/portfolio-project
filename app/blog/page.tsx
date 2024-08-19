'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
          'X-api-key': apiKey,
        };

        const res = await fetch('https://nextjs-cms1.vercel.app/api/posts', {
          method: 'GET',
          headers,
          cache:'force-cache'
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }

        const data = await res.json();
        setPosts(data.data[0].posts); // Assuming the API returns posts under `data`
        console.log('Fetched posts:', data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <>
     <div className="mx-auto lg:ml-[70px] lg:mt-[50px] mt-10 p-6">
      <div className='flex flex-row'>
        <Button onClick={() => router.back()} className='mb-6 p-5'>
          Back
         </Button>
        <h2 className='mt-[50px] p-6 text-4xl flex items-center justify-center'>
          Explore latest posts
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mx-4 mt-7 lg:grid-cols-3">
        {posts.map((post: any) => (
          <article key={post.id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt={post.title}
              src={post.image || "https://via.placeholder.com/400"}
              className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <time dateTime={new Date(post.created_at).toString()} className="block text-xs text-gray-500">
                {new Date(post.created_at).toLocaleDateString()}
              </time>
              <Link href={`/blog/${post.id}`}>
                <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
              </Link>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {post.content}
              </p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </>
  );
}

export default BlogPost;
