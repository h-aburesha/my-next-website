import { Html, Head, Main, NextScript } from "next/document";
import Footer from "./components/footer";
import me from "./public/me.png";
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="google-site-verification"
                    content="Dn8khY8NOOtwdCmKNweUxEqzngzd5GYmEbMOJd9fh_0"
                />
                <meta property="og:title" content="Hassan Aburesha" />
                <meta property="og:description" content="Hassan Aburesha's Portfolio" />
                <meta property="og:image" content={me.toString()} />
                <meta property="og:url" content="https://www.aburesha.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Hassan Aburesha's Portfolio" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Hassan Aburesha" />
                <meta name="keywords" content="Developer,UX/UI,Berlin" />
            </Head>
            <body>
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    );
}
