import Navbar from "./components/navbar";
import ParticlesContainer from "./components/particles";
import styled from 'styled-components';


const GlowText = styled.span`
  color: #fff;
  text-shadow: 0 0 10px #ff4da6, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 40px #ff4da6;
  transition: 1s;

  &:hover {
    text-shadow: 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6;
  }
`;

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
