"use client"
import React from 'react';
import styles from './padgination.module.scss'; // оставил твоё имя файла
import {BtnSlider, PaginationRow, Title} from "@/app/shared";

const Pagination = ({ children, initialArray, title, text }) => {
    const [newArr, setNewArr] = React.useState(initialArray || []);

    const next = () => {
        if (newArr.length <= 1) return;
        setNewArr(prev => {
            const arr = [...prev];
            const first = arr.shift();
            arr.push(first);
            return arr;
        });
    };

    const prev = () => {
        if (newArr.length <= 1) return;
        setNewArr(prev => {
            const arr = [...prev];
            const last = arr.pop();
            arr.unshift(last);
            return arr;
        });
    };

    const renderedChildren = typeof children === 'function'
        ? children(newArr, { next, prev })
        : children;

    return (
        <section className={styles.paginationSection}>
            <div className={styles.titleContainer}>
                <Title title={title}/>
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