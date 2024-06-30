import Favorites from "./favorites/Favorites";
import TotalBalance from "./TotalBalance";
import styles from './balance.module.scss';
import Orders from "./orders/Orders";
import RedCircle from "../circles/RedCircle";
import OrangeCircle from "../circles/OrangeCircle";

function Balance() {
    return (
        <div className={styles.main}>
            <OrangeCircle />
            <TotalBalance />
            <Favorites />
            <Orders />
            <RedCircle />
        </div>
    );
}

export default Balance;