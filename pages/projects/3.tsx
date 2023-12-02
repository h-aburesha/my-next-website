import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "@mantine/carousel";
import pixla1 from "../../public/pixla_pics/pixla1.png";
import pixla2 from "../../public/pixla_pics/pixla2.png";
import pixla3 from "../../public/pixla_pics/pixla3.gif";
import Navbar from "../components/navbar";

function Project3() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <Navbar />
            <h1>
                <code style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                    PIXLA{" "}
                </code>
                <Link
                    target={"_blank"}
                    href="https://github.com/h-aburesha/vue-imageboard-project"
                >
                    <FaGithub />
                </Link>
                <br />
                <code
                    style={{
                        fontStyle: "normal",
                        fontWeight: "lighter",
                        fontSize: "0.8em",
                    }}
                >
                    Vue Image Board
                </code>
            </h1>

            <article>
                <h2 style={{ fontWeight: "bolder" }}>DESCRIPTION</h2>
                <hr />
                <p>
                    A Vue.js single page Images Gallery application. The
                    Back-end is over an express-Server, PostgresSQL database &
                    AWS Bucket for images upload.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>FEATURES</h2>
                <hr />
                <ul>
                    <li>
                        Anonymous Image Upload: One of the key features of the
                        app was the ability for anonymous users to upload
                        pictures and add titles and descriptions. This feature
                        was implemented using a simple form with file upload
                        capabilities, which would allow users to easily add new
                        images to the gallery without needing to sign up or log
                        in.
                    </li>
                    <li>
                        Automated Gallery Rendering: To ensure that new images
                        were immediately displayed in the gallery after being
                        uploaded, an automatic rendering feature was
                        implemented. This meant that the gallery would update in
                        real-time, providing a seamless and convenient user
                        experience.
                    </li>
                    <li>
                        Image Enlargement and Commenting: Users could click on
                        any image in the gallery to enlarge it and view
                        additional information. They could also add comments,
                        which would be instantly displayed alongside the image.
                        This feature was designed to encourage user engagement
                        and facilitate community building.
                    </li>
                    <li>
                        Integrated Like Functionality: Finally, the app
                        integrated a fully functional like system, which allowed
                        users to indicate their appreciation for specific
                        images. This feature was fully integrated with the
                        backend database, ensuring that likes were accurately
                        recorded and displayed in real-time.
                    </li>
                </ul>
                <h2 style={{ fontWeight: "bolder" }}>CHALLENGES</h2>
                <hr />
                <p>
                    Syntax Learning Curve: Coming from a non-framework
                    background, learning the Vue.js syntax was initially quite
                    challenging. However, as you got more familiar with the
                    framework, you were able to appreciate the strengths and
                    benefits of using a JS framework.
                </p>
                <p>
                    Modal Components and Prop Passing: Implementing modal
                    components and passing props in Vue.js was not as
                    straightforward as it was in React, which led to some
                    difficulty in maintaining visibility and readability of the
                    code. However, with practice and experience, you were able
                    to develop better strategies for managing props and
                    maintaining clear code structure.
                </p>
                <p>
                    Form Submission and AWS Setup: Setting up form submission
                    and AWS bucket integration were also part of the learning
                    curve with JS frameworks. While challenging at first, these
                    experiences provided valuable opportunities for you to
                    develop your skills and gain exposure to new technologies
                    that you could leverage in future projects.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>GALLERY</h2>
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
                            src={pixla1}
                            alt="pixla vue.js image board one page application home gallery and upload feature"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src={pixla2}
                            alt="pixla vue.js image board one page application click to enlarge and add comments modal component"
                            placeholder="blur"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src={pixla3}
                            alt="pixla vue.js image board one page application likes synched with database and gif picture possibility"
                            width={200}
                            height={320}
                        />
                    </Carousel.Slide>
                </Carousel>
            </article>
            <br />

            <br />
            <br />
            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project3;
