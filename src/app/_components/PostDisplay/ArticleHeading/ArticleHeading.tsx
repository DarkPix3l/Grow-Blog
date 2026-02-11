import { MappedPost } from '@/types/types'
import style from './ArticleHeading.module.sass'
import Image from 'next/image'
import TextBody from '../../Ui/TextBody/TextBody'
import FlexWrapper from '../../Ui/FlexWrapper/FlexWrapper'

export async function ArticleHeading({ post }: { post: MappedPost | null }) {
  // internal error handling preventing page break
  if (!post) {
    return <TextBody>The title could not be found.</TextBody>
  }
  return (
    <div className={style.article_heading}>
      <h2>{post.title}</h2>
      {/* author's infos */}
      <FlexWrapper addClass="flex_row_start">
        <Image src={post.authorPicture} alt={`${post.authorName} image`} width={40} height={40} />
        <FlexWrapper>
          <TextBody>{`written by ${post.authorName}`}</TextBody>
          <TextBody>
            <time dateTime={new Date(post.date).toISOString()}>
              {new Date(post.date).toLocaleDateString('en-UK', {
                year: 'numeric',
                day: 'numeric',
                month: 'long',
              })}
            </time>
          </TextBody>
        </FlexWrapper>
      </FlexWrapper>
    </div>
  )
}
