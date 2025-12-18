import { client } from '@/_lib/contentful-client'
import { PostQueryResult, Post } from '@/types/types'

// get all posts
export const getBlogEntries = async (): Promise<PostQueryResult> => {
    const entries = await client.getEntries({
        content_type: 'grow-blog',
    })

    return entries as unknown as PostQueryResult
}

// get post by slug
export const getBlogEntryBySlug = async (
    slug: string
): Promise<Post | null> => {
    const queryOptions = {
        content_type: 'grow-blog',
        'fields.slug': slug,
        limit: 1,
    }

    const queryResult = await client.getEntries(queryOptions)

    if (!queryResult.items.length) {
        return null
    }

    return queryResult.items[0] as unknown as Post
}
