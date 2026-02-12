
import { cookies } from 'next/headers'

export default async function CookieGetter({ children, className}: { children: React.ReactNode , className?: string}) {
      const cookieStore = await cookies()
      const theme = cookieStore.get('theme')?.value
      // Create the class string based on the cookie value
      const themeClass = theme === 'theme-dark' ? 'theme-light': 'theme-dark'
  return (
    <body data-theme={themeClass} className={className}>{children}</body>
  )
}
