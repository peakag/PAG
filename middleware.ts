import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient, parse, serialize } from '@supabase/ssr';
import { Database } from './lib/supabase-types';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Parse cookies from the request
  const cookies = parse(req.headers.get('cookie') ?? '');

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookies[key],
        set: (key, value, options) => {
          res.headers.append('Set-Cookie', serialize(key, value, options));
        },
        remove: (key, options) => {
          res.headers.append('Set-Cookie', serialize(key, '', { ...options, maxAge: -1 }));
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }
  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'],
}; 