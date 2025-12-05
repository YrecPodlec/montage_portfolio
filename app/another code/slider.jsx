"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LeftScale, Iframe } from "../../shared/index";
import styles from "./slider.module.scss";
import { Pagination } from "../../features/index";

const cardVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.1,
            ease: [0.15, 2, 0.64, 1],
        },
    }),
};

const Slider = ({ title, initialArray, type, index }) => {
    const trackRef = useRef(null);

    return (
        <section className={styles.section} id={title}>
            <LeftScale index={index} />

            <Pagination initialArray={initialArray} title={title}>
                {(array, currentIndex, { next, prev }) => {
                    // Считаем шаг: ширина НЕАКТИВНОГО слайда + gap
                    const itemWidth = type === "wide" ? 40 : 25; // rem — как у .second и .tall
                    const gap = 2; // rem — как в gap: 2rem
                    const step = itemWidth + gap;

                    useEffect(() => {
                        if (!trackRef.current) return;
                        // Двигаем ровно на currentIndex шагов
                        trackRef.current.style.transform = `translateX(calc(-${currentIndex * step}rem - 10vw))`;
                    }, [currentIndex]);

                    return (
                        <div className={styles.sliderWrapper}>
                            <div className={styles.scrollContainer} ref={trackRef}>
                                <div className={styles.content}>
                                    {array.map((item, idx) => (
                                        <div
                                            key={item.video + idx}
                                            className={styles.contentVideo}
                                            data-active={idx === currentIndex}
                                        >
                                            <motion.div
                                                className={`
                          ${type === "wide" ? styles.wide : styles.tall}
                          ${idx !== currentIndex && type === "wide" ? styles.second : ""}
                        `.trim()}
                                                whileHover={{
                                                    scale: 1.04,
                                                    y: -10,
                                                    transition: { duration: 0.1, ease: "easeOut" }
                                                }}
                                                initial="hidden"
                                                whileInView="visible"
                                                custom={idx}
                                                variants={cardVariants}
                                                viewport={{ once: false, amount: 0.1 }}
                                            >
                                                <Iframe poster={item.poster} video={item.video} />
                                            </motion.div>

                                            <div className={styles.textWrapper}>
                                                <motion.h2
                                                    initial={{ opacity: 1, y: 20 }}
                                                    whileInView={{ opacity: idx === currentIndex ? 1 : 0.6, y: 0 }}
                                                    viewport={{ once: false }}
                                                    transition={{ delay: 0.3 + idx * 0.08, duration: 0.1 }}
                                                    className={styles.h2}
                                                >
                                                    {item.text}
                                                </motion.h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Pagination>
        </section>
    );
};

export default Slider;