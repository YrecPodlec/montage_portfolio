"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";
import { LeftScale, Title } from "../../shared/index";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
};

const itemVariants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1
    },
};

const About = ({ index }) => {
    const lines = [
        "Режиссер монтажа с опытом <span>более 6 лет.</span>",
        "Призер Национального чемпионата <span>«ArtMasters»</span> в категории видеомонтажер.",
        "Сотрудничал с <span>VK, Вкусно и Точка, Кинопоиск, Одноклассники, телеканал 2х2, Ozon</span> и др.",
    ];

    return (
        <motion.section className={styles.section}
                 initial={{}}
                 whileInView={{}}
                 viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className={styles.sectionBorder}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.4,
                    ease: [0.2, 0, 0.2, 1],
                    delay: 0.4,
                }}
            />
            <LeftScale index={index} />

            <div className={styles.content}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4, margin: "-100px" }} // анимируется ТОЛЬКО ОДИН РАЗ
                    variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                        <Title title="Обо мне" />
                    </motion.div>

                    {lines.map((line, i) => (
                        <motion.p
                            key={i}
                            variants={itemVariants}
                            dangerouslySetInnerHTML={{ __html: line }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;