import styles from "./page.module.sass";
import { getLatestPosts } from "@/lib/posts";
import ArticleCard from "./_components/_article/ArticleCard";
import InsetContainer from "./_components/_InsetContainer/InsetContainer";

export default function Home() {
  const latestPosts = getLatestPosts(4);
  return (
    <main>
      <InsetContainer className={styles.inset_homepage}>
        <h1>GROW BLOG/_</h1>
        <div className={styles.separator}>
          <p>
            A blog platform built for the world. Share your thoughts, tutorials, and stories, and let our tools translate your content seamlessly. Write freely while your audience enjoys a clean, distraction-free reading experience, always in their own language.
          </p>
        </div>
        <section className={styles.latest}>
          <h2>Latest Posts</h2>
          <div className={styles.latestPosts}>
            {latestPosts.map((post) => (
              <ArticleCard
                key={post.slug}
                category={post.category ?? "General"}
                title={post.title}
                authorImg={post.author.picture}
                authorName={post.author.name}
                summary={post.excerpt}
                cover={post.coverImage}
                slug={post.slug}
              />
            ))}
          </div>
        </section>
      </InsetContainer>
    </main>
  );
}
