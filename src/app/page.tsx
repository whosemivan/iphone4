import styles from "./page.module.scss";
import Iphone from "@/components/Iphone";

export default function Home() {
    return (
        <section className={styles.home}>
            <h1 className="visually-hidden">.solutions</h1>
            <a className={styles.link} href="https://t.me/alienba6y">contact me</a>
            <Iphone/>
            <a className={styles.portfolioLink} href="https://www.devba6y.site/">about me</a>
        </section>
    );
}
