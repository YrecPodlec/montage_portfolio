import React from 'react';
import styles from './btnSlider.module.scss'
const BtnSlider = ({text}) => {
    return (
        <button className={styles.btn}>
            {text}
        </button>
    );
};

export default BtnSlider;