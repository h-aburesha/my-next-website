import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import Navbar from '../components/navbar'
import { FaGithub, FaLink } from 'react-icons/fa'

function Project8() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <>
            <Navbar />
            <h1>
                <code style={{ fontWeight: 'bold', fontSize: '1em' }}>
                    Now Playing in Cinemas <br />
                    <span style={{ fontSize: '0.5em' }}>
                        The Movie Database (TMDB)
                    </span>
                </code>
                <br />
                <br />
                <code style={{ fontWeight: 'bold', fontSize: '0.8em' }}>
                    List of currently playing movies
                </code>{' '}
                <a
                    target={'_blank'}
                    href="https://movie-list-current.vercel.app/"
                >
                    <FaLink />
                </a>{' '}
                <a
                    target={'_blank'}
                    href="https://github.com/h-aburesha/movie-list-current"
                >
                    <FaGithub />
                </a>
                <br />
                <code
                    style={{
                        fontStyle: 'normal',
                        fontWeight: 'lighter',
                        fontSize: '0.8em',
                    }}
                >
                    &quot;NextJS, Material Design UI&quot;
                </code>
            </h1>
            <br />
            <br />
            <iframe
                src="https://movie-list-current.vercel.app/"
                width={800}
                height={800}
                loading="lazy"
            ></iframe>
            <article>
                <br />
                <h2 style={{ fontWeight: 'bolder' }}>SCOPE OF THE PROJECT</h2>
                <hr />
                <p>
                    MovieTracker is a web application designed to help users
                    keep track of currently playing movies and explore their
                    details and reviews. With MovieTracker, users can easily
                    browse through a curated list of movies currently in
                    theaters, bookmark their favorites for later viewing, and
                    delve into comprehensive information and reviews for each
                    selected movie.
                </p>

                <h2 style={{ fontWeight: 'bolder' }}>FEATURES</h2>
                <hr />
                <h3 style={{ fontWeight: 'bolder' }}>
                    1- DISPLAY CURRENTLY PLAYING MOVIES
                </h3>
                <hr />
                <p>
                    <ul>
                        <li>
                            Present users with an up-to-date list of movies
                            currently being screened in theaters.
                        </li>
                        <li>
                            Utilize The Movie Database (TMDb) API to fetch
                            real-time data on currently playing movies.
                        </li>
                    </ul>
                </p>
                <h3 style={{ fontWeight: 'bolder' }}>
                    2- BOOKMARKING FUNCTIONALITY
                </h3>
                <hr />
                <p>
                    <ul>
                        <li>
                            Allow users to mark movies as favorites for quick
                            access later
                        </li>
                        <li>
                            Implement user-specific bookmarking to save
                            preferences across sessions.
                        </li>
                    </ul>
                </p>
                <h3 style={{ fontWeight: 'bolder' }}>
                    3- DETAILED MOVIE INFORMATION
                </h3>
                <hr />
                <p>
                    <ul>
                        <li>
                            Enable users to click on a movie title to view
                            detailed information and reviews.
                        </li>
                        <li>
                            Utilize TMDb API to retrieve comprehensive details
                            and reviews for each movie.
                        </li>
                    </ul>
                </p>
            </article>
            <br />
            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    )
}

export default Project8
