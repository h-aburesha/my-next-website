import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const pathName = router.pathname;

    if (pathName == '/about') {
      setPageTitle('About | ');
    } 
    else if (pathName == '/projects') {
      setPageTitle('Projects | ');
    } 

    else if (pathName == '/') {
        setPageTitle('Home | ');
      }
    else {
      setPageTitle('');
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{`${pageTitle}Hassan's Portfolio`}</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
