'use client'

import { ReactElement, useEffect, useState } from "react";
import Image from 'next/image'
import cross from '../../../public/cross.svg';

import styles from './ticketCard.module.css';
import { TicketsCounter } from "../TicketsCounter/ticketsCounter";
import { useRouter } from "next/navigation";
import { Film, getMovie } from "@/service/service";

interface Props {
    filmId: string,
    removeOnZero?: () => void
}

export function TicketCard(props: Props): ReactElement {
    const {filmId, removeOnZero} = props;
    const [film, setFilm] = useState<Film>();
    const router = useRouter();

    useEffect(() => {
        getMovie(filmId).then(setFilm);
    }, [filmId]);

    return (
        <div className={styles.ticketCard}>
            {film ? <>
                <div className={styles.picture}>
                <Image src={film.posterUrl} alt={film.title} fill style={{borderRadius: 8}}/>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.textInfo}>
                        <span className={styles.name} onClick={() => router.push(`film/${film.id}`)}>{film.title}</span>
                        <span className={styles.genre}>{film.genre}</span>
                    </div>
                    <TicketsCounter movieId={film.id} removeOnZero={removeOnZero}/>
                    {removeOnZero ? <div className={styles.cross} onClick={removeOnZero}>
                        <Image src={cross} alt="delete" fill/>
                    </div> : null}
                </div>
            </> : null}
        </div>
    )
}