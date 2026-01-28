//Main_Page

import styles from './page.module.sass'
import InsetContainer from './_components/Layout/InsetContainer/InsetContainer'
import CtaBar from './_components/Layout/CTAbar/CtaBar'
import { getLatestPost, getPostsByCategory, mapWeatherToCategory } from '@/_lib/contentful-posts'
import { mapPost } from '@/types/types'
import PostRow from './_components/PostDisplay/PostRow/PostRow'
import Section from './_components/Layout/Section/Section'
import { Anton } from 'next/font/google'
import { Divider } from './_components/Ui/Divider/Divider'
import TextBody from './_components/Ui/TextBody/TextBody'
import FlexWrapper from './_components/Ui/FlexWrapper/FlexWrapper'
import CategoryTitle from './_components/Ui/CategoryTitle/CategoryTitle'
import Footer from './_components/Layout/Footer/Footer'
import WeatherWidget from './_components/Ui/WeatherWidget/WeatherWidget'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
})
export default async function Home() {
  const latestPosts = (await getLatestPost()).items.map(mapPost)
  //fetch by categories
  const techPosts = (await getPostsByCategory('tech', 3)).items.map(mapPost)
  const nextjsPosts = (await getPostsByCategory('nextjs', 3)).items.map(mapPost)
  const careerPosts = (await getPostsByCategory('career', 3)).items.map(mapPost)
  const weatherCategory = await mapWeatherToCategory()
  console.log(weatherCategory)
  const weatherPosts = (await getPostsByCategory(weatherCategory, 4)).items.map(mapPost)

  return (
    <>
      <main>
        <Section id="intro_section">
          <InsetContainer variant="fixed" className={styles.mainPage_container}>
            <div className={styles.wrapper}>
              <h1>GROW BLOG/_</h1>
              <Divider orientation="horizontal" deko={false} className={styles.separator} />
              <TextBody>
                A blog platform built for the world. Share your thoughts, tutorials, and stories, and let our tools
                translate your content seamlessly. Write freely while your audience enjoys a clean, distraction-free
                reading experience, always in their own language.
              </TextBody>
              <Divider orientation="horizontal" deko={false} className={styles.separator} />
              <CtaBar />
            </div>
            <div className={styles.latest}>
              <FlexWrapper className="flex_center">
                <h2>Latest Posts</h2>
                <TextBody>
                  Stay curious. A collection of our most recent thoughts, deep dives, and documented discoveries
                </TextBody>
              </FlexWrapper>
              <PostRow posts={latestPosts} variant="flip" layout="full" ContainerClassName={styles.latestPosts} />
            </div>
          </InsetContainer>
        </Section>

        <Section id="categories_section" className={styles.categories_section}>
          <InsetContainer variant="pure" className={styles.dark_inset}>
            <h2 className={anton.className}>blog</h2>
          </InsetContainer>

          <InsetContainer variant="pure" className={styles.categories_container}>
            <FlexWrapper className="flex_center">
              <h2>Browse by Topic</h2>
              <TextBody>
                Looking for something specific? Dive into our specialized categories to find the stories, tutorials, and
                insights that interest you most
              </TextBody>
            </FlexWrapper>
            <FlexWrapper className="flex_row">
              <CategoryTitle title="Tech" />
              <PostRow posts={techPosts} variant="static" layout="mini" ContainerClassName={styles.row} />
            </FlexWrapper>

            <FlexWrapper className="flex_row">
              <CategoryTitle title="Next Js" />
              <PostRow posts={nextjsPosts} variant="static" layout="mini" ContainerClassName={styles.row} />
            </FlexWrapper>

            <FlexWrapper className="flex_row">
              <CategoryTitle title="Career" />
              <PostRow posts={careerPosts} variant="static" layout="mini" ContainerClassName={styles.row} />
            </FlexWrapper>
          </InsetContainer>
        </Section>

        <Section id="mood-section" className={styles.mood_section}>
          <InsetContainer variant="pure" className={styles.moodContainer}>
            <FlexWrapper className="flex_center">
              <h2>Weather mood Pickup</h2>
              <TextBody>
                Whether it's a rainy day for deep thinking or a bright morning for quick inspiration, we’ve got the
                right story for your mood.
              </TextBody>
            </FlexWrapper>
            <PostRow posts={weatherPosts} variant="static" layout="compact" ContainerClassName={styles.mood_row} />
          </InsetContainer>
          <InsetContainer variant="pure" className={styles.weatherContainer}>
            <WeatherWidget />
          </InsetContainer>
        </Section>
      </main>
      <Footer />
    </>
  )
}
