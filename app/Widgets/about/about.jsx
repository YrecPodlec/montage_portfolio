"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";
import { LeftScale, Title } from "../../shared/index";

// Чистый JS — никаких типов!
const titleVariants = {
    hidden: { opacity: 0, y: 120, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 110,
            damping: 22,
            duration: 1.3,
            delay: 0.2,
        },
    },
};

const lineVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.7 + i * 0.3,
            duration: 1.1,
            type: "spring",
            stiffness: 100,
            damping: 20,
        },
    }),
};

const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            delay: 1.9,
            duration: 1.4,
            ease: "easeOut",
        },
    },
};

const About = ({ index }) => {
    const lines = [
        "Режиссер монтажа с опытом <span>более 6 лет.</span>",
        "Призер Национального чемпионата <span>«ArtMasters»</span> в категории видеомонтажер.",
        "Сотрудничал с <span>VK, Вкусно и Точка, Кинопоиск, Одноклассники, телеканал 2х2, Ozon</span> и др.",
    ];

    return (
        <section className={styles.section}>
            <LeftScale index={index} />

            <div className={styles.content}>
                <div>
                    {/* Заголовок */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4, margin: "-100px" }}
                        variants={titleVariants}
                    >
                        <Title title="Обо мне" />
                    </motion.div>

                    {/* Строки текста — по очереди с bounce */}
                    {lines.map((line, i) => (
                        <motion.p
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            variants={lineVariants}
                            dangerouslySetInnerHTML={{ __html: line }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;