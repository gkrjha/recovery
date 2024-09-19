import { ActionType } from "../Constants/ActionTypes";

export const setProduct = (product) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: product
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCTS,
    payload: product
  };
};

export const removeProduct = (product) => {
  return {
    type: ActionType.REMOVE_PRODUCTS,
    payload: product
  };
};
