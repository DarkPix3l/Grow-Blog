import Image from 'next/image'
import style from './ArticleCard.module.sass'
import { FiArrowRightCircle } from 'react-icons/fi'
import Link from 'next/link'
import { MappedPost } from '@/types/types'

export default function ArticleCard({
    categories,
    title,
    authorPicture,
    authorName,
    slug,
    date,
}: MappedPost) {
    return (
        <Link href={`/${slug}`} className={style.clickable}>
            <article className={style.card}>
                <div className={style.card_body}>
                    <div className={style.card_category}>
                        {categories.map((cat: string) => (
                            <p data-testid="categoryField" key={cat}>
                                {cat}{' '}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h3 data-testid="cardTitle">{title}</h3>
                        <div className={style.author_infos}>
                            <Image
                                src={authorPicture}
                                alt={`${authorName}, author picture`}
                                width={40}
                                height={40}
                            />
                            <p>{`written by ${authorName}`}</p>
                        </div>
                    </div>
                    <div className={style.dynamic_space}></div>
                </div>
                <div className={style.card_action}>
                    <p>go to article</p>
                    <FiArrowRightCircle size={32} />
                </div>
            </article>
        </Link>
    )
}
