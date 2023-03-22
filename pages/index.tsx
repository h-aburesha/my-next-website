import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ParticlesContainer from "./particles";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <ParticlesContainer />
            <div className="landing-container">
                <div className="navigation-bar">
                    <Link href="/projects">
                        <button>See my work</button>
                    </Link>
                    <button>About me</button>
                    <button>Contact</button>
                </div>
                <nav className="navbar"></nav>
                <header className="header">
                    <code className="welcome-message">
                        I&apos;m a full stack developer & UX/UI designer based
                        in Berlin 👑 👑 👑.
                    </code>
                    <code> -- Click away my friend! 👽</code>
                </header>
                <div className="navigation-list-home">
                    <ul>
                        <li>
                            <Link href="/projects">See my work →</Link>
                        </li>
                        <li>Read about my approach →</li>
                        <li>Contact me →</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
