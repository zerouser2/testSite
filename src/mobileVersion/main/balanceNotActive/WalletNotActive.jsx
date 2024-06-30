import styles from './wallet.module.scss';
import koshelekImg from '../../images/koshelek.png';
import logo from '../../images/logo.png';
import deposit from '../../images/deposit.png';
import withraw from '../../images/withraw.png';
import diamond from '../../images/diamondFon.png';

function WalletNotActive() {
    return (
        <div className={styles.walletnotactive}>
            <div style={{display: 'flex', flexDirection: 'column'   }}>
                <div className={styles.yellow}></div>

                <div className={styles.koshelek}>
                    <img src={koshelekImg} />
                    <p>...</p>
                </div>

                <div className={styles.balance}>
                    <div className={styles.totalbaltext}>
                        <p>Total Balance</p>
                    </div>
                    <div className={styles.bigN}>
                        <img src={logo} />
                        <p className={styles.bigNum}>0</p>
                    </div>

                </div>

                <div className={styles.action}>
                    <a href='#' className={styles.deposit}>
                        <img src={deposit} />
                        <p>Deposit</p>
                    </a>
                    <a href='#' className={styles.withraw}>
                        <img src={withraw} />
                        <p>Withraw</p>
                    </a>
                </div>
                <div className={styles.fonWomen}></div>
            </div>

            <div className={styles.connectButton}>
                <a href='#'>
                    Connect wallet 💎
                </a>
            </div>

        </div>
    );
}

export default WalletNotActive;