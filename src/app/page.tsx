'use client'

import styles from "./page.module.scss";
import Iphone from "@/components/Iphone";
import React, {useState} from 'react';
import Spline from "@splinetool/react-spline";

export default function Home() {
    const [is3D, setIs3D] = useState(false);

    return (
        <section className={styles.home}>
            <h1 className="visually-hidden">.solutions</h1>
            <button onClick={() => setIs3D(!is3D)} type="button" className={styles.toggleBtn}>{is3D ? `2D` : `3D`}</button>
            <a className={styles.link} href="https://t.me/alienba6y">contact me</a>
            {
                is3D ? (
                    <Spline
                        scene="https://prod.spline.design/y9Q0z11ZBIZBqC3O/scene.splinecode"
                    />
                ) : (
                    <Iphone/>
                )
            }
            <a className={styles.portfolioLink} href="https://www.devba6y.site/">about me</a>
        </section>
    );
}
