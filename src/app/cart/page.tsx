'use client'

import { selectAllTicketsCount, selectMoviesIds } from '@/store/features/tickets/selector';
import styles from './page.module.css';
import { useSelector, shallowEqual } from 'react-redux';
import { TicketsState, ticketSlice } from '@/store/features/tickets/tickets';
import { TicketCard } from '@/components/TicketCard/ticketCard';
import { TextCard } from '@/components/TextCard/textCard';
import { useState } from 'react';
import { DeleteTicketModal } from '@/components/DeleteTicketModal/deleteTicketModal';
import { useDispatch } from 'react-redux';

export default function CartPage() {
    const moviesIds = useSelector((state: {tickets: TicketsState}) => selectMoviesIds(state), shallowEqual);
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState<string>();

    return <div className={styles.cartPage}>
        {Array.from(moviesIds).map(movieId => {
            return <TicketCard key={movieId} movieId={movieId} removeOnZero={() => {
                setOpenModal(movieId);
            }}/>
        })}
        <FinalCount/>
        {openModal ?
            <DeleteTicketModal onHide={() => setOpenModal(undefined)}
                onYes={() => {
                    dispatch(ticketSlice.actions.removeAllTickets(openModal));
                    setOpenModal(undefined);
                }}
                onNo={() => setOpenModal(undefined)}
            /> : null
        }
    </div>
}

function FinalCount() {
    const ticketsCount = useSelector((state: {tickets: TicketsState}) => selectAllTicketsCount(state));
    return (
        <div className={styles.count}>
            <TextCard>
                <div className={styles.total}>Итого билетов</div>
                <div className={styles.totalNumber}>{ticketsCount}</div> 
            </TextCard>
        </div>
    );
}