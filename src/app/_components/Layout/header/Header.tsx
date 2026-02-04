'use client'

import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader'
import { HEADER_LINKS } from '@/_lib/HeaderData'
import type { HeaderLink } from '@/_lib/HeaderData'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function Header() {
  const segments = useSelectedLayoutSegments()
  const key = segments[0]
  const currentLinks: HeaderLink[] = HEADER_LINKS[key] || HEADER_LINKS.default

  return (
    <>
      <MobileHeader links={currentLinks} />
      <DesktopHeader links={currentLinks} />
    </>
  )
}
