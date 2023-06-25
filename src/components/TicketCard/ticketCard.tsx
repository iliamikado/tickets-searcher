'use client'

import { ReactElement, useEffect, useState } from "react";
import Image from 'next/image'
import cross from '../../../public/cross.svg';

import styles from './ticketCard.module.css';
import { TicketsCounter } from "../TicketsCounter/ticketsCounter";
import { useRouter } from "next/navigation";
import { Movie, getMovie } from "@/service/service";

interface Props {
    movieId: string,
    removeOnZero?: () => void
}

export function TicketCard(props: Props): ReactElement {
    const {movieId, removeOnZero} = props;
    const [movie, setMovie] = useState<Movie>();
    const router = useRouter();

    useEffect(() => {
        getMovie(movieId).then(setMovie);
    }, [movieId]);

    return (
        <div className={styles.ticketCard}>
            {movie ? <>
                <div className={styles.picture}>
                <Image src={movie.posterUrl} alt={movie.title} fill style={{borderRadius: 8}}/>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.textInfo}>
                        <span className={styles.name} onClick={() => router.push(`movie/${movie.id}`)}>{movie.title}</span>
                        <span className={styles.genre}>{movie.genre}</span>
                    </div>
                    <TicketsCounter movieId={movie.id} removeOnZero={removeOnZero}/>
                    {removeOnZero ? <div className={styles.cross} onClick={removeOnZero}>
                        <Image src={cross} alt="delete" fill/>
                    </div> : null}
                </div>
            </> : null}
        </div>
    )
}