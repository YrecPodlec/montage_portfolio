"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { LeftScale } from "../../shared/index";
import styles from "./slider.module.scss";
import { Pagination } from "../../features/index";

const TRANSITION = {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
};

const Slider = ({ title, initialArray, type, index }) => {
    const isIOS =
        typeof navigator !== "undefined" &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);

    const containerRef = React.useRef(null);
    const [offsets, setOffsets] = React.useState([]);
    const rafRef = React.useRef(null);

    const updateOffsets = React.useCallback(() => {
        if (!containerRef.current) return;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            const children = Array.from(containerRef.current.children);
            const positions = children.map((el) => el.offsetLeft);
            setOffsets(positions);
        });
    }, []);

    React.useLayoutEffect(() => {
        updateOffsets();
    }, [initialArray, updateOffsets]);

    React.useEffect(() => {
        window.addEventListener("resize", updateOffsets);
        return () => {
            window.removeEventListener("resize", updateOffsets);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [updateOffsets]);

    React.useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(updateOffsets);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [updateOffsets]);

    return (
        <motion.section
            className={styles.section}
            id={title}
            initial={isIOS ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{
                opacity: 1
            }}
            viewport={{
                once: true,
                amount: 0.3,
                margin: "-80px 0px -80px 0px"
            }}

            transition={{
                duration: 1.5,
                ease: [0.2, 0, 0.2, 1],
                delay: .7,
            }}
        >
            <motion.div
                className={styles.sectionBorder}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{
                    once: true,
                    amount: 0.3,
                    margin: "-80px 0px -80px 0px"
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.2, 0, 0.2, 1],
                }}
            />
            <LeftScale index={index} />

            <Pagination initialArray={initialArray} title={title}>
                {(array, currentIndex) => (
                    <div className={styles.contentWrapper}>
                        <motion.div
                            ref={containerRef}
                            className={styles.content}
                            animate={{
                                x:
                                    offsets.length > 0
                                        ? -(offsets[currentIndex] || 0) + (offsets[0] || 0)
                                        : 0,
                            }}
                            transition={TRANSITION}
                            layout={false}
                        >
                            {array.map((item, idx) => {
                                const isCurrent = idx === currentIndex;

                                return (
                                    <div key={`${item.video}-${idx}`}>
                                        <motion.div
                                            initial={false}
                                            className={styles.contentVideo}
                                            animate={{
                                                scale: isCurrent ? 1 : 0.8,
                                                opacity: isCurrent ? 1 : 0.5,
                                                filter: isCurrent ? "none" : "grayscale(90%) blur(2px)",
                                            }}
                                            transition={TRANSITION}
                                        >
                                            <a
                                                href={isCurrent ? item.video : undefined}
                                                aria-disabled={!isCurrent}
                                                tabIndex={isCurrent ? 0 : -1}
                                                rel={isCurrent ? "noreferrer" : undefined}
                                                target={isCurrent ? "_blank" : undefined}
                                            >
                                                <motion.div
                                                    className={`${styles.posterImage} ${type === "wide" ? styles.wide : styles.tall}`}>
                                                    <Image
                                                        src={item.poster}
                                                        alt={item.title || "Video poster"}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                        loading="lazy"
                                                    />
                                                </motion.div>
                                            </a>
                                        </motion.div>

                                        <motion.h2
                                            animate={{
                                                opacity: isCurrent ? 1 : 0,
                                            }}
                                            transition={TRANSITION}
                                            className={styles.h2}
                                        >
                                            {item.text}
                                        </motion.h2>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                )}
            </Pagination>
        </motion.section>
    );
};

export default Slider;