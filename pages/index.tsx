import LandingContainer from "./components/landing-container";
import Navbar from "./components/navbar";
import ParticlesContainer from "./components/particles";




export default function Home() {
    return (
        <>
            <ParticlesContainer />
            <Navbar />
            <LandingContainer />
        </>
    );
}
