import CategoryTitle from '../../Ui/CategoryTitle/CategoryTitle'
import FlexWrapper from '../../Ui/FlexWrapper/FlexWrapper'
import InsetContainer from '../InsetContainer/InsetContainer'
import NavLinks from '../navLinks/NavLinks'
import { NavProps } from '../navLinks/NavLinks'
import style from './Footer.module.sass'

export default function Footer() {
  const navigation: NavProps['links'] = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Blog' },
    { href: '/', label: 'Projects' },
    { href: '/', label: 'Archive' },
  ]

  const Learn: NavProps['links'] = [
    { href: '/', label: 'Tutorials' },
    { href: '/', label: 'Guides' },
    { href: '/', label: 'Snippets' },
    { href: '/', label: 'Best practices' },
  ]

  const Info: NavProps['links'] = [
    { href: '/', label: 'About' },
    { href: '/', label: 'Contact' },
    { href: '/', label: 'Privacy' },
    { href: '/', label: 'License' },
  ]

  return (
    <footer aria-label="Site Footer">
      <InsetContainer variant="pure" className={style.footer_container}>
        <FlexWrapper addClass="flex_footer_navlinks_wrapper">
          <NavLinks links={navigation} title="Navigation" />
          <NavLinks links={Learn} title="Learn" />
          <NavLinks links={Info} title="Info" />
        </FlexWrapper>
        <CategoryTitle title="Grow Blog" className={style.footerTitle} />
      </InsetContainer>
    </footer>
  )
}
