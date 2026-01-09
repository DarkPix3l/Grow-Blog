import styles from './page.module.sass'
import InsetContainer from './_components/Layout/InsetContainer/InsetContainer'
import CtaBar from './_components/Layout/CTAbar/CtaBar'
import { getLatestPost, getPostsByCategory } from '@/_lib/contentful-posts'
import { mapPost } from '@/types/types'
import ArticleCard from './_components/PostDisplay/ArticleCard/ArticleCard'
import PostRow from './_components/PostDisplay/PostRow/PostRow'
import Section from './_components/Layout/Section/Section'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
})
export default async function Home() {
  const latestPosts = (await getLatestPost()).items.map(mapPost)
  //fetch by categories
  const techPosts = (await getPostsByCategory('tech')).items.map(mapPost)
  const nextjsPosts = (await getPostsByCategory('nextjs')).items.map(mapPost)
  const serverPosts = (await getPostsByCategory('server')).items.map(mapPost)

  return (
    <main>
      <Section id={styles.intro_section}>
        <InsetContainer variant="fixed" className={styles.inset_homepage}>
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
          <div className={styles.latest}>
            <h2>Latest Posts</h2>
            <div className={styles.latestPosts}>
              {latestPosts.map((post) => (
                <ArticleCard key={post.slug} {...post} variant="flip" layout="full" />
              ))}
            </div>
          </div>
        </InsetContainer>
      </Section>
      <Section id={styles.categories_section}>
        <InsetContainer className={styles.dark_inset}>
          <h2 className={anton.className}>blog</h2>
        </InsetContainer>
        <InsetContainer className={styles.categories_container}>
          <PostRow title="Tech" posts={techPosts} />
          <PostRow title="NextJS" posts={nextjsPosts} />
          <PostRow title="Server" posts={serverPosts} />
        </InsetContainer>
      </Section>
    </main>
  )
}
