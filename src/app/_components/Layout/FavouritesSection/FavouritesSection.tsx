// FavouritesSection.tsx
// Section containing the user's favourite articles
// Mockup data for now as another provider must be chosen and additional pages implemented

import Section from '@/app/_components/Layout/Section/Section'
import style from './FavouritesSection.module.sass'
import InsetContainer from '@/app/_components/Layout/InsetContainer/InsetContainer'
import Badge from '@/app/_components/Ui/Badge/Badge'
import { CATEGORY_MAP, CategoryKey } from './data'

export default function FavouritesSection() {
  // Mockup categories
  const userFavourites: CategoryKey[] = ['sea', 'mystery', 'neutral', 'lifestyle', 'tech']
  return (
      <Section id="favourites_section">
      <InsetContainer variant="pure" className={style.favourites_container}>
        {/* Generate Badge components based on the user's saved categories */}
        {userFavourites.map((key) => {
          // Lookup category metadata. Falls back to 'neutral' if the key is not found.
          const data = CATEGORY_MAP[key] || CATEGORY_MAP['neutral']
          return <Badge key={key} goTo={data.path} ariaLabel={data.label} icon={data.icon} />
        })}
      </InsetContainer>
    </Section>
  )
}
