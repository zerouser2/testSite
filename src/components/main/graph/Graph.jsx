import OrangeCircle from '../circles/OrangeCircle';
import RedCircle from '../circles/RedCircle';
import Actions from './actions/Actions';
import styles from './actions/actions.module.scss'
import GraphBlock from './graphblock/GraphBlock';
import starImg from './images/star.png'

function Graph() {
    return (
        <div className={styles.graphContainer}>
            <OrangeCircle />
            <Actions />
            <GraphBlock />
            <RedCircle />
        </div>
    );
}

export default Graph;