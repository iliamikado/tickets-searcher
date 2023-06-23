'use client'

import { Selector } from '@/components/Selector/selector';
import styles from './page.module.css';
import { Input } from '@/components/Input/input';
import { useEffect, useState } from 'react';
import { Film, getAllCinemas, getAllFilms, getFilmsInCinema, Cinema } from '@/service/service';
import { TicketCard } from '@/components/TicketCard/ticketCard';

export default function MainPage() {

    const [films, setFilms] = useState<Film[]>([]);
    const [cinemas, setCinemas] = useState<Cinema[]>([]);
    const [genres, setGenres] = useState<string[]>([]);
    const [currentGenre, setCurrentGenre] = useState<string>();
    const [searchPart, setSearchPart] = useState('');

    useEffect(() => {
        getAllCinemas().then(data => setCinemas(data));
        setFilmsAndGenres(setFilms, setGenres);
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
                        onChangeOption={(option) => {setFilmsAndGenres(setFilms, setGenres, cinemas[option - 1]?.id)}}/>
                </div>
            </div>
            <div className={styles.ticketCards}>
                {films.filter(film => {
                    if (currentGenre && film.genre !== currentGenre) {
                        return false;
                    }
                    if (searchPart && !film.title.toLowerCase().includes(searchPart.toLowerCase())) {
                        return false;
                    } 
                    return true;
                }).map(film => (<TicketCard
                    key={film.id}
                    filmId={film.id}
                    picture={film.posterUrl}
                    name={film.title}
                    genre={film.genre}
                />))}
            </div>
        </div>
    )
}

function setFilmsAndGenres(setFilms: any, setGenres: any, cinemaId?: string): void {
    let films;
    if (!cinemaId) {
        films = getAllFilms();
    } else {
        films = getFilmsInCinema(cinemaId);
    }
    films.then(data => {
        const genres: Set<string> = new Set();
        data.forEach((film) => {
            genres.add(film.genre)
        });
        setFilms(data);
        setGenres(Array.from(genres));
    });
}