import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa";


import verballyHomePageImage from "../../public/verbally_pics/homepage.png"
import verballyModalPopupImage from "../../public/verbally_pics/modal-popup.png"
import verballyTooltipTextImage from "../../public/verbally_pics/tooltip-text.png"
import verballyVerticalNavImage from "../../public/verbally_pics/vertical-nav.gif"
import verballyTooltipImage from "../../public/verbally_pics/tooltip-img.gif"
import verballySkeletonsImage from "../../public/verbally_pics/skeletons.gif"
import verballySpinnerImage from "../../public/verbally_pics/spinner.gif"


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

            <h1>
                <code style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                    Verbally GmbH
                </code>
                <br />
                <code style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                User Settings Page{" "}
                </code>
                <a
                    target={"_blank"}
                    href="https://app.verbally.io/"
                >
                    <FaLink />
                </a>
                <br />
                <code
                    style={{
                        fontStyle: "normal",
                        fontWeight: "lighter",
                        fontSize: "0.8em",
                    }}
                >
                    "NextJS, Redux Toolkit Web App"
                </code>
            </h1>


            <article>
            <Image
                src={verballyHomePageImage}
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
                <Image
                src={verballyModalPopupImage}
                placeholder="blur"
                alt="verbally's meeting assistant home page"
                width={600}
                priority={true}
                loading="eager"
                style={{borderRadius:"4px", boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px'}}
            />
                <hr />
               
                <h2 style={{ fontWeight: "bolder" }}>PROBLEM STATEMENT</h2>
                <hr />
                <Image
                src={verballyTooltipTextImage}
                placeholder="blur"
                alt="verbally's meeting assistant home page"
                width={600}
                priority={true}
                loading="eager"
                style={{borderRadius:"4px", boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px'}}
            />
            <br />

            <Image
                src={verballyVerticalNavImage}
                
                alt="verbally's meeting assistant home page"
                width={600}
                priority={true}
                loading="eager"
                style={{borderRadius:"4px", boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px'}}
            />
            <br />

            <Image
                src={verballyTooltipImage}
                alt="verbally's meeting assistant home page"
                width={600}
                priority={true}
                loading="eager"
                style={{borderRadius:"4px", boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px'}}
            />
            <br />
            <Image
                src={verballySkeletonsImage}
                alt="verbally's meeting assistant home page"
                width={600}
                priority={true}
                loading="eager"
                style={{borderRadius:"4px", boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px'}}
            />
            <br />
            <Image
                src={verballySpinnerImage}
                alt="verbally's meeting assistant home page"
                width={600}
                priority={true}
                loading="eager"
                style={{borderRadius:"4px", boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px'}}
            />
            <br />

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
