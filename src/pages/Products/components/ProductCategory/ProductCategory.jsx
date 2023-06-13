import { Carousel } from 'antd';
import useCategoryList from '../../hooks/useCategoryList';
import styles from './ProductCategory.module.css';


const ProductCategory = () => {
    const { firstCarouselData, secondCarouselData, active, handleActive } = useCategoryList();

    const settings = {
        infinite: true,
        speed: 800,
        dots: true,
        draggable: true,
    };

    return (
        <div className={styles.mealCategory}>
            
                <Carousel {...settings}>
                    <div className={styles.mealWrapper}>
                        {firstCarouselData?.map(data => (
                            <div key={data.id}>
                                <img
                                    className={`${styles.mealImg} ${active === data.id ? styles.active : ''}`}
                                    src={data.image}
                                    onClick={() => handleActive(data.id)}
                                />
                                <p
                                    className={`${styles.mealName} ${active === data.id ? styles.activeText : ''}`}>
                                    {data.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.mealWrapper}>
                        {secondCarouselData?.map(data => (
                            <div key={data.id}>
                                <img className={styles.mealImg} src={data.image} alt="Meal" />
                                <p className={styles.mealName}>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </Carousel>
            <style>
                {`
                    .ant-carousel .slick-dots li button {
                        margin-top: 50px;
                        background-color: #3cb815 !important;
                    }
                    .ant-carousel .slick-dots-bottom{
                        right:150px;
                    }
                `}
            </style>
        </div>

    )
}
export default ProductCategory;