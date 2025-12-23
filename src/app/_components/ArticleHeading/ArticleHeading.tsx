import { MappedPost } from '@/types/types'
import style from './ArticleHeading.module.sass'
import Image from 'next/image'

export async function ArticleHeading({ post }: { post: MappedPost | null }) {
    // internal error handling preventing page break
    if (!post) {
        return <p>The title could not be found.</p>
    }
    return (
        <div className={style.article_heading}>
            <h2>{post.title}</h2>
            <div className={style.author_infos}>
                <Image
                    src={post.authorPicture}
                    alt={`${post.authorName} image`}
                    width={40}
                    height={40}
                />
                <p>{`written by ${post.authorName}`}</p>
            </div>
        </div>
    )
}
