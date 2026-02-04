//Main_Page

import { getLatestPost, getPostsByCategory, mapWeatherToCategory } from '@/_lib/contentful-posts'
import { mapPost } from '@/types/types'
// import styles from './page.module.sass'
import Footer from './_components/Layout/Footer/Footer'
import IntroSection from './_components/Layout/IntroSection/IntroSection'
import CategoriesSection from './_components/Layout/CategoriesSection/CategoriesSection'
import MoodSection from './_components/Layout/MoodSection/MoodSection'
import FavouritesSection from './_components/Layout/FavouritesSection/FavouritesSection'

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
        <MoodSection weatherPosts={weatherPosts} />
        <FavouritesSection/>
      </main>
      <Footer />
    </>
  )
}
