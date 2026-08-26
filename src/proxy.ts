import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';

const handleMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleMiddleware(request);
}

export default handleMiddleware;

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
