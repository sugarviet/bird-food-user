const useProductToCart = () => {
  const addToCart = (bird) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = storedCart.findIndex((item) => item.productName === bird.productName);

    if (existingItemIndex !== -1) {
      const updatedQuantity = storedCart[existingItemIndex].quantity + 1;
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
        quantity: 1,
        price: bird.price
      });
      localStorage.setItem("cart", JSON.stringify(storedCart));
    }
  };

  return addToCart;
};

export default useProductToCart;