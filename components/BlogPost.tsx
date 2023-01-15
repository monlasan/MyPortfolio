import Link from 'next/link';
import React from 'react';
import { BlogPostType } from '@/types/BlogTypes';

interface Props {
  post: BlogPostType;
}
export default function BlogPost({ post }: Props) {
  return (
    <li className='group'>
      <Link href={'/blog/' + post.slug}>
        {/* <article className='rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm'> */}
        <div className=' rounded-xl p-1 bg-gradient-to-br from-indigo-300 dark:via-gray-900 via-green-100 to-grady-100 to-cyan-500 dark:to-cyan-500'>
          <div className='rounded-[10px] bg-white dark:bg-black-one  bosrder dark:group-hover:bg-zinc-900 group-hover:bg-zinc-50 ease-in-out duration-150 transition-colors p-4 !pt-10 sm:p-6'>
            <time dateTime='' className='block text-xs text-gray-500'>
              {post.frontMatter.date}
            </time>

            <h4 className='mt-2 text-lg sm:h-[85px] font-montserratAlt dark:text-white limitedLinesTwo sm:limitedLinesThree'>
              {post.frontMatter.title}
            </h4>

            <div className='mt-4 flex flex-wrap gap-1'>
              {post.frontMatter.tags.map((tag) => (
                <span
                  key={tag}
                  className='whitespace-nowrap rounded-md bg-zinc-200 dark:bg-white/20 px-2.5 py-1 text-xs'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* </article> */}
      </Link>
    </li>
  );
}
