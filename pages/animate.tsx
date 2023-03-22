import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";
import styles from "../styles/animate.module.css";

function Section({ children }: { children: ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className={styles["section-container"]}>
            <section ref={ref}>
                <span
                    className={styles.section}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                >
                    {children}
                </span>
            </section>
        </div>
    );
}

export default function Animate() {
    return (
        <>
            <Section>Welcome</Section>
            <Section>to</Section>
            <Section>my humble</Section>
            <Section>Website!!</Section>
        </>
    );
}
