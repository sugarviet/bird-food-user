const useProductToCart = () => {
  const addToCart = (bird) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = storedCart.findIndex((item) => item.productName === bird.productName);

    if (existingItemIndex !== -1) {
      storedCart[existingItemIndex].quantity += 1;
    } else {
      storedCart.push({ id: bird._id, productName: bird.productName, image: bird.image, quantity: 1, price: bird.price });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
  };

  return addToCart;
};

export default useProductToCart;


// import { useState } from "react";

// const useProductToCart = () => {
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

//   const addToCart = (bird) => {
//     const existingItem = cart.find((item) => item.id === bird.id);

//     if (existingItem) {
//       const updatedCart = cart.map((item) =>
//         item.id === bird.id ? { ...item, quantity: bird.quantity + 1 } :
//           item
//       );
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = [...cart, { ...bird, quantity: 1 }];
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

//   return addToCart;
// };

// export default useProductToCart;