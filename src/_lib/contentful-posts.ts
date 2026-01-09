import { client } from '@/_lib/contentful-client'
import { PostQueryResult, Post, MappedPost, mapPost } from '@/types/types'

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
export const getPostsByCategory = async (cat: string): Promise<PostQueryResult> => {
  const entries = await client.getEntries({
    content_type: 'grow-blog',
    order: ['-sys.createdAt'],
    'fields.categories[in]': cat,
    limit: 3,
  })

  return entries as unknown as PostQueryResult
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
