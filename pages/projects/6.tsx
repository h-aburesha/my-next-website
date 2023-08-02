import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa";

import verballyHomePageImage from "../../public/verbally_pics/homepage.png";
import verballyModalPopupImage from "../../public/verbally_pics/modal-popup.png";
import verballyTooltipTextImage from "../../public/verbally_pics/tooltip-text.png";
import verballyVerticalNavImage from "../../public/verbally_pics/vertical-nav.gif";
import verballyTooltipImage from "../../public/verbally_pics/tooltip-img.gif";
import verballySkeletonsImage from "../../public/verbally_pics/skeletons.gif";
import verballySpinnerImage from "../../public/verbally_pics/spinner.gif";

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
                <a target={"_blank"} href="https://app.verbally.io/">
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
                    &quot;NextJS, Redux Toolkit Web App&quot;
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
                <h2 style={{ fontWeight: "bolder" }}>SCOPE OF THE PROJECT</h2>
                <hr />
                <p>
                    User dashboard and settings page providing customizations to
                    the applications features. The scope of the project includes
                    user centered display of features, easy navigation,
                    providing navigation tips. All illustrations included have
                    been personally design as well.
                </p>

                <h2 style={{ fontWeight: "bolder" }}>FEATURES:</h2>
                <hr />
                <br />
                <h3 style={{ fontWeight: "bolder" }}>1- POPUP MODAL</h3>
                <hr />
                <br />
                <Image
                    src={verballyModalPopupImage}
                    placeholder="blur"
                    loading="eager"
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: "4px",
                        boxShadow: "rgb(255 255 255 / 45%) 4px 3px 9px",
                    }}
                />
                <br />
                <h3 style={{ fontWeight: "bolder" }}>
                    2- TOOLTIP TEXT INFO DISPLAY
                </h3>
                <hr />
                <br />
                <Image
                    src={verballyTooltipTextImage}
                    placeholder="blur"
                    loading="eager"
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: "4px",
                        boxShadow: "rgb(255 255 255 / 45%) 4px 3px 9px",
                    }}
                />
                <br />
                <h3 style={{ fontWeight: "bolder" }}>
                    3- VERTICAL NAVIGATION MENU
                </h3>
                <hr />
                <br />
                <Image
                    src={verballyVerticalNavImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: "4px",
                        boxShadow: "rgb(255 255 255 / 45%) 4px 3px 9px",
                    }}
                />
                <br />
                <h3 style={{ fontWeight: "bolder" }}>
                    4- TOOLTIP IMAGE DISPLAY
                </h3>
                <hr />
                <br />
                <Image
                    src={verballyTooltipImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: "4px",
                        boxShadow: "rgb(255 255 255 / 45%) 4px 3px 9px",
                    }}
                />
                <br />
                <h3 style={{ fontWeight: "bolder" }}>
                    5- PLACEHOLDER SKELETONS
                </h3>
                <hr />
                <p>
                    This is designed to display placeholders styled after the
                    actual component, that display similar grey figures till API
                    calls are fulfilled and component is propagated.{" "}
                </p>
                <br />
                <Image
                    src={verballySkeletonsImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: "4px",
                        boxShadow: "rgb(255 255 255 / 45%) 4px 3px 9px",
                    }}
                />
                <br />
                <h3 style={{ fontWeight: "bolder" }}>
                    6- SPINNER PLACEHOLDER FOR IMAGES
                </h3>
                <hr />
                <br />
                <Image
                    src={verballySpinnerImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: "4px",
                        boxShadow: "rgb(255 255 255 / 45%) 4px 3px 9px",
                    }}
                />
                <br />
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project6;
