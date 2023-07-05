import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import verbally1 from "../../public/verbally_pics/homepage.png"


function Project6() {
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



            <article>
            <Image
                src={verbally1}
                placeholder="blur"
                alt="verbally's meeting assistant home page"
                width={800}
                priority={true}
                loading="eager"
            />
                <h2 style={{ fontWeight: "bolder" }}>
                    SCOPE OF THE PROJECT
                </h2>
                <hr />
                <p>
                   User dashboard and settings page providing customizations to the applications features.
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

                <h2 style={{ fontWeight: "bolder" }}>MOOD BOARD</h2>
                <hr />
               
                <h2 style={{ fontWeight: "bolder" }}>HI-FI PROTOTYPE</h2>
                <hr />
                <p>
                    Click to enlarge. Prototype could by clicking outside to
                    give navigation hints or by the use of the arrows under the
                    prototype.
                </p>
                
                <br />
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project6;
