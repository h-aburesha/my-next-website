import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { ThemeContext, themes } from "../contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        const pathName = router.pathname;

        if (pathName == "/about") {
            setPageTitle("About | ");
        } else if (pathName == "/projects") {
            setPageTitle("Projects | ");
        } else if (pathName == "/") {
            setPageTitle("Home | ");
        } else {
            setPageTitle("");
        }
    }, [router.pathname]);

    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
        const newTheme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(newTheme);

        for (const property in newTheme) {
            (document.body.style as any).setProperty(
                property,
                newTheme[property as keyof typeof newTheme]
            );
        }
    };

    return (
        <>
            <Head>
                <title>{`${pageTitle}Hassan's Portfolio`}</title>
            </Head>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Component {...pageProps} />
            </ThemeContext.Provider>
            <Analytics />
        </>
    );
}
