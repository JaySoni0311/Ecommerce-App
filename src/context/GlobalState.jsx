import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cart: [],
  orders: [],
  selectedGender: null,
  selectedCategory: null, // Default is 'All'
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItemToCartList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_CART",
      payload: item,
    });
  };

  const removeItemFromCartList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_CART",
      payload: item,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const addItemToOrderList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_ORDER",
      payload: item,
    });
  };

  const removeItemFromOrderList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_ORDER",
      payload: item,
    });
  };

   const setSelectedGender = (gender) => {
    dispatch({
      type: "SET_SELECTED_GENDER",
      payload: gender, 
    });
  };

  const setSelectedCategory = (category) => {
    dispatch({
      type: "SET_SELECTED_CATEGORY",
      payload: category, 
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        orders: state.orders,
        addItemToCartList,
        removeItemFromCartList,
        selectedGender: state.selectedGender,
        setSelectedGender,
        selectedCategory: state.selectedCategory,

        setSelectedCategory,
        clearCart,
        addItemToOrderList,
        removeItemFromOrderList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
