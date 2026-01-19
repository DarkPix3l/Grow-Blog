"use client"
import style from './CategoryTitle.module.sass'
import { Divider } from '../Divider/Divider'
import { useConditionalRendering } from '@/_hooks/ConditionalRendering'
import { useState, useEffect } from 'react'
interface CategoryTitleProps {
  title: string
}

export default function CategoryTitle({ title }: CategoryTitleProps) {
  const isMobile = useConditionalRendering('(max-width: 1023px)')
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

  return (
    <>
      <h3 className={style.title}>{title}</h3>
      {isMobile ? null : <Divider className={style.ver_div} orientation="vertical" flexDir="row" deko={false} />}
    </>
  )
}
