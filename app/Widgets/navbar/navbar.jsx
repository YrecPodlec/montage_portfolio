"use client"
import React from 'react';
import Link from "next/link";
import styles from "./navbar.module.scss";
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <header className={styles.header}>
            <nav className={styles.nav}
            style={open ? {left: 0} : {}}>
                <Link href={'#Реклама'}>Реклама</Link>
                <Link href={'#Шоу'}>Шоу</Link>
                <Link href={'#Motion Design'}>Motion Design</Link>
                <Link href={'#Интервью'}>Интервью</Link>
                <Link href={'#Музыка'}>Музыка</Link>
                <Link href={'#Reels'}>Reels</Link>
            </nav>
            <div className={`${styles.burger} ${open ? styles.active : ''}`} onClick={() => {setOpen(!open)}}>
                <div/>
            </div>
        </header>
    );
};

export default Navbar;