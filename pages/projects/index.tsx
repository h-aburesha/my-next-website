import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function ProjectImage({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div ref={ref}>
                <a href={`/projects/${id}`}>
                    <Image
                        src={`/${id}.jpg`}
                        alt="A London skyscraper"
                        width={1000}
                        height={500}
                    />
                </a>
            </div>
            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
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
        </>
    );
}
