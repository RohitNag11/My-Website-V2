import styles from './Footer.module.scss'
import { websiteData } from '../../../data/websiteData';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a
                    href="https://www.linkedin.com/in/rohit-nag/"
                    target="_blank"
                    rel="noreferrer">
                    LinkedIn
                </a>
                <a
                    href="https://www.instagram.com/rohitnag_art"
                    target="_blank"
                    rel="noreferrer">
                    Instagram
                </a>
                <a
                    href="https://github.com/RohitNag11"
                    target="_blank"
                    rel="noreferrer">
                    GitHub
                </a>
            </div>
            <div className={styles.main}>
                <div className={styles.contact}>
                    Get in touch: &nbsp;
                    <a
                        href={`mailto:${websiteData.email}?subject=Hello from your website`}
                        rel="noreferrer">
                        {websiteData.email}
                    </a>
                </div>
                <div className={styles.note}>About this website: <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a> framework, <a href="https://www.prisma.io" target="_blank" rel="noreferrer">Prisma</a> database, <a href="https://next-auth.js.org" target="_blank" rel="noreferrer">NextAuth.js</a> authentication, <a href="https://sass-lang.com" target="_blank" rel="noreferrer">Sass</a> styling, <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank" rel="noreferrer">Three.js</a> 3D rendering, <a href="https://www.react-spring.dev" target="_blank" rel="noreferrer">react-spring</a> animations,<a href="https://vercel.com/home" target="_blank" rel="noreferrer">Vercel</a> deployment</div>
                <div className={styles.note}>Last updated: {websiteData.lastUpdated}</div>
                <div className={styles.copyright}>© {websiteData.yearCreated} {websiteData.author}</div>
            </div>
            <div className={styles.gradientBackground}>

            </div>
        </footer>
    );
}

export default Footer;