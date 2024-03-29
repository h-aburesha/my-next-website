import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'

function ProjectImage({ id }: { id: number }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })

    const projectTitles = [
        {
            title: 'Bold',
            description: 'React Native - Mobile Application',
        },
        {
            title: 'Jam',
            description: 'React - Social Network Platform',
        },
        {
            title: 'Pixla',
            description: 'Vue - Image Board',
        },
        {
            title: 'Till Van Loosen',
            description: 'UX Study & Figma UI',
        },
        {
            title: 'Bold Fitness Tracker',
            description: 'UX Study & Figma UI',
        },
        {
            title: 'Verbally Meeting Assistant',
            description: 'User Dashboard & Settings Page',
        },
        {
            title: 'Verbally Timer',
            description: 'UX/UI Study & React App',
        },
        {
            title: 'The Movie Database (TMDb)',
            description: 'Current movies & TV shows list',
        },
    ]

    // Spinner for loading images
    const [isImageLoaded, setImageLoaded] = useState(false)

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    zIndex: '+1',
                }}
            >
                <Navbar />
            </div>
            <section>
                <div ref={ref}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Link href={`/projects/${id}`}>
                            {!isImageLoaded && <CircularProgress />}
                            <Image
                                className="projects-image"
                                src={`/${id}.jpg`}
                                alt={projectTitles[id - 1].description}
                                width={isMobile ? 500 : 1000}
                                height={isMobile ? 250 : 500}
                                loading="eager"
                                priority={true}
                                onLoad={() => setImageLoaded(true)}
                            />
                        </Link>
                    </div>
                </div>
                <div className="projects-title-div">
                    <motion.h2>{projectTitles[id - 1].title}</motion.h2>
                    <motion.p
                        style={{
                            fontWeight: 'lighter',
                            fontStyle: 'normal',
                            marginTop: '10px',
                        }}
                    >
                        {projectTitles[id - 1].description}
                        <Link
                            style={{
                                fontWeight: 'lighter',
                                fontStyle: 'normal',
                                textDecoration: 'none',
                                fontSize: '0.8em',
                                fontFamily: 'Arial, sans-serif',
                                color: 'white',
                                transition: 'color 0.3s ease',
                            }}
                            href={`/projects/${id}`}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.color = '#646cff')
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.color = 'white')
                            }
                        >
                            <br />
                            More details ...
                        </Link>
                    </motion.p>
                </div>
            </section>
        </>
    )
}

export default function Projects() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <>
            {[8, 6, 7, 1, 2, 4, 5, 3].map((image) => (
                <ProjectImage key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    )
}
