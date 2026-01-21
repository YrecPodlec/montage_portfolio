"use client"
import React from 'react';
import styles from './pagination.module.scss';
import {PaginationRow, Title} from "../../shared/index";

const Pagination = ({ children, initialArray, title }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const next = () => {
        if (currentIndex < initialArray.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const renderedChildren = typeof children === 'function'
        ? children(initialArray, currentIndex)
        : children;
console.log(currentIndex);
console.log(initialArray);
console.log(currentIndex === 0);
    return (
        <section className={styles.paginationSection}>
            <div className={styles.titleContainer}>
                <Title title={title}/>
                <div className={styles.btns}>
                    <PaginationRow click={prev} rotate={0} opacity={currentIndex === 0} />
                    <PaginationRow click={next} rotate={180} opacity={currentIndex === initialArray.length - 1} />
                </div>
            </div>
            <div className={styles.paginationContent}>
                {renderedChildren}
            </div>
        </section>
    );
};

export default Pagination;
