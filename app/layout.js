"use client";

import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/global.css';
import Footer from './components/footer';
import Header from './components/header';
import React, { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { MessageProvider } from './context/MessageContext';
import { SessionProvider, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

function AuthWrapper({ children }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  // Define routes that should only be accessible to unauthenticated users
  const authProtectedRoutes = ['/signin', '/signin/register', '/signin/register/verify'];

  useEffect(() => {
    if (session?.isAuthenticated && authProtectedRoutes.includes(pathname)) {
      router.push('/');  // Redirect to home page or another route
    }
  }, [status, pathname, router]);

  // Only render children if the session is loading or the user is on an allowed route


  return <>{children}</>;
}

export default function RootLayout({ children, session }) {
  const pathname = usePathname();

  // Define paths where Footer should not be displayed
  const noFooterRoutes = ['/signin', '/signin/register', '/signin/register/verify', '/dashboard'];

  return (
    <html>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <SessionProvider session={session}>
          <AppProvider>
            <MessageProvider>
              <Header />
              <AuthWrapper>
                <main>{children}</main>
              </AuthWrapper>
              {!noFooterRoutes.includes(pathname) && <Footer />}
            </MessageProvider>
          </AppProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  session: PropTypes.object,
};
