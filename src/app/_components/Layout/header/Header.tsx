'use client'

import { useConditionalRendering } from '@/_hooks/ConditionalRendering'
import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader'
import { useState, useEffect } from 'react'

export default function Header() {
  const isMobile = useConditionalRendering('(max-width: 768px)')
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return isMobile ? <MobileHeader /> : <DesktopHeader />
}
