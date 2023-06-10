import { Carousel } from "antd";

import styles from "./Slider.module.css";

const slidesData = [
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
const Slider = () => {
  return (
    <Carousel autoplay className={styles.sliderWrapper}>
      {slidesData.map((slide) => (
        <div key={slide.id} className={styles.sliderContent}>
          <div className={styles.sliderImgContainer}>
            <img src={slide.image} alt="" />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
