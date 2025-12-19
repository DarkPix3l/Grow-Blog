import style from './page.module.sass'
import Image from 'next/image'
import InsetContainer from '../_components/_InsetContainer/InsetContainer'
import NextArticle from '../_components/NextArticle/NextArticle'
import { FiArrowLeftCircle } from 'react-icons/fi'
import Link from 'next/link'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getBlogEntryBySlug } from '@/_lib/contentful-posts'
import { mapPost, ArticlePageProps } from '@/types/types'

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params
    // get the raw post
    const rawPost = await getBlogEntryBySlug(slug)

    // use the adapter to map
    const post = mapPost(rawPost!)
    return (
        <main className={style.maincontainer}>
            <InsetContainer>
                <article className={style.main_article}>
                    <aside>
                        <input type="checkbox" name="slideUp" id="slideUp" />
                        <IoIosArrowDropupCircle
                            size={50}
                            className={style.arrowUp}
                        />

                        <div>
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
                    <section className={style.right_section}>
                        <figure>
                            <div className={style.img_mask}>
                                <Image
                                    src={post.coverImage}
                                    alt={`${post.title}image`}
                                    width={100}
                                    height={100}
                                    sizes="100%"
                                />
                            </div>
                            <figcaption>
                                <em>{post.photoCredit ?? ''}</em>
                            </figcaption>
                        </figure>
                        <div className={style.article_text}>
                            {documentToReactComponents(post.content)}
                        </div>
                    </section>
                </article>
            </InsetContainer>
        </main>
    )
}
