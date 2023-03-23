function Footer({ title = "All rights reserved" }) {
    return (
        <footer>
            <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noreferrer"
            ></a>
            <a
                href="https://www.framer.com/docs/scroll-animations/"
                target="_blank"
                rel="noreferrer"
            >
                <code>{title}</code>
            </a>
        </footer>
    );
}

export default Footer;
