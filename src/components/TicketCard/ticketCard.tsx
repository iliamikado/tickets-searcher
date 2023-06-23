'use client'

import { ReactElement } from "react";
import Image from 'next/image'
import cross from '../../../public/cross.svg';

import styles from './ticketCard.module.css';
import { TicketsCounter } from "../TicketsCounter/ticketsCounter";

interface Props {
    picture: string,
    name: string,
    genre: string,
    removeOnZero?: () => boolean
}

export function TicketCard(props: Props): ReactElement {
    const {picture, name, genre, removeOnZero} = props;

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
                <TicketsCounter ticketId={0} removeOnZero={removeOnZero}/>
                {removeOnZero ? <div className={styles.cross} onClick={removeOnZero}>
                    <Image src={cross} alt="delete" fill/>
                </div> : null}
            </div>
        </div>
    )
}