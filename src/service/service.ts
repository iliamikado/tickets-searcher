const URL = 'http://localhost:3001/api/';

function getResource(path: string) {
    return fetch(URL + path).then(data => data.json());
}

export type Film = {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: string,
    id: string,
    rating: number,
    director: string,
    reviewIds: string[],
}

export type Cinema = {
    id: string,
    name: string,
    movieIds: string[]
}

export type Review = {
    id: string,
    name: string,
    text: string,
    rating: number,
    avatar?: string
}

export function getAllFilms(): Promise<Film[]> {
    return getResource('movies');
}

export function getAllCinemas(): Promise<Cinema[]> {
    return getResource('cinemas');
}

export function getFilmsInCinema(cinemaId: string): Promise<Film[]> {
    return getResource(`movies?cinemaId=${cinemaId}`);
}

export function getMovie(movieId: string): Promise<Film> {
    return getResource(`movie?movieId=${movieId}`);
}

export function getReviews(movieId: string): Promise<Review[]> {
    return getResource(`reviews?movieId=${movieId}`);
}