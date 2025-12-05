"use client";

import React, { useState } from 'react';
import styles from './padgination.module.scss';
import { PaginationRow, Title } from "../../shared/index";

const Pagination = ({ children, initialArray, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        if (!initialArray || initialArray.length <= 1) return;
        setCurrentIndex(prev => (prev + 1) % initialArray.length);
    };

    const prev = () => {
        if (!initialArray || initialArray.length <= 1) return;
        setCurrentIndex(prev => (prev - 1 + initialArray.length) % initialArray.length);
    };

    // Передаём в children: сам массив (неизменный!), текущий индекс и функции
    const renderedChildren = typeof children === 'function'
        ? children(initialArray, currentIndex, { next, prev })
        : children;

    return (
        <section className={styles.paginationSection}>
            <div className={styles.titleContainer}>
                <Title title={title} />
                <div className={styles.btns}>
                    <PaginationRow click={prev} rotate={0} />
                    <PaginationRow click={next} rotate={180} />
                </div>
            </div>
            <div className={styles.paginationContent}>
                {renderedChildren}
            </div>
        </section>
    );
};

export default Pagination;