import styles from './header.module.scss';
import cardImage from './images/card1.png';
import coinsImage from './images/coins.png';
import testWomen from './images/womem.png';
import TextAndImg from './textandimg/TextAndImg';


function Images() {
    return (
        <div className={styles.images}>
            <img src={cardImage} className={styles.card} />
            <img src={testWomen} className={styles.women} />
            <TextAndImg />
            <img src={coinsImage} className={styles.coins} />
            <img src={coinsImage} className={styles.coins} />
        </div>
    );
}

export default Images;