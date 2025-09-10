import { getPostBySlug } from "@/lib/posts";
import parser from "@/lib/parser";
import style from "./page.module.sass";
import Image from "next/image";
import InsetContainer from "../_components/_InsetContainer/InsetContainer";
import NextArticle from "../_components/NextArticle/NextArticle";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const content = await parser(post.content);

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <InsetContainer className={style.inset_container_article}>
      <article className={style.main_article}>
        <aside>
          <div>
            <h2>{post.title}</h2>
            <div className={style.author_infos}>
              <Image
                src={post.author.picture}
                alt={`${post.author.name} image`}
                width={40}
                height={40}
              />
              <p>{`written by ${post.author.name}`}</p>
            </div>
          </div>
          <div className={style.deko}>
            <div className={style.circle}></div>
            <div className={style.line}></div>
            <div className={style.circle}></div>
          </div>
          <NextArticle currentSlug={slug} />
        </aside>
        <hr />
        <section className={style.right_section}>
          <figure>
            <Image
              src={post.coverImage}
              alt={`${post.title}image`}
              width={100}
              height={100}
              sizes="100%"
            />
            <figcaption>
              Photo credit: {post.photoCredit?.cover ?? "Unknown"}
            </figcaption>
          </figure>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className={style.article_text}
          />
        </section>
      </article>
    </InsetContainer>
  );
}
