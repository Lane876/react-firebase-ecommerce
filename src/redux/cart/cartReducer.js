import { act } from "react-dom/test-utils";

const {
  GET_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  INC,
  DEC,
} = require("../types");

const initialState = {
  product: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      const existingCartItem = state.product.find(
        cartItem => cartItem.unique === action.payload.unique,
        
      )

      if(existingCartItem){
        return {...state}
      } else {
        return {...state,
            product: state.product.concat(action.payload)}
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        product: state.product.filter(
          (val) => val.unique !== action.payload.unique
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        product: [],
      };
    case INC:
      let tempProd = state.product.map((cartItem) => {
        if (cartItem.unique === action.payload.unique) {
          cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        product: tempProd,
      };
    case DEC:
      let tempProduct = [];
      if (action.payload.quantity === 1) {
        tempProduct = state.product.filter(
          (val) => val.unique !== action.payload.unique
        );
      } else {
        tempProduct = state.product.map((cartItem) => {
          if (cartItem.unique === action.payload.unique) {
            cartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        });
      }
      return {
        ...state,
        product: tempProduct,
      };

    default:
      return state;
  }
};

export default cartReducer;
