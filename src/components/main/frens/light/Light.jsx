import styles from './light.module.scss';
import lightImg from './light.png'

function Light() {
    return (
        <div className={styles.lightBlock}>
            <div className={styles.lightImg}>
                <img src={lightImg} />
            </div>
        </div>
    );
}

export default Light;