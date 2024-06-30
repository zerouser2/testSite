import { useState } from 'react';
import styles from './graph.module.scss';
import starImg from '../../images/star.png'
import GraphBlock from './GraphBlock';
import TradingViewWidget from './TradingViewWidget';

function Graph() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={styles.graphContainer}>
            <div className={styles.actions}>
                <div className={styles.yellow}></div>

                <div className={styles.choose}>
                    <div className={styles.arrowBack} style={{ cursor: 'pointer' }}>
                        <span class="material-symbols-outlined" >
                            chevron_left
                        </span>
                    </div>

                    <div style={{ display: 'flex', userSelect: 'none' }} onClick={() => setOpen(!isOpen)}>
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

                    <div className={styles.starBlock}>
                        <img src={starImg} className={styles.starImg} />
                    </div>

                </div>

            </div>
            <GraphBlock />
            <TradingViewWidget />
            <div className={styles.actionButtons}>
                <a href='#'>
                    Call
                </a>
                <a href='#'>
                    Put
                </a>
            </div>
        </div>
    );
}

export default Graph;