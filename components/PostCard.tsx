import React from 'react';
import { BlogPostType } from '@/types/BlogTypes';
import Link from 'next/link';

interface Props {
  post: BlogPostType;
}
export default function PostCard({ post }: Props) {
  return (
    <article
      // id='2022-12-03'
      aria-labelledby='2022-12-03-heading'
      className='scroll-mt-10 md:flex'
    >
      <p className='pl-7 text-sm leading-6 text-gray-900 dark:text-gray-500 md:w-1/4 md:pl-0 md:pr-12 md:text-right'>
        {/* <a href='#2022-12-03'>{post.frontMatter.date}</a> */}
        {post.frontMatter.date}
      </p>
      <div className='relative pt-2 pl-7 pb-12 group md:w-3/4 md:pt-0 md:pl-12'>
        <div className='absolute bottom-0 left-0 -top-2 border-l border-dashed border-gray-400 dark:border-gray-500 group-hover:border-gray-900 group-hover:dark:border-gray-300 transition-colors md:top-1'></div>
        <div className='absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-900 group-hover:dark:bg-gray-300 transition-colors md:-top-[0.15rem]'></div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className='font-semibold font-montserratAlt'>
            {post.frontMatter.title}
          </h2>
          <p className='text-zinc-700 font-light dark:text-zinc-400 mt-2'>
            {post.frontMatter.description}
          </p>
        </Link>
      </div>
    </article>
  );
}
