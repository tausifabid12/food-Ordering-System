import React, { createContext, useContext, useEffect, useReducer } from "react";
import actionTypes from "../../state/ActionTypes";
import { initialState, productReducer } from "../../state/ProductReducer";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("http://localhost:5000/allProduct")
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
