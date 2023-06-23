import { ReactElement } from "react";
import Image from "next/image";
import { useCount } from "@/hooks/useCount";

import styles from './ticketsCounter.module.css';

import minus from '../../../public/minus.svg'
import plus from '../../../public/plus.svg'

interface Props {
    ticketId: string,
    removeOnZero?: () => boolean
}

const MIN_TICKETS_COUNT = 0;
const MAX_TICKETS_COUNT = 30;

export function TicketsCounter(props: Props): ReactElement {

    const {ticketId, removeOnZero} = props;

    const [ticketsCount, increaseTicketsCount, decreaseTicketsCount] = useCount(0, MIN_TICKETS_COUNT, MAX_TICKETS_COUNT);

    // Вызываем функцию подтверждения, когда счетчик становится нулем. Если она возвращает true,
    // все ок, иначе делаем счетчик обратно единицей.   
    if (ticketsCount === 0 && removeOnZero) {
        if (!removeOnZero()) {
            increaseTicketsCount();
        }
    }

    const decreaseClassname = styles.button + ' ' + 
        (ticketsCount === MIN_TICKETS_COUNT ? styles.buttonDisable : styles.buttonActive);
    const increaseClassname = styles.button + ' ' + 
        (ticketsCount === MAX_TICKETS_COUNT ? styles.buttonDisable : styles.buttonActive);

    return (
        <div className={styles.buttons}>
            <button className={decreaseClassname} onClick={decreaseTicketsCount}>
                <Image src={minus} alt='minus'/>
            </button>
            <span className={styles.ticketCount}>{ticketsCount}</span>
            <button className={increaseClassname} onClick={increaseTicketsCount}>
                <Image src={plus} alt='plus'/>
            </button>
        </div>
    )
}