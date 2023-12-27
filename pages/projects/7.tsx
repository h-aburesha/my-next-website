import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaLink } from 'react-icons/fa'

import verballyHomePageImage from '../../public/verbally_pics/homepage.png'
import verballyModalPopupImage from '../../public/verbally_pics/modal-popup.png'
import verballyTooltipTextImage from '../../public/verbally_pics/tooltip-text.png'
import verballyVerticalNavImage from '../../public/verbally_pics/vertical-nav.gif'
import verballyTooltipImage from '../../public/verbally_pics/tooltip-img.gif'
import verballySkeletonsImage from '../../public/verbally_pics/skeletons.gif'
import verballySpinnerImage from '../../public/verbally_pics/spinner.gif'
import verballyTimedDialog from '../../public/verbally_pics/timer-dialog.gif'
import Navbar from '../components/navbar'

function Project7() {
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
                <code style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                    Verbally GmbH
                </code>
                <br />
                <code style={{ fontWeight: 'bold', fontSize: '1em' }}>
                    Meeting Assistant Notifications
                </code>
                <a target={'_blank'} href="https://app.verbally.io/">
                    <FaLink />
                </a>
                <br />
                <code
                    style={{
                        fontStyle: 'normal',
                        fontWeight: 'lighter',
                        fontSize: '0.8em',
                    }}
                >
                    &quot;ReactJS, Redux, Figma&quot;
                </code>
            </h1>

            <article>
                <Image
                    src={verballyHomePageImage}
                    placeholder="blur"
                    alt="verbally's meeting assistant home page"
                    width={800}
                    priority={true}
                    loading="eager"
                />
                <h2 style={{ fontWeight: 'bolder' }}>SCOPE OF THE PROJECT</h2>
                <hr />
                <p>
                    The project was to create a meeting assistant push
                    notifications that notifies the user during their meetings,
                    using existing features such as &quot;habit nudging&quot;,
                    &quot;active speaker timer&quot; and &quot;end of
                    meeting&quot;. The project was developed using ReactJS and
                    Redux. The project was developed by me starting from the UX,
                    UI design and ending with the development.
                </p>

                <h2 style={{ fontWeight: 'bolder' }}>FEATURES:</h2>
                <hr />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    1- ACTIVE SPEAKER TIMER
                </h3>
                <hr />
                <br />
                <video src="/videos/active-speaker.mov" loop controls />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    2- TOOLTIP TEXT INFO DISPLAY
                </h3>
                <hr />
                <br />
                <Image
                    src={verballyTooltipTextImage}
                    placeholder="blur"
                    loading="eager"
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: '4px',
                        boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px',
                    }}
                />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    3- VERTICAL NAVIGATION MENU
                </h3>
                <hr />
                <br />
                <Image
                    src={verballyVerticalNavImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: '4px',
                        boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px',
                    }}
                />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    4- TOOLTIP IMAGE DISPLAY
                </h3>
                <hr />
                <br />
                <Image
                    src={verballyTooltipImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: '4px',
                        boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px',
                    }}
                />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    5- PLACEHOLDER SKELETONS
                </h3>
                <hr />
                <p>
                    This is designed to display placeholders styled after the
                    actual component, that display similar grey figures till API
                    calls are fulfilled and component is propagated.{' '}
                </p>
                <br />
                <Image
                    src={verballySkeletonsImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: '4px',
                        boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px',
                    }}
                />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    6- SPINNER PLACEHOLDER FOR IMAGES
                </h3>
                <hr />
                <br />
                <Image
                    src={verballySpinnerImage}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: '4px',
                        boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px',
                    }}
                />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    7- TIMED DIALOG TO ALLOW TIME FOR SETTINGS PROPAGATION
                </h3>
                <hr />
                <br />
                <Image
                    src={verballyTimedDialog}
                    alt="verbally's meeting assistant home page"
                    width={600}
                    style={{
                        borderRadius: '4px',
                        boxShadow: 'rgb(255 255 255 / 45%) 4px 3px 9px',
                    }}
                />
                <br />
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    )
}

export default Project7
