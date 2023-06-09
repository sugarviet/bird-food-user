import styles from './Banner.module.css'

const bannerImage = 'https://jimmybazaar.com/images/home5/panchee%20pick%20budgies%20and%20pride%20banner.jpg';

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