import React from 'react';
import styles from './leftScale.module.scss'
const LeftScale = ({index}) => {
    return (
        <div className={styles.scale}>
            <div className={styles.time}>
                {`00;0${index}`}
            </div>
        </div>
    );
};

export default LeftScale;