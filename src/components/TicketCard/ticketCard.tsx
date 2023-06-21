'use client'

import { ReactElement } from "react";
import Image from 'next/image'

import minus from '../../../public/minus.svg';
import plus from '../../../public/plus.svg';

import styles from './ticketCard.module.css';
import { useCount } from "@/hooks/useCount";

interface Props {
    picture: string,
    name: string,
    genre: string
}

const MIN_TICKETS_COUNT = 0;
const MAX_TICKETS_COUNT = 30;

export function TicketCard(props: Props): ReactElement {
    const {picture, name, genre} = props;
    const [ticketsCount, increaseTicketsCount, decreaseTicketsCount] = useCount(0, MIN_TICKETS_COUNT, MAX_TICKETS_COUNT);
    const decreaseClassname = styles.button + ' ' + 
        (ticketsCount === MIN_TICKETS_COUNT ? styles.buttonDisable : styles.buttonActive);
    const increaseClassname = styles.button + ' ' + 
        (ticketsCount === MAX_TICKETS_COUNT ? styles.buttonDisable : styles.buttonActive);

    return (
        <div className={styles.ticketCard}>
            <div className={styles.picture}>
                <Image src={picture} alt={name} fill style={{borderRadius: 8}}/>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.textInfo}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.genre}>{genre}</span>

                </div>
                <div className={styles.buttons}>
                    <div className={decreaseClassname} onClick={decreaseTicketsCount}>
                        <Image src={minus} alt='minus'/>
                    </div>
                    <span className={styles.ticketCount}>{ticketsCount}</span>
                    <div className={increaseClassname} onClick={increaseTicketsCount}>
                        <Image src={plus} alt='plus'/>
                    </div>
                </div>
            </div>
        </div>
    )
}