import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import till1 from "../../public/till_pics/till1.png";
import till2 from "../../public/till_pics/till2.png";
import till3 from "../../public/till_pics/persona.png";
import till4 from "../../public/till_pics/hypothesis.png";
import till5 from "../../public/till_pics/mood.png";
import Navbar from "../components/navbar";

function Project4() {
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
                src={till1}
                placeholder="blur"
                alt="Elef - by Till Van Loosen"
                width={800}
                priority={true}
                loading="eager"
            />

            <article>
                <h2 style={{ fontWeight: "bolder" }}>INTRODUCTION</h2>
                <hr />
                <p>
                    Till Van Loosen is a Berlin based Photographer and Video
                    director. This study&apos;s goal is to revamp his website to
                    better display his skill-set. In addition to, ease of
                    usability to users in terms of overviewing projects & access
                    details easily.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>RESEARCH</h2>
                <hr />
                <Image
                    src={till2}
                    placeholder="blur"
                    alt="user research statistics"
                    width={800}
                    loading="lazy"
                />
                <p>
                    User interviews showed that photographers are chosen based
                    on style, time and price. Moreover, they are primarily
                    booked through connections or agencies. Most users mentioned
                    that, the photographer&apos;s websites must convey trust by
                    displaying cohesive style, former collaborations and
                    structure.
                </p>
                <h2 style={{ fontWeight: "bolder" }}>
                    BUSINESS ANALYSIS FINDINGS
                </h2>
                <hr />
                <ul>
                    <li>
                        Majority of photographers websites are not user
                        friendly.
                    </li>
                    <li>No well defined style.</li>
                    <li>
                        Main focus online is usually given to Instagram
                        profiles.
                    </li>
                    <li>
                        User friendly websites had: Structure, cohesive style,
                        and easy navigation
                    </li>
                </ul>
                <h2 style={{ fontWeight: "bolder" }}>USER PERSONA</h2>
                <hr />
                <Image
                    src={till3}
                    placeholder="blur"
                    alt="user persona"
                    width={800}
                />
                <h2 style={{ fontWeight: "bolder" }}>PROBLEM STATEMENT</h2>
                <hr />
                <ul>
                    <li>
                        The customer&apos;s website was designed to showcase his
                        work.
                    </li>
                    <li>
                        Users are having difficulty finding the right material
                        on the website.
                    </li>
                    <li>
                        Users are not hiring the customer for their projects.
                    </li>
                    <li>
                        The current website is causing the customer to lose
                        potential business.
                    </li>
                    <li>
                        The challenge is to redesign the website to meet the
                        users&apos; needs and expectations.
                    </li>
                </ul>
                <h2 style={{ fontWeight: "bolder" }}>HYPOTHESIS</h2>
                <hr />
                <Image
                    src={till4}
                    placeholder="blur"
                    alt="hypothesis"
                    width={800}
                />
                <h2 style={{ fontWeight: "bolder" }}>MOOD BOARD</h2>
                <hr />
                <Image
                    src={till5}
                    placeholder="blur"
                    alt="mood board"
                    width={800}
                />
                <h2 style={{ fontWeight: "bolder" }}>HI-FI PROTOTYPE</h2>
                <hr />
                <p>
                    Click to enlarge. Prototype could be navigated using the
                    hamburger menu on the top right.
                </p>
                <iframe
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="800"
                    height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FavoLABt8sSd56OEAYCq6if%2FTill-Van-Loosen%3Fpage-id%3D11%253A149%26node-id%3D235-5296%26viewport%3D1050%252C737%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D11%253A150"
                    allowFullScreen
                ></iframe>
                <br />
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project4;
