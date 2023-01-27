import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: any) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading' && status !== 'authenticated') {
      // next-auth is initialized and there is no user
      // remember the page that user tried to access
      const url = new URL(location.href);
      const callbackUrl = `/login?callbackUrl=${url.pathname}`;
      // redirect
      router.push(callbackUrl);
    }
  }, [status, router]);

  if (status === 'loading') {
    return <h1>Application Loading...</h1>;
  }

  if (status === 'authenticated') {
    return <>{children}</>;
  }

  return null;
}
