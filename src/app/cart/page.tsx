'use client'

import { selectTicketsModule } from '@/store/features/tickets/selector';
import styles from './page.module.css';
import { useSelector } from 'react-redux';
import { TicketsState, ticketSlice } from '@/store/features/tickets/tickets';
import { TicketCard } from '@/components/TicketCard/ticketCard';
import { TextCard } from '@/components/TextCard/textCard';
import { useState } from 'react';
import { DeleteTicketModal } from '@/components/DeleteTicketModal/deleteTicketModal';
import { useDispatch } from 'react-redux';

export default function CartPage() {
    const tickets = useSelector((state: {tickets: TicketsState}) => selectTicketsModule(state));
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState<string>();

    return <div className={styles.cartPage}>
        {Object.keys(tickets.tickets).map(filmId => {
            return <TicketCard key={filmId} filmId={filmId} removeOnZero={() => {
                setOpenModal(filmId);
            }}/>
        })}
        <div className={styles.count}>
            <TextCard>
                <div className={styles.total}>Итого билетов</div>
                <div className={styles.totalNumber}>{tickets.count}</div> 
            </TextCard>
        </div>
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