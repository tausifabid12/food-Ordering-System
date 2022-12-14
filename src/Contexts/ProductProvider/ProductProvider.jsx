import React, { createContext, useContext, useEffect, useReducer } from "react";
import actionTypes from "../../state/ActionTypes";
import { initialState, productReducer } from "../../state/ProductReducer";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  //cart

  // useEffect(() => {
  //   if(state.cart){

  //   }
  // }, [state?.cart]);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("https://express-food-server.vercel.app/allProduct")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data })
      )
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

export default ProductProvider;
