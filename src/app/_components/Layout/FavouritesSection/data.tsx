// data.tsx
// Mockup data
import { TbTrident, TbSun, TbCloudRain, TbGhost } from 'react-icons/tb'
import { IoCodeWorking } from 'react-icons/io5'

export type CategoryData = {
  icon: React.ReactElement
  path: string
  label: string
}
export type CategoryKey = 'sea' | 'lifestyle' | 'mystery' | 'neutral' | 'tech'

export const CATEGORY_MAP: Record<CategoryKey, CategoryData> = {
  sea: {
    icon: <TbTrident size={50} />,
    path: '/sea',
    label: 'Explore Sea',
  },
  lifestyle: {
    icon: <TbSun size={50} />,
    path: '/lifestyle',
    label: 'Lifestyle Tips',
  },
  mystery: {
    icon: <TbGhost size={50} />,
    path: '/mystery',
    label: 'Mystery Boxes',
  },
  neutral: {
    icon: <TbCloudRain size={50} />,
    path: '/',
    label: 'Tips for rainy days',
  },
  tech: {
    icon: <IoCodeWorking size={50} />,
    path: '/',
    label: 'View all posts in Technology',
  },
}