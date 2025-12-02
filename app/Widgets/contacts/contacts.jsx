"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./contacts.module.scss";
import { LeftScale } from "../../shared/index";

// Анимации появления полей — по очереди, с bounce
const fieldVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4 + i * 0.2,
            duration: 1,
            type: "spring",
            stiffness: 120,
            damping: 20,
        },
    }),
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.3,
            duration: 0.9,
            type: "spring",
            stiffness: 200,
            damping: 18,
        },
    },
};

const Contact = ({ index }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!/^[а-яА-ЯёЁa-zA-Z\s]{2,30}$/.test(formData.name))
            newErrors.name = "Введите корректное имя";
        if (!/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Введите корректный email";
        if (formData.message.length < 10)
            newErrors.message = "Сообщение слишком короткое";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Успех!
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            setFormData({ name: "", email: "", message: "" });
        }, 4000);
    };

    return (
        <section className={styles.section}>
            <LeftScale index={7} />

            <div className={styles.content}>
                {/* Левая часть — заголовок и текст */}
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
                    className={styles.left}
                >
                    <h1 className={styles.title}>Контакты</h1>
                    <p className={styles.text}>
                        Напиши мне — обсудим твой проект
                        <br />
                        <span>От монтажа до полного продакшена</span>
                    </p>
                </motion.div>

                {/* Форма */}
                <motion.form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Поле Имя */}
                    <motion.div custom={0} variants={fieldVariants}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Имя"
                            className={errors.name ? styles.error : ""}
                        />
                        {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                    </motion.div>

                    {/* Поле Email */}
                    <motion.div custom={1} variants={fieldVariants}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={errors.email ? styles.error : ""}
                        />
                        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                    </motion.div>

                    {/* Сообщение */}
                    <motion.div custom={2} variants={fieldVariants}>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажи о проекте..."
                rows={5}
                className={errors.message ? styles.error : ""}
            />
                        {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                    </motion.div>

                    {/* Кнопка */}
                    <motion.button
                        type="submit"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.btn}
                    >
                        ОТПРАВИТЬ СООБЩЕНИЕ
                    </motion.button>

                    {/* Успешное сообщение */}
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: success ? 1 : 0, y: success ? 0 : -20 }}
                        className={styles.success}
                    >
                        Спасибо! Скоро свяжусь с тобой
                    </motion.p>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;