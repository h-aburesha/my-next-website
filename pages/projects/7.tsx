import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'

import verballySpeakerTimer from '/public/verbally_pics/active-speaker.gif'
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
                <code style={{ fontWeight: 'bold', fontSize: '1em' }}>
                    Verbally GmbH
                </code>
                <br />
                <code style={{ fontWeight: 'bold', fontSize: '0.8em' }}>
                    Meeting&quot;s Assistant Notifications
                </code>
                <br />
                <code
                    style={{
                        fontStyle: 'normal',
                        fontWeight: 'lighter',
                        fontSize: '0.8em',
                    }}
                >
                    &quot;React, Redux, Figma&quot;
                </code>
            </h1>

            <article>
                <Image
                    src={verballySpeakerTimer}
                    alt="verbally's meeting assistant home page"
                    width={400}
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
                <p>
                    Notifies speaker during the meeting if they go over 2
                    minutes, in order to avoid monologues.
                </p>
                <br />
                <video
                    src="/videos/active-speaker.mov"
                    autoPlay={true}
                    loop={true}
                    controls
                />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>
                    2- MEETING HAS ENDED / RUNNING OVERTIME
                </h3>
                <hr />
                <p>
                    Notifies participants the meeting has ended and displays the
                    overtime duration, in order to avoid overtime.
                </p>
                <br />
                <video
                    src="/videos/meeting-ended.mov"
                    autoPlay={true}
                    loop={true}
                    controls
                />
                <br />
                <h3 style={{ fontWeight: 'bolder' }}>3- TIMER ONLY DISPLAY</h3>
                <hr />
                <p>
                    Allows verbally users to display only the meeting timer,
                    including active speaker and end of meeting notifications,
                    for meeting without preset agendas.
                </p>
                <br />
                <video
                    src="/videos/timer-only.mov"
                    autoPlay={true}
                    loop={true}
                    controls
                />
                <br />
                <br />
            </article>
            <br />

            <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    )
}

export default Project7
