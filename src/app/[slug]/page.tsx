import { getPostBySlug } from "@/_lib/posts";
import parser from "@/_lib/parser";
import style from "./page.module.sass";
import Image from "next/image";
import InsetContainer from "../_components/_InsetContainer/InsetContainer";
import NextArticle from "../_components/NextArticle/NextArticle";
import { FiArrowLeftCircle } from "react-icons/fi";
import Link from "next/link";

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
    <main className={style.maincontainer}>
      <InsetContainer>
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
            <div>
              <div className={style.deko}>
                <div className={style.circle}></div>
                <div className={style.line}></div>
                <div className={style.circle}></div>
              </div>
              <NextArticle currentSlug={slug} />
            </div>
            <Link
              href="/"
              className={style.inset}>
              <FiArrowLeftCircle size={32} />
              <p>Back to Home</p>
            </Link>
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
                <em>Photo credit: {post.photoCredit?.cover ?? "Unknown"}</em>
              </figcaption>
            </figure>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className={style.article_text}
            />
          </section>
        </article>
      </InsetContainer>
    </main>
  );
}
