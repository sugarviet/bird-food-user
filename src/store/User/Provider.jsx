import { useEffect, useReducer, useState } from "react";
import Context from "./Context";
import reducer, { setInitState } from "./Reducer";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useToken } from "../../services/Login/services";

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

    fetchData();
  }, [decodedToken]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
