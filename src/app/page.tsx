//Main_Page

import styles from './page.module.sass'
import InsetContainer from './_components/Layout/InsetContainer/InsetContainer'
import { getLatestPost, getPostsByCategory, mapWeatherToCategory } from '@/_lib/contentful-posts'
import { mapPost } from '@/types/types'
import PostRow from './_components/PostDisplay/PostRow/PostRow'
import Section from './_components/Layout/Section/Section'
import TextBody from './_components/Ui/TextBody/TextBody'
import FlexWrapper from './_components/Ui/FlexWrapper/FlexWrapper'
import Footer from './_components/Layout/Footer/Footer'
import WeatherWidget from './_components/Ui/WeatherWidget/WeatherWidget'
import IntroSection from './_components/Layout/IntroSection/IntroSection'
import CategoriesSection from './_components/Layout/CategoriesSection/CategoriesSection'

export default async function Home() {
  const latestPosts = (await getLatestPost()).items.map(mapPost)
  //fetch by categories
  const techPosts = (await getPostsByCategory('tech', 3)).items.map(mapPost)
  const nextjsPosts = (await getPostsByCategory('nextjs', 3)).items.map(mapPost)
  const careerPosts = (await getPostsByCategory('career', 3)).items.map(mapPost)
  //fetch by weather
  const weatherCategory = await mapWeatherToCategory()
  const weatherPosts = (await getPostsByCategory(weatherCategory, 4)).items.map(mapPost)

  return (
    <>
      <main>
        <IntroSection posts={latestPosts} />
        <CategoriesSection techPosts={techPosts} nextjsPosts={nextjsPosts} careerPosts={careerPosts} />

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
