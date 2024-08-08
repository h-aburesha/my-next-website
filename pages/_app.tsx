import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const [pageTitle, setPageTitle] = useState('')

    useEffect(() => {
        const pathName = router.pathname

        if (pathName == '/about') {
            setPageTitle('About | ')
        } else if (pathName == '/projects') {
            setPageTitle('Projects | ')
        } else if (pathName == '/') {
            setPageTitle('Home | ')
        } else {
            setPageTitle('')
        }
    }, [router.pathname])

    return (
        <>
            <Head>
                <title>{`${pageTitle}Hassan's Portfolio`}</title>
                <meta
                    name="google-site-verification"
                    content="Dn8khY8NOOtwdCmKNweUxEqzngzd5GYmEbMOJd9fh_0"
                />
                <meta
                    name="description"
                    content="Hassan Aburesha's Portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:title" content="Hassan Aburesha" />
                <meta
                    property="og:description"
                    content="Hassan Aburesha's Portfolio"
                />
                <meta
                    property="og:image"
                    content={`${process.env.NEXT_PUBLIC_BASE_URL}/website-small.png`}
                />
                <meta property="og:url" content="https://www.aburesha.com/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Hassan Aburesha's Portfolio"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Hassan Aburesha" />
                <meta
                    name="keywords"
                    content="Developer,UX,UI,Berlin,Designer,Figma,React,Next.js,Typescript,Node.js,GraphQL,PostgreSQL,Prisma,HTML,CSS,JavaScript,Web,Website,Portfolio,Fullstack,Frontend,Backend,Software,Engineer,Software Engineer,Software Developer,Software Development,Software Engineering,Software Architecture,Software Design,Software Design,Software Architecture,Software Design,Software Architecture,Software Design"
                />
                <link rel="canonical" href="https://www.aburesha.com/" />
            </Head>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
        </>
    )
}
