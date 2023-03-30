import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";

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
            <Navbar />
            <div className="landing-container">
                <header className="header">
                    <code className="welcome-message">
                        Full-Stack Web Developer & UX/UI Designer.
                    </code>
                    <code> -- Click & move around! 👽</code>
                </header>
            </div>
        </>
    );
}
