'use client'

import { MovieCard } from "@/components/MovieCard/movieCard";
import { Movie, Review, getMovie, getReviews } from "@/service/service";
import { useEffect, useState } from "react";
import { ReviewCard } from "@/components/ReviewCard/reviewCard";

import styles from './page.module.css';

interface Props {
    params: {
        id: string
    }
}

export default function MoviePage(props: Props) {
    const {id} = props.params;
    const [movie, setMovie] = useState<Movie>();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        getMovie(id).then(setMovie);
        getReviews(id).then(setReviews);
    }, [id]);

    return (
        <div className={styles.moviePage}>
            {movie ? <MovieCard movie={movie}/> : null}
            {reviews.map(review => (<ReviewCard key={review.id} review={review}/>))}
        </div>
    );
}