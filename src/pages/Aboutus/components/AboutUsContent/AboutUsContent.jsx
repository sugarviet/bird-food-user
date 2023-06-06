import styles from './AboutUsContent.module.css'
import siuu from '../../../../assets/siuu.jpg';
import check from '../../../../assets/check.png';
import { Button } from 'antd';

const AboutUsContent = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <img className={styles.image} src={siuu}></img>
        </div>
        <div>
          <h1 className={styles.text}>Best Organic Fruits And Vegetables</h1>
          <p className={styles.textDescription}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam  <br />  et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna<br /> dolore erat amet</p>
          <div className={styles.iconText}>
            <img className={styles.icon} src={check}></img>
            <p className={styles.textDescription1}>Tempor erat elitr rebum at clita</p>
          </div>
          <div className={styles.iconText}>
            <img className={styles.icon} src={check}></img>
            <p className={styles.textDescription1} >Aliqu diam amet diam et eos</p>
          </div>
          <div className={styles.iconText}>
            <img className={styles.icon} src={check}></img>
            <p className={styles.textDescription1}>Clita duo justo magna dolore erat amet</p>
          </div>
          <div className={styles.coverButton}>
            <Button
              className={styles.button}
              type="primary"
            >
              <p className={styles.textButton}>Read more</p>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bannerBottom}>
        <div className={styles.bannerItem}>
          <h1 className={styles.textBanner}>Visit Our  Firm</h1>
          <p className={styles.textDescriptionBanner}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat <br />  ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor <br />  diam ipsum sit. Aliqu diam amet diam et eos.</p>
        </div>
        <div className={styles.bannerItemButton}>
          <Button
            className={styles.buttonBanner}
            type="danger"
          >
            <p className={styles.textButtonBanner}>Visit Now</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default AboutUsContent;