'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const BlogPost = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
          'X-api-key': apiKey,
        };

        const res = await fetch(`https://nextjs-cms1.vercel.app/api/posts/${id}`, {
          method: 'GET',
          headers,
          cache: 'force-cache', // Cache strategy
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch post: ${res.statusText}`);
        }

        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostById();
  }, [id]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  const relatedPosts = [
    { title: "The Art of Programming", date: "May 15, 2024" },
    { title: "Essentials of C++", date: "April 20, 2024" },
    { title: "The Winner's Mindset", date: "March 1, 2024" },
    { title: "The Minimalist Mindset", date: "February 15, 2024" },
  ];

  return (
    <>
      <Head>
        <title>{post.title} - Blog</title>
        <meta name="description" content={post.excerpt || post.content.slice(0, 150)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.content.slice(0, 150)} />
        <meta property="og:image" content={post.image || 'https://via.placeholder.com/400'} />
      </Head>

      <div className="mx-auto lg:ml-[70px] lg:mt-[50px] mt-10 p-6">
        <Button onClick={() => router.back()} className="mb-6 p-5">
          Back
        </Button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 w-full">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-6">
              By {post.author} • {new Date(post.created_at).toLocaleDateString()}
            </p>
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                height={500}
                width={700}
                className="w-full h-[500px] object-cover mb-6"
                loading="lazy"
              />
            )}
            <pre className="whitespace-pre-wrap text-md mb-6">{post.content}</pre>
          </div>

          <div className="md:w-1/3 w-full flex flex-col">
            <div className="mb-6 p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="text-xl font-semibold  text-black mb-4">Related Posts</h2>
              {relatedPosts.map((relatedPost, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg text-gray-600 font-medium">{relatedPost.title}</h3>
                  <p className="text-gray-600">{relatedPost.date}</p>
                </div>
              ))}
            </div>

            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="text-xl font-semibold text-black mb-4">Popular Categories</h2>
              <ul>
                <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Mastering JavaScript</a></li>
                <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Leetcode Hacks</a></li>
                <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">The Beauty of Algorithms</a></li>
                <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">The Query Language</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex mt-16 justify-center">
          <div className="p-6 border rounded-lg bg-white shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              aria-label="Email for newsletter subscription"
            />
            <button className="w-full p-3 bg-blue-500 text-white rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
