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
                        I&apos;m a full stack developer & UX/UI designer based
                        in Berlin. 👑
                    </code>
                    <code> -- Click away my friend! 👽</code>
                </header>
            </div>
        </>
    );
}
