import styles from './frenquant.module.scss';
import avatar from '../images/avatar.jpg'

function FrenQuantity() {
    return (
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
    );
}

export default FrenQuantity;