import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../Components/Footer/Footer";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="google-site-verification"
                    content="Dn8khY8NOOtwdCmKNweUxEqzngzd5GYmEbMOJd9fh_0"
                />
            </Head>
            <body>
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    );
}
