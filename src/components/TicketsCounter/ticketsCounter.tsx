import { ReactElement } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { selectTicketsCount } from "@/store/features/tickets/selector";

import styles from './ticketsCounter.module.css';

import minus from '../../../public/minus.svg'
import plus from '../../../public/plus.svg'
import { TicketsState, ticketSlice } from "@/store/features/tickets/tickets";

interface Props {
    movieId: string,
    removeOnZero?: () => void
}

const MAX_TICKETS_COUNT = 30;

export function TicketsCounter(props: Props): ReactElement {

    const {movieId, removeOnZero} = props;

    const ticketsCount = useSelector((state: {tickets: TicketsState}) => selectTicketsCount(state, movieId));
    const dispatch = useDispatch()

    const decreaseClassname = styles.button + ' ' + 
        (ticketsCount === 0 ? styles.buttonDisable : styles.buttonActive);
    const increaseClassname = styles.button + ' ' + 
        (ticketsCount === MAX_TICKETS_COUNT ? styles.buttonDisable : styles.buttonActive);

    return (
        <div className={styles.buttons}>
            <button className={decreaseClassname} onClick={() => {
                if (removeOnZero && ticketsCount === 1) {
                    removeOnZero();
                    return;
                }
                if (ticketsCount === 0) {
                    return;
                }
                dispatch(ticketSlice.actions.removeTicket(movieId));
            }}>
                <Image src={minus} alt='minus'/>
            </button>
            <span className={styles.ticketCount}>{ticketsCount}</span>
            <button className={increaseClassname} onClick={() => {
                if (ticketsCount === MAX_TICKETS_COUNT) {
                    return;
                }
                dispatch(ticketSlice.actions.addTicket(movieId));
            }}>
                <Image src={plus} alt='plus'/>
            </button>
        </div>
    )
}