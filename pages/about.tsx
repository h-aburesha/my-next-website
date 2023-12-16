import React from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Image from "next/image";
import me from "../public/me.png";
import myStackCover from "../public/my-stack-cover.png";
import Link from "next/link";
import Navbar from "./components/navbar";

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
            <article style={{ marginBottom: 24 }}>
                <hr />
                <Image
                    src={myStackCover}
                    alt="my-stack-cover"
                    placeholder="blur"
                />
                <h2>INTRODUCTION</h2>
                <hr />
                <p>
                    I am a junior full-stack developer with a background in
                    UX/UI design and DevOps account management. My passion is
                    creating user-friendly web and mobile applications. I have
                    strong knowledge in various technologies, including NextJS,
                    ReactJS, React Native, VueJS, NodeJS, TypeScript, and Figma.
                </p>
                <h2>CURRENTLY</h2>
                <hr />
                <p>
                    I completed intensive, project-based training in web
                    development and UX/UI design at Spiced Academy GmbH and
                    Ironhack GmbH, respectively. At Spiced, I learned
                    JavaScript, HTML, CSS, and various technologies such as
                    React, Vue.js, Node.js, and TypeScript. I developed multiple
                    projects including a fitness tracking app, social network
                    platform, and an anonymous image board. During the Ironhack
                    bootcamp, I focused on design principles, user empathy, and
                    UX writing, and completed various UI projects including a
                    fitness tracking app, editorial magazine, and photographer
                    website.
                </p>
                <h2>PREVIOUSLY</h2>
                <hr />
                <p>
                    I hold a Masters degree in Economics from
                    Philipps-Universität Marburg and a Bachelor degree in
                    Economics from Cairo University. Before pursuing a career in
                    web development, I worked as a business development manager
                    for ICT companies, where I acquired eight successful years
                    of experience in account management, market/financial
                    analysis, and creative customer solutions.
                </p>
                <h2>SKILL-SET</h2>
                <hr />
                <p>
                    I hold excellent skills in customer orientation,
                    problem-solving, conflict management, market and financial
                    analysis, as well as user experience design. I am a native
                    English and Arabic speaker with full working proficiency in
                    German.
                </p>
            </article>
        </>
    );
};

export default AboutMe;
