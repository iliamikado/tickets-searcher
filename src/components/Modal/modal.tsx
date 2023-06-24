'use client'

import { ReactNode, useEffect, useState } from "react";
import styles from './modal.module.css';
import { createPortal } from "react-dom";
import cross from '../../../public/cross.svg';
import Image from "next/image";

export function Modal({ children, onHide }: {children: ReactNode, onHide: () => void}) {

    const [modalsDiv, setModalsDiv] = useState<Element>()
    useEffect(() => {
        const modalsDiv = document.body.querySelector('#modals');
        if (modalsDiv) {
            setModalsDiv(modalsDiv);
        }
    }, [])

    return <>
        {modalsDiv ? createPortal(
            <div className={styles.modalBack} id='back' onClick={(e: any) => {
                if (e.target.id === 'back') {
                    onHide();
                }
            }}>
                <div className={styles.modal}>
                    <div className={styles.cross} onClick={onHide}>
                        <Image src={cross} alt='close'/>
                    </div>
                    {children}
                </div>
            </div>, modalsDiv
        ) : null}
    </>
}