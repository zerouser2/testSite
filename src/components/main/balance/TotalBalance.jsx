import styles from './balance.module.scss';
import koshelekImg from './images/koshelek.png';
import logo from './images/logo.png';
import Activities from './Activities';


function TotalBalance() {
    return (
        <div className={styles.container}>

            <div className={styles.koshelek}>
                <img src={koshelekImg} />
                <p>UQBot8FUuYpyW8cjq306...</p>
            </div>

            <div className={styles.balance}>
                <div className={styles.totalbaltext}>
                    <p>Total Balance</p>
                </div>
                <div className={styles.bigN}>
                    <img src={logo} />
                    <p className={styles.bigNum}>3013</p>
                    <p className={styles.approx}>~$5,450.500</p>
                </div>
            </div>

            <Activities />

            <div className={styles.tradingButton}>
                <a>Trading platform 🦄 </a>
            </div>
        </div>
    );
}

export default TotalBalance;