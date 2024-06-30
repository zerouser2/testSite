import styles from './balance.module.scss';
import fileImg from './images/file.png'
import peopleImg from './images/people.png'

function Activities() {
    return (
        <div className={styles.activities}>
            <div>Activities</div>
            
            <div className={styles.reward}>
                <span className={styles.rewarding}>Rewarding</span>
                <span className={styles.time}>15m</span>
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

export default Activities;