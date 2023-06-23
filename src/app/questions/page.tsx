import { TextCard } from '@/components/TextCard/textCard';
import styles from './page.module.css';
import { QuestionCard } from '@/components/QuestionCard/questionCard';

export default function QuestionsPage() {
    return <div className={styles.QuestionsPage}>
        <TextCard>
            <b>Вопросы-ответы</b>
        </TextCard>
        <QuestionCard question='Что такое Билетопоиск?' answer='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'/>
        <QuestionCard question='Какой компании принадлежит Билетопоиск?' answer='Яндексу'/>
        <QuestionCard question='Как купить билет на Билетопоиск?' answer='Скинуть деньги мне на карту и подождать'/>
        <QuestionCard question='Как оставить отзыв на Билетопоиск?' answer='Никак'/>
    </div>
}