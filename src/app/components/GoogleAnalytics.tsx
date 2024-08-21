// components/GoogleAnalytics.tsx

'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '../lib/gtag';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null; // This component does not render anything
}
