import Layout from '@/components/Layout';
import { BlogPosts } from '@/types/BlogTypes';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostCard from '@/components/PostCard';

export default function Blog({ posts }: BlogPosts) {
  return (
    <Layout title='Recent Articles'>
      <h1 className='font-medium font-montserratAlt text-5xl mt-8 text-center'>
        Blog
      </h1>
      <section className='pb-12 mt-16'>
        {posts.length !== 0 && (
          <>
            {posts.slice(0, 3).map((post) => (
              <PostCard post={post} />
            ))}
          </>
        )}
        {posts.length === 0 && (
          <div className='border mt-8 mb-4 border-dashed text-gray-200 border-gray-500 rounded-md p-8 w-full text-center bg-white/5'>
            Nothing here 👀
          </div>
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
}
