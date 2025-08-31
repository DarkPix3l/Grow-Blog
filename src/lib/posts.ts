//read all the files in the given directory and return an array of filenames.
//get the post by its slug (get post)
//get all posts and sort them by the newest date. (get posts)

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Post = {
  slug: String;
  title: String;
  date: String;
  content: string;
  [key: string]: any;
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
    date: String(data.date),
    content,
    ...data,
  };

  return post;
}
