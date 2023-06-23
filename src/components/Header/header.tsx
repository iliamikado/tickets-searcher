'use client'

import Image from "next/image";
import styles from './header.module.css';
import busketIcon from '../../../public/busket.svg';
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { TicketsState } from "@/store/features/tickets/tickets";
import { selectAllTicketsCount } from "@/store/features/tickets/selector";

export function Header() {
    const ticketsCount = useSelector((state: {tickets: TicketsState}) => selectAllTicketsCount(state));
    const router = useRouter();
    return (
        <div className={styles.header}>
            <span className={styles.name} onClick={() => router.push('/')}>Билетопоиск</span>
            {ticketsCount > 0 ? <div className={styles.ticketsCount}>
                {ticketsCount}
            </div> : null}
            <div className={styles.busket}>
                <Image src={busketIcon} alt="Busket" fill/>
            </div>
        </div>
    )
}