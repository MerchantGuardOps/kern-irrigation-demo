import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // If accessing demo.kisag.co root (with or without www), redirect to dashboard
  if ((hostname.includes('demo.kisag.co') || hostname.startsWith('demo.')) && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
