import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";

import { Inter } from "next/font/google";

import ParticlesContainer from "./particles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <ParticlesContainer />
            <Navbar />

            <div className="landing-container">
                <header className="header">
                    <code className="welcome-message">
                        FULL-STACK SOFTWARE DEVELOPER & UX/UI DESIGNER.
                        <hr />
                    </code>
                    <code> -- Based in Berlin </code>
                </header>
            </div>
        </>
    );
}
