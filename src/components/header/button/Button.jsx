import { useState } from 'react';
import styles from './button.module.scss';
import YellowCircle from './YellowCircle';
import WhiteCircle from './WhiteCircle';

function Button() {
    const [isDragging, setIsDragging] = useState(false);
    const [startPosX, setStartPosX] = useState(0);
    const [currentPosX, setCurrentPosX] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPosX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const diffX = e.clientX - startPosX;
            setCurrentPosX(diffX);
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            if (currentPosX > 250) {
                alert('Swiped right!');
            }
            // Reset button position
            setCurrentPosX(0);
            setIsDragging(false);
            setStartPosX(0);
        }
    };

    return (
        <div className={styles.buttonContainer}>
            <YellowCircle />
            <WhiteCircle />
            <div className={styles.button}>
                <span className={`material-symbols-outlined ${styles.arrow}`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ transform: `translateX(${currentPosX}px)` }}>
                    arrow_right_alt
                </span>
                <p>Tap to Start</p>
                <div className={styles.spans}>
                    <span className={`material-symbols-outlined ${styles.firstSpan}`}>
                        chevron_right
                    </span>
                    <span className={`material-symbols-outlined ${styles.secondSpan}`}>
                        chevron_right
                    </span>
                    <span className={`material-symbols-outlined ${styles.thirdSpan}`} style={{marginRight: '16px'}}>
                        chevron_right
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Button;