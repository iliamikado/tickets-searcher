'use client'

import { Film } from "@/service/service"

import styles from './filmCard.module.css';
import Image from "next/image";
import { TicketsCounter } from "../TicketsCounter/ticketsCounter";

interface Props {
    film: Film
}

export function FilmCard(props: Props) {
    const {film} = props;
    return (
        <div className={styles.filmCard}>
            <div className={styles.poster}>
                <Image src={film.posterUrl} fill alt="poster" style={{borderRadius: 8}}/>
            </div>
            <div className={styles.counter}>
                <TicketsCounter ticketId={film.id}/>
            </div>
            <div className={styles.info}>
                <span className={styles.title}>{film.title}</span>
                <div className={styles.param}>
                    <span className={styles.key}>Жанр:</span>
                    <span className={styles.value}>{film.genre}</span>
                </div>
                <div className={styles.param}>
                    <span className={styles.key}>Год выпуска:</span>
                    <span className={styles.value}>{film.releaseYear}</span>
                </div>
                <div className={styles.param}>
                    <span className={styles.key}>Рейтинг:</span>
                    <span className={styles.value}>{film.rating}</span>
                </div>
                <div className={styles.param}>
                    <span className={styles.key}>Режиссер:</span>
                    <span className={styles.value}>{film.director}</span>
                </div>
                <span className={styles.key}>Описание</span>
                <div className={styles.description}>{film.description}</div>
            </div>
        </div>
    );
}