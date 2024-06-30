import { useState } from 'react';
import OrangeCircle from '../circles/OrangeCircle';
import RedCircle from '../circles/RedCircle';
import styles from './tasks.module.scss'

function Tasks() {
    const [isClaimed, setClaim] = useState(false)

    function handleClick(e) {
        setClaim(true)
        e.target.textContent = 'Claimed'

    }

    return (
        <div className={styles.tasksContainer}>
            <OrangeCircle />
            <div className={styles.onlyText}>
                <p>Tasks</p>

                <p className={styles.bigText}>Earn tokens</p>

                <p>Complete tasks and get <text>tokens</text> instantly</p>
            </div>

            <div className={styles.openedTasks}>
                <p className={styles.quantity}>1 Open task</p>

                <div className={styles.tasks}>
                    <div className={styles.task}>
                        <div className={styles.leftTask}>
                            <div>💎</div>

                            <div>
                                <p style={{ color: '#FFFFFF' }}>Subscribe to the Netherite</p>
                                <p style={{ color: '#FFFFFF99' }}>+500 NZR</p>
                            </div>
                            <button style={{ marginLeft: '8%' }}>Start</button>
                        </div>
                    </div>

                    <div className={styles.task}>
                        <div className={styles.leftTask}>
                            <div>💎</div>

                            <div>
                                <p style={{ color: '#FFFFFF' }}>Subscribe to the Netherite</p>
                                <p style={{ color: '#FFFFFF99' }}>+500 NZR</p>
                            </div>
                            <button style={{ marginLeft: '8%' }} onClick={handleClick} className={`${styles.claim} ${isClaimed ? styles.active : ''}`}>Claim</button>
                        </div>
                    </div>
                </div>
            </div>
            <RedCircle />
        </div>
    );
}

export default Tasks;