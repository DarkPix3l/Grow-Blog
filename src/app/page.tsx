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
            A blog that grows with you. Whether you’re sharing thoughts, tutorials, or stories, our platform adapts to your style. Write freely,
            design your space with simple tools, and let your audience enjoy a clean, distraction-free reading experience.
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
