import { useState } from 'react';
import styles from './graphblock.module.scss';
import arrowUp from '../../images/arrowup.png'
import arrowDown from '../../images/arrowdown.png';
import notcoin from '../../images/notcoin.png'
import Modal from './Modal';



function GraphBlock() {
    const [isOpenHour, setOpenHour] = useState(false)
    const [isOpenAmount, setOpenAmount] = useState(false)


    return (
        <div className={styles.graphActions}>
            <div className={styles.cost}>
                <p className={styles.bigCost}>$1,150.00</p>


                <div className={styles.select}>
                    <div onClick={() => setOpenHour(!isOpenHour)} className={styles.selection}>

                        <p>1 hour</p>
                        <span class="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </div>
                    <nav className={`${styles.menu} ${isOpenHour ? styles.active : ''}`}>
                        <ul className={styles.menulist}>
                            <li className={styles.menuitem}>1 hour</li>
                            <li className={styles.menuitem}>2 hour</li>
                            <li className={styles.menuitem}>3 hour</li>
                            <li className={styles.menuitem}>4 hour</li>
                        </ul>
                    </nav>
                </div>



            </div>

            <div className={styles.dropdown}>
                <div className={styles.profit}>
                    <p>Profit: 93%</p>
                    <img src={notcoin} />
                    <p>1000</p>
                </div>
                <div className={styles.amount} onClick={() => setOpenAmount(!isOpenAmount)}>
                    <p>Amount</p>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
            </div>

            <div className={styles.positions}>
                <div className={styles.order}>
                    <div>
                        <p>ETH/USDT</p>
                        <p><text style={{ fontWeight: '700' }}>$0.6643</text> on 15:13</p>
                        <img src={arrowUp} style={{ paddingLeft: '9px' }} />
                    </div>
                    <div>
                        1H
                    </div>
                </div>
            </div>
            <Modal active={isOpenAmount} setActive={setOpenAmount}/>
        </div>
    );
}

export default GraphBlock;