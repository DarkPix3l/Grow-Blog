import { client } from '@/_lib/contentful-client'
import { PostQueryResult, Post, MappedPost, mapPost } from '@/types/types'
import { cookies } from 'next/headers'

// get all posts
export const getBlogEntries = async (): Promise<PostQueryResult> => {
  const entries = await client.getEntries({
    content_type: 'grow-blog',
    limit: 10,
  })

  return entries as unknown as PostQueryResult
}

// get post by slug
export const getBlogEntryBySlug = async (slug: string): Promise<Post | null> => {
  const result = await client.getEntries({
    content_type: 'grow-blog',
    'fields.slug': slug,
    limit: 1,
  })

  if (!result.items.length) return null

  return result.items[0] as unknown as Post
}

// get latest posts
export const getLatestPost = async (): Promise<PostQueryResult> => {
  const entries = await client.getEntries({
    content_type: 'grow-blog',
    order: ['-fields.date'],
    // order: ['-sys.createdAt'],
    limit: 4,
  })

  return entries as unknown as PostQueryResult
}

// get posts by category
export const getPostsByCategory = async (cat: string, limit: number): Promise<PostQueryResult> => {
  const entries = await client.getEntries({
    content_type: 'grow-blog',
    order: ['-sys.createdAt'],
    'fields.categories[in]': cat,
    limit: limit,
  })

  return entries as unknown as PostQueryResult
}

//Picking up the cookie with the weather code and assign it to a "category"
//Can be used by ^ getPostsByCategory
export const mapWeatherToCategory = async (): Promise<string> => {
  const cookieStore = await cookies()
  const weatherCookie = cookieStore.get('user-weather-code')

  // 3. If no cookie exists yet (first visit), return a fallback category
  if (!weatherCookie) return 'tech'

  // Conversion is necessary because cookies are always strings
  const code = Number(weatherCookie.value)
  if (code === 800) return 'happy'
  if (code >= 801 && code <= 804) return 'neutral'
  if (code >= 500 && code < 600) return 'cozy'
  if (code >= 200 && code < 300) return 'excited'
  if (code >= 600 && code < 700) return 'peaceful'
  if (code >= 700 && code < 800) return 'calm'
  return 'tech'
}

// get random posts
export const getRandomPosts = async (limit: number, currentSlug: string): Promise<MappedPost[]> => {
  //  the result is an object { items: Post[] })
  const result = await getBlogEntries()

  // map can't work unless the property is extracted
  // We use result.items because getBlogEntries returns a PostQueryResult
  const allPosts = result.items.map((post) => mapPost(post))

  // filter for excluding the current post, same as before
  const filteredPosts = allPosts.filter((post) => post.slug !== currentSlug)

  // Shuffle (Fisher-Yates) - same as before
  const tempPosts = [...filteredPosts]
  for (let i = tempPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[tempPosts[i], tempPosts[j]] = [tempPosts[j], tempPosts[i]]
  }

  return tempPosts.slice(0, limit)
}
