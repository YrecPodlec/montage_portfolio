"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeftScale, Iframe } from "../../shared/index";
import styles from "./slider.module.scss";
import { Pagination } from "../../features/index";

// === МАКСИМАЛЬНО БЫСТРО + ОГОНЬ BOUNCE (back.out) ===
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 70,
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.1,
            ease: [0.15, 2, 0.64, 1],
        },
    }),
    exit: {
        opacity: 0,
        y: -50,
        transition: { duration: 0.1 }
    }
};

const Slider = ({ title, initialArray, type, index }) => {
    return (
        <section className={styles.section} id={title}>
            <LeftScale index={index} />

            <Pagination initialArray={initialArray} title={title}>
                {(currentArray) => (
                    <div className={styles.content}>
                        <AnimatePresence mode="wait">
                            {currentArray.map((item, idx) => (
                                <motion.div
                                    key={item.video + idx}
                                    custom={idx}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    exit="exit"
                                    viewport={{
                                        once: false,
                                        amount: 0.1,
                                        margin: "-80px 0px -80px 0px"
                                    }}
                                    className={styles.contentVideo}
                                >
                                    <motion.div
                                        className={`
                      ${type === "wide" ? styles.wide : styles.tall}
                      ${idx !== 0 && type === "wide" ? styles.second : ""}
                    `.trim()}
                                        whileHover={{
                                            scale: 1.04,
                                            y: -10,
                                            transition: { duration: 0.1, ease: "easeOut" }
                                        }}
                                    >
                                        <Iframe poster={item.poster} video={item.video} />
                                    </motion.div>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: idx === 0 ? 1 : 0.6, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            delay: 0.3 + idx * 0.08,
                                            duration: 0.1,
                                            ease: "easeOut"
                                        }}
                                        className={idx !== 0 ? styles.notYet : styles.h2}
                                    >
                                        {item.text}
                                    </motion.h2>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </Pagination>
        </section>
    );
};

export default Slider;