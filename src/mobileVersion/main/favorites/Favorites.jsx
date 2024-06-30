import styles from './favorites.module.scss';
import notcoin from '../../images/notcoin.png';
import notcoinGraph from '../../images/notcoinGraph.png';
import usdt from '../../images/usdt.png';
import usdtGraph from '../../images/usdtGraph.png';
import dogecoin from '../../images/dogecoin.png';
import dogecoinGraph from '../../images/dogecoinGraph.png';

function Favorites() {
    return (
        <div className={styles.favoritesContainer}>
            <div className={styles.favText}>
                <p>Favorites</p>
            </div>

            <div className={styles.valuta}>
                <div className={styles.notcoin}>

                    <img src={notcoin} />
                    <div>
                        <p style={{ fontSize: '14px', fontWeight: '400' }}>NOT/USDT</p>
                        <p style={{ fontSize: '12px', lineHeight: '14px', fontWeight: '400', color: '#FFFFFF99' }}>Notcoin</p>
                    </div>

                    <img src={notcoinGraph} />
                    <div>
                        <p style={{ fontSize: '14px' }}>$0.09</p>
                        <p style={{ color: '#02C173', fontWeight: '400', fontSize: '12px', lineHeight: '18.2px' }}>10.23%</p>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    
                </div>

                <div className={styles.usdt}>
                    <img src={usdt} />
                    <div>
                        <p style={{ fontSize: '14px', fontWeight: '400', paddingLeft: '5%' }}>TON/USDT</p>
                        <p style={{ fontSize: '12px', lineHeight: '14px', fontWeight: '400', color: '#FFFFFF99', paddingLeft: '5%' }}>The Open N...</p>
                    </div>

                    <img src={usdtGraph} />
                    <div>
                        <p style={{ fontSize: '14px' }}>$10.9</p>
                        <p style={{ color: '#02C173', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px' }}>1.13%</p>
                    </div>
                </div>

                <div className={styles.dogecoin}>
                    <img src={dogecoin} />
                    <div>
                        <p style={{ fontSize: '14px', fontWeight: '400' }}>DOGE/BTC</p>
                        <p style={{ fontSize: '14px', lineHeight: '18.2px', fontWeight: '400', color: '#FFFFFF99' }}>Dogecoin</p>
                    </div>

                    <img src={dogecoinGraph} />
                    <div>
                        <p style={{ fontSize: '14px' }}>$0.100</p>
                        <p style={{ color: '#E11A38', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px' }}>0.89%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorites;