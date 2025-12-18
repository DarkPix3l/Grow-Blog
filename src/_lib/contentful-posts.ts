import { client } from '@/_lib/contentful-client'
import { PostQueryResult } from '@/types/types'

export const getBlogEntries = async (): Promise<PostQueryResult> => {
    const entries = await client.getEntries({
        content_type: 'grow-blog',
    })

    return entries as unknown as PostQueryResult
}
