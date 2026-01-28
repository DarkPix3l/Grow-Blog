import style from './MoodSection.module.sass'
import PostRow from '@/app/_components/PostDisplay/PostRow/PostRow'
import Section from '@/app/_components/Layout/Section/Section'
import TextBody from '@/app/_components/Ui/TextBody/TextBody'
import FlexWrapper from '@/app/_components/Ui/FlexWrapper/FlexWrapper'
import WeatherWidget from '@/app/_components/Ui/WeatherWidget/WeatherWidget'
import InsetContainer from '@/app/_components/Layout/InsetContainer/InsetContainer'
import { MappedPosts } from '@/types/types'

interface MoodSectionProps {
  weatherPosts: MappedPosts
}
export default function MoodSection({ weatherPosts }: MoodSectionProps) {
  return (
    <Section id="mood-section" className={style.mood_section}>
      <InsetContainer variant="pure" className={style.moodContainer}>
        <FlexWrapper className="flex_center">
          <h2>Weather mood Pickup</h2>
          <TextBody>
            Whether it's a rainy day for deep thinking or a bright morning for quick inspiration, we’ve got the right
            story for your mood.
          </TextBody>
        </FlexWrapper>
        <PostRow posts={weatherPosts} variant="static" layout="compact" ContainerClassName={style.mood_row} />
      </InsetContainer>
      <InsetContainer variant="pure" className={style.weatherContainer}>
        <WeatherWidget />
      </InsetContainer>
    </Section>
  )
}
