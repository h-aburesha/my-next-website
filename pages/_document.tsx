import { Html, Head, Main, NextScript } from 'next/document'

// ** Components Imports
import Footer from './components/footer'

/**
 * Document component.
 *
 * This is a custom Document component for Next.js. It's used to augment your
 * application's <html> and <body> tags. It's necessary to use this component to
 * add custom tags to the <head> of the page.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 *
 * Inside the Head component, several meta tags are defined for SEO:
 * - google-site-verification: Used for verifying ownership of the website in Google Search Console.
 * - og:title, og:description, og:image, og:url, og:type, og:site_name: Open Graph tags used for improving social media sharing.
 * - robots: Used for controlling search engine behavior.
 * - author: Defines the author of the website..
 * - keywords: Used to define keywords for search engines.
 * - canonical: Used to prevent duplicate content issues by specifying the "canonical" or "preferred" version of a web page.
 * The Main component is where the page content goes, and NextScript is where Next.js will insert the necessary scripts for your application to work.
 */
export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    )
}
