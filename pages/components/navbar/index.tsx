import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter();
    const pathName = router.pathname;

    return (
        <div className="navigation-bar">
            {pathName !== "/" && (
                <Link href="/">
                    <button>HOME</button>
                </Link>
            )}
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
