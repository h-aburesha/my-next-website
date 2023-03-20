import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ParticlesContainer from "./particles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <ParticlesContainer />
            <div className="landing-container">
                <div className="navigation-bar">
                    <a href="/projects">
                        {" "}
                        <button>See my work</button>
                    </a>
                    <button>About me</button>
                    <button>Contact</button>
                </div>
                <nav className="navbar">
                    {/* <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link> */}
                </nav>
                <header className="header">
                    <h1 className="header-text">
                        Hello, I am Hassan and I am a mixture of WebDev, UX/UI &
                        8 years professional in business development!
                    </h1>
                </header>
                <div className="navigation-list-home">
                    <ul>
                        <li>See my work → </li>
                        <li>Read about my approach → </li>
                        <li>Contact me → </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
