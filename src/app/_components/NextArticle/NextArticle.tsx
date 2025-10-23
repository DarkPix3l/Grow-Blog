import style from "./NextArticle.module.sass";
import { getRandomPosts } from "@/_lib/posts";
import Image from "next/image";
import Link from "next/link";

export default function NextArticle({ currentSlug }: { currentSlug: string }) {
  const randomPost = getRandomPosts(2, currentSlug);
  return (
    <div className={style.random_article_block}>
      <h3>You may also like</h3>
      {randomPost.map((post) => (
        <Link
          href={post.slug}
          key={post.slug}>
          <div className={style.snippet}>
            <Image
              src={post.coverImage}
              width={120}
              height={120}
              alt={post.title}
              sizes="100%"
            />
            <div className={style.text_infos}>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
