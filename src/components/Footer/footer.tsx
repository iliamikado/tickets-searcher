'use client'

import { ReactElement } from "react";
import styles from './footer.module.css';
import { useRouter } from "next/navigation";

export function Footer(): ReactElement {
    const router = useRouter();
    return (
        <div className={styles.footer}>
            <span className={styles.questions} onClick={() => router.push('/questions')}>Вопросы-ответы</span>
            <span className={styles.about} onClick={() => router.push('/about_us')}>О нас</span>
        </div>
    )
}