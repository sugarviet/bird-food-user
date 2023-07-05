import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Combos from "./components/Combos";
import { useContext, useEffect } from "react";
import { UserContext } from "../../store/User";
import { useUpdateUserSelectedItems } from "../../services/User/services";

const Product = () => {
  const [user] = useContext(UserContext)
  const { mutate: updateUserSelectedItems} = useUpdateUserSelectedItems()

  useEffect(() => {
    const handleStoreData = () => {
      updateUserSelectedItems({selectedProducts: user.selectedItems, selectedCombos: user.selectedCombo})
    }

      window.addEventListener('beforeunload', handleStoreData)

      return () => {
          handleStoreData()
          window.removeEventListener('beforeunload', handleStoreData)
      }
  },[])

  return (
    <div>
      <Banner />
      <Combos />
      <ProductList />
    </div>
  );
};

export default Product;
