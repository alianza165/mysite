import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  if (!token) {
    // Redirect to sign-in page if no token is found
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  // Continue to the requested page if token is valid
  return NextResponse.next();
}

// Specify the routes you want the middleware to apply to
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
