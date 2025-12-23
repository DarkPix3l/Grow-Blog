import style from './page.module.sass'
import Image from 'next/image'
import InsetContainer from '../_components/_InsetContainer/InsetContainer'
import NextArticle from '../_components/NextArticle/NextArticle'
import { FiArrowLeftCircle } from 'react-icons/fi'
import Link from 'next/link'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { getBlogEntryBySlug } from '@/_lib/contentful-posts'
import { mapPost, ArticlePageProps } from '@/types/types'
import MainArticle from '../_components/MainArticle/MainArticle'
import { ArticleHeading } from '@/app/_components/ArticleHeading/ArticleHeading'

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params
    // get the raw post
    const rawPost = await getBlogEntryBySlug(slug)

    // use the adapter to map
    const post = mapPost(rawPost!)

    /* in this case, preferred props drilling instead of second fetching in children */

    return (
        <main className={style.maincontainer}>
            <InsetContainer>
                <div className={style.main_article}>
                    <aside>
                        <input type="checkbox" name="slideUp" id="slideUp" />
                        <IoIosArrowDropupCircle size={50} className={style.arrowUp} />

                        <ArticleHeading post={post} />
                        <div>
                            <div className={style.deko}>
                                <div className={style.circle}></div>
                                <div className={style.line}></div>
                                <div className={style.circle}></div>
                            </div>
                            <NextArticle currentSlug={post.slug} />
                        </div>
                        <Link href="/" className={style.inset}>
                            <FiArrowLeftCircle size={32} />
                            <p>Back to Home</p>
                        </Link>
                    </aside>
                    <hr />
                    <MainArticle post={post} />
                </div>
            </InsetContainer>
        </main>
    )
}
