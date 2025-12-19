import React from 'react';
import styles from './hero.module.scss';
import {Btn} from "../../shared/index";
const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.contentDown}>
                <div className={styles.video}>
                    <video
                        src="/videos/first.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                    />
                </div>
                <div className={styles.left}>
                    <h1>ILYA</h1>
                    <h1>SKIPPER</h1>
                </div>
                <div className={styles.right}>
                    <h2>Режисер Монтажа</h2>
                    <Btn text={"Обсудить проект"}/>
                </div>
            </div>
        </section>
    );
};

export default Hero;