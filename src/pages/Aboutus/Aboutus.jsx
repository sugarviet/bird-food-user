import styles from './Aboutus.module.css'
import siuu from '../../assets/siuu.jpg';
import check from '../../assets/check.png';
import Banner from './components/Banner';
import { Button } from 'antd';

const Aboutus = () => {
  return (
    <div>
      <div><Banner /></div>
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
    </div>
  )
}
export default Aboutus;