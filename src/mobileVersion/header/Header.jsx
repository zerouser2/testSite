import Images from '../../components/header/Images';
import TextAndImg from '../../components/header/textandimg/TextAndImg';
import styles from './header.module.scss';
import imgToken from '../../components/header/images/token.png'
import cardImage from '../../components/header/images/card1.png';
import coinsImage from '../../components/header/images/coins.png';
import testWomen from '../../components/header/images/womem.png';
import UnderHeader from './underHeader/UnderHeader';
import Circle from './decor/Circle';
import BigWhiteCircle from './decor/whitecircles/BigWhiteCircle';
import SmallWhiteCircle from './decor/whitecircles/SmallWhiteCircle';

function Header() {

    return (
        <div className={styles.header}>
            <BigWhiteCircle />
            <Circle />
            <SmallWhiteCircle />
            <div className={styles.topHeader}>
                <div className={styles.cardBlock}>
                    <img src={cardImage} className={styles.card} />
                    <img src={testWomen} className={styles.women} />
                    <img src={imgToken} className={styles.token} />
                    <img src={coinsImage} className={styles.coins} />
                </div>
            </div>
            <div className={styles.bigcircle}></div>
            <div className={styles.smallcircle}></div>

            <UnderHeader />
        </div>
    );
}

export default Header;