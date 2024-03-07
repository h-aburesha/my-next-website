import { Html, Head, Main, NextScript } from 'next/document'

// ** Components Imports
import Footer from './components/footer'

/**
 * Document component.
 *
 * This is a custom Document component for Next.js. It's used to augment your
 * application's <html> and <body> tags.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 *
 * Inside the Head component, several meta tags are defined for SEO:
 * - google-site-verification: Used for verifying ownership of the website in Google Search Console.
 * - og:title, og:description, og:image, og:url, og:type, og:site_name: Open Graph tags used for improving social media sharing.
 * - robots: Used for controlling search engine behavior.
 * - author: Defines the author of the website.
 * - keywords: Used to define keywords for search engines.
 * - canonical: Used to prevent duplicate content issues by specifying the "canonical" or "preferred" version of a web page.
 * The Main component is where the page content goes, and NextScript is where Next.js will insert the necessary scripts for your application to work.
 */
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="google-site-verification"
                    content="Dn8khY8NOOtwdCmKNweUxEqzngzd5GYmEbMOJd9fh_0"
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
            <body>
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    )
}
