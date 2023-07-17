import styles from "./Banner.module.css";

const bannerImage =
  "https://www.datocms-assets.com/33130/1626287901-birdseedbanner.jpg";

function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className={styles.bannerWrapper}
    >
      <div className={styles.bannerTitle}>
        <span>PRODUCT SINGLE</span>
      </div>
    </div>
  );
}

export default Banner;
