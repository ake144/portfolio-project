'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
          cache: 'force-cache', // You can also look into Incremental Static Generation (ISR) here
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }

        const data = await res.json();
        setPosts(data.data[0].posts); 
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="skeleton-loader">Loading posts...</div> // Use a skeleton loader here
    );
  }

  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Explore the latest posts in my portfolio blog." />
      </Head>
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between">
          <Button onClick={() => router.back()} className="mb-6 p-5">
            Back
          </Button>
          <h2 className="text-4xl mt-5">Explore Latest Posts</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-7">
          {posts.map((post: any) => (
            <article key={post.id} className="rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
              width={600}
              height={500}
                alt={post.title}
                src={post.image || "https://via.placeholder.com/400"}
                className="h-56 w-full object-cover"
                loading="lazy" // Lazy load images for better performance
              />
              <div className="bg-white p-4 sm:p-6">
                <time dateTime={new Date(post.created_at).toISOString()} className="block text-xs text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </time>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="mt-2 text-lg text-gray-900 hover:underline">{post.title}</h3>
                </Link>
                <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                  {post.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
