import { Carousel, Button } from "antd";

import styles from "./Slider.module.css";

const slidesData = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg",
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
const Slider = () => {
  return (
    <Carousel autoplay className={styles.sliderWrapper}>
      {slidesData.map((slide) => (
        <div key={slide.id} className={styles.sliderContent}>
          <div className={styles.sliderImgContainer}>
            <img src={slide.image} alt="" />
          </div>
          <div className={styles.sliderTextWrapper}>
            <h1>Choose Quality Food For Your Bird</h1>
            
            <div className={styles.btnWrapper}>
                <Button style={{backgroundColor: '#3cb815', borderRadius: '50px', height: '60px', width: '140px', fontSize: '20px'}} type="primary">Products</Button>
                <Button style={{backgroundColor: '#f65005', borderRadius: '50px', height: '60px', width: '140px', fontSize: '20px'}} type="primary">Services</Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
