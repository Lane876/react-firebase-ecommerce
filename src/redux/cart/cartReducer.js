const {
  GET_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  INC,
  DEC,
  GET_TOTAL,
} = require("../types");

const initialState = {
  product: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      const existingCartItem = state.product.find(
        (cartItem) => cartItem.unique === action.payload.unique
      );

      if (existingCartItem) {
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
      } else {
        return { ...state, product: state.product.concat(action.payload) };
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

    case GET_TOTAL:
      let { total, quantity } = state.product.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, quantity };

    default:
      return state;
  }
};

export default cartReducer;
