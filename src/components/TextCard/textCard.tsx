import { ReactNode } from 'react';
import styles from './textCard.module.css';

export function TextCard({children}: {children: ReactNode}) {
    return (
        <div className={styles.textCard}>
            {children}
        </div>
    );
}