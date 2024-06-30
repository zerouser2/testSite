import TradingViewWidget from '../TradingViewWidget';
import styles from './graph.module.scss';
import notcoin from '../images/logo.png';
import arrowUp from '../images/arrowup.png';
import arrowDown from '../images/arrowdown.png'
import OrangeCircle from '../../circles/OrangeCircle';
import RedCircle from '../../circles/RedCircle';
import { useState } from 'react';

function GraphBlock() {
    const [isOpen, setOpen] = useState(false)
    const [value, setValue] = useState(1000)

    function handleClick() {
        setOpen(!isOpen)
    }

    return (
        <div className={styles.graphActions}>
            <div className={styles.justGraph}>
                <TradingViewWidget />
            </div>

            <div className={styles.actionBlock}>
                <div className={styles.cost}>
                    <p className={styles.bigCost}>$1,150.00</p>


                    <div className={styles.select}>
                        <div onClick={() => setOpen(!isOpen)}>

                            <p>1 hour</p>
                            <span class="material-symbols-outlined">
                                keyboard_arrow_down
                            </span>
                        </div>
                        <nav className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
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
                    </div>
                    <div className={styles.amount}>
                        <p>Amount: </p>
                        <input type='number' value={value} onChange={(e) => setValue(e.target.value)}/>
                        <img src={notcoin} />
                    </div>
                </div>

                <div className={styles.positions}>
                    <p>Open positions: </p>

                    <div className={styles.money}>
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

                        <div className={styles.order}>
                            <div>
                                <p>ETH/USDT</p>
                                <p><text style={{ fontWeight: '700' }}>$0.6640</text> on 15:10</p>
                                <img src={arrowDown} style={{ paddingLeft: '9px' }} />
                            </div>
                            <div>
                                5M
                            </div>
                        </div>

                        <div className={styles.order}>
                            <div>
                                <p>ETH/USDT</p>
                                <p><text style={{ fontWeight: '700' }}>$0.6639</text> on 15:09</p>
                                <img src={arrowUp} style={{ paddingLeft: '9px' }} />
                            </div>
                            <div>
                                1H
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.actionButtons}>
                    <button>Call</button>
                    <button>Put</button>
                </div>

            </div>
        </div>
    );
}

export default GraphBlock;