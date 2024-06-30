import Favorites from "./favorites/Favorites";
import MobileBalance from "./MobileBalance";
import Orders from "./orders/Orders";
import styles from './mobBal.module.scss';
import WalletNotActive from "./balanceNotActive/WalletNotActive";
import Graph from "./graph/Graph";
import Frens from "./frens/Frens";
import Tasks from "./tasks/Tasks";

function Main() {
    return (  
        <div className={styles.main}>
            <MobileBalance />
            <Favorites />
            <Orders />
            <WalletNotActive />
            <Graph />
            <Frens />
            <Tasks />
        </div>
    );
}

export default Main;