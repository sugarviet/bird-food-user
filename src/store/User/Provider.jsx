import { useEffect, useReducer, useState } from "react";
import Context from "./Context";
import reducer, { setInitState } from "./Reducer";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useToken } from "../../services/Login/services";
import { useUpdateUserSelectedItems } from "../../services/User/services";

const USER_API = "http://localhost:8080/user";

const defaultUser = {
  username: "",
  fullName: "",
  email: "",
  phone: "",
  selectedCombo: [],
  selectedItems: [],
  addresses: [],
};

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultUser);
  const {mutate: handleSaveCart} = useUpdateUserSelectedItems();

  const decodedToken = useToken()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!decodedToken) {
          dispatch(setInitState(defaultUser))  
          return
        }

        await axios
          .get(`${USER_API}/${decodedToken.username}`)
          .then((res) => res.data)
          .then((data) => dispatch(setInitState(data.user)))
          .catch((error) => {
            throw new Error(error);
          });
      } catch (error) {
        console.error("Error when fetching: " + error);
      }
    };

    // const saveCart = async () => {
    //   const updatedSelectedProducts = items
    //   ? items.map((product) => ({
    //       productId: product._id,
    //       quantity: product.quantity,
    //     }))
    //   : [];

    //   const updatedSelectedCombos = combos
    //     ? combos.map((combo) => ({
    //         comboId: combo._id,
    //         quantity: combo.quantity,
    //       }))
    //     : [];

    //   updateUserSelectedItems({
    //     selectedProducts: updatedSelectedProducts,
    //     selectedCombos: updatedSelectedCombos,
    //   });
    // }

    fetchData();
  }, [decodedToken]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
