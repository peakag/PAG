import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { Database } from './lib/supabase-types';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  try {
    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { req, res }
    );
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log('Middleware: session', session);

    if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
    return res;
  } catch (error) {
    console.error('Middleware error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}; 