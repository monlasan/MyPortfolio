import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Post({
  mdxSource,
  frontMatter: { title, description, authorPhotoUrl, author, date },
}: any) {
  return (
    <Layout title={title}>
      <h1 className='text-center font-montserratAlt text-4xl sm:text-5xl font-semibold my-8 mb-4'>
        {title}
      </h1>
      <p className='text-center text-base max-w-lg mx-auto text-gray-500 mb-4'>
        {description}
      </p>

      <div className='justify-center flex gap-4 items-center mb-14'>
        <Image
          alt={author}
          src={authorPhotoUrl}
          className='rounded-full'
          width={50}
          height={50}
        />
        <div className='flex flex-col'>
          <span>{author}</span>
          <span className='text-sm text-gray-500'>{date}</span>
        </div>
      </div>
      <div className='unreset dark:text-gray-300 font-light'>
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
