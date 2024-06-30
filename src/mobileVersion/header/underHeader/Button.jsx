import { useState } from "react";
import styles from './button.module.scss'
import YellowCircle from "../../../components/header/button/YellowCircle";
import WhiteCircle from "../../../components/header/button/WhiteCircle";

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
            <div className={styles.whitecircle}></div>
            <div className={styles.whitecircle2}></div>
            <div className={styles.circle}></div>

            <div className={styles.button}>
                <span className={`material-symbols-outlined ${styles.arrow}`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ transform: `translateX(${currentPosX}px)` }}>
                    arrow_right_alt
                </span>
                <p>Swipe to Start</p>
                <div className={styles.spans}>
                    <span class="material-symbols-outlined" style={{opacity: '0.15'}}>
                        chevron_right
                    </span>
                    <span class="material-symbols-outlined" style={{opacity: '0.5'}}>
                        chevron_right
                    </span>
                    <span class="material-symbols-outlined" style={{marginRight: '16px'}}>
                        chevron_right
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Button;