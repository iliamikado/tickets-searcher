import { Modal } from '../Modal/modal';
import styles from './deleteTicketModal.module.css';

interface Props {
    onHide: () => void,
    onYes: () => void,
    onNo: () => void
}

export function DeleteTicketModal(props: Props) {
    const {onHide, onYes, onNo} = props;
    return <Modal onHide={onHide}>
        <div className={styles.title}>Удаление билета</div>
        <div className={styles.text}>Вы уверены, что хотите удалить билет?</div>
        <div className={styles.buttons}>
            <div className={styles.buttonYes} onClick={onYes}>Да</div>
            <div className={styles.buttonNo} onClick={onNo}>Нет</div>
        </div>
    </Modal>
}