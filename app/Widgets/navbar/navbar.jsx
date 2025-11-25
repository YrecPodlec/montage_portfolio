import React from 'react';
import Link from "next/link";
import styles from "./navbar.module.scss";
const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href={''}>Реклама</Link>
                <Link href={''}>Шоу</Link>
                <Link href={''}>Motion Design</Link>
                <Link href={''}>Motion Design</Link>
                <Link href={''}>Docs</Link>
                <Link href={''}>Интервью</Link>
                <Link href={''}>Музыка</Link>
                <Link href={''}>Reels</Link>
            </nav>
        </header>
    );
};

export default Navbar;