import { Divider } from '@/app/_components/Ui/Divider/Divider'
import Section from '../Section/Section'
import InsetContainer from '../InsetContainer/InsetContainer'
import TextBody from '@/app/_components/Ui/TextBody/TextBody'
import CtaBar from '../CTAbar/CtaBar'
import FlexWrapper from '@/app/_components/Ui/FlexWrapper/FlexWrapper'
import PostRow from '@/app/_components/PostDisplay/PostRow/PostRow'
import style from './IntroSection.module.sass'
import { MappedPosts } from '@/types/types'

interface IntroSectionProps {
  posts: MappedPosts
}

export default function IntroSection({ posts }: IntroSectionProps) {
  return (
    <Section id="intro_section">
      <InsetContainer variant="fluid" className={style.mainPage_container}>
        <div className={style.wrapper}>
          <h1>GROW BLOG/_</h1>
          <Divider orientation="horizontal" deko={false} className={style.separator} />
          <TextBody>
            A blog platform built for the world. Share your thoughts, tutorials, and stories, and let our tools
            translate your content seamlessly. Write freely while your audience enjoys a clean, distraction-free reading
            experience, always in their own language.
          </TextBody>
          <Divider orientation="horizontal" deko={false} className={style.separator} />
          <CtaBar />
        </div>
        <div className={style.latest}>
          <FlexWrapper addClass="flex_center" className={style.flex_wrapper_intro_section}>
            <h2>Latest Posts</h2>
            <TextBody>
              Stay curious. A collection of our most recent thoughts, deep dives, and documented discoveries
            </TextBody>
          </FlexWrapper>
          <PostRow posts={posts} variant="flip" layout="full" ContainerClassName={style.latestPosts} />
        </div>
      </InsetContainer>
    </Section>
  )
}
