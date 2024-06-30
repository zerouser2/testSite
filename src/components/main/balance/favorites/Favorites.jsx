import styles from './favorites.module.scss';
import notcoin from '../images/notcoin.png'
import usdt from '../images/usdt.png'
import dogecoin from '../images/dogecoin.png'
import notcoinGraph from '../images/notcoinGraph.png'
import usdtGraph from '../images/usdtGraph.png'
import dogecoinGraph from '../images/dogecoinGraph.png'

function Favorites() {
    return (
        <div className={styles.favorites}>
            <div className={styles.favText}>
                <p>Favorites</p>
            </div>

            <div className={styles.valuta}>
                <div className={styles.notcoin}>
                    <img src={notcoin} />
                    <div>
                        <p>NOT/USDT</p>
                        <p style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: '400', color:'#FFFFFF99' }}>Notcoin</p>
                    </div>

                    <img src={notcoinGraph} />
                    <div>
                        <p>$0.09</p>
                        <p style={{color: '#02C173', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px'}}>10.23%</p>
                    </div>
                </div>

                <div className={styles.usdt}>
                    <img src={usdt} />
                    <div>
                        <p style={{paddingLeft: '5px'}}>TON/USDT</p>
                        <p style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: '400', color:'#FFFFFF99' }}>The Open N...</p>
                    </div>

                    <img src={usdtGraph} />
                    <div>
                        <p>$10.9</p>
                        <p style={{color: '#02C173', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px'}}>1.13%</p>
                    </div>
                </div>

                <div className={styles.dogecoin}>
                    <img src={dogecoin} />
                    <div>
                        <p>DOGE/BTC</p>
                        <p style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: '400', color:'#FFFFFF99' }}>Dogecoin</p>
                    </div>

                    <img src={dogecoinGraph}/>
                    <div style={{marginLeft: '5px'}}>
                        <p>$0.100</p>
                        <p style={{color: '#E11A38', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px'}}>0.89%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorites;