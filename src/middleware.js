import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("better-auth.session_token")?.value;

  const { pathname } = request.nextUrl;

  // 🔐 NOT LOGGED IN → block admin & register
  if (!token) {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (pathname.startsWith("/register")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // 🔐 LOGGED IN → block login & register
  if (token) {
    if (pathname === "/login" || pathname === "/register") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register"],
};
