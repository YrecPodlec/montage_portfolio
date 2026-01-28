import React from "react";
import styles from "./hero.module.scss";
import { Btn } from "../../shared/index";

const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.videoWrapper}>
                <video
                    className={styles.desktopVideo}
                    src="/videos/desktop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                />
                <video
                    className={styles.mobileVideo}
                    src="/videos/mobile.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
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
                        <Btn text={"ОБСУДИТЬ ПРОЕКТ"}/>
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Hero;
