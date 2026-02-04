import style from './CategoriesSection.module.sass'
import Section from '../Section/Section'
import InsetContainer from '../InsetContainer/InsetContainer'
import TextBody from '@/app/_components/Ui/TextBody/TextBody'
import FlexWrapper from '@/app/_components/Ui/FlexWrapper/FlexWrapper'
import PostRow from '@/app/_components/PostDisplay/PostRow/PostRow'
import CategoryTitle from '@/app/_components/Ui/CategoryTitle/CategoryTitle'
import { anton } from '@/_lib/font'
import { MappedPosts } from '@/types/types'

interface CategoriesSectionProps {
  techPosts: MappedPosts
  nextjsPosts: MappedPosts
  careerPosts: MappedPosts
}

export default function CategoriesSection({ techPosts, nextjsPosts, careerPosts }: CategoriesSectionProps) {
  return (
    <Section id="categories_section" className={style.categories_section}>
      <InsetContainer variant="pure" className={style.dark_inset}>
        <h2 className={anton.className}>blog</h2>
      </InsetContainer>

      <InsetContainer variant="pure" className={style.categories_container}>
        <FlexWrapper className="flex_center">
          <h2>Browse by Topic</h2>
          <TextBody>
            Looking for something specific? Dive into our specialized categories to find the stories, tutorials, and
            insights that interest you most
          </TextBody>
        </FlexWrapper>
        <FlexWrapper className="flex_row">
          <CategoryTitle title="Tech" />
          <PostRow posts={techPosts} variant="static" layout="mini" ContainerClassName={style.row} />
        </FlexWrapper>

        <FlexWrapper className="flex_row">
          <CategoryTitle title="Next Js" />
          <PostRow posts={nextjsPosts} variant="static" layout="mini" ContainerClassName={style.row} />
        </FlexWrapper>

        <FlexWrapper className="flex_row">
          <CategoryTitle title="Career" />
          <PostRow posts={careerPosts} variant="static" layout="mini" ContainerClassName={style.row} />
        </FlexWrapper>
      </InsetContainer>
    </Section>
  )
}
