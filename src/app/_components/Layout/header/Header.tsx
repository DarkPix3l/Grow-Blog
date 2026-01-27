'use client'

import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader'

export default function Header() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  )
}
