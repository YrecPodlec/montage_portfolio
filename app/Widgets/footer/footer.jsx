import React from 'react';
import styles from './footer.module.scss'
import Link from "next/link";
import {Btn} from "../../shared/index";
const Footer = () => {
    const data = [
        {
            ico: "/ico/1.svg",
            title: "Корявкин Илья"
        },
        {
            ico: "/ico/2.svg",
            title: "@skipper_aep"
        },
        {
            ico: "/ico/3.svg",
            title: "@skipper_gg"
        },
        {
            ico: "/ico/4.svg",
            title: "@skipper_aep"
        },
    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.boxNav}>
                <nav>
                    <Link href={''}>Реклама</Link>
                    <Link href={''}>Шоу</Link>
                    <Link href={''}>Motion Design</Link>
                    <Link href={''}>Motion Design</Link>
                    <Link href={''}>Docs</Link>
                    <Link href={''}>Интервью</Link>
                    <Link href={''}>Музыка</Link>
                    <Link href={''}>Reels</Link>
                </nav>
                <div>©Корявкин Илья</div>
            </div>
            <div className={styles.boxRight}>
                <div className={styles.itemList}>
                    {data.map((item, index) =>
                        <div key={index} className={styles.boxItem}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.ico} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )}
                </div>
                <div>
                    <Btn text={"ОБСУДИТЬ ПРОЕКТ"}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;