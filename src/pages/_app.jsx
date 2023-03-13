import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import localFont from '@next/font/local'
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { SessionProvider as AuthProvider } from 'next-auth/react';
import NProgress from 'nprogress';
import { Router } from 'next/router';


const myFont = localFont({
   src: '../../public/asset/fonts/League_Spartan/LeagueSpartan-VariableFont_wght.ttf'
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })

  return (
    <AuthProvider session={session}>
      <Head>
        <link rel="icon" href="/yonet.ico" />
      </Head>
      <div className={myFont.className}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </AuthProvider>
  );
}
