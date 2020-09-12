import {
  GET_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  INC,
  DEC,
  GET_TOTAL,
  OPTION,
} from "../types";

export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product,
  };
};
export const removeProduct = (item) => {
  return {
    type: REMOVE_PRODUCT,
    payload: item,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: "",
  };
};
export const inc = (item) => {
  return {
    type: INC,
    payload: item,
  };
};
export const dec = (item) => {
  return {
    type: DEC,
    payload: item,
  };
};
export const getTotal = (item) => {
  return {
    type: GET_TOTAL,
    payload: item,
  };
};

export const option = (data) => {
  return {
    type: OPTION,
    payload: data,
  };
};
