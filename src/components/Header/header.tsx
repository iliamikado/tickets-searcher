import { ReactElement } from "react";
import Image from "next/image";

import styles from './header.module.css';

import busketIcon from '../../../public/busket.svg';

interface Props {
    ticketsCount: number
}

export function Header(props: Props): ReactElement {
    const {ticketsCount} = props;
    return (
        <div className={styles.header}>
            <span className={styles.name}>Билетопоиск</span>
            {ticketsCount > 0 ? <div className={styles.ticketsCount}>
                {ticketsCount}
            </div> : null}
            <div className={styles.busket}>
                <Image src={busketIcon} alt="Busket" fill/>
            </div>
        </div>
    )
}