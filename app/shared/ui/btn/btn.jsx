import React from 'react';
import styles from './btn.module.scss'
const Btn = ({text}) => {
    return (
        <button className={styles.btn}>
            {text}
        </button>
    );
};

export default Btn;