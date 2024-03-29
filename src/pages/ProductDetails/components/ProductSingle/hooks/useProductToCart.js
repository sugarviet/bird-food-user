import { useContext } from "react";
import { UserContext } from "../../../../../store/User";
import { setSelectedProducts } from "../../../../../store/User/Reducer";

const useProductToCart = () => {
  const [, dispatch] = useContext(UserContext);

  const addToCart = (bird, quantity) => {
    // Thêm tham số "quantity" cho số lượng sản phẩm
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = storedCart.findIndex(
      (item) => item.productName === bird.productName
    );

    if (existingItemIndex !== -1) {
      const updatedQuantity = storedCart[existingItemIndex].quantity + quantity; // Sử dụng "quantity" được truyền vào

      const availableQuantity = bird.quantity;

      if (updatedQuantity <= availableQuantity) {
        storedCart[existingItemIndex].quantity = updatedQuantity;
        localStorage.setItem("cart", JSON.stringify(storedCart));
      } else {
        throw new Error(`${bird.productName}`);
      }
    } else {
      storedCart.push({
        id: bird._id,
        productName: bird.productName,
        image: bird.image,
        quantity: quantity, // Sử dụng "quantity" được truyền vào
        stock: bird.quantity,
        price: bird.price,
      });
      localStorage.setItem("cart", JSON.stringify(storedCart));
      dispatch(setSelectedProducts(storedCart));
    }
  };

  return addToCart;
};

export default useProductToCart;
