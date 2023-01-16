import Who from '@/components/Who';
import BlogSection from '@/components/BlogSection';
import { BlogPosts } from '@/types/BlogTypes';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';

export default function Home({ posts }: BlogPosts) {
  return (
    <Layout title='Khaled Sanny'>
      <Who />
      <BlogSection posts={posts} />
      <Skills />
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
