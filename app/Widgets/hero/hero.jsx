"use client";

import React, { useEffect, useState } from "react";
import styles from "./hero.module.scss";
import { Btn } from "../../shared";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    if (isMobile === null) return null; // чтобы не было гидрации ада

    return (
        <section className={styles.section}>
            <div className={styles.videoWrapper}>
                <video
                    key={isMobile ? "mobile" : "desktop"}
                    src={isMobile ? "/videos/mobile_optimized.mp4" : "/videos/desktop_optimized.mp4"}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            </div>

            <div className={styles.contentDown}>
                <div className={styles.left}>
                    <h1>ILYA</h1>
                    <h1>SKIPPER</h1>
                </div>
                <div className={styles.right}>
                    <h2>Режисер Монтажа</h2>
                    <a href="https://t.me/skipper_aep">
                        <Btn text="ОБСУДИТЬ ПРОЕКТ" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
