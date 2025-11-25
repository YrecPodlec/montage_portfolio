"use client"
import React from 'react';
import {LeftScale, Iframe} from "@/app/shared";
import styles from './slider.module.scss';
import { Pagination } from "@/app/features";

const Slider = ({ title, initialArray, type, index }) => {
    return (
        <section className={styles.section}>
            <LeftScale index={index} />
                <Pagination initialArray={initialArray} title={title}>
                    {(currentArray) => (
                        <div className={styles.content}>
                            {currentArray.map((item, idx) => (
                                <div key={idx} className={styles.contentVideo}>
                                    <div
                                        className={`
                                            ${type === "wide" ? styles.wide : styles.tall}
                                            ${idx !== 0 && type === "wide" ? styles.second : ''}
                                        `.trim()}
                                    >
                                        <Iframe poster={item.poster} video={item.video} />
                                    </div>
                                    <h2 className={idx !== 0 ? styles.notYet : styles.h2}>{item.text}</h2>
                                </div>
                            ))}
                        </div>
                    )}
                </Pagination>
        </section>
    );
};

export default Slider;