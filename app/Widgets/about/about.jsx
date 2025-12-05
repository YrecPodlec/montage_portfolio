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
        <section className={styles.section}>
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
        </section>
    );
};

export default About;