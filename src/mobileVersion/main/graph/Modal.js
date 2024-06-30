import styles from './graphblock.module.scss';
import logo from '../../images/logo.png';
import { useEffect } from 'react';

function Modal({ active, setActive }) {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        }
        if (!active) {
            document.body.style.overflow = '';
        }
    }, [active])


    if (active) {
        return (
            <div className={`${styles.modal} ${active ? styles.active : ''}`} >
                <div className={styles.close}>
                    <span class="material-symbols-outlined" onClick={() => setActive(false)}>
                        close
                    </span>
                </div>
                <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                    <p>Amount: </p>

                    <div className={styles.imgandinput}>
                        <img src={logo} style={{ width: '28px' }} />
                        <input type='text' />
                    </div>

                </div>
                <div className={styles.modalButton}>
                    <a href='#'>
                        SAVE
                    </a>

                </div>

            </div>

        );
    }
}

export default Modal;