import { ReactElement } from "react";

import styles from './footer.module.css';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <span className={styles.questions}>Вопросы-ответы</span>
            <span className={styles.about}>О нас</span>
        </div>
    )
}