import { useGetAllCategory } from "../../../services/Category/services";
import { useState } from 'react';

function useCategoryList() {
  const { data, isLoading } = useGetAllCategory();
  
  const firstCarouselData = data?.slice(0, 8);

  const secondCarouselData = data?.slice(8);

  const [active, setActive] = useState(null)

  const handleActive = (id) => {
    setActive(active === id ? null : id);
}

  return {
    firstCarouselData,

    secondCarouselData,

    active,

    handleActive,

    isLoading
  };
}

export default useCategoryList;
