"use client"

import { useConditionalRendering } from '@/_hooks/ConditionalRendering'
import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader'

export default function Header() {
    const isMobile = useConditionalRendering('(max-width: 768px)')
    return isMobile ? <MobileHeader /> : <DesktopHeader />
}
