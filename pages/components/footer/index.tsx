import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

function Footer({ title = "All rights reserved" }) {
    return (
        <footer>
            <div className="footer-icons">
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
            <code>{title} &copy;</code>
        </footer>
    );
}

export default Footer;
