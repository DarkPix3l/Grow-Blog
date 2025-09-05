//read all the files in the given directory and return an array of filenames.
//get the post by its slug (get post)
//get all posts and sort them by the newest date. (get posts)

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage?: {
    url: string;
  };
  photoCredit?: {
    avatar?: string;
    cover?: string;
  };
  category: string;
  content: string;
};

const postsDirectory = join(process.cwd(), "_posts");

export function getPosts(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: Post = {
    slug: realSlug,
    title: String(data.title),
    excerpt: String(data.excerpt),
    coverImage: String(data.coverImage),
    date: String(data.date),
    author: {
      name: String(data.author?.name || ""),
      picture: String(data.author?.picture || ""),
    },
    ogImage: data.ogImage ? { url: String(data.ogImage.url) } : undefined,
    photoCredit: data.photoCredit
      ? {
          avatar: data.photoCredit.avatar ? String(data.photoCredit.avatar) : undefined,
          cover: data.photoCredit.cover ? String(data.photoCredit.cover) : undefined,
        }
      : undefined,
    category: String(data.category),
    content,
  };

  return post;
}

export function getLatestPosts(limit: number): Post[] {
  const slugs = getPosts();
  
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

