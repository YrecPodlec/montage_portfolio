import React from 'react';
import styles from './footer.module.scss'
import Link from "next/link";
import {Btn} from "../../shared/index";
const Footer = () => {
    const data = [
        {
            ico: "/ico/1.svg",
            title: "Корявкин Илья",
            href: "https://www.kinopoisk.ru/name/10332890/?ysclid=mir3eh2mat544293506&utm_referrer=yandex.by"
        },
        {
            ico: "/ico/2.svg",
            title: "@skipper_aep",
            href: "https://t.me/skipper_aep"
        },
        {
            ico: "/ico/3.svg",
            title: "@skipper_gg",
            href: "https://vk.com/skipper_gg"
        },
        {
            ico: "/ico/4.svg",
            title: "@skipper_aep",
            href: "https://www.instagram.com/skipper_aep?igsh=MTlpZzJoeTQ0eTh0eA%3D%3D&utm_source=qr"
        },
    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.boxNav}>
                <nav>
                    <Link href={'#Реклама'}>Реклама</Link>
                    <Link href={'#Шоу'}>Шоу</Link>
                    <Link href={'#Motion Design'}>Motion Design</Link>
                    <Link href={'#Интервью'}>Интервью</Link>
                    <Link href={'#Музыка'}>Музыка</Link>
                    <Link href={'#Reels'}>Reels</Link>
                </nav>
                <div>©Корявкин Илья</div>
            </div>
            <div className={styles.boxRight}>
                <div className={styles.itemList}>
                    {data.map((item, index) =>
                        <a href={item.href} key={index} className={styles.boxItem} target="_blank" rel="noopener noreferrer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.ico} alt={item.title} />
                                <p>{item.title}</p>
                        </a>
                    )}
                </div>
                <div>
                    <a href="https://t.me/skipper_aep">
                        <Btn text={"ОБСУДИТЬ ПРОЕКТ"}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;