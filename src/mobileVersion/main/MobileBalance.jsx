import Activities from '../../components/main/balance/Activities';
import styles from './mobBal.module.scss'
import koshelekImg from '../images/koshelek.png';
import logo from '../images/logo.png'
import fileImg from '../images/file.png'
import peopleImg from '../images/people.png'

function MobileBalance() {
    return (
        <div className={styles.balanceContainer}>
            <div className={styles.yellow}></div>
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



            <div className={styles.activities}>
                <div>Activities</div>

                <div className={styles.reward}>
                    <span className={styles.rewarding}>Rewarding</span>
                    <span className={styles.time}>15m</span>
                </div>


            </div>
            <div className={styles.navs}>
                <a href='#' className={styles.nav}>
                    <div>
                        <img src={fileImg} />
                        <p>Tasks</p>

                    </div>
                </a>
                <a href='#' className={styles.nav}>
                    <div>
                        <img src={peopleImg} />
                        <p>Frens</p>
                    </div>
                </a>
            </div>



        </div>
    );
}

export default MobileBalance;