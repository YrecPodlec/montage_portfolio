import React from 'react';
import styles from './about.module.scss'
import Image from "next/image";
import {LeftScale, Title} from "../../shared/index";
const About = ({index}) => {
    return (
        <section className={styles.section}>
            <LeftScale index={index} />
            <div className={styles.content}>
                <div>
                    <Title title={"Обо мне"}/>
                    <p>
                        Режиссер монтажа с опытом <span>более 6 лет.</span>
                    </p>
                    <p>
                        Призер Национального чемпионата <span>«ArtMasters»</span> в категории видеомонтажер.
                    </p>
                    <p>
                        Сотрудничал с <span>VK, Вкусно и Точка, Кинопоиск, Одноклассники, телеканал 2х2, Ozon</span> и др.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;