import Image from "next/image";
import styles from "../styles/Footer.module.css"


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <Image src="/enjoy.png" width={110} height={45} />
            </div>
            <div className={styles.footerText}>
                <span>
                    Support:
                </span>
                <div>
                Help Center
                <br/>
                Safety information
                <br/>
                Supporting people with disabilities
                </div>
            </div>

            <div className={styles.footerText}>
                <span>
                    Community:
                </span>
                <div>
                    Airbnb.org: disaster relief housing
                    <br/>
                    Support Afghan refugees
                    <br/>
                    Combating discrimination       
                                    </div>
            </div>

            <div className={styles.footerText}>
                <span>
                    Enjoy:
                </span>
                <div>
                Newsroom
                <br/>
                Learn about new features
                <br/>
                Letter from our founders
                </div>
            </div>

        </footer>
    );
}

export default Footer;