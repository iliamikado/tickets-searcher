'use client'

import { ReactElement } from "react";
import Image from "next/image";

import styles from './header.module.css';

import busketIcon from '../../../public/busket.svg';
import { useRouter } from "next/navigation";

interface Props {
    ticketsCount: number
}

export function Header(props: Props): ReactElement {
    const {ticketsCount} = props;
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