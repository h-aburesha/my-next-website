import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";

import { Inter } from "next/font/google";

import ParticlesContainer from "./particles";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <ParticlesContainer />
            <Navbar />

            <div className="landing-container">
                <header className="header">
                    <code className="welcome-message">
                        FULL-STACK WEB DEVELOPER & UX/UI DESIGNER.
                        <hr />
                    </code>
                    <code>
-- For social accounts & resume, please visit footer.</code>
                </header>
            </div>
        </>
    );
}
