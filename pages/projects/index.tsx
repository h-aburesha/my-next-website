import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Footer from "../../Components/Footer/Footer";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function ProjectImage({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const projectTitles = [
        {
            title: "Bold",
            description: "Technology: React Native",
        },
        {
            title: "Jam",
            description: "Technology: React",
        },
        {
            title: "Vue",
            description: "Technology: Vue",
        },
        {
            title: "Till",
            description: "Focus: UX",
        },
        {
            title: "Bold",
            description: "Focus: UI",
        },
    ];

    return (
        <section>
            <div ref={ref}>
                <a href={`/projects/${id}`}>
                    <Image
                        className="projects-image"
                        src={`/${id}.jpg`}
                        alt="A London skyscraper"
                        width={1000}
                        height={500}
                    />
                </a>
            </div>
            <div className="projects-title-div">
                <motion.h2 style={{ y }}>
                    {projectTitles[id - 1].title}
                </motion.h2>
                <motion.p
                    style={{
                        y: y,
                        fontWeight: "lighter",
                        fontStyle: "italic",
                        marginTop: "10px",
                    }}
                >
                    {projectTitles[id - 1].description}
                </motion.p>
            </div>
        </section>
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
            {[1, 2, 3, 4, 5].map((image) => (
                <ProjectImage key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <Footer />
        </>
    );
}
