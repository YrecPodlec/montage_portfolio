import React from 'react';
import styles from './paginationRow.module.scss'
import Image from "next/image";
const PaginationRow = ({click, rotate, opacity}) => {
    return (
        <div className={styles.box}>
            <button className={styles.row} onClick={click}
                    style={{
                        transform: `rotate(${rotate}deg)`,
                        opacity: opacity ? 0.2 : 1,
                        cursor: opacity ? 'default' : 'pointer',
                    }}>
                <Image src={'/row.svg'} alt={'arrow'} fill />
            </button>
        </div>
    );
};

export default PaginationRow;