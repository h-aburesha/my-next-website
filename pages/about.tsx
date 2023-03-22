import React from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Image from "next/image";

const AboutMe = () => {
    return (
        <>
            <div className="profile-picture">
                <Image
                    src="/my-stack-cover.png"
                    alt="my-stack-cover"
                    width={800}
                    height={400}
                />
                <h1>
                    <code>Hassan Aburesha</code>
                </h1>
                <div className="icons">
                    <a
                        target={"_blank"}
                        href="https://www.linkedin.com/in/haburesha/"
                    >
                        <FaLinkedin />
                    </a>
                    <a target={"_blank"} href="https://github.com/h-aburesha">
                        <FaGithub />
                    </a>
                    <a href="/hassan_aburesha_cv.pdf" download>
                        <FaDownload />
                    </a>
                </div>
            </div>

            <article>
                <h2>Brief Introduction</h2>
                <p>
                    I am a junior full-stack developer with a background in
                    UX/UI design and DevOps account management. I am passionate
                    about creating user-friendly web and mobile applications,
                    and I possess a wealth of knowledge in various technologies,
                    including JavaScript, React.js, React Native, Vue.js 2,
                    Node.js, TypeScript, and Figma.
                </p>
                <h2>Who I am now?</h2>
                <p>
                    I have completed a web development bootcamp at Spiced
                    Academy GmbH, where I acquired intensive, project-based
                    training in JavaScript, HTML, and CSS. The course focused on
                    the stack of React, React Native, Vue.js, Node.js,
                    TypeScript, and Node. During the bootcamp, I completed
                    various projects, including a fitness tracking mobile app
                    that allows users to scan food product barcodes, a social
                    network platform, and an anonymous image board.
                </p>

                <p>
                    In addition, I have completed a UX/UI design bootcamp at
                    Ironhack GmbH, where I learned the foundations of design
                    principles and design thinking, how to build empathy with
                    users, create user personas and flows, and incorporate UX
                    writing and storytelling. During the bootcamp, I completed
                    various UI projects, including a fitness tracking mobile
                    app, an editorial magazine, and a professional photographer
                    website.
                </p>

                <h2>Who I was?</h2>
                <p>
                    I hold a Masters degree in Economics from
                    Philipps-Universität Marburg and a Bachelor degree in
                    Economics from Cairo University. Before pursuing a career in
                    web development, I worked as a business development manager
                    for ICT companies, where I acquired successful eight years
                    of experience in account management, market/financial
                    analysis, and creative customer solutions.
                </p>
                <p>
                    I possess excellent skills in customer orientation,
                    problem-solving, conflict management, market, and financial
                    analysis, as well as user experience design. I am a native
                    English and Arabic speaker with full working proficiency in
                    German.
                </p>
            </article>
        </>
    );
};

export default AboutMe;
