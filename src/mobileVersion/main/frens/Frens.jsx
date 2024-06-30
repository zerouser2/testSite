import styles from './frens.module.scss';
import avatar from '../../images/avatar.jpg';
import lightImg from '../../images/light.png'

function Frens() {
    return (
        <div className={styles.frensContainer}>
            <div className={styles.yellow}></div>
            <div className={styles.referal}>
                <div className={styles.frens}>Frens</div>
                <div className={styles.tokenText}>
                    <p>Earn Tokens</p>
                    <p>Get <text>10%</text> of referrals and <text>3% </text> of their<br></br>
                        frens.<text>Double</text> the amount if a frien has a<br></br>
                        premium account</p>
                </div>

                <div className={styles.quantityContainer}>
                    <div className={styles.frenBlock}>
                        <p className={styles.frenText}>1 Fren</p>

                        <div className={styles.yourFren}>
                            <div>
                                <img src={avatar} className={styles.avatar} />
                                <div className={styles.leydey}>
                                    <p>ley_dey</p>
                                    <p>12 frens</p>
                                </div>
                            </div>
                            <div>
                                <p>18261</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.lightBlock}>
                    <div className={styles.lightImg}>
                        <img src={lightImg} />
                    </div>
                </div>

                
                <div className={styles.tokenButton}>
                    <a>Copy link ✨</a>
                </div>
            </div>
        </div>
    );
}

export default Frens;