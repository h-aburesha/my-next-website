import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import jamLogo from "../../public/jamlogo.png";

function Project2() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <nav>
                <div className="navigation-bar">
                    <Link href="/">
                        <button>HOME</button>
                    </Link>
                    <Link href="/projects">
                        <button>PROJECTS</button>
                    </Link>

                    <a href="mailto:hassan.aburesha@gmail.com" target="_blank">
                        <button>EMAIL</button>
                    </a>
                </div>
            </nav>

            <h1>
                <code style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                    JAM{" "}
                </code>
                <a
                    target={"_blank"}
                    href="https://github.com/h-aburesha/react-native-app-bold"
                >
                    <FaGithub />
                </a>
                <br />
                <code
                    style={{
                        fontStyle: "italic",
                        fontWeight: "lighter",
                        fontSize: "0.8em",
                    }}
                >
                    React/Redux Social Network
                </code>
            </h1>

            <article>
                <h2 style={{ fontWeight: "bolder" }}>Description</h2>
                <hr />
                <p>
                    A React Native fitness tracking mobile application, designed
                    based on my{" "}
                    <Link href="/projects/5">previous UX/UI Study</Link>.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>Features</h2>
                <hr />
                <ul>
                    <li>
                        Barcode scanning using the phone&apos;s camera to show
                        nutritional information of products.
                    </li>
                    <li>Tracking of body metrics.</li>
                    <li>Capability for personal notes and reminders.</li>
                    <li>Recipe suggestions.</li>
                    <li>Metrics page displaying total macronutrient intake.</li>
                    <li>
                        Personal profile page with BMI, photo, and dark/light
                        mode toggle
                    </li>
                </ul>
                <h2 style={{ fontWeight: "bolder" }}>
                    Challenges & Motivation
                </h2>
                <hr />
                <p>
                    When I first set out to develop a fitness tracking mobile
                    app based on my previous UX/UI study, my motivation was
                    driven by the desire to bring my own designs to life.
                    However, I quickly realized that transferring designs from
                    Figma to React Native was not a straightforward process.
                    Despite this challenge, I remained undeterred and determined
                    to find a way to make it work.
                </p>
                <p>
                    Although mobile development was not a part of my formal
                    studies, I had become proficient in JavaScript and React
                    after completing my Social Network project. My excitement
                    was palpable when I discovered React Native, which allowed
                    me to write mobile applications in JavaScript/TS that could
                    be readily available across different platforms in their
                    native languages. This meant that the application could be
                    written once and still be usable on both iOS and Android.
                </p>
                <p>
                    Setting up a development environment for a newcomer can be
                    daunting, especially if they are not familiar with native
                    CLI. For this reason, I would strongly recommend using an
                    Expo CLI, which can get you started in just a few minutes.
                    However, I found that ejecting the application from Expo
                    could be difficult. As a result, after a lot of research and
                    setup, I am currently refactoring the project again using a
                    Native CLI. Despite the initial setbacks, I am determined to
                    see this project through to the end and make it available to
                    anyone looking to track their fitness goals.
                </p>
                <p>
                    In conclusion, while the journey to develop a React Native
                    mobile app for fitness tracking has not been without its
                    challenges, it has been a rewarding experience. From
                    grappling with design transfers to setting up a development
                    environment, I have been able to surmount each challenge and
                    learned valuable skills along the way. Despite the setbacks,
                    my motivation remains undimmed, and I look forward to
                    launching this app to help individuals track their fitness
                    goals in a convenient and user-friendly way.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>Gallery</h2>
                <hr />
                <br />
                Carousel
                <br />
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project2;
