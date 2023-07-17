import { Carousel, Breadcrumb } from "antd";

import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

const carouselData = [
  {
    id: 1,
    image:
      "https://wp.valemount.co.za/wp-content/uploads/2019/04/banner-westermans1-1.png",
    caption: "Slide 1",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/jbhostetter.com/wp-content/uploads/banner-2-scaled.jpg?ssl=1",
    caption: "Slide 2",
  },
  {
    id: 3,
    image: "https://www.datocms-assets.com/33130/1626287901-birdseedbanner.jpg",
    caption: "Slide 3",
  },
];

const Banner = () => {
  return (
    <Carousel autoplay className={styles.sliderWrapper}>
      {carouselData.map((slide) => (
        <div key={slide.id} className={styles.sliderContent}>
          <div className={styles.sliderImgContainer}>
            <img src={slide.image} alt="" />
          </div>
          <div className={styles.sliderTextWrapper}>
            <h1>Product</h1>
            <div className={styles.breadcrumb}>
              <Breadcrumb
                separator="/"
                style={{ fontSize: "20px" }}
                items={[
                  {
                    title: (
                      <Link to="/" className={styles.breadcumbText}>
                        Home
                      </Link>
                    ),
                  },
                  {
                    title: (
                      <span className={styles.breadcumbSpan}>Products</span>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
