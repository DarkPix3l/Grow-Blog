import { MainArticleProps } from '@/types/types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import style from './MainArticle.module.sass'
import ErrorComp from '../../NotFoundComponent/NotFoundComponent'

export default async function MainArticle({ post }: MainArticleProps) {
  // internal error handling
  if (!post) {
    return <ErrorComp imgH={150} imgW={150} errorMessage="The article could not be found." />
  }

  return (
    <article className={style.right_section}>
      <figure>
        <div className={style.img_mask}>
          <Image
            src={post.coverImage}
            alt={`${post.title}image`}
            width={100}
            height={100}
            sizes="100%"
            loading="eager"
            priority
          />
        </div>
        <figcaption>
          <em>{post.photoCredit ?? ''}</em>
        </figcaption>
      </figure>
      <div className={style.article_text}>{documentToReactComponents(post.content)}</div>
    </article>
  )
}
