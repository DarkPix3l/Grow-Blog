import { getPostBySlug, Post } from "@/lib/posts";
import parser from "@/lib/parser";
import style from "./page.module.sass";
import Image from "next/image";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug);
  const content = await parser(post.content);
  
  if (!post) {
    return <p>Post not found</p>;
  }
  return (
      <article className={style.main_article}>
        <aside>
          <h1>{post.title}</h1>
          <div className={style.author_infos}>
            <Image src={post.author.picture} alt={`${post.author.name} image`} width={40} height={40} />
            <p>{`written by ${post.author.name}`}</p>
          </div>
        </aside>
        <section className={style.right_section}>
          <figure>
            <Image src={post.coverImage} alt={`${post.title}image`} width={100} height={100} sizes="100%"/>
            <figcaption>Photo credit: {post.photoCredit?.cover ?? "Unknown"}</figcaption>
          </figure>
          <div dangerouslySetInnerHTML={{ __html: content }} className={style.article_text}/>
        </section>
      </article>
  );
}
