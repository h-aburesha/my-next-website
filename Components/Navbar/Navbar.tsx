import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <div className="navigation-bar">
            <Link href="/projects">
                <button>PROJECTS</button>
            </Link>
            <Link href="/about">
                <button>ABOUT</button>
            </Link>

            <a href="mailto:hassan.aburesha@gmail.com" target="_blank">
                <button>EMAIL</button>
            </a>
        </div>
    );
}

export default Navbar;
