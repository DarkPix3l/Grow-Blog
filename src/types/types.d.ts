import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'

export type Post = {
    fields: {
        title: string
        slug: string
        excerpt: string
        coverImage: Asset
        date: Date
        authorName: string
        authorPicture: Asset
        categories: string[]
        content: Document
    }
}

// list of posts (Prevents mutation of fetched posts)
export type Posts = ReadonlyArray<Post>

// Contentful getEntries() result (items only)
export type PostQueryResult = {
    items: Posts
}

//type for slug page
export interface ArticlePageProps {
    params: {
        slug: string
    }
}
