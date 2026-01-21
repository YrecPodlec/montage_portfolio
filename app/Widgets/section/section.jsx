'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from "./section.module.scss";
import {Slider} from "../../features/index";
import {About, Contact} from "../index";
import LeftScale from "../../shared/ui/leftScale/leftScale";
const Section = () => {
    // const array = [
    //     {
    //         type: "about",
    //     },
    //     {
    //         title: "Реклама",
    //         type: "wide",
    //         array: [
    //             {
    //                 video: "https://vk.com/video_ext.php?oid=-229346894&id=456239100&autoplay=0",
    //                 poster: "./videos/reklama/1.jpg",
    //                 text: "Вкусно и точка: Демиглас"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239037&hash=b962ee37766ca1c0&hd=3&autoplay=0",
    //                 poster: "./videos/reklama/3.jpg",
    //                 text: "Ozon: Рекламный Ролик"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239034&hash=85350ba84f786e74&hd=3&autoplay=0",
    //                 poster: "./videos/reklama/burunov.png",
    //                 text: "Вкусно и точка: Сергей Бурунов"
    //             },
    //             {
    //                 video: "https://www.youtube.com/embed/3dwEQyy5Wdw?si=dvDKLrSEXLImf7MH",
    //                 poster: "./videos/reklama/5.jpg",
    //                 text: "ВК: Баннер ВДНХ"
    //             },
    //
    //         ]
    //     },
    //     {
    //         title: "Шоу",
    //         type: "wide",
    //         array: [
    //             {
    //                 video: "https://vk.com/video_ext.php?oid=-223358300&id=456239024&autoplay=0",
    //                 poster: "./videos/show/1.jpg",
    //                 text: "ВК ОТКРЫТАЯ ПРОМЫШЛЕННОСТЬ"
    //             },
    //             {
    //                 video:"https://vk.com/video_ext.php?oid=-227286852&id=456239017&autoplay=0",
    //                 poster:"./videos/show/3.jpg",
    //                 text: "Шкипер Клиповое Мышление"
    //             },
    //             {
    //                 video:"https://vkvideo.ru/video_ext.php?oid=-210666975&id=456240319&autoplay=0",
    //                 poster:"./videos/show/2.jpg",
    //                 text: "Тот Самый Вкус | 3 выпуск"
    //             },
    //             {
    //                 video:"https://www.youtube.com/embed/wMrsAFQZQVQ?si=5GR87D_zyUjGVNPQ",
    //                 poster:"./videos/show/4.jpg",
    //                 text: "ЭСВАТИНИ - САМАЯ СПИДОЗНАЯ СТРАНА В МИРЕ"
    //             },
    //             {
    //                 video:"https://www.youtube.com/embed/AvdU-a5etpw?si=0nBPGs60bojdXIRW",
    //                 poster:"./videos/show/5.jpeg",
    //                 text: "YOKAI. Scam Onlyfans Agency. When Your Team Leader Becomes Your Biggest Mistake."
    //             },
    //
    //         ]
    //     },
    //     {
    //         title: "Motion Design",
    //         type: "wide",
    //         array: [
    //             {
    //                 video:"https://www.youtube.com/embed/0vBvJOv9ER0?si=JIpGt6-cOU4_W_Tf",
    //                 poster:"./videos/motion/1.jpg",
    //                 text: "How to Make Money Sexting on OnlyFans: Pro Tips, Rules & Mistakes to Avoid"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239023&hash=26420d533f2c4a30&hd=3&autoplay=0",
    //                 poster:"./videos/motion/2.jpeg",
    //                 text: "lis skins"
    //             },
    //             {
    //                 video: "https://www.youtube.com/embed/QmfYZmegPso?si=krREr4tRNw5T5_Ym",
    //                 poster:"./videos/motion/3.jpg",
    //                 text: "ГАЙД НА ЧИСТУЮ КОЖУ - КАК ИЗБАВИТЬСЯ ОТ ПРЫЩЕЙ (АКНЕ)"
    //             },
    //         ]
    //     },
    //     {
    //         title: "Интервью",
    //         type: "wide",
    //         array: [
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-108468&id=456255402&hash=c254a7acb468d6c8&hd=3&autoplay=0",
    //                 poster: "./videos/interview/1.jpg",
    //                 text: "Обсуждаем стендап Чебаткова «Человек-слепень», «Игру в кальмара», китайский хит «Нэчжа» и новый альбом Майли Сайрус"
    //             },
    //             {
    //                 video: "https://vk.com/video_ext.php?oid=-165631795&id=456240370&hash=a3175bc59281c055&hd=3&autoplay=0",
    //                 poster: "./videos/interview/2.jpg",
    //                 text: "VK Лекторий | Санкт-Петербург, VK Fest | 2025 | Бустер, Шах Лав соса, Леонид Наумцев"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239033&hash=e43fb00f44e42aa9&hd=3&autoplay=0",
    //                 poster: "./videos/interview/3.jpg",
    //                 text: "Сбермобайл подкаст"
    //             },
    //         ]
    //     }, {
    //         title: "Музыка",
    //         type: "wide",
    //         array: [
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239018&hash=4f5d522d101f2953&hd=3&autoplay=0",
    //                 poster:"./videos/music/1.png",
    //                 text: "Macan"
    //             },{
    //                 video:"https://www.youtube.com/embed/zayEI221OrY?si=THJ7KiswXKQKCoqA",
    //                 poster:"./videos/music/2.jpeg",
    //                 text: "Клип заново завоевать"
    //             },{
    //                 video:"https://www.youtube.com/embed/zayEI221OrY?si=THJ7KiswXKQKCoqA",
    //                 poster:"./videos/music/3.jpg",
    //                 text: "Сниппет для девочки демона"
    //             },
    //         ]
    //     },
    //     {
    //         title: "Reels",
    //         type: "tall",
    //         array: [
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239025&hash=4da4b245356df4a1&hd=3&autoplay=0",
    //                 poster: "./videos/reels/1.png",
    //                 text: "1000 Отжиманий Челлендж"
    //             },
    //             {
    //                 video: "https://vk.com/video_ext.php?oid=572972146&id=456239241&autoplay=0",
    //                 poster: "./videos/reels/2.png",
    //                 text: "Vk travel"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239039&hash=31a96b23186e1997&hd=3&autoplay=0",
    //                 poster: "./videos/reels/3.png",
    //                 text: "Reels Birdaye"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239040&hash=0e0a288871cb2f4c&hd=3&autoplay=0",
    //                 poster: "./videos/reels/4.png",
    //                 text: "Рилс вкусно и точка шкипер"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239038&hash=7887a2c9365c6c98&hd=3&autoplay=0",
    //                 poster: "./videos/reels/5.jpg",
    //                 text: "Vk kviz"
    //             },
    //             {
    //                 video: "https://vk.com/video_ext.php?oid=-9580285&id=456245233&hash=e17cbc67a8d1a770&autoplay=0",
    //                 poster: "./videos/reels/6.png",
    //                 text: "#АвтоСергейОрлов"
    //             },
    //             {
    //                 video: "https://vkvideo.ru/video_ext.php?oid=-222325636&id=456239026&hash=61aa24a9f156515e&hd=3&autoplay=0",
    //                 poster: "./videos/reels/7.png",
    //                 text: "Клоуны"
    //             },
    //         ]
    //     },
    // ]
    const array = [
        {
            type: "about",
        },
        {
            title: "Реклама",
            type: "wide",
            array: [
                {
                    video: "https://vkvideo.ru/video-229346894_456239100",
                    poster: "./videos/reklama/1.jpg",
                    text: "Вкусно и точка: Демиглас"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239037?list=ln-io4ZwpxDQNyK2MzfL9",
                    poster: "./videos/reklama/3.jpg",
                    text: "Ozon: Рекламный Ролик"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239034?list=ln-6g4lAd8TDktqq8oXZw",
                    poster: "./videos/reklama/burunov.png",
                    text: "Вкусно и точка: Сергей Бурунов"
                },
                {
                    video: "https://www.youtube.com/watch?v=3dwEQyy5Wdw",
                    poster: "./videos/reklama/5.jpg",
                    text: "ВК: Баннер ВДНХ"
                },
                {
                    video: "https://vkvideo.ru/video-220754053_456245049",
                    poster: "./videos/reklama/shuba.jpg",
                    text: "VK ПОД ШУБОЙ 4 - Трейлер"
                }

            ]
        },
        {
            title: "Шоу",
            type: "wide",
            array: [
                {
                    video: "https://vkvideo.ru/video-220754053_456244914",
                    poster:"./videos/show/shuba.jpg",
                    text: "VK ПОД ШУБОЙ 4"
                },
                {
                    video: "https://vk.com/video-223358300_456239024",
                    poster: "./videos/show/1.jpg",
                    text: "ВК ОТКРЫТАЯ ПРОМЫШЛЕННОСТЬ"
                },
                {
                    video:"https://vk.com/video-227286852_456239017",
                    poster:"./videos/show/3.jpg",
                    text: "Шкипер Клиповое Мышление"
                },
                {
                    video:"https://vk.com/wall-92639977_5827208",
                    poster:"./videos/show/2.jpg",
                    text: "Тот Самый Вкус | 3 выпуск"
                },
                {
                    video:"https://youtu.be/wMrsAFQZQVQ?si=ns4HL9G8_YRetnqm",
                    poster:"./videos/show/4.jpg",
                    text: "ЭСВАТИНИ - САМАЯ СПИДОЗНАЯ СТРАНА В МИРЕ"
                },
                {
                    video:"https://youtu.be/AvdU-a5etpw?si=8l0D7yMA1GAAyP-g",
                    poster:"./videos/show/5.jpeg",
                    text: "YOKAI. Scam Onlyfans Agency. When Your Team Leader Becomes Your Biggest Mistake."
                },

            ]
        },
        {
            title: "Motion Design",
            type: "wide",
            array: [
                {
                    video:"https://youtu.be/0vBvJOv9ER0?si=wQixWB7gPOiYPhnh",
                    poster:"./videos/motion/1.jpg",
                    text: "How to Make Money Sexting on OnlyFans: Pro Tips, Rules & Mistakes to Avoid"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239023?list=ln-vx55zzehzngLpHZ8SQ",
                    poster:"./videos/motion/2.jpeg",
                    text: "lis skins"
                },
                {
                    video: "https://youtu.be/QmfYZmegPso?si=H0Sbem0_5mAFaiKg",
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
                    video: "https://vkvideo.ru/video-108468_456255402",
                    poster: "./videos/interview/1.jpg",
                    text: "Обсуждаем стендап Чебаткова «Человек-слепень», «Игру в кальмара», китайский хит «Нэчжа» и новый альбом Майли Сайрус"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239033?list=ln-gKRfV3eEb5TFr4HoJ3",
                    poster: "./videos/interview/2.jpg",
                    text: "VK Лекторий | Санкт-Петербург, VK Fest | 2025 | Бустер, Шах Лав соса, Леонид Наумцев"
                },
                {
                    video: "https://vk.com/video-165631795_456240370",
                    poster: "./videos/interview/3.jpg",
                    text: "Сбермобайл подкаст"
                },
            ]
        }, {
            title: "Музыка",
            type: "wide",
            array: [
                {
                    video: "https://vkvideo.ru/video-222325636_456239018?list=ln-9XXNUZ5K717DmqcsE0",
                    poster:"./videos/music/1.png",
                    text: "Macan"
                },{
                    video:"https://vkvideo.ru/video-222325636_456239032?list=ln-w8lAKAln7VR03UY54O",
                    poster:"./videos/music/2.jpeg",
                    text: "Клип заново завоевать"
                },{
                    video:"https://vkvideo.ru/video-222325636_456239031?list=ln-WqUpxynfVMP6UXmGZk",
                    poster:"./videos/music/3.jpg",
                    text: "Сниппет для девочки демона"
                },
            ]
        },
        {
            title: "Reels",
            type: "tall",
            array: [
                {
                    video: "https://vkvideo.ru/video-222325636_456239025?list=ln-3XeETwyDHEfCZEXvmk",
                    poster: "./videos/reels/1.png",
                    text: "1000 Отжиманий Челлендж"
                },
                {
                    video: "https://vk.com/clip572972146_456239241",
                    poster: "./videos/reels/2.png",
                    text: "Vk travel"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239039?list=ln-m3ZcD6CXE4c2g2W1Gj",
                    poster: "./videos/reels/3.png",
                    text: "Reels Birdaye"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239040?list=ln-mo9KUz6xKQ21kNSTk4",
                    poster: "./videos/reels/4.png",
                    text: "Рилс вкусно и точка шкипер"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239038?list=ln-EyyWmLHNWwHNTexZbd",
                    poster: "./videos/reels/5.jpg",
                    text: "Vk kviz"
                },
                {
                    video: "https://vk.com/wall-9580285_917670",
                    poster: "./videos/reels/6.png",
                    text: "#АвтоСергейОрлов"
                },
                {
                    video: "https://vkvideo.ru/video-222325636_456239026?list=ln-zMIaSq64YvqkoeE8NC",
                    poster: "./videos/reels/7.png",
                    text: "Клоуны"
                },
            ]
        },
    ]
    const sectionRef = useRef(null);
    // В Section
    const uniconRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;

            let scrollProgress = (windowHeight - rect.top) / (windowHeight + sectionHeight);
            scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

            const maxY = sectionHeight - 50; // высота unicon

            // Используем requestAnimationFrame и напрямую меняем transform через ref
            if (uniconRef.current) {
                uniconRef.current.style.transform = `translateY(${scrollProgress * maxY}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div ref={uniconRef} className={styles.unicon} />

            {array.map((item, index) => {
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
            })}
        </section>
    );
};

export default Section;