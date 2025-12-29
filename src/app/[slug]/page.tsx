import style from './page.module.sass'
import InsetContainer from '../_components/_InsetContainer/InsetContainer'
import NextArticle from '../_components/NextArticle/NextArticle'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { getBlogEntryBySlug } from '@/_lib/contentful-posts'
import { mapPost, ArticlePageProps } from '@/types/types'
import MainArticle from '../_components/MainArticle/MainArticle'
import { ArticleHeading } from '@/app/_components/ArticleHeading/ArticleHeading'
import { Divider } from '@/app/_components/Divider/Divider'
import Button from '../_components/Button/Button'
import { notFound } from 'next/navigation'

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params

    // get the raw post
    const rawPost = await getBlogEntryBySlug(slug)

    if (!rawPost) {
        notFound()
    }

    // use the adapter to map
    const post = mapPost(rawPost)

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
                            <Divider orientation="horizontal" flexDir="row" />
                            <NextArticle currentSlug={post.slug} />
                        </div>
                        <Button variant="go-back-btn-inset" goTo="/" ariaLabel="go back button">
                            <FiArrowLeftCircle size={32} />
                            <p>Back to Home</p>
                        </Button>
                    </aside>
                    <Divider orientation="vertical" flexDir="column" deko={false} />
                    <MainArticle post={post} />
                </div>
            </InsetContainer>
        </main>
    )
}
