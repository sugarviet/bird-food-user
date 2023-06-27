import { Carousel, Breadcrumb } from "antd";

import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

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

const settings = {
  dots: false,
  draggable: true, // Cho phép kéo qua bằng chuột
};
const Banner = () => {
  return (
    <Carousel {...settings} autoplay className={styles.sliderWrapper}>
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
