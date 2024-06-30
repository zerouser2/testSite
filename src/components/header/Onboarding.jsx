import styles from './header.module.scss';
import bgImage from './images/bg.png';
import Images from './Images';
import Circle from './circles/Circle';
import Circle2 from './circles/Circle2';
import Button from './button/Button';


function Onboarding() {
    return (
        <div className={styles.header}>
            <div>
                <div className={styles.circle}></div>
                <Circle />
                <Images />
                <Circle2 />
                <div className={styles.bigText}>
                    <p>Trade</p>
                    <p>more efficient</p>
                    <div className={styles.smallText}>
                        <p>A binary options broker working with TON. Get up to <text>~98%</text> of the profit from the transaction</p>
                    </div>

                    <div className={styles.spans}>
                        <div className={styles.whitespan}></div>
                        <div className={styles.grayspan}></div>
                        <div className={styles.grayspan}></div>
                    </div>
                </div>
            </div>
            <Button />




        </div>
    );
}

export default Onboarding;