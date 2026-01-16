// PostRow.tsx
import ArticleCard from '../ArticleCard/ArticleCard'
import { PostRowProps } from '@/types/types'

export default function PostRow({ posts, ContainerClassName, variant, layout }: PostRowProps) {
  return (
    <div className={ContainerClassName}>
      {posts.map((post) => (
        <ArticleCard key={post.slug} {...post} variant={variant} layout={layout} />
      ))}
    </div>
  )
}
