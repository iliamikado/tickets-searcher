import Image from 'next/image';
import styles from './reviewCard.module.css';
import defaultAvatar from '../../../public/default_avatar.svg';
import { Review } from '@/service/service';

interface Props {
    review: Review
}

export function ReviewCard(props: Props) {
    const {review} = props;

    return (
        <div className={styles.reviewCard}>
            <div className={styles.avatar}>
                <Image src={review?.avatar ? review.avatar : defaultAvatar} alt='avatar' fill={Boolean(review?.avatar)}/>
            </div>
            <div className={styles.info}>
                <span className={styles.name}>{review.name}</span>
                <span className={styles.mark}>Оценка: <b>{review.rating}</b></span>
                <div className={styles.text}>{review.text}</div>
            </div>
        </div>
    )
}