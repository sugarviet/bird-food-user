import { Carousel } from 'antd';
import styles from './ProductCategory.module.css';
import useCategoryList from '../../hooks/useCategoryList'


const ProductCategory = () => {
    const { firstCarouselData, secondCarouselData, active, handleActive,isLoading } = useCategoryList();

    const settings = {
        infinite: true,
        speed: 800,
        dots: true,
        draggable: true, // Cho phép kéo qua bằng chuột
    };

    return (
        <div className={styles.mealCategory}>
            {isLoading ? (<img style={{ marginLeft: '550px', width: '200px' }} src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTU3Mjg2ZmQzYzlmOTA5ZmRiNjkzMjQxMDI1NDI1N2UzZWUwZWMzZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/Ra1QMzCD9V6VqxIVV6/giphy.gif'></img>) : (
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
                </Carousel>)}
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