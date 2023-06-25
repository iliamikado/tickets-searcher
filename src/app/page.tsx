'use client'

import { Selector } from '@/components/Selector/selector';
import styles from './page.module.css';
import { Input } from '@/components/Input/input';
import { useEffect, useState } from 'react';
import { Movie, getAllCinemas, getAllMovies, getMoviesInCinema, Cinema } from '@/service/service';
import { TicketCard } from '@/components/TicketCard/ticketCard';

export default function MainPage() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [cinemas, setCinemas] = useState<Cinema[]>([]);
    const [genres, setGenres] = useState<string[]>([]);
    const [currentGenre, setCurrentGenre] = useState<string>();
    const [searchPart, setSearchPart] = useState('');

    useEffect(() => {
        getAllCinemas().then(data => setCinemas(data));
        setMoviesAndGenres(setMovies, setGenres);
    }, [])

    return (
        <div>
            <div className={styles.filters}>
                <span>Фильтр поиска</span>
                <div className={styles.inputWithLabel}>
                    <span>Название</span>
                    <Input placeholder='Введите название' onChangeInput={(s) => {setSearchPart(s)}}/>
                </div>
                <div className={styles.inputWithLabel}>
                    <span>Жанр</span>
                    <Selector placeholder='Выберите жанр'
                        items={['Не выбран', ...genres]}
                        onChangeOption={(option) => {setCurrentGenre(genres[option - 1])}}/>
                </div>
                <div className={styles.inputWithLabel}>
                    <span>Кинотеатр</span>
                    <Selector placeholder='Выберите кинотеатр'
                        items={['Не выбран', ...cinemas.map(cinema => (cinema.name))]}
                        onChangeOption={(option) => {setMoviesAndGenres(setMovies, setGenres, cinemas[option - 1]?.id)}}/>
                </div>
            </div>
            <div className={styles.ticketCards}>
                {movies.filter(movie => {
                    if (currentGenre && movie.genre !== currentGenre) {
                        return false;
                    }
                    if (searchPart && !movie.title.toLowerCase().includes(searchPart.toLowerCase())) {
                        return false;
                    } 
                    return true;
                }).map(movie => (<TicketCard key={movie.id} movieId={movie.id}/>))}
            </div>
        </div>
    )
}

function setMoviesAndGenres(setMovies: any, setGenres: any, cinemaId?: string): void {
    let movies;
    if (!cinemaId) {
        movies = getAllMovies();
    } else {
        movies = getMoviesInCinema(cinemaId);
    }
    movies.then(data => {
        const genres: Set<string> = new Set();
        data.forEach((movie) => {
            genres.add(movie.genre)
        });
        setMovies(data);
        setGenres(Array.from(genres));
    });
}