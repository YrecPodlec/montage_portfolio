import React from 'react';
import styles from './title.module.scss'
const Title = ({title}) => {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    );
};

export default Title;