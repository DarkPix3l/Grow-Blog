// ArticleCard.tsx - Multipurpose card component
// Variants: 'flip' (3D backface with bg-image & excerpt) | 'static' (Standard card)
// Layouts: 'full' (Latest) | 'compact' (Weather-mood) | 'mini' (categories)

import Image from 'next/image'
import style from './ArticleCard.module.sass'
import { FiArrowRightCircle } from 'react-icons/fi'
import Link from 'next/link'
import { ArticleCardProps } from '@/types/types'

export default function ArticleCard({
  title,
  slug,
  excerpt,
  coverImage,
  authorName,
  authorPicture,
  categories,
  variant = 'flip',
  layout = 'full',
}: ArticleCardProps) {
  return (
    <Link href={`/${slug}`} className={style.clickable} data-layout={layout} data-variant={variant}>
      {/* FRONT */}
      <article className={style.card}>
        <div className={style.card_body}>
          {layout === 'full' ? (
            <div className={style.card_category}>
              {categories.map((cat: string) => (
                <p data-testid="categoryField" key={cat}>
                  {cat}
                </p>
              ))}
            </div>
          ) : null}
          <div>
            <h3 data-testid="cardTitle">{title}</h3>
            <div className={style.author_infos}>
              <Image src={authorPicture} alt={`${authorName}, author picture`} width={40} height={40} />
              <p>{`written by ${authorName}`}</p>
            </div>
          </div>
        </div>
        {layout === 'mini' ? null : (
          <div className={style.card_action}>
            <p>go to article</p>
            <FiArrowRightCircle size={32} />
          </div>
        )}
      </article>

      {/* BACK */}
      {variant === 'flip' ? (
        <article className={style.back}>
          <div className={style.card_body}>
            {layout === 'full' ? (
              <div className={style.card_category}>
                {categories.map((cat: string) => (
                  <p data-testid="categoryField" key={cat}>
                    {cat}
                  </p>
                ))}
              </div>
            ) : null}
            <div>
              <p className={style.excerpt}>{excerpt}</p>
            </div>
          </div>
          <Image src={coverImage} alt={`${title}, image`} fill sizes="(max-width: 530px) 100vw" />
          {layout === 'mini' ? null : (
            <div className={style.card_action}>
              <p>go to article</p>
              <FiArrowRightCircle size={32} />
            </div>
          )}
        </article>
      ) : null}
    </Link>
  )
}
