import { Carousel } from "antd";
import styles from "./Combos.module.css";
import useComboList from "../../hooks/useComboList";

const Combos = () => {
  const { firstCarouselData, secondCarouselData, active, handleActive } =
    useComboList();

  return (
    <div className={styles.mealCategory}>
      <Carousel>
        <div className={styles.mealWrapper}>
          {firstCarouselData?.map((data) => (
            <div key={data.id}>
              <img
                className={`${styles.mealImg} ${
                  active === data.id ? styles.active : ""
                }`}
                src={data.image}
                onClick={() => handleActive(data.id)}
              />
              <p
                className={`${styles.mealName} ${
                  active === data.id ? styles.activeText : ""
                }`}
              >
                {data.name}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.mealWrapper}>
          {secondCarouselData?.map((data) => (
            <div key={data.id}>
              <img className={styles.mealImg} src={data.image} alt="Meal" />
              <p className={styles.mealName}>{data.name}</p>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};
export default Combos;
