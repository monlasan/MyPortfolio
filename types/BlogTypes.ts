export type BlogPosts = {
  posts: BlogPostType[];
};
export type BlogPostType = {
  frontMatter: PostFrontMatter;
  slug: string;
};
export type PostFrontMatter = {
  title: string;
  date: string;
  author: string;
  authorPhotoUrl: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
};
