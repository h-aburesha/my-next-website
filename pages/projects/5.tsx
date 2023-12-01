import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import boldux1 from "../../public/bold_ux/boldcover.png";
import boldux2 from "../../public/bold_ux/persona.png";
import boldux3 from "../../public/bold_ux/moodboard.png";
import Navbar from "../components/navbar";

function Project5() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <Navbar />
            <Image
                src={boldux1}
                placeholder="blur"
                alt="Bold UX/UI study cover photo"
                width={800}
                priority={true}
                loading="eager"
            />

            <article>
                <h2 style={{ fontWeight: "bolder" }}>
                    INTRODUCTION & MOTIVATION
                </h2>
                <hr />
                <p>
                    My motivation to design this app was rather personal. On one
                    hand, I am a person who struggled throughout puberty by
                    being obese and currently was in need to stay on top of what
                    I eat to keep the weight off. This app is intended for
                    anyone who wants to track their macronutrients to meet their
                    weight goals, be it lose or gain.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>DATA INSIGHTS</h2>
                <hr />
                <ul>
                    <li>
                        User interviews showed that 80& found it hard to reach
                        weight goals.
                    </li>
                    <li>
                        Around 70% of users interested in reaching a weight goal
                        never tracked their macronutrients.
                    </li>
                    <li>
                        75% however, believed they should track their caloric
                        intake.
                    </li>
                    <li>
                        Users found most of the apps on the market overwhelming
                        and with too many functionalities.
                    </li>
                </ul>
                <h2 style={{ fontWeight: "bolder" }}>PROBLEM STATEMENT</h2>
                <hr />
                <p>
                    By providing users with an App to trace their intake of
                    calories and macronutrients, it will help them achieve
                    weight goals.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>PERSONA</h2>
                <hr />

                <Image
                    src={boldux2}
                    placeholder="blur"
                    alt="Bold UX/UI study persona"
                    width={800}
                    priority={true}
                    loading="eager"
                />
                <h2 style={{ fontWeight: "bolder" }}>MOOD BOARD</h2>
                <hr />
                <Image
                    src={boldux3}
                    placeholder="blur"
                    alt="Bold UX/UI study persona"
                    width={800}
                    priority={true}
                    loading="eager"
                />
                <h2 style={{ fontWeight: "bolder" }}>HI-FI PROTOTYPE</h2>
                <hr />
                <p>
                    Click to enlarge. Prototype could by clicking outside to
                    give navigation hints or by the use of the arrows under the
                    prototype.
                </p>
                <iframe
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="800"
                    height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FKS2WyWsMesM9KMkBQUzZZe%2FFitness-App---B.%3Fpage-id%3D1%253A2%26node-id%3D119-621%26viewport%3D102%252C1134%252C0.35%26scaling%3Dscale-down%26starting-point-node-id%3D119%253A621"
                    allowFullScreen
                ></iframe>
                <br />
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project5;
