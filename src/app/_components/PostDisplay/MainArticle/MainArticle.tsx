import { MainArticleProps } from '@/types/types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import style from './MainArticle.module.sass'
import ErrorComp from '../../NotFoundComponent/NotFoundComponent'
import { MARKS, BLOCKS, NodeData } from '@contentful/rich-text-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default async function MainArticle({ post }: MainArticleProps) {
  // internal error handling
  if (!post) {
    return <ErrorComp imgH={150} imgW={150} errorMessage="The article could not be found." />
  }

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: NodeData, children: React.ReactNode) => {
        if (node.content.length === 1 && node.content[0].marks.find((x: NodeData) => x.type === MARKS.CODE)) {
          return <div>{children}</div>
        }
        return <p>{children}</p>
      },
    },
    renderMark: {
      [MARKS.CODE]: (text: React.ReactNode) => {
        return (
          <SyntaxHighlighter
            language="javascript"
            style={a11yDark}
            wrapLines={true}
            // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            customStyle={{
              margin: '1.5em auto',
              padding: '1em',
              borderRadius: '8px',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              backgroundColor: '#393131',
            
            }}
          >
            {String(text)}
          </SyntaxHighlighter>
        )
      },
    },
  }

  return (
    <article className={style.right_section}>
      <figure>
        <div className={style.img_mask}>
          <Image
            src={post.coverImage}
            alt={`${post.title}image`}
            fill
            sizes="1200px"
          />
        </div>
        <figcaption>
          <em>{post.photoCredit ?? ''}</em>
        </figcaption>
      </figure>
      <div className={style.article_text}>{documentToReactComponents(post.content, options)}</div>
    </article>
  )
}
