import { useState } from "react";
import { useGetAllCombos } from "../../../services/Combo/services";

function useComboList() {
  const { data, isLoading } = useGetAllCombos();

  const firstCarouselData = data?.slice(0, 8);

  const secondCarouselData = data?.slice(8);

  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(active === id ? null : id);
  };

  return {
    firstCarouselData,

    secondCarouselData,

    active,

    handleActive,

    isLoading,
  };
}

export default useComboList;
