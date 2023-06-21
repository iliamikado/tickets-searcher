'use client'

import { ReactElement, useState } from "react";

import styles from './input.module.css';

interface Props {
    placeholder: string
}

export function Input(props: Props): ReactElement {
    const {placeholder} = props;
    const [text, setText] = useState('');
    return (
        <input className={`${styles.inputPanel}`}
            value={text} placeholder={placeholder}
            onChange={(e) => setText(e.target.value)}/>
    )
}