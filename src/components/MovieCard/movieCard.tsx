'use client'

import { Movie } from "@/service/service"

import styles from './movieCard.module.css';
import Image from "next/image";
import { TicketsCounter } from "../TicketsCounter/ticketsCounter";

interface Props {
    movie: Movie
}

export function MovieCard(props: Props) {
    const {movie} = props;
    return (
        <div className={styles.movieCard}>
            <div className={styles.poster}>
                <Image src={movie.posterUrl} fill alt="poster" style={{borderRadius: 8}}/>
            </div>
            <div className={styles.counter}>
                <TicketsCounter movieId={movie.id}/>
            </div>
            <div className={styles.info}>
                <span className={styles.title}>{movie.title}</span>
                <div className={styles.param}>
                    <span className={styles.key}>Жанр:</span>
                    <span className={styles.value}>{movie.genre}</span>
                </div>
                <div className={styles.param}>
                    <span className={styles.key}>Год выпуска:</span>
                    <span className={styles.value}>{movie.releaseYear}</span>
                </div>
                <div className={styles.param}>
                    <span className={styles.key}>Рейтинг:</span>
                    <span className={styles.value}>{movie.rating}</span>
                </div>
                <div className={styles.param}>
                    <span className={styles.key}>Режиссер:</span>
                    <span className={styles.value}>{movie.director}</span>
                </div>
                <span className={styles.key}>Описание</span>
                <div className={styles.description}>{movie.description}</div>
            </div>
        </div>
    );
}