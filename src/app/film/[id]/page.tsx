'use client'

import { FilmCard } from "@/components/FilmCard/filmCard";
import { Film, Review, getMovie, getReviews } from "@/service/service";
import { useEffect, useState } from "react";
import { ReviewCard } from "@/components/ReviewCard/reviewCard";

import styles from './page.module.css';

interface Props {
    params: {
        id: string
    }
}

export default function FilmPage(props: Props) {
    const {id} = props.params;
    const [film, setFilm] = useState<Film>();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        getMovie(id).then(setFilm);
        getReviews(id).then(setReviews);
    }, [id]);

    return (
        <div className={styles.filmPage}>
            {film ? <FilmCard film={film}/> : null}
            {reviews.map(review => (<ReviewCard key={review.id} review={review}/>))}
        </div>
    );
}