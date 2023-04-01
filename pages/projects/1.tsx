import { motion, useScroll, useSpring } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import Image from "next/image";
import b1 from "../../public/bold_pics/b1.png";
import b2 from "../../public/bold_pics/b2.png";
import b3 from "../../public/bold_pics/b3.png";
import b4 from "../../public/bold_pics/b4.png";
import b5 from "../../public/bold_pics/b5.png";

function Project1() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <nav>
                <div className="navigation-bar">
                    <Link href="/">
                        <button>HOME</button>
                    </Link>
                    <Link href="/projects">
                        <button>PROJECTS</button>
                    </Link>

                    <a href="mailto:hassan.aburesha@gmail.com" target="_blank">
                        <button>EMAIL</button>
                    </a>
                </div>
            </nav>

            <h1>
                <code>Bold</code> with spring smoothing!
            </h1>

            <Carousel
                maw="auto"
                mx="auto"
                withIndicators
                height="auto"
                controlsOffset="xs"
                loop
            >
                <Carousel.Slide>
                    <Image
                        src={b1}
                        alt="Bold fitness tracking app home page built by react native over expo client"
                        placeholder="blur"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                        src={b2}
                        alt="Bold fitness tracking app macronutients page"
                        placeholder="blur"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                        src={b3}
                        alt="Bold fitness tracking app native recepies carousel"
                        placeholder="blur"
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <Image
                        src={b4}
                        alt="Bold fitness tracking app profile page"
                        placeholder="blur"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                        src={b5}
                        alt="Bold fitness tracking app to-do list modal with touchable opacity"
                        placeholder="blur"
                    />
                </Carousel.Slide>
            </Carousel>

            <article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac rhoncus quam.
                </p>
                <p>
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                </p>
                <h2>Sub-header</h2>
                <p>
                    In eget sodales arcu, consectetur efficitur metus. Duis
                    efficitur tincidunt odio, sit amet laoreet massa fringilla
                    eu.
                </p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Bold - React Native, Node.js, PostgresSQL A fitness tracking
                    mobile app that allows users to scan food product barcodes
                    to display macronutrients, track body metrics, set notes and
                    reminders, and get recipe suggestions. The metrics page
                    displays total macronutrient intake for the day. Social
                    Network Platform - React/Redux, Node.js, PostgresSQL A
                    social network platform with features like creating profile
                    pages, updating bio and profile picture, adding, rejecting
                    or accepting friend requests, and using a chat feature
                    through socket.io. The backend allows users to register,
                    save their information, edit profiles, and reset or change
                    passwords. Imageboard - Vue.js, Node.js, PostgresSQL, AWS An
                    anonymous image board where users can upload pictures, add
                    comments, and like photos. The app is fully responsive and
                    utilizes AWS bucket for image hosting.
                </p>
            </article>
            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    );
}

export default Project1;

/* 

import { useRouter } from "next/router";

    const router = useRouter();
    const projectId = router.query.projectId;

*/
