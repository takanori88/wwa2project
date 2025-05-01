import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // テスト用にログを出したいURLを限定
  if (pathname === '/wp-admin/setup-config.php') {
    console.log('🛡️ Blocked test path hit:', pathname);
    console.log('👀 User-Agent:', userAgent);
    return new NextResponse('Forbidden (test path)', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/wp-admin/setup-config.php'] // ✅ 対象パスのみMiddlewareを実行
};
