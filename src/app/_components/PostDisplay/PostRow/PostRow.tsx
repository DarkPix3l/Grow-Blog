// PostRow.tsx
import { Divider } from '../../Ui/Divider/Divider'
import ArticleCard from '../ArticleCard/ArticleCard'
import style from './PostRow.module.sass'
import { MappedPosts } from '@/types/types'

interface PostRowProps {
  title: string
  posts: MappedPosts
}

export default function PostRow({ title, posts }: PostRowProps) {
  return (
    <div className={style.row}>
      <h3>{title}</h3>

      <Divider orientation="vertical" flexDir="row" deko={false} />

      <div className={style.cardsSide}>
        {posts.map((post) => (
          <ArticleCard key={post.slug} {...post} variant="static" layout="mini" />
        ))}
      </div>
    </div>
  )
}
