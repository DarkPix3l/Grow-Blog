import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'

// raw (from cms)
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

// ADAPTER
export function mapPost(item: Post) {
    return {
        title: item.fields.title,
        slug: item.fields.slug,
        excerpt: item.fields.excerpt,
        coverImage: `https:${item.fields.coverImage?.fields?.file?.url}`,
        date: new Date(item.fields.date),
        authorName: item.fields.authorName,
        authorPicture: `https:${item.fields.authorPicture?.fields?.file?.url}`,
        categories: item.fields.categories || [],
        content: item.fields.content,
    }
}
export type MappedPost = ReturnType<typeof mapPost>

// list of posts (Prevents mutation of fetched posts)
export type MappedPosts = ReadonlyArray<MappedPost>

// Contentful getEntries() result (items only)
export type PostQueryResult = {
    items: Post[]
}

//type for slug page
export interface ArticlePageProps {
    params: {
        slug: string
    }
}
