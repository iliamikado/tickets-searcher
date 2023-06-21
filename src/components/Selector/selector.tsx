'use client'

import { DOMElement, ReactElement, useState } from "react";
import Image from 'next/image'

import openIcon from '../../../public/arrow_down.svg';

import styles from './selector.module.css';

interface Props {
    placeholder: string,
    items: string[]         // Первый элемент (нулевой) - сброс фильтра (будет отображен placeholder)
}

export function Selector(props: Props): ReactElement {
    const {placeholder, items} = props;
    const [opened, setOpened] = useState(false);
    const [option, setOption] = useState(0);

    return (
        <div className={styles.selectorPanel}>
            <span className={`${styles.optionName} ${option ? '' : styles.grayText}`}>
                {option ? items[option] : placeholder}
            </span>
            <div className={`${styles.openButton} ${opened ? styles.rotated : ''}`} onClick={(e) => {
                setOpened((opened) => (!opened));
            }}>
                <Image src={openIcon} alt="open" fill/>
            </div>
            {opened ? 
            <div className={styles.itemsList}>
                {items.map((item, i) => {
                    return (
                        <span key={i} className={styles.item} onClick={() => {
                            setOpened(false);
                            setOption(i);
                        }}>{item}</span>
                    )
                })}
            </div> : null}
        </div>
    )
}