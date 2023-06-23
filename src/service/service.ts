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

const initialCash = {
    films: {} as Record<string, Film>,
    cinemas: {} as Record<string, Cinema>,
    filmsInCinema: {} as Record<string, Film[]>,
    reviews: {} as Record<string, Review[]>,
    gotAllFilms: false,
    gotAllCinemas: false
}

let cash = initialCash;

function updateCash() {
    cash = initialCash;
    setTimeout(() => {updateCash()}, 1000 * 60 * 60)    //update cash every hour
}
updateCash();

export function getAllFilms(): Promise<Film[]> {
    if (cash.gotAllFilms) {
        return Promise.resolve(Object.values(cash.films));
    }
    cash.gotAllFilms = true;
    return getResource('movies').then((films: Film[]) => {
        films.forEach(film => {
            cash.films[film.id] = film;
        })
        return films;
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

export function getFilmsInCinema(cinemaId: string): Promise<Film[]> {
    if (cash.filmsInCinema[cinemaId] !== undefined) {
        return Promise.resolve(cash.filmsInCinema[cinemaId]);
    }
    return getResource(`movies?cinemaId=${cinemaId}`).then((films: Film[]) => {
        cash.filmsInCinema[cinemaId] = films;
        return films;
    });
}

export function getMovie(movieId: string): Promise<Film> {
    if (cash.films[movieId]) {
        return Promise.resolve(cash.films[movieId]);
    }
    return getResource(`movie?movieId=${movieId}`).then((film: Film) => {
        cash.films[movieId] = film;
        return film;
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