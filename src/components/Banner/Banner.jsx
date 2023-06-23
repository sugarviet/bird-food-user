import { Carousel, Breadcrumb } from "antd";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const carouselData = [
  {
    id: 1,
    image:
      "https://www.allaboutbirds.org/news/wp-content/uploads/2023/02/YRWarbler-Seitz-143912041-1280x668.jpg",
    caption: "Slide 1",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg",
    caption: "Slide 2",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg",
    caption: "Slide 3",
  },
];

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};
function Banner({
  title
}) {
  return (
    <Carousel autoplay className={styles.sliderWrapper}>
      {carouselData.map((slide) => (
        <div key={slide.id} className={styles.sliderContent}>
          <div className={styles.sliderImgContainer}>
            <img src={slide.image} alt="" />
          </div>
          <div className={styles.sliderTextWrapper}>
            <h1>{title}</h1>
            <div className={styles.breadcrumb}>
              <Breadcrumb
                separator="/" style={{ fontSize: '20px' }}
                items={[
                  {
                    title: <Link to="/" className={styles.breadcumbText}>Home</Link>,
                  },
                  {
                    title: <span className={styles.breadcumbSpan}>{title}</span>,
                  }
                ]}
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Banner;
