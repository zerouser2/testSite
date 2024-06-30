import styles from './actions.module.scss'
import starImg from '../images/star.png'
import { useState } from 'react';

function Actions() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={styles.actions}>

            <div className={styles.choose}>
                <div className={styles.arrowBack} style={{ cursor: 'pointer' }}>
                    <span class="material-symbols-outlined" >
                        chevron_left
                    </span>
                </div>

                <div style={{display: 'flex', userSelect: 'none'}} onClick={() => setOpen(!isOpen)}>
                    <p style={{ cursor: 'pointer' }}>BTC / ETH </p>
                    <div className={styles.arrowDown}>
                        <span class="material-symbols-outlined" style={{ cursor: 'pointer' }}>
                            keyboard_arrow_down
                        </span>
                    </div>
                </div>
                <nav className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
                    <ul className={styles.menulist}>
                        <li className={styles.menuitem}>BTC / ETH</li>
                        <li className={styles.menuitem}>Что-то</li>
                        <li className={styles.menuitem}>Что-то</li>
                    </ul>
                </nav>


            </div>
            <div className={styles.starBlock}>
                <img src={starImg} className={styles.starImg} />
            </div>
        </div>
    );
}

export default Actions;