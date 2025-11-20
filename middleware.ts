import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Check if it's demo subdomain
  const isDemo = hostname.includes('demo.kisag.co') || hostname.startsWith('demo.');

  // If accessing demo root, REWRITE to dashboard (not redirect)
  if (isDemo && pathname === '/') {
    // Clone the URL and set the pathname to /dashboard
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';

    // REWRITE (not redirect) - keeps URL as demo.kisag.co but serves /dashboard content
    return NextResponse.rewrite(url);
  }

  // If accessing demo.kisag.co/dashboard directly, allow it through
  if (isDemo && pathname.startsWith('/dashboard')) {
    return NextResponse.next();
  }

  // For all other routes, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - *.png, *.jpg, etc. (static assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js)).*)',
  ],
};
