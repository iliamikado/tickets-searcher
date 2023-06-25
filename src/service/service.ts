const URL = 'http://localhost:3001/api/';

function getResource(path: string) {
    return fetch(URL + path).then(data => data.json());
}

export type Movie = {
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

const initialCash = {
    movies: {} as Record<string, Movie>,
    cinemas: {} as Record<string, Cinema>,
    moviesInCinema: {} as Record<string, Movie[]>,
    reviews: {} as Record<string, Review[]>,
    gotAllMovies: false,
    gotAllCinemas: false
}

let cash = initialCash;

function updateCash() {
    cash = initialCash;
    setTimeout(() => {updateCash()}, 1000 * 60 * 60)    //update cash every hour
}
updateCash();

export function getAllMovies(): Promise<Movie[]> {
    if (cash.gotAllMovies) {
        return Promise.resolve(Object.values(cash.movies));
    }
    cash.gotAllMovies = true;
    return getResource('movies').then((movies: Movie[]) => {
        movies.forEach(movie => {
            cash.movies[movie.id] = movie;
        })
        return movies;
    });
}

export function getAllCinemas(): Promise<Cinema[]> {
    if (cash.gotAllCinemas) {
        return Promise.resolve(Object.values(cash.cinemas));
    }
    cash.gotAllCinemas = true;
    return getResource('cinemas').then((cinemas: Cinema[]) => {
        cinemas.forEach(cinema => {
            cash.cinemas[cinema.id] = cinema;
        })
        return cinemas;
    });
}

export function getMoviesInCinema(cinemaId: string): Promise<Movie[]> {
    if (cash.moviesInCinema[cinemaId] !== undefined) {
        return Promise.resolve(cash.moviesInCinema[cinemaId]);
    }
    return getResource(`movies?cinemaId=${cinemaId}`).then((movies: Movie[]) => {
        cash.moviesInCinema[cinemaId] = movies;
        return movies;
    });
}

export function getMovie(movieId: string): Promise<Movie> {
    if (cash.movies[movieId]) {
        return Promise.resolve(cash.movies[movieId]);
    }
    return getResource(`movie?movieId=${movieId}`).then((movie: Movie) => {
        cash.movies[movieId] = movie;
        return movie;
    });
}

export function getReviews(movieId: string): Promise<Review[]> {
    if (cash.reviews[movieId] !== undefined) {
        return Promise.resolve(cash.reviews[movieId]);
    }
    return getResource(`reviews?movieId=${movieId}`).then((reviews: Review[]) => {
        cash.reviews[movieId] = reviews;
        return reviews;
    });
}