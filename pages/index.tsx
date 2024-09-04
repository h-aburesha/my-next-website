import LandingContainer from './components/landing-container'
import Navbar from './components/navbar'
import ParticlesContainer from './components/particles'

/**
 * Renders the home page component.
 *
 * @returns The rendered home page component.
 */
export default function Home() {
    return (
        <>
            <ParticlesContainer />
            <Navbar />
            <LandingContainer />
        </>
    )
}
