import styles from './textandimg.module.scss';
import fon from '../images/fonxz.png';
import DiamondBlock from './DiamondBlock';
import diamondImg from '../images/diamond.png'

function TextAndImg() {
    return (
        <div className={styles.textimg}>
            <p>UQBot8FUuYpyW8cjq306...</p>
            <img src={fon} className={styles.card1} />
            <div className={styles.card2}>
                <img src={diamondImg} className={styles.diamondImg} />
            </div>
        </div>
    );
}

export default TextAndImg;