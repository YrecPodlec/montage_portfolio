import React from 'react';
import {About} from "@/app/Widgets";
import styles from "./section.module.scss";
import {Slider} from "@/app/features";
const Section = () => {
    const array = [
        {
          type: "about",
        },
        {
            title: "РЕКЛАМА",
            type: "wide",
            array: [
                {
                    video:"https://vk.com/video_ext.php?oid=-229346894&id=456239100&autoplay=0",
                    poster:"./videos/reklama/1.jpg",
                    text: "Вкусно и точка: Демиглас"
                },
                {
                    video:"./videos/reklama/2.mp4",
                    poster:"./videos/reklama/1.jpg",
                    text: "Вкусно и точка | Бурунов"
                },
                {
                    video:"./videos/reklama/3.mp4",
                    poster:"./videos/reklama/3.jpg",
                    text: "Реклама на OZON"
                },
                {
                    video:"./videos/reklama/4.mp4",
                    poster:"./videos/reklama/4.jpg",
                    text: "ВК Квиз"
                },
                {
                    video:"https://www.youtube.com/embed/3dwEQyy5Wdw?si=dvDKLrSEXLImf7MH",
                    poster:"./videos/reklama/5.jpg",
                    text: "ВК баннер"
                },

            ]
        },
        {
            title: "ШОУ",
            type: "wide",
            array: [
                {
                    video:"https://vk.com/video_ext.php?oid=-223358300&id=456239024&autoplay=0",
                    poster:"./videos/show/1.jpg",
                    text: "Медиаэкспедиция с Камилой Валиевой на BASK"
                },
                {
                    video:"https://vk.com/video_ext.php?oid=-227286852&id=456239017&autoplay=0",
                    poster:"./videos/show/3.jpg",
                    text: "Как ТИК-ТОК Тебя УБИВАЕТ"
                },
                {
                    video:"https://vkvideo.ru/video_ext.php?oid=-210666975&id=456240319&autoplay=0",
                    poster:"./videos/show/2.jpg",
                    text: "Тот Самый Вкус | 3 выпуск"
                },
                {
                    video:"https://www.youtube.com/embed/wMrsAFQZQVQ?si=5GR87D_zyUjGVNPQ",
                    poster:"./videos/show/4.jpg",
                    text: "ЭСВАТИНИ - САМАЯ СПИДОЗНАЯ СТРАНА В МИРЕ"
                },
                {
                    video:"https://www.youtube.com/embed/AvdU-a5etpw?si=0nBPGs60bojdXIRW",
                    poster:"./videos/show/5.jpeg",
                    text: "YOKAI. Scam Onlyfans Agency. When Your Team Leader Becomes Your Biggest Mistake."
                },

            ]
        },
        {
            title: "Motion дизайн",
            type: "wide",
            array: [
                {
                    video:"https://www.youtube.com/embed/0vBvJOv9ER0?si=JIpGt6-cOU4_W_Tf",
                    poster:"./videos/motion/1.jpg",
                    text: "How to Make Money Sexting on OnlyFans: Pro Tips, Rules & Mistakes to Avoid"
                },
                {
                    video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239023&hash=26420d533f2c4a30&hd=3&autoplay=0",
                    poster:"./videos/motion/2.jpeg",
                    text: "lis skins"
                },
                {
                    video: "https://www.youtube.com/embed/QmfYZmegPso?si=krREr4tRNw5T5_Ym",
                    poster:"./videos/motion/3.jpg",
                    text: "ГАЙД НА ЧИСТУЮ КОЖУ - КАК ИЗБАВИТЬСЯ ОТ ПРЫЩЕЙ (АКНЕ)"
                },
            ]
        },
        {
            title: "Интервью",
            type: "wide",
            array: [
                {
                    video:"https://vk.com/video_ext.php?oid=-165631795&id=456240370&hash=a3175bc59281c055&hd=3&autoplay=0",
                    poster:"./videos/interview/1.jpg",
                    text: "VK Лекторий | Санкт-Петербург, VK Fest | 2025 | Бустер, Шах Лав соса, Леонид Наумцев"
                },{
                    video:"https://vkvideo.ru/video_ext.php?oid=-108468&id=456255402&hash=c254a7acb468d6c8&hd=3&autoplay=0",
                    poster:"./videos/interview/1.jpg",
                    text: "Обсуждаем стендап Чебаткова «Человек-слепень», «Игру в кальмара», китайский хит «Нэчжа» и новый альбом Майли Сайрус"
                },
                {
                    video:"https://vkvideo.ru/video_ext.php?oid=-108468&id=456255402&hash=c254a7acb468d6c8&hd=3&autoplay=0",
                    poster:"./videos/interview/3.jpg",
                    text: "Сбермобайл подкаст"
                },
            ]
        },{
            title: "Музыка",
            type: "wide",
            array: [
                {
                    video:"https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239018&hash=4f5d522d101f2953&hd=3&autoplay=0",
                    poster:"./videos/music/1.png",
                    text: "Macan"
                },{
                    video:"https://www.youtube.com/embed/zayEI221OrY?si=THJ7KiswXKQKCoqA",
                    poster:"./videos/music/2.jpeg",
                    text: "Клип заново завоевать"
                },{
                    video:"https://www.youtube.com/embed/zayEI221OrY?si=THJ7KiswXKQKCoqA",
                    poster:"./videos/music/3.jpg",
                    text: "Сниппет для девочки демона"
                },
            ]
        },
        {
            title: "REELS",
            type: "tall",
            array: [
                {
                    video:"./videos/reels/1.mp4",
                    poster:"./videos/reels/1.png",
                    text: "Медиаэкспедиция с Камилой Валиевой на BASK"
                },
            ]
        },
    ]
    return (
        <section className={styles.section}>
            {
                array.map((item, index) => {
                    if (item.type === "about") {
                        return <About key={index} index={index} />;
                    }

                    return (
                        <Slider
                            key={index}
                            index={index}
                            title={item.title}
                            type={item.type}
                            initialArray={item.array}
                        />
                    );
                })
            }
        </section>
    );
};

export default Section;