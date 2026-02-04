import Section from '@/app/_components/Layout/Section/Section'
import style from './FavouritesSection.module.sass'
import InsetContainer from '@/app/_components/Layout/InsetContainer/InsetContainer'

export default function FavouritesSection() {
  return (
    <Section id="favourites_section">
      <InsetContainer variant="pure" className={style.favourites_container}>
        <div></div>
      </InsetContainer>
    </Section>
  )
}
