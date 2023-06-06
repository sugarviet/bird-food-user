import { Fragment } from 'react';
import styles from './Banner.module.css'

const bannerImage = 'https://themewagon.github.io/vegefoods/images/bg_1.jpg';

function Banner() {
    return ( 
        <div style={{backgroundImage: `url(${bannerImage})`}} className={styles.bannerWrapper}>
            <div className={styles.bannerTitle}>
                <span>PRODUCT SINGLE</span>
            </div>
        </div>
    );
}

export default Banner;