import { useRef } from "react";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ProjectImage({ id }: { id: number }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const projectTitles = [
        {
            title: "Bold",
            description: "React Native - Mobile Application",
        },
        {
            title: "Jam",
            description: "React - Social Network Platform",
        },
        {
            title: "Pixla",
            description: "Vue - Image Board",
        },
        {
            title: "Till Van Loosen",
            description: "UX Study & Figma UI",
        },
        {
            title: "Bold Fitness Tracker",
            description: "UX Study & Figma UI",
        },
        {
            title: "Verbally Meeting Assistant",
            description: "User Dashboard & Settings Page",
        },
    ];

    return (
        <>
            <section>
                <div ref={ref}>
                    <Link href={`/projects/${id}`}>
                        <Image
                            className="projects-image"
                            src={`/${id}.jpg`}
                            alt={projectTitles[id - 1].description}
                            width={isMobile ? undefined : 1000}
                            height={isMobile ? undefined : 500}
                            loading="eager"
                            priority={true}
                        />
                    </Link>
                </div>
                <div className="projects-title-div">
                    <motion.h2>{projectTitles[id - 1].title}</motion.h2>
                    <motion.p
                        style={{
                            fontWeight: "lighter",
                            fontStyle: "normal",
                            marginTop: "10px",
                        }}
                    >
                        {projectTitles[id - 1].description}

                        <Link
                            style={{
                                fontWeight: "lighter",
                                fontStyle: "normal",
                                textDecoration: "none",
                                fontSize: "0.8em",
                                fontFamily: "Arial, sans-serif",
                                color: "white",
                                transition: "color 0.3s ease",
                            }}
                            href={`/projects/${id}`}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.color = "#646cff")
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.color = "white")
                            }
                        >
                            <br />
                            More details ...
                        </Link>
                    </motion.p>
                </div>
            </section>
        </>
    );
}

export default function Projects() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {[6, 1, 2, 4, 5, 3].map((image) => (
                <ProjectImage key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
