import React from 'react'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import Image from 'next/image'
import me from '../public/me.png'
import myStackCover from '../public/my-stack-cover.png'
import Navbar from './components/navbar'

const AboutMe = () => {
    return (
        <>
            <Navbar />
            <div className="profile-picture">
                <Image
                    alt="hassan-aburesha"
                    src={me}
                    className="my-image"
                    placeholder="blur"
                />
                <h1>
                    <code>Hassan Aburesha</code>
                </h1>
                <div className="icons">
                    <a
                        target={'_blank'}
                        href="https://www.linkedin.com/in/haburesha/"
                    >
                        <FaLinkedin />
                    </a>
                    <a target={'_blank'} href="https://github.com/h-aburesha">
                        <FaGithub />
                    </a>
                    {/*<a href="/hassan_aburesha_cv.pdf" download>
                        <FaDownload />
                    </a>*/}
                </div>
            </div>
            <article style={{ marginBottom: 24 }}>
                <hr />
                <Image
                    src={myStackCover}
                    alt="my-stack-cover"
                    placeholder="blur"
                />
                <h2>ABOUT</h2>
                <hr />
                <p>
                    Fullstack Software Engineer, with a passion for creating
                    user-friendly, responsive, and engaging web applications
                    that enhance user satisfaction and loyalty. I have a strong
                    background in UX/UI design and development, as well as CRM
                    software and Figma, which I use to collaborate with
                    cross-functional teams, conduct the full cycle of product
                    development, and deliver high-quality solutions on time and
                    on budget.
                </p>
                <h2>GOAL</h2>
                <hr />
                <p>
                    My goal is to leverage my diverse skill set and domain
                    expertise to create innovative and impactful web
                    applications that solve real-world problems and delight
                    users.
                </p>
                <h2>PREVIOUSLY</h2>
                <hr />
                <p>
                    I spent more than eight years in various roles in DevOps
                    Strategic Sales, Project Management, and Corporate Lending,
                    where I acquired valuable skills in customer acquisition and
                    support, account development, forecasting, and reporting.
                </p>
            </article>
        </>
    )
}

export default AboutMe
