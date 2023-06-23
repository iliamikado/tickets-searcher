'use client'

import { useState } from "react";
import styles from './questionCard.module.css';
import openIcon from '../../../public/arrow_down.svg';
import Image from "next/image";

interface Props {
    question: string,
    answer: string
}

export function QuestionCard(props: Props) {
    const {question, answer} = props;
    const [opened, setOpened] = useState(false);

    return <div className={styles.questionCard}>
        <div className={styles.question}>
            {question}
        </div>
        <div className={`${styles.openButton} ${opened ? styles.rotated : ''}`}
            onClick={() => setOpened((open) => (!open))}
        >
            <Image src={openIcon} alt="open" fill/>
        </div>
        {opened ? <div className={styles.answer}>{answer}</div> : null}
    </div>
}