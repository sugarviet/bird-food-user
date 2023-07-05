const SET_NAME = "set_name";
const SET_PHONE = "set_phone";
const SET_INIT_STATE = "set_init_state";
const SET_ADDRESSES = "set_addresses";
const SET_SELECTED_PRODUCTS = "set_selected_products";
const SET_SELECTED_COMBOS = "set_selected_combos";

const setName = (payload) => ({
  type: SET_NAME,
  payload: payload,
});

const setPhone = (payload) => ({
  type: SET_PHONE,
  payload: payload,
});

const setAddresses = (payload) => ({
  type: SET_ADDRESSES,
  payload: payload,
});

const setSelectedProducts = (payload) => ({
  type: SET_SELECTED_PRODUCTS,
  payload: payload,
});

const setSelectedCombos = (payload) => ({
    type: SET_SELECTED_COMBOS,
    payload: payload,
})

const setInitState = (payload) => ({
  type: SET_INIT_STATE,
  payload: payload,
});

const reducer = (state, action) => {
  switch (action.type) {
    case SET_INIT_STATE:
      return action.payload;
    case SET_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
      };
    case SET_SELECTED_PRODUCTS:
      return {
        ...state,
        selectedItems: action.payload,
      };
    case SET_SELECTED_COMBOS:
      return {
        ...state,
        selectedCombo: action.payload,
      }
    default:
      throw new Error("Invalid Action");
  }
};

export { setInitState, setName, setPhone, setAddresses, setSelectedProducts, setSelectedCombos };
export default reducer;
