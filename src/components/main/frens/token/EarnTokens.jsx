import OrangeCircle from '../../circles/OrangeCircle';
import styles from './token.module.scss';
import orange from '../../circles/orangecircle.module.scss'

function EarnTokens() {
    return (
        <div className={styles.referal}>
            <div className={styles.frens}>Frens</div>
            <div className={styles.tokenText}>
                <p>Earn Tokens</p>
                <p>Get <text>10%</text> of referrals and <text>3% </text> of their<br></br>
                    frens.<text>Double</text> the amount if a frien has a<br></br>
                    premium account</p>
            </div>

            <div className={styles.tokenButton}>
                <button>Copy link ✨</button>
            </div>
        </div>
    );
}

export default EarnTokens;