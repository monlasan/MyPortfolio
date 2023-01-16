import Link from 'next/link';
import { BlogPosts } from '@/types/BlogTypes';
import BlogPost from './BlogPost';

export default function Blog({ posts }: BlogPosts) {
  return (
    <section className='mt-8'>
      <h2 className='font-medium font-montserratAlt text-4xl'>Blog</h2>
      {posts.length !== 0 && (
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-4'>
          {posts.slice(0, 3).map((post) => (
            <BlogPost
              key={post.frontMatter.description + post.frontMatter.title}
              post={post}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className='border mt-8 mb-4 border-dashed text-gray-200 border-gray-500 rounded-md p-8 w-full text-center bg-white/5'>
          Nothing there... for now 😎
        </div>
      )}
      <Link
        href='/blog'
        className='group flex text-sm text-gray-500 dark:text-gray-600 transition-colors dark:hover:text-white hover:text-gray-700  items-center'
      >
        See more posts
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='h-6 w-6 ml-2  group-hover:translate-x-2 duration-150 ease-out transition-transform'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z'
          ></path>
        </svg>
      </Link>
    </section>
  );
}
