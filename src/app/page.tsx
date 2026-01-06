import styles from './page.module.sass'
import InsetContainer from './_components/_InsetContainer/InsetContainer'
import CtaBar from './_components/_CTAbar/CtaBar'
import { getBlogEntries } from '@/_lib/contentful-posts'
import { mapPost } from '@/types/types'
import ArticleCard from './_components/ArticleCard/ArticleCard'

export default async function Home() {
  const data = await getBlogEntries()
  const latestPosts = data.items
    .map(mapPost)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 4)

  return (
    <main>
      <InsetContainer className={styles.inset_homepage}>
        <div className={styles.wrapper}>
          <h1>GROW BLOG/_</h1>
          <div className={styles.separator}>
            <p>
              A blog platform built for the world. Share your thoughts, tutorials, and stories, and let our tools
              translate your content seamlessly. Write freely while your audience enjoys a clean, distraction-free
              reading experience, always in their own language.
            </p>
          </div>
          <CtaBar />
        </div>
        <section className={styles.latest}>
          <h2>Latest Posts</h2>
          <div className={styles.latestPosts}>
            {latestPosts.map((post) => (
              <ArticleCard key={post.slug} {...post} variant = "flip" layout="full" />
            ))}
          </div>
        </section>
      </InsetContainer>
    </main>
  )
}
