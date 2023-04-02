import { motion, useScroll, useSpring } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import b1 from "../../public/bold_pics/b1.png";
import b2 from "../../public/bold_pics/b2.png";
import b3 from "../../public/bold_pics/b3.png";
import b4 from "../../public/bold_pics/b4.png";
import b5 from "../../public/bold_pics/b5.png";

function Project1() {
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
                    BOLD{" "}
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
                    A React Native App
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
                <p>
                    <ul>
                        <li>
                            Barcode scanning using the phone&apos;s camera to
                            show nutritional information of products.
                        </li>
                        <li>Tracking of body metrics.</li>
                        <li>Capability for personal notes and reminders.</li>
                        <li>Recipe suggestions.</li>
                        <li>
                            Metrics page displaying total macronutrient intake.
                        </li>
                        <li>
                            Personal profile page with BMI, photo, and
                            dark/light mode toggle
                        </li>
                    </ul>
                </p>
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
                <Carousel
                    maw="auto"
                    mx="auto"
                    withIndicators
                    height="auto"
                    controlsOffset="xs"
                    loop
                >
                    <Carousel.Slide>
                        <Image
                            src={b1}
                            alt="Bold fitness tracking app home page built by react native over expo client"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src={b2}
                            alt="Bold fitness tracking app macronutients page"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src={b3}
                            alt="Bold fitness tracking app native recepies carousel"
                            placeholder="blur"
                        />
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <Image
                            src={b4}
                            alt="Bold fitness tracking app profile page"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src={b5}
                            alt="Bold fitness tracking app to-do list modal with touchable opacity"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                </Carousel>
                <br />
            </article>
            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project1;

/* 

import { useRouter } from "next/router";

    const router = useRouter();
    const projectId = router.query.projectId;

*/
