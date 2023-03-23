import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ParticlesContainer from "./particles";
import Link from "next/link";
import Animate from "./animate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <ParticlesContainer />

            <div className="landing-container">
                <div className="navigation-bar">
                    <Link href="/projects">
                        <button>Projects</button>
                    </Link>
                    <Link href="/about">
                        <button>About</button>
                    </Link>

                    <a href="mailto:hassan.aburesha@gmail.com" target="_blank">
                        <button>Contact</button>
                    </a>
                </div>

                <header className="header">
                    <code className="welcome-message">
                        I&apos;m a full stack developer & UX/UI designer based
                        in Berlin 👑 👑 👑.
                    </code>
                    <code> -- Click away my friend! 👽</code>
                </header>
            </div>
        </>
    );
}
