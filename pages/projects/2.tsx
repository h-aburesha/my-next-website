import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import jam1 from "../../public/jam_pics/jam1.png";
import jam2 from "../../public/jam_pics/jam2.png";
import jam3 from "../../public/jam_pics/jam3.png";

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

                    <Link
                        href="mailto:hassan.aburesha@gmail.com"
                        target="_blank"
                    >
                        <button>EMAIL</button>
                    </Link>
                </div>
            </nav>
            <h1>
                <code style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                    JAM{" "}
                </code>
                <Link
                    target={"_blank"}
                    href="https://github.com/h-aburesha/react-social-network-project"
                >
                    <FaGithub />
                </Link>
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
                    A social network platform using React/Redux, Express-Server
                    & PostgresSQL.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>Features</h2>
                <hr />
                <ul>
                    <li>
                        Authentication: User registration, login, and password
                        reset functionality are available to ensure secure
                        access to the app.
                    </li>
                    <li>
                        User Profile: Users can customize their profile with bio
                        and profile picture updates to reflect their personal
                        preferences and interests.
                    </li>
                    <li>
                        Friend Search: Users can search for other users and send
                        friend requests to connect with people they know or
                        share similar interests.
                    </li>
                    <li>
                        Friend Requests: Users can manage their friend requests
                        by accepting or rejecting incoming requests, as well as
                        sending friend requests to others.
                    </li>
                    <li>
                        Friend List: Users can view their current friends, as
                        well as any outstanding friend requests they have sent
                        or received. This helps users keep track of their social
                        connections and expand their network as desired.
                    </li>
                </ul>
                <h2 style={{ fontWeight: "bolder" }}>Challenges</h2>
                <hr />
                <p>
                    Learning React: As a first-time React user, I faced a steep
                    learning curve and had to adapt to a completely different
                    style of programming compared to my previous experience with
                    Vue. At first, I found the use of class components quite
                    cumbersome, with numerous instances of &apos;.this&apos;
                    making the code less readable. Eventually, I was able to
                    refactor all components to function components, which
                    greatly improved readability and practicality.
                </p>
                <p>
                    Props Drilling: One of the challenges I faced in building
                    the app was passing functions and properties deep within the
                    component hierarchy, which can make it difficult to keep
                    track of everything. Initially, I attempted to avoid this by
                    fetching all user data from the database and passing it from
                    the top-level &apos;App&apos; component. However, I soon
                    realized that this approach wasn&apos;t scalable or
                    practical. Fortunately, I was able to leverage Redux to
                    manage global state and avoid excessive props drilling.
                </p>
                <p>
                    Redux: While Redux provided an effective solution to the
                    problem of props drilling, it was also the most
                    time-consuming and challenging aspect of the project.
                    Setting up Redux and getting the hang of its global state
                    management system took a lot of effort, but the payoff was
                    worth it. With Redux, I was able to implement a single
                    source of truth for my app&apos;s state, which greatly
                    simplified data management and made my code more
                    maintainable. Moreover, Redux-Toolkit provided some useful
                    browser DevTools and graphical representations of state that
                    were quite helpful.
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
                            src={jam1}
                            alt="jam social network platform logged in profile page, avatar and bio"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src={jam2}
                            alt="jam social network platform logged in experience, existing friends and friendship requests"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src={jam3}
                            alt="jam social network platform friends search"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                </Carousel>
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project2;
