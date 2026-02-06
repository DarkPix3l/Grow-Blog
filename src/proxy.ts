// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Now handling
function handleTheme(request: NextRequest, response: NextResponse) {
  const theme = request.cookies.get('theme')
  if (!theme) {
    response.cookies.set('theme', 'dark', { path: '/', maxAge: 31536000 })
  }
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  // 
  handleTheme(request, response)
  // handleAuth(request, response)
  
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}