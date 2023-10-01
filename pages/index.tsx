import Navbar from "../Components/Navbar/Navbar";
import ParticlesContainer from "./particles";

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
                        -- For social accounts & resume, please visit footer.
                    </code>
                </header>
            </div>
        </>
    );
}
